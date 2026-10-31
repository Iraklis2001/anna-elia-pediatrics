import { useState } from "react"
import { ChevronDown } from "lucide-react"
import type { Copy } from "../content/copy"

type BioProps = {
  copy: Copy["bio"]
}

/** Collapsed-by-default biography tab under the hero intro */
export function Bio({ copy }: BioProps) {
  const [open, setOpen] = useState(false)

  return (
    <section
      id="bio"
      className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8"
      aria-labelledby="bio-tab"
    >
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-border-soft bg-white/70">
          <button
            type="button"
            id="bio-tab"
            aria-expanded={open}
            aria-controls="bio-panel"
            onClick={() => setOpen((v) => !v)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-cream-soft sm:px-7 sm:py-5"
          >
            <span>
              <span className="block text-xs font-semibold uppercase tracking-wider text-ink-muted">
                {copy.eyebrow}
              </span>
              <span className="mt-1 block text-lg font-semibold text-ink sm:text-xl">
                {copy.tabLabel}
              </span>
            </span>
            <ChevronDown
              size={20}
              className={[
                "shrink-0 text-ink-muted transition-transform duration-300",
                open ? "rotate-180" : "",
              ].join(" ")}
              aria-hidden
            />
          </button>

          <div
            id="bio-panel"
            role="region"
            aria-labelledby="bio-tab"
            className={[
              "grid transition-[grid-template-rows] duration-300 ease-out",
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            ].join(" ")}
          >
            <div className="overflow-hidden">
              <div className="space-y-4 border-t border-border-soft px-5 pb-6 pt-5 sm:px-7 sm:pb-8">
                <div>
                  <h3 className="text-xl font-bold text-ink">{copy.name}</h3>
                  <p className="mt-1 text-sm font-medium text-ink-muted">
                    {copy.role}
                  </p>
                  <p className="mt-1 text-sm text-pastel-green-deep">
                    {copy.badge}
                  </p>
                </div>
                {copy.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="text-sm leading-relaxed text-ink-muted sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
