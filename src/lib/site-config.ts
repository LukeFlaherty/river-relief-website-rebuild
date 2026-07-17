/**
 * Central content/config for the site.
 *
 * All placeholder copy, contact info, and links live here so the page
 * components stay purely presentational. When real client content is
 * available, update the values in this file rather than editing JSX
 * directly in components.
 */

export const siteConfig = {
  orgName: "River Relief",
  tagline: "Restoring rivers. Rebuilding communities.",
  description:
    "River Relief coordinates cleanup, restoration, and emergency relief efforts for river communities affected by pollution, flooding, and neglect.",
  url: "https://example.com", // TODO: replace with production domain once known

  nav: [
    { label: "Mission", href: "#mission" },
    { label: "Programs", href: "#programs" },
    { label: "Impact", href: "#impact" },
    { label: "Get Involved", href: "#get-involved" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    heading: "Restoring rivers. Rebuilding communities.",
    subheading:
      "We organize volunteers, resources, and emergency response to protect the rivers our communities depend on — from routine cleanups to disaster relief.",
    primaryCta: { label: "Donate Now", href: "#get-involved" },
    secondaryCta: { label: "Our Mission", href: "#mission" },
  },

  mission: {
    heading: "Our Mission",
    body: "River Relief exists to protect and restore river ecosystems and to support the communities that rely on them. We combine hands-on cleanup work, environmental restoration, and rapid-response disaster relief to keep rivers healthy and communities resilient.",
  },

  programs: [
    {
      title: "River Cleanups",
      description:
        "Volunteer-powered cleanup events that remove debris and pollution from riverbanks and waterways.",
    },
    {
      title: "Habitat Restoration",
      description:
        "Long-term restoration projects that rebuild native habitats and improve water quality for wildlife and people.",
    },
    {
      title: "Disaster Relief",
      description:
        "Rapid-response support for communities impacted by flooding and other river-related emergencies.",
    },
  ],

  impact: [
    { stat: "500+", label: "Tons of debris removed" },
    { stat: "10,000+", label: "Volunteer hours" },
    { stat: "50+", label: "River miles restored" },
    { stat: "20", label: "Communities served" },
  ],

  getInvolved: {
    heading: "Get Involved",
    body: "Whether you can give your time, your voice, or your support — every contribution helps keep our rivers healthy and our communities safe.",
    actions: [
      {
        title: "Donate",
        description:
          "Fund cleanup supplies, restoration projects, and emergency relief.",
        cta: { label: "Donate", href: "#" }, // TODO: link to donation platform
      },
      {
        title: "Volunteer",
        description:
          "Join a cleanup event or ongoing restoration project near you.",
        cta: { label: "Sign Up", href: "#" }, // TODO: link to volunteer sign-up
      },
      {
        title: "Spread the Word",
        description: "Follow us and share our work to help grow the movement.",
        cta: { label: "Follow Us", href: "#" }, // TODO: link to social media
      },
    ],
  },

  contact: {
    heading: "Contact Us",
    email: "info@example.com", // TODO: replace with real contact email
    phone: "", // TODO: add phone number if applicable
    address: "", // TODO: add mailing address if applicable
  },

  social: {
    // TODO: fill in real social links; omit/empty hides the link in the footer
    facebook: "",
    instagram: "",
    twitter: "",
  },
} as const;
