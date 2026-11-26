import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import type { Copy } from "../content/copy"
import { siteConfig, type Locale } from "../content/siteConfig"

type GalleryProps = {
  copy: Copy["gallery"]
  locale: Locale
}

const photos = siteConfig.gallery

export function Gallery({ copy, locale }: GalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const lastTrigger = useRef<HTMLElement | null>(null)
  const touchStartX = useRef<number | null>(null)

  const close = useCallback(() => {
    setOpenIndex(null)
    lastTrigger.current?.focus()
  }, [])

  const step = useCallback((delta: number) => {
    setOpenIndex((current) =>
      current === null ? current : (current + delta + photos.length) % photos.length,
    )
  }, [])

  const open = (index: number, trigger: HTMLElement) => {
    lastTrigger.current = trigger
    setOpenIndex(index)
  }

  // Keyboard controls and scroll lock while the viewer is open
  useEffect(() => {
    if (openIndex === null) return
    closeButton.current?.focus()
    document.body.style.overflow = "hidden"

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
      if (event.key === "ArrowLeft") step(-1)
      if (event.key === "ArrowRight") step(1)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [openIndex, close, step])

  const active = openIndex === null ? null : photos[openIndex]

  return (
    <section
      id="space"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="gallery-heading"
            className="text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            {copy.title}
          </h2>
          <p className="mt-3 text-base text-ink-muted sm:text-lg">{copy.subtitle}</p>
        </div>

        {/*
          Collage: first photo large on the left, the other two stacked on the right.
          On phones: large photo on top, two squares below.
        */}
        <ul className="mt-12 grid grid-cols-2 gap-1 overflow-hidden rounded-[1.375rem] shadow-[0_18px_50px_-24px_rgba(61,58,54,0.35)] sm:h-[clamp(26rem,52vw,38rem)] sm:grid-cols-[3fr_2fr] sm:grid-rows-2 sm:gap-1.5 sm:rounded-[1.75rem]">
          {photos.map((photo, index) => (
            <li
              key={photo.src}
              className={[
                "min-h-0",
                index === 0
                  ? "col-span-2 aspect-[4/5] sm:col-span-1 sm:row-span-2 sm:aspect-auto"
                  : "aspect-square sm:aspect-auto",
              ].join(" ")}
            >
              <button
                type="button"
                onClick={(event) => open(index, event.currentTarget)}
                className="group relative block h-full w-full cursor-zoom-in overflow-hidden rounded bg-pastel-beige focus-visible:outline-white focus-visible:-outline-offset-4 sm:rounded-md"
                aria-label={`${copy.openPhoto}: ${photo.alt[locale]}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt[locale]}
                  style={{ objectPosition: photo.position }}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  loading="lazy"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Full-screen viewer */}
      {active && openIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt[locale]}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-4 bg-[rgba(30,28,26,0.92)] px-4 pb-24 pt-16 backdrop-blur-sm sm:pb-8"
          onClick={(event) => {
            if (event.target === event.currentTarget) close()
          }}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return
            const dx = event.changedTouches[0].clientX - touchStartX.current
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1)
            touchStartX.current = null
          }}
        >
          <span className="absolute left-5 top-6 text-sm text-cream/70">
            {openIndex + 1} / {photos.length}
          </span>
          <button
            ref={closeButton}
            type="button"
            onClick={close}
            className="absolute right-3.5 top-3.5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream text-ink"
            aria-label={copy.close}
          >
            <X size={20} />
          </button>
          <button
            type="button"
            onClick={() => step(-1)}
            className="absolute bottom-5 left-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream text-ink sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2"
            aria-label={copy.previous}
          >
            <ChevronLeft size={22} />
          </button>
          <img
            src={active.src}
            alt={active.alt[locale]}
            className="max-h-[calc(100svh-11rem)] max-w-[min(92vw,62rem)] rounded-2xl object-contain shadow-2xl"
          />
          <p className="text-center font-semibold text-cream">{active.alt[locale]}</p>
          <button
            type="button"
            onClick={() => step(1)}
            className="absolute bottom-5 right-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream text-ink sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2"
            aria-label={copy.next}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      ) : null}
    </section>
  )
}
