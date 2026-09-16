import { LanguageToggle } from "./LanguageToggle"
import { siteConfig, type Locale } from "../content/siteConfig"

type ComingSoonProps = {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

const text = {
  en: {
    badge: "Coming soon",
    headline: "Our new website is on the way",
    body: "We’re putting the finishing touches on a calm, family-centred paediatric experience. Please check back soon.",
    contact: "Need to reach us in the meantime?",
  },
  el: {
    badge: "Σύντομα κοντά σας",
    headline: "Η νέα μας ιστοσελίδα έρχεται σύντομα",
    body: "Ολοκληρώνουμε μια ήρεμη, οικογενειοκεντρική παιδιατρική εμπειρία. Επιστρέψτε σύντομα.",
    contact: "Χρειάζεστε να επικοινωνήσετε μαζί μας στο μεταξύ;",
  },
} as const

/** Public holding page shown until the full site is ready to launch */
export function ComingSoon({ locale, onLocaleChange }: ComingSoonProps) {
  const t = text[locale]

  return (
    <div className="relative flex min-h-svh flex-col overflow-hidden bg-cream">
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-pastel-green/50 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-pastel-blue/45 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-pastel-yellow/40 blur-3xl"
        aria-hidden
      />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-2">
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
        </div>
        <LanguageToggle locale={locale} onChange={onLocaleChange} />
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-4 pb-16 text-center sm:px-6">
        <p className="inline-flex rounded-full bg-pastel-green px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink">
          {t.badge}
        </p>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
          {t.headline}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {t.body}
        </p>

        <div className="mt-10 rounded-3xl border border-border-soft bg-white/70 px-6 py-5 shadow-sm backdrop-blur-sm">
          <p className="text-sm text-ink-muted">{t.contact}</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            <a
              href={siteConfig.emailHref}
              className="inline-flex rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-cream transition hover:bg-ink/90"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex rounded-full border border-border-soft bg-white px-6 py-2.5 text-sm font-semibold text-ink transition hover:bg-cream"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-border-soft px-4 py-6 text-center text-sm text-ink-muted sm:px-6">
        © {new Date().getFullYear()} {siteConfig.doctorName[locale]}
      </footer>
    </div>
  )
}
