import { copy } from "./copy"
import { siteConfig, type Locale } from "./siteConfig"

/** Titles and descriptions shown in Google and when the link is shared. */
export const seoCopy = {
  en: {
    title: "Dr. Anna Elia, MD | Pediatrician in Deftera, Nicosia",
    description:
      "Pediatrician in Kato Deftera, Nicosia. Dr. Anna Elia provides care from birth to age 18, including vaccinations, growth monitoring, and GESY visits. Call +357 22 250 447.",
  },
  el: {
    title: "Δρ. Άννα Ηλία | Παιδίατρος στη Δευτερά, Λευκωσία",
    description:
      "Παιδίατρος στην Κάτω Δευτερά, Λευκωσία. Η Δρ. Άννα Ηλία προσφέρει φροντίδα από τη γέννηση έως τα 18 έτη, εμβολιασμούς, παρακολούθηση ανάπτυξης και επισκέψεις ΓεΣΥ. Τηλέφωνο: 22 250 447.",
  },
} as const

const day = {
  mon: "https://schema.org/Monday",
  tue: "https://schema.org/Tuesday",
  wed: "https://schema.org/Wednesday",
  thu: "https://schema.org/Thursday",
  fri: "https://schema.org/Friday",
} as const

/**
 * Structured data so Google can show the practice name, address, hours,
 * and common questions directly in search results.
 */
export function buildStructuredData(locale: Locale) {
  const url = siteConfig.siteUrl
  const address = {
    "@type": "PostalAddress",
    streetAddress: siteConfig.postalAddress.streetAddress[locale],
    addressLocality: siteConfig.postalAddress.locality[locale],
    addressRegion: siteConfig.postalAddress.region[locale],
    postalCode: siteConfig.postalAddress.postalCode,
    addressCountry: siteConfig.postalAddress.country,
  }
  const geo = {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  }
  const openingHoursSpecification = [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [day.mon, day.tue, day.wed, day.fri],
      opens: "09:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [day.mon, day.tue, day.wed, day.fri],
      opens: "15:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day.thu,
      opens: "09:00",
      closes: "13:00",
    },
  ]
  const sameAs = [
    siteConfig.mapsGoogleUrl,
    siteConfig.social.instagram,
    siteConfig.social.linkedin,
  ].filter((link) => link.startsWith("http"))
  const otherLocale: Locale = locale === "el" ? "en" : "el"

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${url}/#clinic`,
        name: siteConfig.doctorName[locale],
        alternateName: [siteConfig.doctorName[otherLocale], siteConfig.mapsBusinessName],
        description: seoCopy[locale].description,
        url: `${url}/`,
        image: `${url}${siteConfig.profileImage}`,
        telephone: [siteConfig.phone, siteConfig.mobile],
        email: siteConfig.email,
        medicalSpecialty: "https://schema.org/Pediatric",
        address,
        geo,
        hasMap: siteConfig.mapsGoogleUrl,
        openingHoursSpecification,
        sameAs,
        availableLanguage: ["Greek", "English"],
        areaServed: {
          "@type": "AdministrativeArea",
          name: siteConfig.postalAddress.region[locale],
        },
      },
      {
        "@type": "Physician",
        "@id": `${url}/#physician`,
        name: siteConfig.doctorName[locale],
        alternateName: [siteConfig.doctorName[otherLocale], siteConfig.mapsBusinessName],
        jobTitle: siteConfig.title[locale],
        medicalSpecialty: "https://schema.org/Pediatric",
        url: `${url}/`,
        image: `${url}${siteConfig.profileImage}`,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address,
        worksFor: { "@id": `${url}/#clinic` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: copy[locale].faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  }
}
