import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import type { Copy } from "../content/copy"
import { siteConfig, type Locale } from "../content/siteConfig"
import { LanguageToggle } from "./LanguageToggle"
import { useClinicStatus, type ClinicStatus } from "../lib/openStatus"

type NavbarProps = {
  copy: Copy["nav"]
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

const links = [
  { href: "#bio", key: "about" as const },
  { href: "#services", key: "services" as const },
  { href: "#gesy", key: "gesy" as const },
  ...(siteConfig.showGallery
    ? [{ href: "#space", key: "space" as const }]
    : []),
  { href: "#faq", key: "faq" as const },
  { href: "#contact", key: "contact" as const },
]

export function Navbar({ copy, locale, onLocaleChange }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const status = useClinicStatus()
  const badge = statusBadge(status, copy)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-colors",
        scrolled
          ? "border-border-soft bg-cream/90 backdrop-blur-md"
          : "border-transparent bg-cream/70 backdrop-blur-sm",
      ].join(" ")}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        {/* Logo / brand — update name in siteConfig */}
        <a href="#top" className="group flex min-w-0 items-center gap-2">
          <img
            src={siteConfig.profileImage}
            alt=""
            className="h-10 w-10 shrink-0 rounded-full object-cover object-top ring-2 ring-pastel-blue"
            width={40}
            height={40}
            aria-hidden
          />
          <span className="truncate">
            <span className="block text-sm font-semibold leading-tight text-ink sm:text-base">
              {siteConfig.doctorName[locale]}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-ink-muted">
              {/* On small phones only the status fits under the name */}
              <span className="hidden truncate min-[400px]:inline">{siteConfig.title[locale]}</span>
              <span className="hidden min-[400px]:inline" aria-hidden>·</span>
              {/* Live open/closed status from siteConfig.hours */}
              <span
                className={["inline-flex shrink-0 items-center gap-1 font-semibold", badge.text].join(" ")}
                aria-live="polite"
              >
                <span className={["h-2 w-2 rounded-full", badge.dot].join(" ")} aria-hidden />
                {badge.label}
              </span>
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-muted transition hover:bg-white hover:text-ink"
            >
              {copy[link.key]}
            </a>
          ))}
          <LanguageToggle locale={locale} onChange={onLocaleChange} />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle locale={locale} onChange={onLocaleChange} />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-soft bg-white text-ink"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border-soft bg-cream px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-3 text-sm font-medium text-ink hover:bg-white"
                onClick={() => setOpen(false)}
              >
                {copy[link.key]}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

const badgeStyles = {
  // Text colours are darkened so the small status text stays readable (WCAG AA contrast)
  open: {
    text: "text-[#5c7226]",
    dot: "bg-pastel-green-deep shadow-[0_0_0_3px_rgba(122,148,53,0.2)]",
  },
  soon: {
    text: "text-[#8a5a08]",
    dot: "bg-[#d9900f] shadow-[0_0_0_3px_rgba(217,144,15,0.22)]",
  },
  closed: {
    text: "text-[#b4534b]",
    dot: "bg-[#b4534b] shadow-[0_0_0_3px_rgba(180,83,75,0.18)]",
  },
}

/** Text and colours for the status under the doctor's name. */
function statusBadge(status: ClinicStatus, copy: Copy["nav"]) {
  switch (status.state) {
    case "open":
      return { ...badgeStyles.open, label: copy.openNow }
    case "closing":
      return { ...badgeStyles.soon, label: copy.closesIn.replace("{m}", String(status.minutes)) }
    case "opening":
      return { ...badgeStyles.soon, label: copy.opensIn.replace("{m}", String(status.minutes)) }
    default:
      return { ...badgeStyles.closed, label: copy.closedNow }
  }
}
