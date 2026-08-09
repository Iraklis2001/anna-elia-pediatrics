import { useEffect, useState } from "react"
import { copy } from "./content/copy"
import { type Locale } from "./content/siteConfig"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Gesy } from "./components/Gesy"
import { Gallery } from "./components/Gallery"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

function getInitialLocale(): Locale {
  const saved = localStorage.getItem("locale")
  if (saved === "en" || saved === "el") return saved
  return navigator.language.toLowerCase().startsWith("el") ? "el" : "en"
}

export default function App() {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en"
    return getInitialLocale()
  })

  useEffect(() => {
    localStorage.setItem("locale", locale)
    document.documentElement.lang = locale
  }, [locale])

  const t = copy[locale]

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
