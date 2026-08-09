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
        <div className="relative overflow-hidden rounded-3xl border border-pastel-blue/80 bg-gesy-card px-6 py-10 shadow-[0_18px_40px_-30px_rgba(61,58,54,0.35)] sm:flex-row sm:px-10 sm:py-12 lg:px-14">
          {/* Soft organic accents */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-pastel-yellow/50 blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-pastel-green/40 blur-2xl"
            aria-hidden
          />

          <div className="relative flex flex-col items-center gap-8 sm:flex-row sm:gap-12 lg:gap-16">
            {/* Stylized ΓεΣΥ wordmark */}
            <div className="relative shrink-0 rounded-3xl bg-white/70 px-5 py-4 shadow-sm" aria-hidden>
              <span
                className="absolute left-2 top-2 h-6 w-6 border-l-[3px] border-t-[3px] border-ink/25"
                aria-hidden
              />
              <span
                className="absolute bottom-2 right-2 h-6 w-6 border-b-[3px] border-r-[3px] border-gesy-accent"
                aria-hidden
              />
              <p className="px-3 py-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                ΓεΣΥ
              </p>
            </div>

            <div className="min-w-0 flex-1 text-center sm:text-left">
              <p className="mb-2 inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gesy-accent">
                Cyprus · GESY
              </p>
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
