/**
 * SITE CONFIG — update contact details, hours, map, and socials here later.
 * Leave placeholders as-is until you have final info.
 */
export const siteConfig = {
  doctorName: "Anna Elia, MD",
  title: {
    en: "Specialist Pediatrician",
    el: "Ειδικός Παιδίατρος",
  },
  phone: "+357 00 000 000", // TODO: replace with real number
  phoneHref: "tel:+35700000000",
  email: "hello@example.com", // TODO: replace with real email
  emailHref: "mailto:hello@example.com",
  address: {
    en: "Clinic address coming soon — Cyprus",
    el: "Η διεύθυνση του ιατρείου θα προστεθεί σύντομα — Κύπρος",
  },
  /** Replace with your Google Maps embed URL when ready */
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.0!2d33.0!3d35.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDAwJzAwLjAiTiAzM8KwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
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
