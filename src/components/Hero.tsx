import type { Copy } from "../content/copy"
import { siteConfig } from "../content/siteConfig"

type HeroProps = {
  copy: Copy["hero"]
}

export function Hero({ copy }: HeroProps) {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8"
      aria-labelledby="hero-heading"
    >
      {/* Soft organic blobs — decorative only */}
      <div
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-pastel-yellow/60 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-32 h-72 w-72 rounded-full bg-pastel-blue/50 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-14">
        {/* Text first on mobile so the headline is in the first viewport */}
        <div className="order-1 text-left lg:order-1">
          <p className="mb-4 inline-flex rounded-full bg-pastel-green px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink">
            {copy.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]"
          >
            {copy.headline}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted sm:mt-5 sm:text-lg">
            {copy.bio}
          </p>
          <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-sm font-semibold text-cream shadow-sm transition hover:-translate-y-0.5 hover:bg-ink/90"
            >
              {copy.cta}
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-border-soft bg-white/80 px-7 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-white"
            >
              {copy.secondaryCta}
            </a>
          </div>
        </div>

        {/* Compact portrait on mobile; full portrait from sm up */}
        <div className="order-2 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative">
            <div
              className="absolute -inset-2 rounded-full bg-pastel-green sm:-inset-4 sm:rounded-[2rem]"
              aria-hidden
            />
            <div
              className="absolute -bottom-3 -left-3 hidden h-24 w-24 rounded-full bg-pastel-blue/70 sm:block sm:h-28 sm:w-28"
              aria-hidden
            />
            <div
              className="absolute -right-2 -top-2 hidden h-16 w-16 rounded-full bg-pastel-green-deep/25 sm:block sm:h-20 sm:w-20"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-full border border-white/70 bg-white shadow-[0_20px_50px_-24px_rgba(61,58,54,0.35)] sm:rounded-[1.75rem]">
              <img
                src={siteConfig.profileImage}
                alt={copy.imageAlt}
                className="aspect-square w-[11.5rem] object-cover object-[center_18%] sm:aspect-[4/5] sm:w-[24rem] sm:object-cover sm:object-center"
                width={384}
                height={480}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
