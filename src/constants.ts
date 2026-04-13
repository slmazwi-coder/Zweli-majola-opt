export const BUSINESS_INFO = {
  name: "Zweli & Majola Optometrists",
  branches: [
    {
      id: "kokstad",
      city: "Kokstad",
      name: "Zweli & Majola Optometrists Kokstad",
      shoppingCentre: "Kokstad Regional Center",
      address: "Shop 24, 86 Main St, Kokstad, 4700",
      phone: "039 727 5230",
      hours: {
        monFri: "8 am – 5 pm",
        sat: "9 am – 1 pm",
        sun: "Closed"
      },
      emails: ["pmmajolapd@gmail.com", "tmmajolatd@gmail.com"]
    },
    {
      id: "matatiele",
      city: "Matatiele",
      name: "Zweli & Majola Optometrists Matatiele",
      address: "Shop 4, 16 Green Street, Matatiele, 4730",
      phone: "039 737 3799",
      hours: {
        monFri: "8 am – 5 pm",
        sat: "9 am – 1 pm",
        sun: "Closed"
      },
      emails: ["pmmajolapd@gmail.com", "tmmajolatd@gmail.com"]
    }
  ],
  services: [
    {
      title: "Eye Examinations",
      description: "Comprehensive eye tests using state-of-the-art diagnostic equipment.",
      icon: "Eye",
      benefits: "Early detection of vision issues and precise prescriptions.",
      process: ["Pre-screening", "Visual acuity test", "Refraction", "Eye health check"]
    },
    {
      title: "Eye Disease Screening",
      description: "Advanced screening for glaucoma, cataracts, and macular degeneration.",
      icon: "ShieldCheck",
      benefits: "Prevention and management of serious eye conditions.",
      process: ["Digital retinal imaging", "Intraocular pressure check", "Visual field testing"]
    },
    {
      title: "Kids Eye Care",
      description: "Specialized pediatric eye exams and durable, stylish kids' frames.",
      icon: "Baby",
      benefits: "Ensuring your child's vision supports their learning and development.",
      process: ["Child-friendly testing", "Binocular vision assessment", "Frame fitting"]
    },
    {
      title: "Contact Lenses",
      description: "Expert fitting for daily, monthly, and specialized contact lenses.",
      icon: "Circle",
      benefits: "Freedom from glasses with comfortable, clear vision.",
      process: ["Fitting consultation", "Trial period", "Insertion/removal training"]
    },
    {
      title: "Frames & Lenses",
      description: "A wide selection of designer frames and high-quality prescription lenses.",
      icon: "Glasses",
      benefits: "Perfect style combined with optimal visual performance.",
      process: ["Style consultation", "Lens selection", "Precise measurements"]
    },
    {
      title: "Medical Aid Support",
      description: "We assist with medical aid claims and offer various payment options.",
      icon: "CreditCard",
      benefits: "Hassle-free processing of your vision benefits.",
      process: ["Benefit verification", "Direct billing", "Quotation assistance"]
    }
  ],
  frames: [
    { id: 1, name: 'Minimalist Gold', category: 'Women', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800' },
    { id: 2, name: 'Architectural Black', category: 'Men', image: 'https://images.unsplash.com/photo-1508243529287-e21914733111?auto=format&fit=crop&q=80&w=800' },
    { id: 3, name: 'Tortoise Shell', category: 'Women', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800' },
    { id: 4, name: 'Precision Steel', category: 'Men', image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=800' },
    { id: 5, name: 'Soft Pastel', category: 'Kids', image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=800' },
    { id: 6, name: 'Luxe Gradient', category: 'Sunglasses', image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=800' },
  ]
};
