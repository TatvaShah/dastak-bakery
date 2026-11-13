import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Dastak Bakery",
  tagline: "Themed decorated sugar cookies and macarons, made to order.",
  category: "Decorated sugar cookies",
  schemaType: "Bakery",
  area: "GTA, ON",
  siteUrl: "https://dastak-bakery-ca.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#b27669" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: false,

  hero: {
    eyebrow: "Made to order in the GTA",
    headline: "Themed cookie sets, decorated by hand",
    subhead: "Decorated sugar cookie sets and macarons, from Halloween and movie themes to birthdays and fall designs. Send a message to enquire or to order.",
    images: [
      { src: "/images/post-1.jpg", alt: "A Halloween sugar cookie set from Dastak Bakery", width: 1080, height: 1080 },
      { src: "/images/post-4.jpg", alt: "A birthday sugar cookie set from Dastak Bakery", width: 1080, height: 1080 },
      { src: "/images/post-7.jpg", alt: "Pink and lilac macarons from Dastak Bakery", width: 1080, height: 1080 },
    ],
    primaryCta: { label: "Order by Instagram DM", href: "https://ig.me/m/dastakbakery" },
    secondaryCta: { label: "See the cookies", href: "#gallery" },
  },

  highlights: [
    "Themed decorated sugar cookie sets",
    "Macarons with cookie butter French buttercream",
    "Halloween, movie, birthday and fall designs",
    "Made to order in the GTA",
  ],

  about: {
    title: "Welcome to Dastak Bakery",
    body: [
      "Dastak Bakery makes themed decorated sugar cookie sets and macarons to order in the GTA. The name dastak means to knock or to summon, and to knock on possibility.",
      "Recent sets have included Halloween, Coraline, Scooby Doo, birthday, fall and soccer designs, plus pink and lilac macarons filled with cookie butter French buttercream. Send a message on Instagram to enquire or to order.",
    ],
    image: { src: "/images/post-1.jpg", alt: "A Halloween sugar cookie set from Dastak Bakery", width: 1080, height: 1080 },
  },

  menu: {
    label: "Menu",
    title: "What we bake",
    variant: "list",
    showPrices: false,
    priceNote: "Send a message for a quote on your date and design.",
    groups: [
      {
        title: "Cookies",
        items: [
          { name: "Themed decorated sugar cookie sets" },
          { name: "Halloween cookie sets" },
          { name: "Movie and character cookie sets" },
          { name: "Birthday cookie sets" },
          { name: "Fall sugar cookies" },
        ],
      },
      {
        title: "Macarons",
        items: [
          { name: "Macarons with cookie butter French buttercream" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent sets",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1080, alt: "A Halloween sugar cookie set from Dastak Bakery", caption: "Halloween cookies", href: "https://www.instagram.com/p/Dfaqdj7h3Vf/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1080, alt: "Coraline inspired sugar cookies from Dastak Bakery", caption: "Coraline cookies", href: "https://www.instagram.com/p/DfBAWmtDmQD/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1080, alt: "Scooby Doo inspired sugar cookies from Dastak Bakery", caption: "Scooby Doo cookies", href: "https://www.instagram.com/p/Deux5S0oLpK/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1080, alt: "A birthday sugar cookie set from Dastak Bakery", caption: "A birthday set", href: "https://www.instagram.com/p/DenYX5-js9k/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1079, alt: "Fall inspired sugar cookies from Dastak Bakery", caption: "Fall cookies", href: "https://www.instagram.com/p/Dc4fZ8UDtoh/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1080, alt: "Pink and lilac macarons from Dastak Bakery", caption: "Cookie butter macarons", href: "https://www.instagram.com/p/DcR3emYDkez/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1080, alt: "Totally Killer inspired sugar cookies from Dastak Bakery", caption: "Totally Killer cookies", href: "https://www.instagram.com/p/DcR2-d-jvwP/" },
      { src: "/images/post-9.jpg", width: 1080, height: 1080, alt: "A custom 60th birthday sugar cookie set from Dastak Bakery", caption: "A custom birthday set", href: "https://www.instagram.com/p/Dbt8n5uOCd6/" },
      { src: "/images/post-10.jpg", width: 1080, height: 1080, alt: "Soccer inspired sugar cookies from Dastak Bakery", caption: "Soccer cookies", href: "https://www.instagram.com/p/Da_ODRJBYVH/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1080, alt: "A farewell sugar cookie set from Dastak Bakery", caption: "A farewell set", href: "https://www.instagram.com/p/DczwacbjTe4/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "dastakbakery",
    embeds: ["https://www.instagram.com/p/Dfaqdj7h3Vf/", "https://www.instagram.com/p/DenYX5-js9k/", "https://www.instagram.com/p/DcR3emYDkez/"],
  },

  order: {
    label: "How to order",
    title: "Order in a DM",
    intro: "Send a message on Instagram with your date, theme and how many cookies you need.",
    dmMessage: "Hi Dastak Bakery! I would like to order.\nDate needed:\nTheme or design:\nCookie set or macarons:\nQuantity:",
    headerCtaLabel: "DM to order",
    links: [{ label: "Order by Instagram DM", href: "https://ig.me/m/dastakbakery" }],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a message on Instagram to enquire or to order." },
    { q: "Where are you based?", a: "Dastak Bakery makes cookies and macarons to order in the GTA." },
    { q: "What do you bake?", a: "Themed decorated sugar cookie sets and macarons, including a cookie butter French buttercream filling on a posted macaron batch." },
  ],

  contact: {
    title: "Contact",
    area: "GTA, Ontario",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/dastakbakery/" }],
  },

  seo: {
    title: "Dastak Bakery | Decorated sugar cookies in the GTA",
    description: "Themed decorated sugar cookie sets and macarons, made to order in the GTA, including Halloween, movie and birthday designs. Send an Instagram DM to order.",
    keywords: ["sugar cookies GTA", "decorated cookies", "Dastak Bakery"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
