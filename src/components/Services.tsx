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
  const [flipped, setFlipped] = useState<number | null>(null)

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
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((item, index) => {
            const isFlipped = flipped === index
            const panelId = `service-panel-${index}`
            const buttonId = `service-button-${index}`

            return (
              <li key={item.title} className="[perspective:1200px]">
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isFlipped}
                  aria-controls={panelId}
                  onClick={() =>
                    setFlipped((current) => (current === index ? null : index))
                  }
                  className="group relative block h-[15.5rem] w-full text-left focus-visible:outline-none"
                >
                  <span
                    className={[
                      "relative block h-full w-full transition-transform duration-500 ease-out [transform-style:preserve-3d]",
                      isFlipped ? "[transform:rotateY(180deg)]" : "",
                    ].join(" ")}
                  >
                    {/* Front — icon + title */}
                    <span
                      className={[
                        "absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-border-soft/70 p-6 backface-hidden",
                        accentMap[item.accent],
                      ].join(" ")}
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
                      <span className="mt-4 text-center text-lg font-semibold leading-snug text-ink">
                        {item.title}
                      </span>
                    </span>

                    {/* Back — details (same accent fill as front) */}
                    <span
                      id={panelId}
                      className={[
                        "absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-border-soft/70 p-6 shadow-[0_18px_40px_-28px_rgba(61,58,54,0.35)] backface-hidden [transform:rotateY(180deg)]",
                        accentMap[item.accent],
                      ].join(" ")}
                    >
                      <span className="text-center text-base font-semibold text-ink">
                        {item.title}
                      </span>
                      <span className="mt-3 text-center text-sm leading-relaxed text-ink-muted">
                        {item.description}
                      </span>
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
