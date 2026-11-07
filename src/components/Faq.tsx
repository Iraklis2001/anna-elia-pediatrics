import { useState } from "react"
import { ChevronDown } from "lucide-react"
import type { Copy } from "../content/copy"

type FaqProps = {
  copy: Copy["faq"]
}

export function Faq({ copy }: FaqProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            {copy.title}
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-border-soft bg-white/80">
          {copy.items.map((item, index) => {
            const isOpen = open === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`

            return (
              <div
                key={item.question}
                className={index > 0 ? "border-t border-border-soft" : undefined}
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() =>
                    setOpen((current) => (current === index ? null : index))
                  }
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-cream-soft sm:px-7 sm:py-5"
                >
                  <span className="text-base font-semibold leading-snug text-ink">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={[
                      "shrink-0 text-ink-muted transition-transform duration-300",
                      isOpen ? "rotate-180" : "",
                    ].join(" ")}
                    aria-hidden
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={[
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 py-4 text-left text-sm leading-relaxed text-ink-muted sm:px-7 sm:py-4 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
