export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  imageUrl: string;
  category: 'skin' | 'hair' | 'aesthetic';
  benefits: string[];
  steps: string[];
  technologies: string[];
}

export interface Treatment {
  id: string;
  title: string;
  serviceId: string;
  shortDesc: string;
  description: string;
  imageUrl: string;
  duration: string;
  recoveryTime: string;
  benefits: string[];
  procedureSteps: string[];
  faqs: { q: string; a: string }[];
  price?: string;
}

export interface Doctor {
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
  qualifications: string[];
  memberships: string[];
  achievements: string[];
  education: string[];
  awards: string[];
}

export interface BeforeAfter {
  id: string;
  title: string;
  category: string;
  beforeUrl: string;
  afterUrl: string;
  treatmentName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  imageUrl: string;
  treatment: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  comments: { name: string; date: string; text: string }[];
}

export interface SpecialOffer {
  id: string;
  title: string;
  discount: string;
  description: string;
  code: string;
  validUntil: string;
  imageUrl: string;
}

export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  experience: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export const clinicData = {
  name: "Belle Skin Care & Laser Clinic",
  address: "Behind Tupsakhare Lawns, Ahilyabai Holkar Marg, Opp. Nelson Memorial Children's Hospital Pvt. Ltd., Nashik, Maharashtra",
  phone: "091462 68240",
  whatsapp: "https://wa.me/919146268240",
  workingHours: "Mon - Sat: 10:00 AM - 8:00 PM | Sunday: Closed",
  email: "info@belleclinic.com",
  socials: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    twitter: "#"
  }
};

export const services: Service[] = [
  {
    id: "acne-scar",
    title: "Acne & Scar Treatment",
    shortDesc: "Advanced dermatological solutions to clear active acne, heal skin texture, and fade deep scars.",
    description: "Our comprehensive acne program targets acne from the root. Using advanced clinical extractions, premium chemical peels, and laser resurfacing, we help you clear active breakouts, balance sebum production, and heal historic acne scarring for smooth, healthy skin.",
    iconName: "Sparkles",
    imageUrl: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
    category: "skin",
    benefits: [
      "Significant reduction in active acne breakouts",
      "Noticeably smoother skin texture and scar reduction",
      "Faded post-inflammatory hyperpigmentation (PIH)",
      "Balanced sebum production and minimized pore size"
    ],
    steps: [
      "Deep Clinical Cleansing and Skin Analysis",
      "Gentle Exfoliation and Sebum Control Peeling",
      "Precise Laser resurfacing or Microneedling to target scars",
      "Soothing Hydrating & Anti-inflammatory Mask application"
    ],
    technologies: ["CO2 Fractional Laser", "Dermapen 4 Microneedling", "Salicylic & Glycolic Peels"]
  },
  {
    id: "anti-aging",
    title: "Anti-Aging Solutions",
    shortDesc: "Turn back the clock with premium wrinkle-relaxing treatments, skin tightening, and dermal lifting.",
    description: "Restore youthfulness and confidence with our range of non-surgical anti-aging solutions. From targeting deep dynamic wrinkles to tightening loose sagging skin along the jawline, our premium aesthetic procedures yield visible, natural-looking lift and radiance.",
    iconName: "ArrowUpCircle",
    imageUrl: "https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&w=800&q=80",
    category: "skin",
    benefits: [
      "Visibly smoother fine lines and deeper wrinkles",
      "Improved skin elasticity and firmer contours",
      "Natural-looking lift without surgical downtime",
      "Stimulated collagen production for long-term firmness"
    ],
    steps: [
      "Facial Assessment and Muscle Activity Mapping",
      "Targeted Skin Tightening or Micro-Injections",
      "Deep collagen-boosting therapy using USFDA approved devices",
      "Post-treatment cooling infusion and sunscreen application"
    ],
    technologies: ["HIFU (High-Intensity Focused Ultrasound)", "Botulinum Toxin", "Hyaluronic Acid Fillers"]
  },
  {
    id: "pigmentation",
    title: "Pigmentation Treatment",
    shortDesc: "Target melasma, sunspots, and uneven skin tone with medical-grade lightening solutions.",
    description: "Uneven skin tone, sun blemishes, and hormonal melasma can be incredibly stubborn. We offer high-precision laser toning, depigmentation peels, and medical-grade home care formulations that gently shatter melanin pigments and reveal an even, bright complexion.",
    iconName: "Sun",
    imageUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
    category: "skin",
    benefits: [
      "Lightened melasma patches and faded dark spots",
      "Brightened and uniformly even skin tone",
      "Reduced appearance of sun damage and freckles",
      "Restored natural radiance and luminous complexion"
    ],
    steps: [
      "Visia Digital Skin Pigment Analysis",
      "Melanin-disrupting Laser Toning session",
      "Application of soothing depigmentation agent or botanical serum",
      "Broad-spectrum physical sun protection layer"
    ],
    technologies: ["Q-Switched Nd:YAG Laser", "Yellow Peel", "Cosmelan Depigmentation Treatment"]
  },
  {
    id: "laser-rejuvenation",
    title: "Laser & Skin Rejuvenation",
    shortDesc: "Experience laser skin toning and carbon peels for a flawless, bright, and glass-like complexion.",
    description: "Get that immediate Red-Carpet glow. Laser skin rejuvenation gently heats the dermis to stimulate structural collagen and refine skin pore size. This session is perfectly combined with a botanical carbon mask to draw out deep micro-impurities and leave skin beautifully smooth.",
    iconName: "Shield",
    imageUrl: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    category: "skin",
    benefits: [
      "Instant reduction in pore size and excess surface oil",
      "Beautifully smooth, radiant skin texture",
      "Deep skin purification and elimination of blackheads",
      "Stimulated long-term skin healing and glow"
    ],
    steps: [
      "Application of medical-grade carbon paste to trap dirt",
      "High-speed Nd:YAG laser sweep to vaporize carbon particles",
      "Hydrating botanical mist spray to cool down skin",
      "Nourishing multi-vitamin serum layer"
    ],
    technologies: ["Carbon Laser Peel", "Laser Toning System", "Photo Rejuvenation IPL"]
  },
  {
    id: "hair-growth",
    title: "Hair Growth Solutions",
    shortDesc: "Surgical and non-surgical scalp treatments to combat thinning, baldness, and stimulate hair roots.",
    description: "Combat hair thinning and early-stage pattern baldness with scientifically proven scalp therapies. We assess your scalp health, hair density, and nutritional markers to build a customized plan that strengthens hair follicles and triggers lush, thick hair regrowth.",
    iconName: "TrendingUp",
    imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    category: "hair",
    benefits: [
      "Noticeably reduced daily hair fall within weeks",
      "Denser, thicker, and stronger hair strands",
      "Revitalized dormant hair follicles on the scalp",
      "Improved general scalp hydration and health"
    ],
    steps: [
      "Scalp Trichoscopy analysis to check root health",
      "Deep cleansing and high-frequency scalp massage",
      "Micro-injection or laser stimulation of dormant roots",
      "Growth peptide serum lock in"
    ],
    technologies: ["High Frequency Scalp Therapy", "Low Level Laser Therapy (LLLT)", "Growth Peptide Infusion"]
  },
  {
    id: "prp-mesotherapy",
    title: "PRP & Mesotherapy for Hair",
    shortDesc: "Harness your body's natural healing factors to trigger rich hair growth and stop hair loss.",
    description: "Platelet-Rich Plasma (PRP) is a highly biological therapy. We extract growth factor-rich platelets from your own blood sample and carefully micro-inject them directly into areas of hair thinning on your scalp. This repairs weak hair follicles and boosts root volume beautifully.",
    iconName: "Droplet",
    imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
    category: "hair",
    benefits: [
      "Natural and drug-free bio-stimulation of hair",
      "Stops hair thinning and adds dense volume",
      "Significantly increases hair root strength and shine",
      "Extremely safe with zero risk of allergic reactions"
    ],
    steps: [
      "Safe and standard blood collection",
      "Centrifugation to separate gold, plasma-rich platelets",
      "Super-fine scalp micro-injections using numbing cream",
      "Sanitizing light therapy to stimulate blood flow"
    ],
    technologies: ["GFC (Growth Factor Concentrate)", "FDA Approved Centrifuge System", "Meso-Gun Technology"]
  },
  {
    id: "hydrafacial",
    title: "Hydrafacial Treatment",
    shortDesc: "The ultimate skin detox: deep exfoliation, painless blackhead extraction, and intense hydration.",
    description: "This is not your average beauty facial. Our medical HydraFacial uses a patented vortex suction nozzle to extract blackheads, flush out pores, and simultaneously infuse highly active hyaluronic acid, antioxidants, and peptide blends for instantly plumper, dewy skin.",
    iconName: "Droplets",
    imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    category: "aesthetic",
    benefits: [
      "Pores are thoroughly cleared of blackheads and dirt",
      "Intense, deep hydration that lasts for weeks",
      "Immediate plumper, softer, and more vibrant skin",
      "Helps improve absorption of daily skincare serums"
    ],
    steps: [
      "Vortex-exfoliation to peel dead skin layers",
      "Painless acid peel to loosen clogged deep grime",
      "Automated vortex extraction to vacuum out blackheads",
      "Vortex-infusion of multi-peptides and heavy hydration"
    ],
    technologies: ["Original USFDA HydraFacial Tower", "Aqua Peel tips", "Oxygen Dome Therapy"]
  },
  {
    id: "cosmetic-aesthetic",
    title: "Cosmetic & Aesthetic Treatments",
    shortDesc: "High-end clinical enhancements, lip fillers, and jawline contouring by certified specialists.",
    description: "Enhance your natural profile with clinical-grade, subtle touch-ups. From gorgeous soft lip hydration and volume, to carving out a crisp jawline and defining high-definition cheekbones, our medical aesthetic procedures are performed with absolute precision and symmetry.",
    iconName: "UserCheck",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    category: "aesthetic",
    benefits: [
      "Subtly sculpted and symmetric facial contours",
      "Plump, hydrated, and perfectly defined lips",
      "Reduced look of tired, hollow under-eye circles",
      "Refined aesthetic balance and boosted confidence"
    ],
    steps: [
      "Golden-Ratio facial mapping and custom consultation",
      "Application of premium numbing gel for complete comfort",
      "Precision dermal micro-infusion by a certified expert",
      "Gentle post-sculpt massage and ice compress cooling"
    ],
    technologies: ["Juvederm & Restylane Dermal Fillers", "Allergan Botox", "Profhilo Bio-remodeling"]
  }
];

export const treatments: Treatment[] = [
  {
    id: "gfc-hair-therapy",
    title: "Growth Factor Concentrate (GFC) Hair Therapy",
    serviceId: "prp-mesotherapy",
    shortDesc: "The next generation of PRP hair rejuvenation using highly concentrated pure growth factors.",
    description: "GFC is an advanced, highly refined therapy designed to stop hair fall and stimulate hair regrowth. Unlike conventional PRP, GFC isolates key growth factors directly from your platelets in a highly purified form, ensuring standard clinical consistency and superior hair follicle activation.",
    imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    duration: "45 Minutes",
    recoveryTime: "0 Hours (No downtime)",
    benefits: [
      "Significantly denser hair counts",
      "Virtually painless compared to standard PRP",
      "Stops active hair shedding in 2-3 sessions",
      "Extremely safe with no chemical additives"
    ],
    procedureSteps: [
      "Extraction of 10ml of the patient's blood sample.",
      "Activation of platelets using dedicated clinical GFC tubes.",
      "Centrifugation to harvest clear, pure growth factors.",
      "Super-precise scalp micro-injection into thinning areas."
    ],
    faqs: [
      { q: "How many GFC sessions are recommended?", a: "For optimal results, 3 to 4 sessions spaced one month apart are highly recommended." },
      { q: "Is GFC painful?", a: "GFC is very comfortable. We apply a local numbing cream to ensure an almost painless session." }
    ],
    price: "₹7,500 - ₹9,000 per session"
  },
  {
    id: "carbon-laser-peel",
    title: "Carbon Laser Peel (Hollywood Peel)",
    serviceId: "laser-rejuvenation",
    shortDesc: "Get instant pore tightening and radiant glow before major events.",
    description: "The Hollywood Carbon Peel is a multi-step laser treatment that instantly purifies skin, tightens pores, and brightens complexion. It is highly popular among clients looking for an immediate radiant glow with zero peeling or redness.",
    imageUrl: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    duration: "30 Minutes",
    recoveryTime: "None (Instant glow)",
    benefits: [
      "Instant purification and clean pores",
      "Eliminates stubborn blackheads",
      "Stimulates healthy skin healing",
      "Safe for all skin types"
    ],
    procedureSteps: [
      "Gentle skin cleansing to remove oil and impurities.",
      "Application of carbon lotion across the face.",
      "Laser emission over the skin to shatter carbon particles.",
      "Hyaluronic moisturizing serum application."
    ],
    faqs: [
      { q: "Will my face turn red?", a: "No, the carbon laser peel is gentle. There is only a slight, healthy rosy warmth which subsides within 30 minutes." },
      { q: "Can I wear makeup after?", a: "Yes, you can resume normal skincare and makeup immediately." }
    ],
    price: "₹4,500 per session"
  },
  {
    id: "q-switched-laser-toning",
    title: "Q-Switched Nd:YAG Laser Toning",
    serviceId: "pigmentation",
    shortDesc: "Advanced pigmentation correction and collagen-boosting laser therapy.",
    description: "Our USFDA approved Q-Switched laser targets stubborn pigmentation in the deep dermal layers. By releasing high-energy light pulses in nanoseconds, it safely shatters excess melanin without heating the surrounding skin, letting your body naturally flush out the spots.",
    imageUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
    duration: "40 Minutes",
    recoveryTime: "0 - 2 Hours",
    benefits: [
      "Fades dark patches and stubborn melasma",
      "Improves skin color symmetry",
      "Safe, quick, and highly effective",
      "Simultaneously boots facial collagen"
    ],
    procedureSteps: [
      "Double clinical face cleanse.",
      "Eye protection shields are safely secured.",
      "Laser toning sweeps across treatment zones.",
      "Calming aloe-vera gel and sun defense barrier."
    ],
    faqs: [
      { q: "Is it suitable for dark Indian skin?", a: "Yes, Q-Switched Nd:YAG is the gold standard and safest pigment laser for darker skin tones." },
      { q: "How many sessions are needed?", a: "Most patients notice great clearing after 4 to 6 sessions, spaced 3 weeks apart." }
    ],
    price: "₹6,000 per session"
  },
  {
    id: "hydrafacial-deluxe",
    title: "HydraFacial Deluxe with Oxygen Dome",
    serviceId: "hydrafacial",
    shortDesc: "Deep clinical facial detox with multi-peptide infusion and healing hyperbaric oxygen.",
    description: "The premium medical facial of choice. We combine our standard HydraFacial deep extraction with custom skin boosters and a hyperbaric oxygen dome. This infuses pure oxygen and vitamins directly into skin cells, restoring a spectacular dewy texture and glow.",
    imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    duration: "60 Minutes",
    recoveryTime: "0 Hours",
    benefits: [
      "Deeply hydrates and plumps skin cells",
      "Painless extraction of stubborn blackheads",
      "Oxygenates skin to kill acne-causing bacteria",
      "Leaves skin feeling fresh, soft, and baby-smooth"
    ],
    procedureSteps: [
      "Vortex-exfoliation and gentle chemical peel.",
      "Painless blackhead suction extraction.",
      "Custom booster serum infusion (anti-aging or brightening).",
      "Relaxing 15-minute pure Oxygen Dome session."
    ],
    faqs: [
      { q: "How often should I get a HydraFacial?", a: "Once a month is perfect to maintain skin hydration, health, and a continuous glow." },
      { q: "Is this safe for sensitive, acne-prone skin?", a: "Yes, it is highly customizable. We adjust the peeling ingredients to match sensitive skin perfectly." }
    ],
    price: "₹5,500 - ₹8,500 per session"
  }
];

export const doctors: Doctor[] = [
  {
    name: "Dr. Vaishali Nahata Belle",
    title: "Founder, Chief Dermatologist & Laser Specialist",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Vaishali Nahata Belle is a highly respected, USFDA-certified dermatologist with over 10 years of intensive experience in aesthetic dermatology, clinical trichology, and advanced laser-assisted skin remodeling. Under her leadership, Belle Skin Care & Laser Clinic has become Nashik's premier destination for safe, expert-led, and highly individualized skin and hair care. She believes in combining rigorous medical science with a meticulous aesthetic eye to deliver visible, natural-looking, and long-lasting results.",
    qualifications: [
      "MBBS (Government Medical College)",
      "MD Dermatology (Gold Medalist)",
      "Fellowship in Advanced Aesthetic Medicine & Lasers (Germany)"
    ],
    memberships: [
      "IADVL (Indian Association of Dermatologists, Venereologists and Leprologists)",
      "CDSI (Cosmetic Dermatology Society of India)",
      "ISSTD (Indian Society for Study of Sexually Transmitted Diseases)"
    ],
    achievements: [
      "Awarded 'Best Clinical Dermatologist in Nashik' 2024",
      "Successfully treated 10,000+ happy patients with 99% satisfaction rate",
      "Pioneered the introduction of triple-wavelength laser technology in North Maharashtra"
    ],
    education: [
      "Doctor of Medicine (M.D.) in Dermatology, Venereology & Leprosy",
      "Bachelor of Medicine, Bachelor of Surgery (M.B.B.S.)",
      "Certified Advanced Laser Specialist (Munich, Germany)"
    ],
    awards: [
      "Gold Medalist in MD Dermatology, 2015",
      "Outstanding Young Aesthetic Dermatologist Award, 2022",
      "Best Skincare and Hair Care Center Award - Nashik Pride, 2023"
    ]
  }
];

export const beforeAfters: BeforeAfter[] = [
  {
    id: "ba-acne",
    title: "Acne & Scar Clearing",
    category: "Acne Treatment",
    beforeUrl: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=600&q=80",
    afterUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    treatmentName: "Dermapen 4 Microneedling + Peels"
  },
  {
    id: "ba-pigment",
    title: "Pigmentation & Sun Damage Correction",
    category: "Pigmentation",
    beforeUrl: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80",
    afterUrl: "https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&w=600&q=80",
    treatmentName: "Q-Switched Laser Toning"
  },
  {
    id: "ba-laser",
    title: "Laser Skin Rejuvenation & Pores",
    category: "Skin Rejuvenation",
    beforeUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=600&q=80",
    afterUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
    treatmentName: "Hollywood Carbon Laser Peel"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Priya S.",
    location: "Nashik",
    rating: 5,
    review: "Very professional and friendly staff! Dr. Vaishali listened to my skin concerns patiently. The customized acne treatment really worked for my cystic acne. I highly recommend Belle Clinic for anyone struggling with stubborn breakouts.",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    treatment: "Acne & Scar Treatment"
  },
  {
    id: "t-2",
    name: "Ankit R.",
    location: "Mumbai",
    rating: 5,
    review: "Excellent experience! Doctor listens patiently and suggests the best solution, rather than selling expensive packages. Great results with GFC hair therapy. My hair fall stopped in just 2 sessions and I see new growth.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    treatment: "GFC Hair Therapy"
  },
  {
    id: "t-3",
    name: "Neha K.",
    location: "Nashik",
    rating: 5,
    review: "Best skin care clinic in Nashik! Visible improvement in my skin pigmentation within a few sessions of laser toning. The staff is highly hygienic, polite, and they follow strict USFDA safety protocols.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    treatment: "Laser Pigmentation Toning"
  }
];

export const faqs: FAQItem[] = [
  {
    id: "f-1",
    question: "Are the treatments at Belle Clinic safe?",
    answer: "Yes, absolutely. All our aesthetic procedures, lasers, and products are USFDA approved. They are carried out under the strict supervision of Dr. Vaishali Nahata Belle using state-of-the-art sterile clinics.",
    category: "General"
  },
  {
    id: "f-2",
    question: "Do I need to book an appointment in advance?",
    answer: "We highly recommend booking an appointment beforehand so you don't have to wait. You can book easily through our online scheduler, call us, or chat with our team on WhatsApp.",
    category: "Appointments"
  },
  {
    id: "f-3",
    question: "Is there any downtime after a laser treatment?",
    answer: "Most of our advanced aesthetic treatments (such as Q-Switched laser toning, HydraFacial, and carbon peels) have zero to minimal downtime. You can return to your work or social life immediately. Any minor post-laser redness usually clears up in 1-2 hours.",
    category: "Treatments"
  },
  {
    id: "f-4",
    question: "How many sessions will I need for hair loss treatments?",
    answer: "This varies depending on the root cause and extent of your hair thinning. On average, standard medical procedures like GFC and Meso-Therapy show excellent visible improvement in 4 to 6 monthly sessions.",
    category: "Hair Care"
  }
];

export const blogs: BlogPost[] = [
  {
    id: "b-1",
    title: "Understanding Acne Scars: Types and Best Medical Treatments",
    summary: "Acne scars can be stubborn. Learn about icepick, boxcar, and rolling scars and the latest clinical technologies to smooth them.",
    content: "Acne is a highly common skin condition, but the scars it leaves behind can affect our confidence for years. Acne scars develop when an active breakout penetrates deep into the dermal layers, damaging the collagen scaffolding beneath. Depending on how the skin heals, it may produce too little collagen (resulting in depressed/atrophic scars) or too much collagen (resulting in raised/hypertrophic scars).\n\n### The Three Main Types of Depressed Scars:\n1. **Icepick Scars**: Narrow, deep, columnar pits that look like a small pin prick.\n2. **Boxcar Scars**: Wide, round depressions with sharp, well-defined vertical edges.\n3. **Rolling Scars**: Broad, shallow depressions with sloping edges that create a wave-like texture on the cheek.\n\n### Modern Clinical Solutions:\n- **Fractional CO2 Laser**: This gold standard laser targets micro-columns of skin to vaporize scar tissue and trigger dramatic, rapid collagen remodel.\n- **Microneedling (Dermapen 4)**: Creates millions of precise micro-punctures to kickstart the body's natural healing cascade without heat downtime.\n- **Chemical Peels**: Smooths out surface pigmentation and refines skin texture.\n\nAt Belle Skin Care & Laser Clinic, we customize your scar treatment by combining these modalities for beautiful, smooth skin.",
    imageUrl: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
    category: "Skin Care",
    date: "June 24, 2026",
    author: "Dr. Vaishali Nahata Belle",
    readTime: "5 min read",
    comments: [
      { name: "Suresh P.", date: "June 25, 2026", text: "Very informative! Is CO2 laser safe for dusky skin tones?" },
      { name: "Meera Deshmukh", date: "June 27, 2026", text: "I did one session of microneedling at Belle Clinic, and my rolling scars already look softer!" }
    ]
  },
  {
    id: "b-2",
    title: "GFC vs. PRP: Which Hair Growth Therapy is Best For You?",
    summary: "Compare Growth Factor Concentrate (GFC) and traditional Platelet-Rich Plasma (PRP) therapies for hair fall control.",
    content: "Hair loss can be extremely stressful. While medical shampoos and tablets help, clinical root-stimulation is crucial for modern hair restoration. Two of the most popular therapies are GFC (Growth Factor Concentrate) and standard PRP (Platelet-Rich Plasma). Here's a comparative guide to help you choose.\n\n### Traditional PRP (Platelet-Rich Plasma)\nPRP involves drawing your blood, spinning it in a centrifuge, and isolating the plasma layer containing blood platelets. This platelet-rich fluid is then micro-injected into your scalp, where the platelets break open to release natural growth factors.\n- **Downtime**: 1-2 hours.\n- **Pain level**: Moderate.\n- **Consistency**: Varies based on the raw count of platelets extracted on that day.\n\n### Advanced GFC (Growth Factor Concentrate)\nGFC represents the next evolution of PRP. Instead of injecting whole platelets, GFC extracts and activates the growth factors inside clinical kits BEFORE injection. Only pure, high-concentration growth factors are injected into your scalp. This eliminates all cellular debris, reducing local inflammation and scalp soreness.\n- **Downtime**: Zero.\n- **Pain level**: Very low and comfortable.\n- **Consistency**: High and uniform.\n\nDr. Vaishali Belle recommends GFC for patients looking for rapid hair fall control with maximum comfort.",
    imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    category: "Hair Care",
    date: "July 01, 2026",
    author: "Dr. Vaishali Nahata Belle",
    readTime: "6 min read",
    comments: []
  },
  {
    id: "b-3",
    title: "5 Essential Golden Rules for Healthy Glowing Skin in Summer",
    summary: "Skincare during high heat requires active sweat control, barrier protection, and high-precision sun filters.",
    content: "Summer in India can be incredibly harsh on our skin barrier. The combination of intense heat, UV rays, and high humidity leads to greasy pores, breakouts, and stubborn tanning. Here are Dr. Vaishali Belle's five golden rules to maintain a radiant, healthy skin barrier during summers:\n\n1. **Never Skip Sunscreen**: Use a broad-spectrum gel-based physical sunscreen of SPF 50 or higher. Reapply every 3 hours if outdoors.\n2. **Switch to a Gentle, Hydrating Cleanser**: Avoid strong drying washes which strip the barrier, triggering excess sebum production.\n3. **Incorporate Vitamin C**: This master antioxidant neutralizes free radicals from dust and UV rays, brightens tone, and prevents sun spots.\n4. **Hydrate inside-out**: Drink 3-4 liters of water and use hyaluronic acid-based gel moisturizers.\n5. **Get a Monthly Hydrafacial**: Keeps pores completely clear of sweat build-up, blackheads, and environmental pollutants.",
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    category: "Lifestyle",
    date: "July 05, 2026",
    author: "Dr. Vaishali Nahata Belle",
    readTime: "4 min read",
    comments: []
  }
];

export const offers: SpecialOffer[] = [
  {
    id: "off-1",
    title: "Monsoon Skin Glow Package",
    discount: "20% OFF",
    description: "Get a comprehensive HydraFacial Deluxe combined with a Q-Switched carbon peel for an unmatched radiant glow.",
    code: "MONSOON20",
    validUntil: "July 31, 2026",
    imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "off-2",
    title: "Advanced GFC Hair Therapy Trial",
    discount: "Flat ₹2,500 Off",
    description: "Book your very first Growth Factor Concentrate (GFC) hair treatment session and save flat ₹2,500 off.",
    code: "HAIRGROWTH",
    validUntil: "August 15, 2026",
    imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80"
  }
];

export const pricingPlans = [
  { name: "HydraFacial Basic", price: "₹4,000", duration: "45 mins", description: "Deep cleansing, standard pore vacuum extraction, and hydrating serum infusion." },
  { name: "HydraFacial Deluxe", price: "₹6,500", duration: "60 mins", description: "Standard HydraFacial plus multi-peptide booster and pure Oxygen Dome Therapy." },
  { name: "Hollywood Carbon Laser Peel", price: "₹4,500", duration: "30 mins", description: "Carbon paste application shattered by laser for instant skin purification." },
  { name: "GFC Hair Therapy", price: "₹7,500", duration: "45 mins", description: "Highly purified growth factors harvested from your platelets injected into scalp." },
  { name: "Q-Switched Laser Toning (Face)", price: "₹5,000", duration: "30 mins", description: "Targets deep pigment cells to clear tan, melasma patches, and uneven tone." },
  { name: "Dermapen 4 Microneedling", price: "₹6,000", duration: "50 mins", description: "Micro-infusion of collagen boosters to treat deep pitted acne scars." }
];

export const careers: CareerOpening[] = [
  {
    id: "car-1",
    title: "Consultant Dermatologist",
    department: "Medical Dermatology",
    experience: "2-4 Years MD/DNB",
    location: "Nashik Clinic (On-site)",
    type: "Full-Time",
    description: "We are seeking a compassionate, certified Dermatologist to join our expert medical team. You will be responsible for diagnostic consultations, prescribing medical-grade skincare, and overseeing aesthetic laser sessions.",
    requirements: [
      "MD or DNB in Dermatology/Venereology from a recognized medical institute.",
      "Hands-on experience with Q-Switched Nd:YAG, CO2 Lasers, and Dermal Fillers.",
      "Strong communication and patient relationship management skills."
    ]
  },
  {
    id: "car-2",
    title: "Senior Laser Therapist",
    department: "Aesthetic Technology",
    experience: "1-3 Years",
    location: "Nashik Clinic (On-site)",
    type: "Full-Time",
    description: "We are looking for a skilled, certified clinical therapist experienced in carrying out HydraFacials, carbon peels, high-frequency hair therapy, and assisting the chief dermatologist.",
    requirements: [
      "Diploma/Certification in Aesthetic Therapies or Nursing.",
      "Experience operating USFDA-approved laser and micro-suction facial towers.",
      "High standard of clinical hygiene, sterile room setup, and polite etiquette."
    ]
  }
];
