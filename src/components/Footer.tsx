import { siteConfig, type Locale } from "../content/siteConfig"
import type { Copy } from "../content/copy"

type FooterProps = {
  copy: Copy["footer"]
  locale: Locale
}

export function Footer({ copy, locale }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-soft px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="font-semibold text-ink">Dr. {siteConfig.doctorName}</p>
          <p className="text-sm text-ink-muted">
            {siteConfig.title[locale]} · {copy.tagline}
          </p>
        </div>
        <p className="text-sm text-ink-muted">
          © {year} Dr. {siteConfig.doctorName}. {copy.rights}
        </p>
      </div>
    </footer>
  )
}
