/**
 * SITE CONFIG — update contact details, hours, map, and socials here later.
 * Leave placeholders as-is until you have final info.
 */
export const siteConfig = {
  /**
   * Launch switch:
   * - false = public visitors only see Coming Soon
   * - true  = full website is live
   * Preview full site anytime with: ?preview=1
   */
  showFullSite: true,
  doctorName: {
    en: "Dr. Anna Elia, MD",
    el: "Δρ. Άννα Ηλία, MD",
  },
  title: {
    en: "Specialist Pediatrician",
    el: "Ειδική Παιδίατρος",
  },
  phone: "+357 22 250 447",
  phoneHref: "tel:+35722250447",
  email: "info@annaelia.com.cy",
  emailHref: "mailto:info@annaelia.com.cy",
  address: {
    en: "16 Kosta Misiaouli, Kato Deftera, Nicosia 2450, Cyprus",
    el: "Κώστα Μισιαούλη 16, Κάτω Δευτερά, Λευκωσία 2450, Κύπρος",
  },
  /** Google Maps: https://maps.app.goo.gl/TfjtrvXFjQg461sv9 */
  mapsEmbedUrl:
    "https://www.google.com/maps?q=35.0860448,33.2847233&z=17&hl=el&output=embed",
  mapsGoogleUrl: "https://maps.app.goo.gl/TfjtrvXFjQg461sv9",
  mapsWazeUrl:
    "https://waze.com/ul?ll=35.0860448%2C33.2847233&navigate=yes",
  hours: {
    en: [
      { days: "Monday – Friday", time: "09:00 – 17:00" },
      { days: "Saturday", time: "By appointment" },
      { days: "Sunday", time: "Closed" },
    ],
    el: [
      { days: "Δευτέρα – Παρασκευή", time: "09:00 – 17:00" },
      { days: "Σάββατο", time: "Με ραντεβού" },
      { days: "Κυριακή", time: "Κλειστά" },
    ],
  },
  social: {
    // TODO: add real URLs when ready
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
  /** Swap this path later with /images/doctor.jpg (place file in /public/images/) */
  profileImage:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
      alt: { en: "Bright clinic waiting area", el: "Φωτεινός χώρος αναμονής" },
    },
    {
      src: "https://images.unsplash.com/photo-1631217868264-e5b90bb9e37b?auto=format&fit=crop&w=900&q=80",
      alt: { en: "Calm consultation room", el: "Ήρεμο ιατρείο" },
    },
    {
      src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=900&q=80",
      alt: { en: "Welcoming reception desk", el: "Φιλική ρεσεψιόν" },
    },
    {
      src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80",
      alt: { en: "Soft, child-friendly interior", el: "Ζεστός, φιλικός χώρος για παιδιά" },
    },
  ],
} as const

export type Locale = "en" | "el"
