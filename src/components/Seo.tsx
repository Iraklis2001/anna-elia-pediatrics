import { useEffect } from "react"
import { buildStructuredData, seoCopy } from "../content/seo"
import { siteConfig, type Locale } from "../content/siteConfig"

type SeoProps = {
  locale: Locale
}

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  )
  if (!element) {
    element = document.createElement("meta")
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = content
}

/** Keeps the browser title, share preview, and Google data in the active language. */
export function Seo({ locale }: SeoProps) {
  useEffect(() => {
    const seo = seoCopy[locale]
    const pageUrl = `${siteConfig.siteUrl}/`

    document.title = seo.title
    setMeta("name", "description", seo.description)
    setMeta("property", "og:title", seo.title)
    setMeta("property", "og:description", seo.description)
    setMeta("property", "og:locale", locale === "el" ? "el_CY" : "en_CY")
    setMeta("property", "og:url", pageUrl)
    setMeta("name", "twitter:title", seo.title)
    setMeta("name", "twitter:description", seo.description)

    let structuredData = document.getElementById("structured-data")
    if (!structuredData) {
      structuredData = document.createElement("script")
      structuredData.id = "structured-data"
      structuredData.setAttribute("type", "application/ld+json")
      document.head.appendChild(structuredData)
    }
    structuredData.textContent = JSON.stringify(buildStructuredData(locale))
  }, [locale])

  return null
}
