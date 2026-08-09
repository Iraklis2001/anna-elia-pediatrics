import type { ReactNode } from "react"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import type { Copy } from "../content/copy"
import { siteConfig, type Locale } from "../content/siteConfig"

type ContactProps = {
  copy: Copy["contact"]
  locale: Locale
}

export function Contact({ copy, locale }: ContactProps) {
  return (
    <section
      id="contact"
      className="bg-cream-soft px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="contact-heading"
            className="text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            {copy.title}
          </h2>
          <p className="mt-3 text-base text-ink-muted sm:text-lg">{copy.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Column 1 — hours, contact, social */}
          <div className="rounded-3xl border border-border-soft bg-white/80 p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-pastel-yellow">
                <Clock size={16} aria-hidden />
              </span>
              {copy.hoursTitle}
            </h3>
            <ul className="mt-4 space-y-3">
              {siteConfig.hours[locale].map((row) => (
                <li
                  key={row.days}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-cream px-4 py-3 text-sm"
                >
                  <span className="font-medium text-ink">{row.days}</span>
                  <span className="text-ink-muted">{row.time}</span>
                </li>
              ))}
            </ul>

            <dl className="mt-8 space-y-4">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  {copy.phoneLabel}
                </dt>
                <dd className="mt-2">
                  <a
                    href={siteConfig.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full bg-pastel-green/70 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-pastel-green"
                  >
                    <Phone size={16} aria-hidden />
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  {copy.emailLabel}
                </dt>
                <dd className="mt-2">
                  <a
                    href={siteConfig.emailHref}
                    className="inline-flex items-center gap-2 rounded-full bg-pastel-blue/70 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-pastel-blue"
                  >
                    <Mail size={16} aria-hidden />
                    {siteConfig.email}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  {copy.addressLabel}
                </dt>
                <dd className="mt-2 flex items-start gap-2 text-sm text-ink">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pastel-beige">
                    <MapPin size={15} aria-hidden />
                  </span>
                  {siteConfig.address[locale]}
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  {copy.socialLabel}
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  <SocialLink href={siteConfig.social.facebook} label="Facebook">
                    <FacebookIcon />
                  </SocialLink>
                  <SocialLink href={siteConfig.social.instagram} label="Instagram">
                    <InstagramIcon />
                  </SocialLink>
                  <SocialLink href={siteConfig.social.linkedin} label="LinkedIn">
                    <LinkedInIcon />
                  </SocialLink>
                </dd>
              </div>
            </dl>
          </div>

          {/* Column 2 — map */}
          <div className="overflow-hidden rounded-3xl border border-border-soft bg-pastel-blue/40 min-h-[20rem] lg:min-h-full">
            <iframe
              title={copy.mapTitle}
              src={siteConfig.mapsEmbedUrl}
              className="h-full min-h-[20rem] w-full border-0 lg:min-h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-soft bg-cream text-ink transition hover:bg-pastel-beige"
    >
      {children}
    </a>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13V9c0-.6.4-1 1-1z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm5 2.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.5 7a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M6.5 9H3v12h3.5V9zM4.75 3A2.25 2.25 0 1 0 7 5.25 2.25 2.25 0 0 0 4.75 3zM21 13.3c0-3-1.6-4.9-4.2-4.9a3.7 3.7 0 0 0-3.3 1.8V9H10v12h3.5v-6.4c0-1.7.8-2.7 2.2-2.7s2.1.9 2.1 2.7V21H21z" />
    </svg>
  )
}
