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
      headline: "Modern paediatric care, centred on every child",
      bio: "Modern, personalised paediatric care with a focus on prevention, development and continuous monitoring of your child’s health — with scientific care, meaningful communication and a trusted relationship with every family.",
      cta: "Get in Touch",
      secondaryCta: "View Services",
      imageAlt: "Portrait of Dr. Anna Elia",
    },
    services: {
      title: "Services",
      subtitle:
        "Thoughtful paediatric care designed to support children and reassure parents at every stage.",
      items: [
        {
          icon: "/images/services/newborn.png",
          title: "Attendance at Birth & Newborn Examination",
          description:
            "Presence during delivery and a complete newborn assessment during the maternity stay.",
          accent: "pink" as const,
        },
        {
          icon: "/images/services/breastfeeding.png",
          title: "Breastfeeding Support",
          description:
            "Guidance and support for mothers to start and continue breastfeeding smoothly.",
          accent: "blush" as const,
        },
        {
          icon: "/images/services/growth.png",
          title: "Growth & Development Monitoring",
          description:
            "Regular assessment of physical growth and developmental progress from infancy through adolescence.",
          accent: "mint" as const,
        },
        {
          icon: "/images/services/vaccination.png",
          title: "Vaccinations",
          description:
            "Monitoring vaccination coverage and providing scheduled vaccines according to the National Immunisation Programme.",
          accent: "peach" as const,
        },
        {
          icon: "/images/services/diagnosis.png",
          title: "Diagnosis & Treatment",
          description:
            "Assessment, diagnosis and management of acute and common health issues in childhood and adolescence.",
          accent: "sky" as const,
        },
        {
          icon: "/images/services/counselling.png",
          title: "Parental Counselling",
          description:
            "Personalised guidance on nutrition, sleep, behaviour, accident prevention and everyday child care.",
          accent: "lavender" as const,
        },
      ],
      cta: "Learn More",
    },
    gesy: {
      title: "Health System",
      body: "Our practice is registered with the General Healthcare System (GESY), ensuring access for every eligible person. We also accept appointments outside GESY.",
      logoAlt: "Official GESY logo",
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
      eyebrow: "Ειδική Παιδίατρος · Κύπρος",
      headline: "Σύγχρονη παιδιατρική φροντίδα, με επίκεντρο κάθε παιδί",
      bio: "Σύγχρονη και εξατομικευμένη παιδιατρική φροντίδα, με έμφαση στην πρόληψη, την ανάπτυξη και τη διαχρονική παρακολούθηση της υγείας του παιδιού. Με επιστημονική συνέπεια, ουσιαστική επικοινωνία και μια σχέση εμπιστοσύνης με κάθε οικογένεια.",
      cta: "Επικοινωνήστε",
      secondaryCta: "Δείτε τις Υπηρεσίες",
      imageAlt: "Φωτογραφία της Δρ. Άννας Ηλία",
    },
    services: {
      title: "Υπηρεσίες",
      subtitle:
        "Παιδιατρική φροντίδα με σεβασμό, σχεδιασμένη να στηρίζει τα παιδιά και να καθησυχάζει τους γονείς.",
      items: [
        {
          icon: "/images/services/newborn.png",
          title: "Παρουσία στον τοκετό & Εξέταση νεογνού",
          description:
            "Παρουσία κατά τον τοκετό και ολοκληρωμένη εξέταση κατά την παραμονή στο Μαιευτήριο.",
          accent: "pink" as const,
        },
        {
          icon: "/images/services/breastfeeding.png",
          title: "Υποστήριξη μητρικού θηλασμού",
          description:
            "Καθοδήγηση και υποστήριξη της μητέρας για την έναρξη και ομαλή συνέχιση του μητρικού θηλασμού.",
          accent: "blush" as const,
        },
        {
          icon: "/images/services/growth.png",
          title: "Παρακολούθηση αύξησης και ανάπτυξης",
          description:
            "Τακτική αξιολόγηση της σωματικής αύξησης και της αναπτυξιακής πορείας του παιδιού από τη βρεφική ηλικία έως την εφηβεία.",
          accent: "mint" as const,
        },
        {
          icon: "/images/services/vaccination.png",
          title: "Εμβολιασμοί",
          description:
            "Παρακολούθηση της εμβολιαστικής κάλυψης και διενέργεια των προβλεπόμενων εμβολιασμών σύμφωνα με το Εθνικό Πρόγραμμα Εμβολιασμών.",
          accent: "peach" as const,
        },
        {
          icon: "/images/services/diagnosis.png",
          title: "Διάγνωση & Αντιμετώπιση",
          description:
            "Αξιολόγηση, διάγνωση και αντιμετώπιση οξέων και συχνών προβλημάτων υγείας της παιδικής και εφηβικής ηλικίας.",
          accent: "sky" as const,
        },
        {
          icon: "/images/services/counselling.png",
          title: "Συμβουλευτική Γονέων",
          description:
            "Εξατομικευμένη καθοδήγηση για θέματα διατροφής, ύπνου, συμπεριφοράς, πρόληψης ατυχημάτων και καθημερινής φροντίδας του παιδιού.",
          accent: "lavender" as const,
        },
      ],
      cta: "Μάθετε περισσότερα",
    },
    gesy: {
      title: "Σύστημα Υγείας",
      body: "Το ιατρείο μας είναι εγγεγραμμένο στο Γενικό Σύστημα Υγείας (ΓεΣΥ), εξασφαλίζοντας πρόσβαση σε κάθε δικαιούχο. Δεχόμαστε και ραντεβού εκτός ΓεΣΥ.",
      logoAlt: "Επίσημο λογότυπο ΓεΣΥ",
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
