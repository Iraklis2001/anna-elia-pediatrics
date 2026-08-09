import { useState } from "react"
import type { Copy } from "../content/copy"

type ServicesProps = {
  copy: Copy["services"]
}

/** Soft faded fills matched to each service icon */
const accentMap = {
  pink: "bg-fade-pink/70",
  blush: "bg-fade-blush/70",
  mint: "bg-fade-mint/70",
  peach: "bg-fade-peach/75",
  sky: "bg-fade-sky/70",
  lavender: "bg-fade-lavender/70",
} as const

export function Services({ copy }: ServicesProps) {
  const [detailsOpen, setDetailsOpen] = useState(false)

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

        <ul className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((item, index) => {
            const panelId = `service-panel-${index}`
            const buttonId = `service-button-${index}`

            return (
              <li key={item.title} className="h-full">
                <article
                  className={[
                    "flex h-full min-h-[15.5rem] flex-col items-center justify-center rounded-3xl border border-border-soft/70 p-6 transition duration-300",
                    detailsOpen
                      ? "shadow-[0_18px_40px_-28px_rgba(61,58,54,0.35)]"
                      : "hover:-translate-y-0.5",
                    accentMap[item.accent],
                  ].join(" ")}
                >
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={detailsOpen}
                    aria-controls={panelId}
                    onClick={() => setDetailsOpen((open) => !open)}
                    className="flex w-full flex-col items-center justify-center text-center focus-visible:outline-none"
                  >
                    <span className="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/85 shadow-sm">
                      <img
                        src={item.icon}
                        alt=""
                        className="h-16 w-16 object-contain"
                        width={64}
                        height={64}
                        aria-hidden
                      />
                    </span>
                    <h3 className="mt-4 min-h-[4.75rem] text-center text-lg font-semibold leading-snug text-ink">
                      {item.title}
                    </h3>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={[
                      "w-full grid transition-[grid-template-rows] duration-300 ease-out",
                      detailsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    ].join(" ")}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-3 text-center text-sm leading-relaxed text-ink-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
