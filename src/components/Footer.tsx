import { siteConfig, type Locale } from "../content/siteConfig"
import type { Copy } from "../content/copy"

type FooterProps = {
  copy: Copy["footer"]
  locale: Locale
}

export function Footer({ copy, locale }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-soft px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-semibold text-ink">{siteConfig.doctorName[locale]}</p>
            <p className="mt-1 text-sm text-ink-muted">
              {siteConfig.title[locale]} · {copy.tagline}
            </p>
          </div>

          <address className="text-sm not-italic text-ink-muted sm:text-right">
            <p className="font-medium text-ink">{copy.addressLabel}</p>
            <a
              href={siteConfig.mapsGoogleUrl}
              className="mt-1 inline-block max-w-sm transition hover:text-ink"
            >
              {siteConfig.address[locale]}
            </a>
            <p className="mt-3">
              <a href={siteConfig.phoneHref} className="transition hover:text-ink">
                {copy.phoneLabel}: {siteConfig.phone}
              </a>
            </p>
            <p>
              <a href={siteConfig.mobileHref} className="transition hover:text-ink">
                {copy.mobileLabel}: {siteConfig.mobile}
              </a>
            </p>
            <p>
              <a href={siteConfig.emailHref} className="transition hover:text-ink">
                {siteConfig.email}
              </a>
            </p>
          </address>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border-soft pt-6 text-sm text-ink-muted sm:flex-row sm:items-start sm:justify-between">
          <p>
            © {year} {siteConfig.doctorName[locale]}. {copy.rights}
          </p>
          <p className="max-w-md sm:text-right">{copy.notice}</p>
        </div>
      </div>
    </footer>
  )
}
