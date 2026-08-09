import type { Locale } from "../content/siteConfig"

type LanguageToggleProps = {
  locale: Locale
  onChange: (locale: Locale) => void
}

/** Pill language switcher — EN / EL */
export function LanguageToggle({ locale, onChange }: LanguageToggleProps) {
  return (
    <div
      className="inline-flex rounded-full border border-border-soft bg-white/80 p-1 shadow-sm"
      role="group"
      aria-label="Language"
    >
      {(["en", "el"] as const).map((code) => {
        const active = locale === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => onChange(code)}
            aria-pressed={active}
            className={[
              "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition",
              active
                ? "bg-pastel-green text-ink shadow-sm"
                : "text-ink-muted hover:text-ink",
            ].join(" ")}
          >
            {code === "en" ? "EN" : "EL"}
          </button>
        )
      })}
    </div>
  )
}
