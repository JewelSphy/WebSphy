export const site = {
  name: "JewelSphy",
  fullName: "JewelSphy Web Solutions",
  owner: "Jewel Sterling",
  tagline: "Building Digital Solutions",
  motto: "Clean. Modern. Purposeful.",
  positioning:
    "JewelSphy builds modern websites and lightweight web applications for service businesses, founders, and personal brands. Clean design, fast performance, lead capture, scheduling, simple integrations, and content systems that are easy to manage.",
  introNote: "Custom quotes · Limited spots available",
  phone: "754-269-6238",
  phoneHref: "tel:7542696238",
  email: "jewelsphy@gmail.com",
  emailHref: "mailto:jewelsphy@gmail.com",
  linkedin: "https://linkedin.com/in/jewelsphy",
  github: "https://github.com/JewelSphy",
  footerLine: "Small team. Big impact. Your vision. Our code.",
  // Web3Forms documents this as a public key (safe in client code)
  web3formsAccessKey: "f1e7fc17-32bc-4fcc-a88b-3fd6edab945a",
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Packages" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const packages = [
  {
    id: "portfolio",
    name: "Portfolio Website",
    badge: "Student friendly",
    bestFor: "Freelancers, creators, graduates, and personal brands",
    quote: "Custom quote",
    timeline: "3–5 days",
    featured: false,
    includes: [
      "Up to 5 pages",
      "Contact form",
      "Modern responsive design",
      "3 revisions",
      "Launch-ready handoff",
    ],
  },
  {
    id: "business",
    name: "Business Website",
    badge: "Perfect for startups",
    bestFor: "Local services, startups, and growing teams",
    quote: "Custom quote",
    timeline: "5–7 days",
    featured: true,
    includes: [
      "Up to 8 pages",
      "Contact form + lead capture",
      "SEO-ready structure",
      "3 revisions",
      "Analytics setup basics",
    ],
  },
  {
    id: "apps",
    name: "Custom Web App",
    badge: "Built for your needs",
    bestFor: "Dashboards, portals, and tailored workflows",
    quote: "Custom quote",
    timeline: "Scoped per project",
    featured: false,
    includes: [
      "Custom features",
      "User / data management",
      "Dashboard views",
      "Scalable foundation",
      "Workflows built around you",
    ],
  },
  {
    id: "care",
    name: "Support & Updates",
    badge: "Ongoing care",
    bestFor: "Clients who want help after launch",
    quote: "Monthly plan · quoted",
    timeline: "Monthly",
    featured: false,
    includes: [
      "Content tweaks",
      "Package / plugin updates",
      "Uptime checks",
      "Priority responses",
      "Small feature polish",
    ],
  },
] as const;

/** Domain, hosting, and launch extras — quoted with the project. */
export const domainAndLaunch = [
  {
    name: ".com domain registration",
    quote: "Registrar rate",
    note: "Registrar cost — billed yearly in your name",
  },
  {
    name: "Other common TLDs (.net, .org, .io, .co)",
    quote: "Registrar rate",
    note: "Depends on the extension",
  },
  {
    name: "Domain purchase + DNS setup",
    quote: "Setup · quoted",
    note: "We buy/connect it and point it to your site",
  },
  {
    name: "Connect a domain you already own",
    quote: "Setup · quoted",
    note: "DNS records, SSL, and go-live checks",
  },
  {
    name: "Hosting setup (Cloudflare / modern host)",
    quote: "Setup · quoted",
    note: "Deploy + custom domain wiring",
  },
  {
    name: "Business email setup",
    quote: "Custom quote",
    note: "Plus Google Workspace / Zoho / provider monthly fee",
  },
  {
    name: "SSL certificate",
    quote: "Usually included",
    note: "Included with modern hosting",
  },
  {
    name: "Site migration (old host → new)",
    quote: "Custom quote",
    note: "Content, DNS cutover, and redirect checks",
  },
  {
    name: "Premium / aftermarket domains",
    quote: "Quoted per name",
    note: "Only when the domain itself is sold at a premium",
    variable: true,
  },
] as const;

export type CatalogItem = {
  name: string;
  summary: string;
  quote: string;
  href?: string;
  /** Only for work where scope truly swings — keep rare. */
  variable?: boolean;
};

export type CatalogGroup = {
  id: string;
  title: string;
  intro: string;
  items: CatalogItem[];
};

/** Full services catalog for the Services page. */
export const serviceCatalog: CatalogGroup[] = [
  {
    id: "websites",
    title: "Websites & pages",
    intro: "Core builds for launches, portfolios, and small businesses.",
    items: [
      {
        name: "Landing page",
        summary: "One focused page for a campaign, offer, or waitlist.",
        quote: "Custom quote",
        href: "/services/landing-pages",
      },
      {
        name: "Portfolio / personal brand site",
        summary: "Up to 5 pages to showcase work, bio, and contact.",
        quote: "Custom quote",
        href: "/pricing",
      },
      {
        name: "Business website",
        summary: "Up to 8 pages with services, proof, and lead capture.",
        quote: "Custom quote",
        href: "/services/small-business-websites",
      },
      {
        name: "Multi-page growth site",
        summary: "Deeper service pages, blog/hub, and stronger CTA structure.",
        quote: "Custom quote",
      },
      {
        name: "One-page brochure site",
        summary: "Everything on a single scroll — fast and clean.",
        quote: "Custom quote",
      },
      {
        name: "Event / launch page",
        summary: "Date, details, RSVP or ticket link, and reminders.",
        quote: "Custom quote",
      },
    ],
  },
  {
    id: "redesign",
    title: "Redesign & polish",
    intro: "Refresh what you already have without starting from scratch.",
    items: [
      {
        name: "Website redesign",
        summary: "Visual refresh, clearer structure, better mobile flow.",
        quote: "Custom quote",
        href: "/services/website-redesigns",
      },
      {
        name: "Homepage redesign only",
        summary: "Stronger first impression when the rest still works.",
        quote: "Custom quote",
      },
      {
        name: "Mobile / UX cleanup",
        summary: "Navigation, spacing, and tap-target fixes.",
        quote: "Custom quote",
      },
      {
        name: "Performance cleanup",
        summary: "Speed, image weight, and Core Web Vitals basics.",
        quote: "Custom quote",
      },
      {
        name: "Content reorganization",
        summary: "Restructure pages and menus so services are easy to find.",
        quote: "Custom quote",
      },
    ],
  },
  {
    id: "domains",
    title: "Domains, hosting & launch",
    intro: "The practical stuff that gets you live with a real address.",
    items: [
      {
        name: ".com domain (yearly)",
        summary: "Registered in your name through a standard registrar.",
        quote: "Registrar rate",
      },
      {
        name: "Domain + DNS setup",
        summary: "We handle purchase, DNS, and pointing to your site.",
        quote: "Setup + registrar",
      },
      {
        name: "Connect existing domain",
        summary: "Wire a domain you already own — SSL included.",
        quote: "Setup · quoted",
      },
      {
        name: "Hosting / deploy setup",
        summary: "Cloudflare Pages or similar — accounts stay yours.",
        quote: "Setup · quoted",
      },
      {
        name: "Business email setup",
        summary: "you@yourdomain.com via Google, Zoho, or similar.",
        quote: "Custom quote",
      },
      {
        name: "Full launch package",
        summary: "Domain + hosting + SSL + go-live checklist.",
        quote: "Custom quote",
      },
      {
        name: "Site migration",
        summary: "Move from an old host or builder to a cleaner setup.",
        quote: "Custom quote",
      },
    ],
  },
  {
    id: "integrations",
    title: "Integrations & growth",
    intro: "Make the site collect leads, bookings, and payments.",
    items: [
      {
        name: "Contact / lead form",
        summary: "Form + email notification to your inbox.",
        quote: "Custom quote",
      },
      {
        name: "Booking calendar embed",
        summary: "Cal.com or Calendly wired into your site.",
        quote: "Custom quote",
        href: "/services/booking-integrations",
      },
      {
        name: "Stripe payment link",
        summary: "Collect a deposit or one-time payment.",
        quote: "Custom quote",
        href: "/services/booking-integrations",
      },
      {
        name: "Booking + payment bundle",
        summary: "Schedule and collect in one flow.",
        quote: "Custom quote",
        href: "/services/booking-integrations",
      },
      {
        name: "GA4 + Search Console",
        summary: "Analytics and search property setup.",
        quote: "Custom quote",
      },
      {
        name: "CMS / blog setup",
        summary: "So your team can publish without asking every time.",
        quote: "Custom quote",
      },
      {
        name: "Newsletter / email capture",
        summary: "Signup form into Mailchimp, Resend, or similar.",
        quote: "Custom quote",
      },
      {
        name: "Basic SEO setup",
        summary: "Titles, meta, sitemap, and on-page structure.",
        quote: "Custom quote",
      },
    ],
  },
  {
    id: "apps",
    title: "Apps, stores & portals",
    intro: "When you need more than a marketing site.",
    items: [
      {
        name: "Custom web app (starter)",
        summary: "Login, simple dashboard, and core workflows.",
        quote: "Custom quote",
        href: "/pricing",
      },
      {
        name: "Client portal",
        summary: "Secure area for files, status, or simple CRUD.",
        quote: "Custom quote",
        variable: true,
      },
      {
        name: "Starter e-commerce store",
        summary: "Shopify or WooCommerce for a small catalog.",
        quote: "Custom quote",
        variable: true,
      },
      {
        name: "Admin dashboard",
        summary: "Internal views, filters, and CSV export.",
        quote: "Custom quote",
        variable: true,
      },
    ],
  },
  {
    id: "support",
    title: "Support & care",
    intro: "Keep things healthy after launch.",
    items: [
      {
        name: "Support & updates plan",
        summary: "Edits, updates, uptime checks, priority replies.",
        quote: "Monthly plan · quoted",
        href: "/services/maintenance",
      },
      {
        name: "Ad hoc hourly help",
        summary: "Small tasks without a monthly plan.",
        quote: "Hourly · quoted",
      },
      {
        name: "Content update pack",
        summary: "A batch of copy/image changes in one go.",
        quote: "Custom quote",
      },
      {
        name: "Monthly care + report",
        summary: "Support plan plus a simple performance snapshot.",
        quote: "Monthly plan · quoted",
      },
    ],
  },
];

export type Service = {
  slug: string;
  shortName: string;
  navLabel: string;
  headline: string;
  summary: string;
  quote: string;
  timeline: string;
  hourly: string;
  stack: string;
  benefits: string[];
  deliverables: string[];
  description: string[];
  faqs: { q: string; a: string }[];
  priority: "highest" | "high" | "medium" | "later";
};

export const services: Service[] = [
  {
    slug: "landing-pages",
    shortName: "Landing Pages",
    navLabel: "Landing Pages",
    headline:
      "Focused landing pages built around one goal: more signups, more leads, or more bookings.",
    summary:
      "One focused page for a service, launch, campaign, or waitlist — fast to ship, easy to test.",
    quote: "Custom quote",
    timeline: "3–5 days",
    hourly: "Quoted after discovery",
    stack: "Next.js + Tailwind, or WordPress",
    benefits: [
      "One clear conversion goal per page",
      "Fast turnaround for launches and campaigns",
      "Forms, scheduling, and payment links when needed",
      "A smart starting point before a full site",
    ],
    deliverables: [
      "Responsive page with strong CTA flow",
      "Lead form / booking path",
      "Basic SEO + analytics events",
      "Launch support",
    ],
    description: [
      "A landing page keeps the message simple and moves people toward one action — book a call, join a waitlist, request a quote, or buy a single offer.",
      "JewelSphy designs these for startups and service offers that need something live quickly without paying boutique-agency rates.",
      "Start here, learn what converts, then expand into a full website when you’re ready.",
    ],
    faqs: [
      {
        q: "Is a landing page enough?",
        a: "If you have one core offer or campaign goal, yes. Multiple services usually need a fuller site.",
      },
      {
        q: "Can you add booking or payments?",
        a: "Yes — forms, Cal embeds, and Stripe payment links are common add-ons.",
      },
      {
        q: "Can it grow into a full site later?",
        a: "Absolutely. That’s one of the best reasons to start lean.",
      },
    ],
    priority: "highest",
  },
  {
    slug: "small-business-websites",
    shortName: "Business Websites",
    navLabel: "Business Sites",
    headline:
      "Custom websites for startups and service businesses that need to look credible and convert.",
    summary:
      "Multi-page sites for local services, freelancers, and early-stage companies — polished without agency bloat.",
    quote: "Custom quote",
    timeline: "5–7 days",
    hourly: "Quoted after discovery",
    stack: "Next.js + Tailwind, or WordPress",
    benefits: [
      "Clear calls to action, not just pretty pages",
      "Mobile-first navigation",
      "Analytics and SEO basics from day one",
      "Room to grow as you add services",
    ],
    deliverables: [
      "Home, About, Services, Contact, proof page",
      "Contact / lead form",
      "GA4 + Search Console setup",
      "On-page SEO foundation",
    ],
    description: [
      "If your business needs a real online presence, JewelSphy builds sites that are clean, modern, and designed to help visitors take action.",
      "A good fit for consultants, local providers, startups, and growing teams that want more than a template — without an oversized agency engagement.",
      "Every build focuses on practical deliverables: responsive design, lead forms, clear structure, and the basics that make the site easier to find and use.",
    ],
    faqs: [
      {
        q: "How many pages are included?",
        a: "Business packages typically start around 5–8 pages and scale with your content.",
      },
      {
        q: "Can you redesign an existing site?",
        a: "Yes — redesign, rebuild, migrate, or improve what’s already there.",
      },
      {
        q: "Will we be able to update content?",
        a: "Yes. Editing workflows can match how hands-on your team wants to be.",
      },
    ],
    priority: "highest",
  },
  {
    slug: "website-redesigns",
    shortName: "Website Redesigns",
    navLabel: "Redesigns",
    headline:
      "Refresh what you already have — without starting from zero unless you actually need to.",
    summary:
      "Cleanup and redesign for sites that have content but need better UX, speed, structure, or credibility.",
    quote: "Custom quote",
    timeline: "4–10 days",
    hourly: "Quoted after discovery",
    stack: "Existing CMS cleanup, or rebuild in Next.js / WordPress",
    benefits: [
      "Better credibility without bloated scope",
      "Cleaner navigation and mobile experience",
      "Stronger CTA flow and performance",
      "Keep what works, replace what doesn’t",
    ],
    deliverables: [
      "Visual + structure refresh",
      "Mobile and speed improvements",
      "CTA cleanup and content migration",
      "Analytics review",
    ],
    description: [
      "A lot of businesses already have a site that no longer matches the quality of the work behind it. Dated layout, weak mobile experience, confusing services, or a contact path that takes too many steps.",
      "Redesign work starts by deciding what stays, what improves, and what gets rebuilt — so you don’t pay for a full restart when a sharp refresh will do.",
    ],
    faqs: [
      {
        q: "Do we need a full rebuild?",
        a: "Not always. An audit first makes that call clearer.",
      },
      {
        q: "Can existing content stay?",
        a: "Yes, if it’s still accurate. Content can be migrated or reorganized.",
      },
      {
        q: "Will redesign help SEO?",
        a: "It can — especially when structure, metadata, mobile usability, and speed improve.",
      },
    ],
    priority: "high",
  },
  {
    slug: "booking-integrations",
    shortName: "Booking & Integrations",
    navLabel: "Integrations",
    headline:
      "Add scheduling, forms, email routing, and payment links that turn visits into booked work.",
    summary:
      "Connect booking, payments, and lead flow to a new build or an existing site.",
    quote: "Custom quote",
    timeline: "2–5 days",
    hourly: "Quoted after discovery",
    stack: "Cal.com, Stripe Payment Links, email API, GA4",
    benefits: [
      "Booking and payments without custom billing systems",
      "Lead capture that routes somewhere useful",
      "Tracked clicks and form submissions",
      "Fast add-on to new or existing sites",
    ],
    deliverables: [
      "Booking embed + intake form",
      "Email confirmations",
      "Payment link setup",
      "Basic handoff + event tracking",
    ],
    description: [
      "This is where a site stops being a brochure and starts helping the business run — scheduling, intake, payments, and light CRM handoff using reliable hosted tools.",
    ],
    faqs: [
      {
        q: "Do we need custom payment code?",
        a: "Usually no. Stripe Payment Links cover most simple payment needs.",
      },
      {
        q: "Can this be added to our current site?",
        a: "Yes — as an add-on or part of a new build.",
      },
    ],
    priority: "high",
  },
  {
    slug: "maintenance",
    shortName: "Support & Updates",
    navLabel: "Maintenance",
    headline:
      "Ongoing help after launch — updates, backups, small edits, and a steady monthly pulse check.",
    summary:
      "Recurring support so your site stays healthy and small changes don’t turn into big projects.",
    quote: "Monthly plan · quoted",
    timeline: "Monthly",
    hourly: "Quoted after discovery",
    stack: "Hosting, CMS/package updates, backups, light reporting",
    benefits: [
      "Predictable monthly support",
      "Backups, updates, and uptime checks",
      "Small content edit allowance",
      "A real partner after launch",
    ],
    deliverables: [
      "Monthly updates + uptime checks",
      "Backups and package updates",
      "Small edit allowance",
      "Optional monthly snapshot",
    ],
    description: [
      "Launch isn’t the end. Support plans keep things updated and give your team a low-friction place to send small changes.",
    ],
    faqs: [
      {
        q: "What’s included each month?",
        a: "Updates, backups, uptime checks, and a small edit allowance — plans scale with needs.",
      },
      {
        q: "Is this 24/7 emergency support?",
        a: "No — planned maintenance and priority weekday support, not enterprise SLAs.",
      },
    ],
    priority: "medium",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    body: "Goals, audience, pages, integrations, timeline, and what success looks like.",
  },
  {
    step: "02",
    title: "Scope & quote",
    body: "A clear package or custom quote with deliverables, timeline, and out-of-scope edges.",
  },
  {
    step: "03",
    title: "Design & build",
    body: "Structure, visuals, and development move together — with checkpoints before launch.",
  },
  {
    step: "04",
    title: "Launch & handoff",
    body: "Analytics, forms, SEO basics, and training so your team can use what was built.",
  },
  {
    step: "05",
    title: "Support (optional)",
    body: "Stay on a care plan for updates, backups, and small edits after launch.",
  },
] as const;

export const workSamples = [
  {
    title: "Service Launch Page",
    type: "Landing Page",
    outcome: "One-page conversion flow with booking CTA and tracked lead form.",
  },
  {
    title: "Startup Credibility Site",
    type: "Business Website",
    outcome: "Multi-page site with services, proof, and a clear contact path.",
  },
  {
    title: "Portfolio Refresh",
    type: "Redesign",
    outcome: "Cleaner structure, faster mobile experience, stronger project presentation.",
  },
] as const;

export const globalFaqs = [
  {
    q: "Who is JewelSphy a good fit for?",
    a: "Startups, service businesses, founders, and personal brands that need a credible site or lightweight web system — without an oversized agency engagement.",
  },
  {
    q: "How does pricing work?",
    a: "Every project is quoted after a short discovery call. Scope, timeline, pages, and integrations determine the number — so we never lock you into a sticker price that doesn’t fit the work.",
  },
  {
    q: "What stack do you use?",
    a: "Most marketing sites ship on Next.js, Tailwind, and Cloudflare Pages. Content-heavy sites can use WordPress. Apps lean on Next.js + Supabase. Booking and payments use Cal.com and Stripe.",
  },
  {
    q: "Do we own the site?",
    a: "Yes. You own the code, content, and accounts.",
  },
  {
    q: "How do revisions work?",
    a: "Packages include structured revision rounds. Extra rounds can be scoped if needed.",
  },
  {
    q: "Can you work from our existing brand?",
    a: "Yes. Logo, colors, fonts, and copy you already have become the foundation.",
  },
  {
    q: "Do you handle domains and hosting?",
    a: "Yes. Domains are registered in your name at standard registrar rates. We can purchase and connect a new domain, or wire up one you already own, plus hosting and business email setup — all quoted clearly before we start.",
  },
  {
    q: "What’s the support plan?",
    a: "Support plans cover edits, package updates, uptime checks, and priority replies. Monthly care or ad hoc hourly help are both available — quoted to match how much help you want.",
  },
] as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
