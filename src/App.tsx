import { useEffect, useState } from "react"
import { copy } from "./content/copy"
import { siteConfig, type Locale } from "./content/siteConfig"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Gesy } from "./components/Gesy"
import { Gallery } from "./components/Gallery"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { ComingSoon } from "./components/ComingSoon"

function getInitialLocale(): Locale {
  const saved = localStorage.getItem("site-locale")
  if (saved === "en" || saved === "el") return saved
  // Default language is Greek
  return "el"
}

function shouldShowFullSite(): boolean {
  if (siteConfig.showFullSite) return true
  // Private preview while building: add ?preview=1 to the URL
  if (typeof window === "undefined") return false
  return new URLSearchParams(window.location.search).get("preview") === "1"
}

export default function App() {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "el"
    return getInitialLocale()
  })
  const [showFullSite, setShowFullSite] = useState(false)

  useEffect(() => {
    localStorage.setItem("site-locale", locale)
    document.documentElement.lang = locale
  }, [locale])

  useEffect(() => {
    setShowFullSite(shouldShowFullSite())
  }, [])

  const t = copy[locale]

  if (!showFullSite) {
    return <ComingSoon locale={locale} onLocaleChange={setLocale} />
  }

  return (
    <div id="top" className="min-h-svh">
      <Navbar copy={t.nav} locale={locale} onLocaleChange={setLocale} />
      <main>
        <Hero copy={t.hero} />
        <Services copy={t.services} />
        <Gesy copy={t.gesy} />
        <Gallery copy={t.gallery} locale={locale} />
        <Contact copy={t.contact} locale={locale} />
      </main>
      <Footer copy={t.footer} locale={locale} />
    </div>
  )
}
