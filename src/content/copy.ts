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
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Pediatrician · Cyprus",
      headline: "Modern paediatric care, centred on every child",
      bio: "Modern, personalised paediatric care with a focus on prevention, development and continuous monitoring of your child’s health — with scientific care, meaningful communication and a trusted relationship with every family.",
      cta: "Get in Touch",
      secondaryCta: "View Services",
      imageAlt: "Portrait of Dr. Anna Elia",
    },
    bio: {
      eyebrow: "About the doctor",
      tabLabel: "Meet the pediatrician",
      name: "Dr. Anna Elia",
      role: "Pediatrician",
      badge: "Personal Paediatric Physician · GESY",
      paragraphs: [
        "Dr. Anna Elia is a graduate of the University of Cyprus Medical School and holds a specialty title in Paediatrics.",
        "She completed her specialty training at Limassol General Hospital and Archbishop Makarios III Hospital in Nicosia.",
        "During her training she worked in General Paediatrics, Neonatal and Paediatric Intensive Care, as well as specialised paediatric fields, gaining broad clinical experience in the care of newborns, infants, children and adolescents.",
        "At her paediatric practice in Deftera she provides comprehensive primary paediatric care, with a focus on prevention, early diagnosis and continuous monitoring of children’s health and development from birth through adolescence.",
      ],
    },
    services: {
      title: "Services",
      items: [
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
            "Monitoring vaccination coverage, parent guidance, and vaccinations according to the National Immunisation Programme.",
          accent: "peach" as const,
        },
        {
          icon: "/images/services/diagnosis.png",
          title: "Diagnosis & Treatment",
          description:
            "Complete clinical assessment, diagnosis and personalised care for acute and chronic health issues in infants, children and adolescents.",
          accent: "sky" as const,
        },
        {
          icon: "/images/services/newborn.png",
          title: "Attendance at Birth & Newborn Examination",
          description:
            "Presence during delivery, initial newborn assessment, monitoring during the maternity stay, and continued paediatric care after discharge.",
          accent: "pink" as const,
        },
        {
          icon: "/images/services/breastfeeding.png",
          title: "Breastfeeding Support",
          description:
            "Personalised guidance and practical support to help mothers begin, establish and continue breastfeeding successfully.",
          accent: "blush" as const,
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
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "How can I book an appointment?",
          answer: "By phone. Visits are by appointment.",
        },
        {
          question: "Do you accept GESY visits and private appointments?",
          answer:
            "The doctor is contracted with GESY. She also accepts private appointments.",
        },
        {
          question: "How can I register my child on the doctor's GESY list?",
          answer:
            "You can register through the GESY Beneficiary Portal, or we can help you during your visit to the practice.",
        },
        {
          question: "Up to what age does the doctor see children?",
          answer: "From birth up to the age of 18.",
        },
        {
          question: "What should I bring to the first visit?",
          answer: "Your child's health booklet.",
        },
        {
          question: "When should a newborn's first visit to the pediatrician take place?",
          answer:
            "Usually in the first few days after leaving the maternity hospital, depending on the newborn's needs.",
        },
        {
          question: "Can my child be seen the same day if they are sick?",
          answer:
            "Call us and we will let you know if there is availability the same day.",
        },
      ],
    },
    contact: {
      title: "Contact & Location",
      hoursTitle: "Operating Hours",
      hoursNote: "By appointment",
      phoneLabel: "Phone",
      mobileLabel: "Mobile",
      emailLabel: "Email",
      addressLabel: "Location",
      directionsLabel: "Get directions",
      openInGoogleMaps: "Google Maps",
      openInWaze: "Waze",
      socialLabel: "Social",
      mapTitle: "Clinic location map",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Compassionate paediatric care for families.",
      phoneLabel: "Phone",
      mobileLabel: "Mobile",
      addressLabel: "Clinic",
      notice:
        "Information on this website does not replace a medical examination or advice.",
    },
  },
  el: {
    nav: {
      about: "Σχετικά",
      services: "Υπηρεσίες",
      gesy: "ΓεΣΥ",
      space: "Ο Χώρος μας",
      faq: "Ερωτήσεις",
      contact: "Επικοινωνία",
    },
    hero: {
      eyebrow: "Παιδίατρος · Κύπρος",
      headline: "Σύγχρονη παιδιατρική φροντίδα, με επίκεντρο κάθε παιδί",
      bio: "Σύγχρονη και εξατομικευμένη παιδιατρική φροντίδα, με έμφαση στην πρόληψη, την ανάπτυξη και τη διαχρονική παρακολούθηση της υγείας του παιδιού. Με επιστημονική συνέπεια, ουσιαστική επικοινωνία και μια σχέση εμπιστοσύνης με κάθε οικογένεια.",
      cta: "Επικοινωνήστε",
      secondaryCta: "Δείτε τις Υπηρεσίες",
      imageAlt: "Φωτογραφία της Δρ. Άννας Ηλία",
    },
    bio: {
      eyebrow: "Σχετικά με την ιατρό",
      tabLabel: "Γνωρίστε την παιδίατρο",
      name: "Δρ. Άννα Ηλία",
      role: "Παιδίατρος",
      badge: "Προσωπικός Ιατρός Παιδιών ΓεΣΥ",
      paragraphs: [
        "Η Δρ. Άννα Ηλία είναι απόφοιτος της Ιατρικής Σχολής του Πανεπιστημίου Κύπρου και κάτοχος τίτλου ειδικότητας στην Παιδιατρική.",
        "Ολοκλήρωσε την ειδικότητά της στο Γενικό Νοσοκομείο Λεμεσού και στο Νοσοκομείο Αρχιεπίσκοπος Μακάριος Γ΄ στη Λευκωσία.",
        "Κατά τη διάρκεια της εκπαίδευσής της δραστηριοποιήθηκε στη Γενική Παιδιατρική, στις Μονάδες Εντατικής Νοσηλείας Νεογνών και Παίδων, καθώς και σε επιμέρους εξειδικευμένους τομείς της Παιδιατρικής, αποκτώντας πολύπλευρη κλινική εμπειρία στη φροντίδα νεογνών, βρεφών, παιδιών και εφήβων.",
        "Στο παιδιατρείο της στη Δευτερά παρέχει ολοκληρωμένη πρωτοβάθμια παιδιατρική φροντίδα, με έμφαση στην πρόληψη, την έγκαιρη διάγνωση και τη συνεχή παρακολούθηση της υγείας και της ανάπτυξης του παιδιού από τη γέννηση έως την εφηβεία.",
      ],
    },
    services: {
      title: "Υπηρεσίες",
      items: [
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
            "Παρακολούθηση της εμβολιαστικής κάλυψης του παιδιού, ενημέρωση και καθοδήγηση των γονέων και πραγματοποίηση των εμβολιασμών σύμφωνα με το Εθνικό Πρόγραμμα Εμβολιασμών.",
          accent: "peach" as const,
        },
        {
          icon: "/images/services/diagnosis.png",
          title: "Διάγνωση & Αντιμετώπιση",
          description:
            "Ολοκληρωμένη κλινική αξιολόγηση, διάγνωση και εξατομικευμένη αντιμετώπιση οξέων και χρόνιων προβλημάτων υγείας σε βρέφη, παιδιά και εφήβους.",
          accent: "sky" as const,
        },
        {
          icon: "/images/services/newborn.png",
          title: "Παρουσία στον τοκετό & Εξέταση νεογνού",
          description:
            "Παρουσία κατά τον τοκετό και αρχική κλινική αξιολόγηση του νεογνού, παρακολούθηση της υγείας του κατά την παραμονή στο μαιευτήριο και συνέχιση της παιδιατρικής φροντίδας μετά το εξιτήριο.",
          accent: "pink" as const,
        },
        {
          icon: "/images/services/breastfeeding.png",
          title: "Υποστήριξη μητρικού θηλασμού",
          description:
            "Εξατομικευμένη καθοδήγηση και πρακτική υποστήριξη της μητέρας για την επιτυχή έναρξη, εγκατάσταση και ομαλή συνέχιση του μητρικού θηλασμού.",
          accent: "blush" as const,
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
    faq: {
      title: "Συχνές ερωτήσεις",
      items: [
        {
          question: "Πώς μπορώ να κλείσω ραντεβού;",
          answer: "Τηλεφωνικώς. Οι επισκέψεις γίνονται με ραντεβού.",
        },
        {
          question: "Δέχεστε επισκέψεις εντός ΓεΣΥ και ιδιωτικά ραντεβού;",
          answer:
            "Η ιατρός είναι συμβεβλημένη με το ΓεΣΥ. Δέχεται και ραντεβού ιδιωτικά.",
        },
        {
          question:
            "Πώς μπορώ να εγγράψω το παιδί μου στον κατάλογο της γιατρού στο ΓεΣΥ;",
          answer:
            "Η εγγραφή μπορεί να πραγματοποιηθεί μέσω της Πύλης Δικαιούχων του ΓεΣΥ ή με τη βοήθεια μας κατά την επίσκεψη σας στο ιατρείο.",
        },
        {
          question: "Μέχρι ποιας ηλικίας παιδιά εξετάζει η γιατρός;",
          answer: "Από τη γέννηση μέχρι και την ηλικία των 18 ετών.",
        },
        {
          question: "Τι πρέπει να έχω μαζί μου στην πρώτη επίσκεψη;",
          answer: "Το βιβλιάριο υγείας του παιδιού.",
        },
        {
          question:
            "Πότε πρέπει να γίνει η πρώτη επίσκεψη του νεογέννητου στην Παιδίατρο;",
          answer:
            "Συνήθως τις πρώτες μέρες μετά την έξοδο από το μαιευτήριο, ανάλογα με τις ανάγκες του νεογνού.",
        },
        {
          question: "Μπορεί το παιδί μου να εξεταστεί την ίδια μέρα αν είναι άρρωστο;",
          answer:
            "Καλέστε μας και θα σας ενημερώσουμε αν υπάρχει διαθεσιμότητα την ίδια μέρα.",
        },
      ],
    },
    contact: {
      title: "Επικοινωνία & Τοποθεσία",
      hoursTitle: "Ώρες Λειτουργίας",
      hoursNote: "Κατόπιν ραντεβού",
      phoneLabel: "Σταθερό",
      mobileLabel: "Κινητό",
      emailLabel: "Email",
      addressLabel: "Διεύθυνση",
      directionsLabel: "Οδηγίες",
      openInGoogleMaps: "Google Maps",
      openInWaze: "Waze",
      socialLabel: "Κοινωνικά",
      mapTitle: "Χάρτης τοποθεσίας ιατρείου",
    },
    footer: {
      rights: "Με επιφύλαξη παντός δικαιώματος.",
      tagline: "Ευγενική παιδιατρική φροντίδα για οικογένειες.",
      phoneLabel: "Σταθερό",
      mobileLabel: "Κινητό",
      addressLabel: "Ιατρείο",
      notice:
        "Οι πληροφορίες σε αυτή την ιστοσελίδα δεν αντικαθιστούν την ιατρική εξέταση ή συμβουλή.",
    },
  },
} as const

export type Copy = (typeof copy)[Locale]
