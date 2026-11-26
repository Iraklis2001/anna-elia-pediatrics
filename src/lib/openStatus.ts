import { useEffect, useState } from "react"
import { siteConfig } from "../content/siteConfig"

/** The clinic's own time zone, so the status is right wherever the visitor is. */
const CLINIC_TIME_ZONE = "Asia/Nicosia"

type Range = { start: number; end: number }

/** "09:00 – 13:00 · 15:00 – 18:00" → [{540, 780}, {900, 1080}] (minutes from midnight). "Closed" → []. */
export function parseRanges(text: string): Range[] {
  const ranges: Range[] = []
  for (const match of text.matchAll(/(\d{1,2}):(\d{2})\s*[–-]\s*(\d{1,2}):(\d{2})/g)) {
    ranges.push({
      start: Number(match[1]) * 60 + Number(match[2]),
      end: Number(match[3]) * 60 + Number(match[4]),
    })
  }
  return ranges
}

/** Weekday (0 = Monday … 6 = Sunday) and minutes from midnight in the clinic's time zone. */
export function clinicClock(date: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: CLINIC_TIME_ZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date)
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ""
  const weekday = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(get("weekday"))
  return { weekday, minutes: Number(get("hour")) * 60 + Number(get("minute")) }
}

/** How close to opening or closing counts as "soon", in minutes. */
export const SOON_MINUTES = 30

export type ClinicStatus =
  | { state: "open" }
  | { state: "closing"; minutes: number }
  | { state: "opening"; minutes: number }
  | { state: "closed" }

/** Open, closing soon, opening soon or closed at `date`. Uses the hours in siteConfig (rows run Monday to Sunday). */
export function clinicStatus(
  date: Date,
  hours: readonly { time: string }[] = siteConfig.hours.en,
): ClinicStatus {
  const { weekday, minutes } = clinicClock(date)
  const ranges = parseRanges(hours[weekday]?.time ?? "")

  const current = ranges.find((r) => minutes >= r.start && minutes < r.end)
  if (current) {
    const left = current.end - minutes
    return left <= SOON_MINUTES ? { state: "closing", minutes: left } : { state: "open" }
  }

  const next = ranges.find((r) => r.start > minutes)
  if (next && next.start - minutes <= SOON_MINUTES) {
    return { state: "opening", minutes: next.start - minutes }
  }
  return { state: "closed" }
}

/** True when the clinic is open at `date` (including the last minutes before closing). */
export function isClinicOpen(date: Date, hours?: readonly { time: string }[]): boolean {
  const { state } = clinicStatus(date, hours)
  return state === "open" || state === "closing"
}

/** Live status, re-checked every 30 seconds so the minute countdown stays current. */
export function useClinicStatus(): ClinicStatus {
  const [status, setStatus] = useState(() => clinicStatus(new Date()))
  useEffect(() => {
    const id = window.setInterval(() => setStatus(clinicStatus(new Date())), 30_000)
    return () => window.clearInterval(id)
  }, [])
  return status
}
