import type { Locale } from "./siteConfig"

/**
 * PAGE COPY — edit English / Greek text here.
 * Keep keys in sync between `en` and `el`.
 */
export const copy = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      gesy: "GESY",
      space: "Our Space",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Specialist Pediatrician · Cyprus",
      headline: "Gentle care for growing kids",
      bio: "Specialist Pediatrician with comprehensive postgraduate training across tertiary paediatric services in Cyprus. Committed to compassionate, family-centred care through high-quality primary paediatric services — with a strong focus on prevention, immunisation, and developmental surveillance.",
      cta: "Get in Touch",
      secondaryCta: "View Services",
      imageAlt: "Portrait placeholder for Dr. Anna Elia",
    },
    services: {
      title: "Services",
      subtitle:
        "Thoughtful paediatric care designed to support children and reassure parents at every stage.",
      items: [
        {
          title: "Primary Care Paediatrics",
          description:
            "Ongoing care for infants, children, and adolescents — from routine check-ups to everyday health concerns.",
          accent: "green" as const,
        },
        {
          title: "Preventive Child Healthcare",
          description:
            "Proactive guidance to keep little ones healthy, with clear advice parents can trust.",
          accent: "blue" as const,
        },
        {
          title: "Childhood Immunisation",
          description:
            "Evidence-based vaccination counselling and scheduling tailored to your child’s needs.",
          accent: "beige" as const,
        },
        {
          title: "Growth & Development",
          description:
            "Careful monitoring of growth and developmental milestones, with early support when it matters.",
          accent: "yellow" as const,
        },
        {
          title: "Acute Paediatric Care",
          description:
            "Assessment and management of acute presentations with calm, clear communication for families.",
          accent: "green" as const,
        },
        {
          title: "Family-Centred Visits",
          description:
            "Unhurried appointments where questions are welcome and decisions are made together.",
          accent: "blue" as const,
        },
      ],
      cta: "Learn More",
    },
    gesy: {
      title: "Health System",
      body: "Our practice is registered with the General Healthcare System (GESY / ΓεΣΥ), so every family can access specialised paediatric care. Visit us with your GESY card and entrust us with your child’s health.",
    },
    gallery: {
      title: "Our Space",
      subtitle:
        "A calm, welcoming environment for children and parents. Photos below are placeholders until clinic images are ready.",
    },
    contact: {
      title: "Contact & Location",
      subtitle: "Reach out with a question — details can be updated anytime.",
      hoursTitle: "Operating Hours",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Location",
      socialLabel: "Social",
      mapTitle: "Clinic location map",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Compassionate paediatric care for families.",
    },
  },
  el: {
    nav: {
      about: "Σχετικά",
      services: "Υπηρεσίες",
      gesy: "ΓεΣΥ",
      space: "Ο Χώρος μας",
      contact: "Επικοινωνία",
    },
    hero: {
      eyebrow: "Ειδικός Παιδίατρος · Κύπρος",
      headline: "Ήπια φροντίδα για τα παιδιά που μεγαλώνουν",
      bio: "Ειδικός Παιδίατρος με ολοκληρωμένη μετεκπαίδευση σε τριτοβάθμιες παιδιατρικές υπηρεσίες στην Κύπρο. Αφοσιωμένη στην ευγενική, οικογενειοκεντρική φροντίδα μέσω ποιοτικών πρωτοβάθμιων παιδιατρικών υπηρεσιών — με έμφαση στην πρόληψη, τον εμβολιασμό και την παρακολούθηση της ανάπτυξης.",
      cta: "Επικοινωνήστε",
      secondaryCta: "Δείτε τις Υπηρεσίες",
      imageAlt: "Προσωρινή φωτογραφία προφίλ για την Δρ. Άννα Ηλία",
    },
    services: {
      title: "Υπηρεσίες",
      subtitle:
        "Παιδιατρική φροντίδα με σεβασμό, σχεδιασμένη να στηρίζει τα παιδιά και να καθησυχάζει τους γονείς.",
      items: [
        {
          title: "Πρωτοβάθμια Παιδιατρική",
          description:
            "Συνεχής φροντίδα για βρέφη, παιδιά και εφήβους — από τους τακτικούς ελέγχους έως τα καθημερινά θέματα υγείας.",
          accent: "green" as const,
        },
        {
          title: "Προληπτική Παιδιατρική",
          description:
            "Προληπτική καθοδήγηση για υγιή παιδιά, με σαφείς συμβουλές που μπορούν να εμπιστευτούν οι γονείς.",
          accent: "blue" as const,
        },
        {
          title: "Εμβολιασμοί Παιδιών",
          description:
            "Συμβουλευτική και προγραμματισμός εμβολιασμών βάσει επιστημονικών δεδομένων, προσαρμοσμένα στις ανάγκες κάθε παιδιού.",
          accent: "beige" as const,
        },
        {
          title: "Ανάπτυξη & Εξέλιξη",
          description:
            "Προσεκτική παρακολούθηση της ανάπτυξης και των αναπτυξιακών οροσήμων, με έγκαιρη στήριξη όταν χρειάζεται.",
          accent: "yellow" as const,
        },
        {
          title: "Οξεία Παιδιατρική Φροντίδα",
          description:
            "Αξιολόγηση και διαχείριση οξέων περιστατικών με ήρεμη και σαφή επικοινωνία προς την οικογένεια.",
          accent: "green" as const,
        },
        {
          title: "Οικογενειοκεντρικές Επισκέψεις",
          description:
            "Επισκέψεις χωρίς βιασύνη, όπου οι ερωτήσεις είναι ευπρόσδεκτες και οι αποφάσεις λαμβάνονται μαζί.",
          accent: "blue" as const,
        },
      ],
      cta: "Μάθετε περισσότερα",
    },
    gesy: {
      title: "Σύστημα Υγείας",
      body: "Το ιατρείο μας είναι εγγεγραμμένο στο Γενικό Σύστημα Υγείας (ΓεΣΥ), εξασφαλίζοντας σε κάθε οικογένεια πρόσβαση σε εξειδικευμένη παιδιατρική φροντίδα. Επισκεφθείτε μας με την κάρτα σας και αναθέστε μας την υγεία του παιδιού σας.",
    },
    gallery: {
      title: "Ο Χώρος μας",
      subtitle:
        "Ένα ήρεμο και φιλόξενο περιβάλλον για παιδιά και γονείς. Οι φωτογραφίες είναι προσωρινές μέχρι να προστεθούν οι πραγματικές.",
    },
    contact: {
      title: "Επικοινωνία & Τοποθεσία",
      subtitle:
        "Επικοινωνήστε για οποιαδήποτε ερώτηση — τα στοιχεία μπορούν να ενημερωθούν αργότερα.",
      hoursTitle: "Ώρες Λειτουργίας",
      phoneLabel: "Τηλέφωνο",
      emailLabel: "Email",
      addressLabel: "Διεύθυνση",
      socialLabel: "Κοινωνικά",
      mapTitle: "Χάρτης τοποθεσίας ιατρείου",
    },
    footer: {
      rights: "Με επιφύλαξη παντός δικαιώματος.",
      tagline: "Ευγενική παιδιατρική φροντίδα για οικογένειες.",
    },
  },
} as const

export type Copy = (typeof copy)[Locale]
