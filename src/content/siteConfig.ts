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
  /** Public address. Used for the canonical link, sitemap, and search results. */
  siteUrl: "https://annaelia.com.cy",
  /** Show the "Our Space" photo collage */
  showGallery: true,
  doctorName: {
    en: "Dr. Anna Elia, MD",
    el: "Δρ. Άννα Ηλία, MD",
  },
  title: {
    en: "Pediatrician",
    el: "Παιδίατρος",
  },
  phone: "+357 22 250 447",
  phoneHref: "tel:+35722250447",
  mobile: "+357 94 002 007",
  mobileHref: "tel:+35794002007",
  email: "info@annaelia.com.cy",
  emailHref: "mailto:info@annaelia.com.cy",
  address: {
    en: "16 Kosta Misiaouli, Kato Deftera, Nicosia 2450, Cyprus",
    el: "Κώστα Μισιαούλη 16, Κάτω Δευτερά, Λευκωσία 2450, Κύπρος",
  },
  postalAddress: {
    streetAddress: {
      en: "16 Kosta Misiaouli",
      el: "Κώστα Μισιαούλη 16",
    },
    locality: {
      en: "Kato Deftera",
      el: "Κάτω Δευτερά",
    },
    region: {
      en: "Nicosia",
      el: "Λευκωσία",
    },
    postalCode: "2450",
    country: "CY",
  },
  geo: {
    latitude: 35.0860448,
    longitude: 33.2847233,
  },
  /** Public name on the existing Google Business listing. */
  mapsBusinessName: "Dr. Anna Elia - Pediatrician",
  /** Google Business listing: https://maps.app.goo.gl/i3QxTxBvAyg1WpuSA */
  mapsEmbedUrl:
    "https://www.google.com/maps?q=35.0860448,33.2847233&z=17&hl=el&output=embed",
  mapsGoogleUrl: "https://maps.app.goo.gl/i3QxTxBvAyg1WpuSA",
  mapsWazeUrl:
    "https://waze.com/ul?ll=35.0860448%2C33.2847233&navigate=yes",
  hours: {
    en: [
      { days: "Monday", time: "09:00 – 13:00 · 15:00 – 18:00" },
      { days: "Tuesday", time: "09:00 – 13:00 · 15:00 – 18:00" },
      { days: "Wednesday", time: "09:00 – 13:00 · 15:00 – 18:00" },
      { days: "Thursday", time: "09:00 – 13:00" },
      { days: "Friday", time: "09:00 – 13:00 · 15:00 – 18:00" },
      { days: "Saturday", time: "Closed" },
      { days: "Sunday", time: "Closed" },
    ],
    el: [
      { days: "Δευτέρα", time: "09:00 – 13:00 · 15:00 – 18:00" },
      { days: "Τρίτη", time: "09:00 – 13:00 · 15:00 – 18:00" },
      { days: "Τετάρτη", time: "09:00 – 13:00 · 15:00 – 18:00" },
      { days: "Πέμπτη", time: "09:00 – 13:00" },
      { days: "Παρασκευή", time: "09:00 – 13:00 · 15:00 – 18:00" },
      { days: "Σάββατο", time: "Κλειστό" },
      { days: "Κυριακή", time: "Κλειστό" },
    ],
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61596194711986",
    instagram: "https://www.instagram.com/dr.annaelia",
    linkedin: "https://www.linkedin.com/in/anna-elia-5ba342427",
  },
  profileImage: "/images/doctor.jpg",
  /** "Our Space" collage: the first photo is the large one. */
  gallery: [
    {
      src: "/images/space/waiting-room.jpg",
      alt: { en: "Waiting area", el: "Αίθουσα αναμονής" },
      position: "40% 50%",
    },
    {
      src: "/images/space/play-corner.jpg",
      alt: { en: "Play corner", el: "Γωνιά παιχνιδιού" },
      position: "60% 62%",
    },
    {
      src: "/images/space/reception.jpg",
      alt: { en: "Reception", el: "Υποδοχή" },
      position: "50% 45%",
    },
  ],
} as const

export type Locale = "en" | "el"
