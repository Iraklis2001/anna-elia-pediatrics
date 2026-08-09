import type { Copy } from "../content/copy"
import { siteConfig, type Locale } from "../content/siteConfig"

type GalleryProps = {
  copy: Copy["gallery"]
  locale: Locale
}

export function Gallery({ copy, locale }: GalleryProps) {
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

        {/* Modern gallery grid — replace URLs in siteConfig.gallery */}
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.gallery.map((photo, index) => (
            <li
              key={photo.src}
              className={[
                "overflow-hidden rounded-3xl border border-border-soft bg-pastel-beige",
                index === 0 ? "sm:col-span-2 sm:row-span-2" : "",
              ].join(" ")}
            >
              <img
                src={photo.src}
                alt={photo.alt[locale]}
                className={[
                  "h-full w-full object-cover transition duration-500 hover:scale-[1.03]",
                  index === 0 ? "min-h-[16rem] sm:min-h-[28rem]" : "aspect-[4/3] min-h-[12rem]",
                ].join(" ")}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
