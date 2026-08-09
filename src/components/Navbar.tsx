import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import type { Copy } from "../content/copy"
import { siteConfig, type Locale } from "../content/siteConfig"
import { LanguageToggle } from "./LanguageToggle"

type NavbarProps = {
  copy: Copy["nav"]
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

const links = [
  { href: "#about", key: "about" as const },
  { href: "#services", key: "services" as const },
  { href: "#gesy", key: "gesy" as const },
  { href: "#space", key: "space" as const },
  { href: "#contact", key: "contact" as const },
]

export function Navbar({ copy, locale, onLocaleChange }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pastel-blue text-sm font-bold text-ink"
            aria-hidden
          >
            AE
          </span>
          <span className="truncate">
            <span className="block text-sm font-semibold leading-tight text-ink sm:text-base">
              {siteConfig.doctorName[locale]}
            </span>
            <span className="block text-xs text-ink-muted">
              {siteConfig.title[locale]}
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
