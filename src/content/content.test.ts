import { describe, expect, it } from "vitest"
import indexHtml from "../../index.html?raw"
import robots from "../../public/robots.txt?raw"
import sitemap from "../../public/sitemap.xml?raw"
import { copy } from "./copy"
import { buildStructuredData, seoCopy } from "./seo"
import { siteConfig, type Locale } from "./siteConfig"

const locales: Locale[] = ["el", "en"]

/** Compares structure, so a missing Greek or English field fails the test. */
function shape(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(shape)
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, shape((value as Record<string, unknown>)[key])]),
    )
  }
  return typeof value
}

describe("bilingual copy", () => {
  it("keeps the same sections in Greek and English", () => {
    expect(shape(copy.en)).toEqual(shape(copy.el))
  })

  it("has a question and answer for every FAQ in both languages", () => {
    for (const locale of locales) {
      for (const item of copy[locale].faq.items) {
        expect(item.question.trim().length).toBeGreaterThan(0)
        expect(item.answer.trim().length).toBeGreaterThan(0)
      }
    }
    expect(copy.en.faq.items).toHaveLength(copy.el.faq.items.length)
  })
})

describe("search details", () => {
  it("gives Google a title and description in both languages", () => {
    expect(seoCopy.el.title).toContain("Παιδίατρος")
    expect(seoCopy.en.title).toContain("Pediatrician")
    expect(seoCopy.el.description).toContain("22 250 447")
    expect(seoCopy.en.description).toContain("+357 22 250 447")
  })

  it("describes the clinic, the doctor, and the questions", () => {
    for (const locale of locales) {
      const graph = buildStructuredData(locale)["@graph"]
      const clinic = graph.find((item) => item["@type"] === "MedicalClinic")
      const doctor = graph.find((item) => item["@type"] === "Physician")
      const faq = graph.find((item) => item["@type"] === "FAQPage")

      expect(clinic?.name).toBe(siteConfig.doctorName[locale])
      expect(clinic?.address?.postalCode).toBe("2450")
      expect(clinic?.telephone).toEqual([siteConfig.phone, siteConfig.mobile])
      expect(clinic?.hasMap).toBe("https://maps.app.goo.gl/i3QxTxBvAyg1WpuSA")
      expect(clinic?.sameAs?.every((link) => link.startsWith("http"))).toBe(true)
      expect(doctor?.worksFor).toEqual({ "@id": `${siteConfig.siteUrl}/#clinic` })
      expect(faq?.mainEntity).toHaveLength(copy[locale].faq.items.length)
    }
  })

  it("keeps Thursday as a morning only and the weekend closed", () => {
    const clinic = buildStructuredData("en")["@graph"].find(
      (item) => item["@type"] === "MedicalClinic",
    )
    const hours = clinic?.openingHoursSpecification ?? []
    const thursday = hours.find(
      (entry) => entry.dayOfWeek === "https://schema.org/Thursday",
    )
    const listedDays = hours.flatMap((entry) =>
      Array.isArray(entry.dayOfWeek) ? entry.dayOfWeek : [entry.dayOfWeek],
    )

    expect(thursday).toMatchObject({ opens: "09:00", closes: "13:00" })
    expect(listedDays).not.toContain("https://schema.org/Saturday")
    expect(listedDays).not.toContain("https://schema.org/Sunday")
  })

  it("publishes the same public address in the files Google downloads first", () => {
    expect(indexHtml).toContain(`<title>${seoCopy.el.title}</title>`)
    expect(indexHtml).toContain('rel="canonical" href="https://annaelia.com.cy/"')
    expect(robots).toContain("Sitemap: https://annaelia.com.cy/sitemap.xml")
    expect(sitemap).toContain("<loc>https://annaelia.com.cy/</loc>")
  })
})
