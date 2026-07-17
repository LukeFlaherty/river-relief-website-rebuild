/**
 * Central content/config for the site.
 *
 * All copy, contact info, and links live here so the page components stay
 * purely presentational. When client content changes, update the values in
 * this file rather than editing JSX directly in components.
 *
 * River Relief LLC is a personal-loan / debt-consolidation lender (not an
 * environmental nonprofit, despite the river branding — the name is a
 * "river to lower payments" metaphor). Copy below is adapted from the
 * client's existing site (captured 2026-07-17) as a starting framework;
 * sections will be refined one at a time in follow-up passes.
 */

export const siteConfig = {
  orgName: "River Relief",
  tagline: "Promise Over Profit",
  description:
    "River Relief helps borrowers of any credit score find personal loans at better rates, lowering monthly payments and easing the path to financial freedom.",
  url: "https://example.com", // TODO: replace with production domain once known

  nav: [
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Get Started", href: "#get-started" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    heading: "Promise Over Profit",
    subheading:
      "Stop swimming against the current of high monthly payments — let us be your river to lower payments. We'll find you a personal loan at a better rate today.",
    primaryCta: { label: "Apply Now", href: "#get-started" }, // TODO: link to real application flow
    secondaryCta: { label: "How It Works", href: "#how-it-works" },
  },

  mission: {
    heading: "About Us",
    body: "No matter your credit score, we're here to help you. As financial experts, we specialize in securing loans with significantly better rates than those offered by credit cards. On average, we help our clients lower their payments by up to 40% — often saving hundreds or even thousands of dollars each month.",
  },

  programs: {
    heading: "Our Simple 3-Step Process",
    items: [
      {
        title: "Free Consultation",
        description:
          "Speak with our financial experts to discuss your current situation and goals. We'll help you understand your options and answer all your questions.",
      },
      {
        title: "Personalized Plan",
        description:
          "We create a custom strategy tailored to your unique needs, ensuring you can manage payments comfortably.",
      },
      {
        title: "Financial Freedom",
        description:
          "Once your new plan is set, streamline your payments, ease your stress, and start planning your new financial future.",
      },
    ],
  },

  impact: {
    heading: "Why River Relief",
    items: [
      { stat: "Up to 40%", label: "Lower monthly payments on average" },
      { stat: "$1K–$100K+", label: "Personal loan amounts available" },
      { stat: "3 Steps", label: "From consultation to funded plan" },
      { stat: "Free", label: "No-cost initial consultation" },
    ],
  },

  getInvolved: {
    heading: "Let's Start Your Financial Freedom Journey",
    body: "We're here to help. Reach out today to schedule your free consultation and take the first step toward a brighter financial future.",
    actions: [
      {
        title: "Apply Now",
        description:
          "Start your application and get a personalized rate offer.",
        cta: { label: "Apply Now", href: "#" }, // TODO: link to application flow
      },
      {
        title: "Call Us",
        description: "Talk to a lending manager now about your situation.",
        cta: { label: "Call Us Now", href: "#" }, // TODO: add tel: link once phone number is confirmed
      },
      {
        title: "Tell Us Your Situation",
        description:
          "Answer a few questions and we'll follow up with a custom plan.",
        cta: { label: "Get Started", href: "#contact" },
      },
    ],
  },

  contact: {
    heading: "Contact Us",
    email: "info@example.com", // TODO: replace with real contact email
    phone: "", // TODO: add real phone number
    address: "", // TODO: add mailing address if applicable
  },

  social: {
    // TODO: fill in real social links; omit/empty hides the link in the footer
    facebook: "",
    instagram: "",
    twitter: "",
  },

  legal: {
    // Adapted from the client's existing site footer disclosures. Confirm
    // current wording with the client before treating this as final —
    // lending disclosures are compliance-sensitive.
    disclosure:
      "We provide Personal Lending Services. Personal loan options offered by our affiliates range from $1,000 to $100,000+, have Annual Percentage Rates that range from 4.9% to 35.99%, origination fees ranging from 4.95% to 10% of the amount financed, and loan terms from 4 to 84 months. Only the most creditworthy borrowers receive the highest loan amounts at the lowest rates. Our services are not available in all states; fees may vary by state. We do not discriminate on the basis of race, color, religion, sex, marital status, national origin, or ancestry.",
  },
} as const;
