import type { Copy } from "../content/copy"

type GesyProps = {
  copy: Copy["gesy"]
}

/** GESY / ΓεΣΥ — Cyprus General Healthcare System banner */
export function Gesy({ copy }: GesyProps) {
  return (
    <section
      id="gesy"
      className="bg-gesy-section px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      aria-labelledby="gesy-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-pastel-blue/80 bg-gesy-card px-6 py-10 shadow-[0_18px_40px_-30px_rgba(61,58,54,0.35)] sm:px-10 sm:py-12 lg:px-14">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-pastel-yellow/40 blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-pastel-blue/50 blur-2xl"
            aria-hidden
          />

          <div className="relative flex flex-col items-center gap-8 sm:flex-row sm:gap-12 lg:gap-16">
            {/* Official ΓεΣΥ logo — replace file at /public/images/gesy-logo.png if needed */}
            <div className="shrink-0 rounded-3xl bg-white px-6 py-5 shadow-sm">
              <img
                src="/images/gesy-logo.png"
                alt={copy.logoAlt}
                className="h-16 w-auto object-contain sm:h-20"
                width={220}
                height={80}
              />
            </div>

            <div className="min-w-0 flex-1 text-center sm:text-left">
              <h2
                id="gesy-heading"
                className="text-2xl font-bold tracking-tight text-ink sm:text-3xl"
              >
                {copy.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
                {copy.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
