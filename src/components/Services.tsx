import type { Copy } from "../content/copy"

type ServicesProps = {
  copy: Copy["services"]
}

const accentMap = {
  green: "bg-pastel-green",
  blue: "bg-pastel-blue",
  beige: "bg-pastel-beige",
  yellow: "bg-pastel-yellow",
} as const

export function Services({ copy }: ServicesProps) {
  return (
    <section
      id="services"
      className="bg-cream-soft px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="services-heading"
            className="text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            {copy.title}
          </h2>
          <p className="mt-3 text-base text-ink-muted sm:text-lg">{copy.subtitle}</p>
        </div>

        {/* Responsive service grid — 1 / 2 / 3 columns */}
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((item) => (
            <li key={item.title}>
              <article
                className={[
                  "group flex h-full flex-col rounded-3xl border border-border-soft p-6 transition duration-300",
                  "hover:-translate-y-1 hover:shadow-[0_18px_40px_-28px_rgba(61,58,54,0.45)]",
                  accentMap[item.accent],
                ].join(" ")}
              >
                <span
                  className="mb-4 inline-flex h-2.5 w-10 rounded-full bg-white/70"
                  aria-hidden
                />
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-white/90 px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition group-hover:bg-white"
                >
                  {copy.cta}
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
