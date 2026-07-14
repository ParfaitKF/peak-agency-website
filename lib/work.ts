export interface WorkItem {
  title: string
  client: string
  year: string
  description: string
  image: string
  tags: string[]
  /** Extra images shown in the project popup gallery. Defaults to just `image` when omitted. */
  gallery?: string[]
  /** Optional project video shown in the popup instead of the image gallery. */
  video?: string
}

export interface WorkCategory {
  slug: string
  title: string
  tagline: string
  description: string
  image: string
  tagColor: string
  gradient: string
  services: { title: string; description: string }[]
  /** Client works realized in this category. When present, the category page shows this portfolio instead of the services list. */
  works?: WorkItem[]
}

export const workCategories: WorkCategory[] = [
  {
    slug: 'brand-identity',
    title: 'Brand Identity',
    tagline: 'Identities built to create recognition and trust.',
    description:
      'From naming to full visual systems, we craft brands that stand out and stay memorable across every touchpoint.',
    image: '/images/brand-identity.jpg',
    tagColor: 'text-peak-accent',
    gradient: 'from-peak-accent to-peak-accent2',
    services: [
      { title: 'Logo Design', description: 'Distinctive marks and logotypes designed to be recognizable at any size, on any medium.' },
      { title: 'Visual Identity Systems', description: 'Color palettes, typography, iconography, and graphic language that keep your brand consistent everywhere.' },
      { title: 'Brand Guidelines', description: 'Clear, practical brand books your team and partners can actually use.' },
      { title: 'Rebranding', description: 'Strategic refreshes that modernize your image without losing the equity you have built.' },
      { title: 'Stationery & Collateral', description: 'Business cards, letterheads, and branded materials that carry your identity into the real world.' },
    ],
    works: [
      {
        title: 'MasterSkills AI Visual Identity',
        client: 'MasterSkills AI',
        year: '2025',
        description: 'End-to-end brand identity for an AI training and upskilling platform — logo, color palette, and brand guidelines built to feel modern and credible.',
        image: '/images/work/brand-identity/work-4.jpg',
        tags: ['Logo', 'Visual Identity', 'Guidelines'],
      },
      {
        title: 'EcoBuildings SARL Corporate Identity',
        client: 'EcoBuildings SARL',
        year: '2025',
        description: 'A grounded, professional identity for a construction and eco-building company, translated across signage, documents, and site materials.',
        image: '/images/work/brand-identity/work-2.jpg',
        tags: ['Logo', 'Brand Guidelines'],
      },
      {
        title: 'Solia Brand Identity',
        client: 'Solia',
        year: '2024',
        description: 'A clean, confident visual identity giving Solia a distinct presence across its products and communications.',
        image: '/images/work/brand-identity/work-1.jpg',
        tags: ['Visual Identity', 'Logo'],
      },
      {
        title: 'Nadegda Personal Brand Identity',
        client: 'Nadegda',
        year: '2024',
        description: 'A refined personal brand identity, from logotype to visual language, built to carry across every professional touchpoint.',
        image: '/images/work/brand-identity/work-5.jpg',
        tags: ['Logo', 'Personal Branding'],
      },
      {
        title: 'Tagvolt Brand Identity',
        client: 'Tagvolt',
        year: '2024',
        description: "A bold, energetic identity system for Tagvolt, balancing a technical feel with approachable color and typography choices.",
        image: '/images/work/brand-identity/work-3.jpg',
        tags: ['Logo', 'Color System'],
      },
      {
        title: 'Next Step France Brand Identity',
        client: 'Next Step France',
        year: '2023',
        description: "A structured brand identity supporting Next Step France's expansion, with guidelines built for consistency across markets.",
        image: '/images/work/brand-identity/work-6.jpg',
        tags: ['Brand Guidelines', 'Rebranding'],
      },
    ],
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    tagline: 'Consistent, on-brand presence across every platform.',
    description:
      'We plan, create, publish, and manage your social presence end-to-end so your brand shows up professionally every day.',
    image: '/images/social-media-management.jpg',
    tagColor: 'text-peak-accent2',
    gradient: 'from-peak-accent2 to-peak-accent3',
    services: [
      { title: 'Content Strategy & Planning', description: 'Editorial calendars and content pillars aligned with your business goals.' },
      { title: 'Content Creation', description: 'Scroll-stopping visuals, carousels, and short-form video tailored to each platform.' },
      { title: 'Publishing & Scheduling', description: 'Reliable, consistent posting managed across all your channels.' },
      { title: 'Community Management', description: 'Responding, engaging, and building a loyal audience around your brand.' },
      { title: 'Analytics & Reporting', description: 'Monthly performance reports with clear insights on what to do next.' },
    ],
    works: [
      {
        title: 'MasterSkills AI Social Media Management',
        client: 'MasterSkills AI',
        year: '2025',
        description: "Ongoing content strategy, creation, and community management keeping MasterSkills AI's socials active, consistent, and on-brand.",
        image: '/images/social-media-management.jpg',
        tags: ['Content Strategy', 'Community Management'],
      },
      {
        title: 'Peak Agency Social Media Management',
        client: 'Peak Agency',
        year: '2025',
        description: 'Planning and publishing our own content calendar, carousels, and campaigns to grow the Peak Agency audience.',
        image: '/images/social-media-management.jpg',
        tags: ['Content Creation', 'Publishing'],
      },
      {
        title: 'Enjoy Social Media Management',
        client: 'Enjoy',
        year: '2024',
        description: 'Full social media management for Enjoy, from editorial calendar to daily community engagement across platforms.',
        image: '/images/social-media-management.jpg',
        tags: ['Content Strategy', 'Community Management'],
      },
    ],
  },
  {
    slug: 'website-design',
    title: 'Website Design',
    tagline: 'Websites focused on clarity, credibility, and conversion.',
    description:
      'Modern, fast, and mobile-first websites — from landing pages to full platforms — designed to turn visitors into clients.',
    image: '/images/website-design.jpg',
    tagColor: 'text-peak-accent3',
    gradient: 'from-peak-accent3 to-cyan-500',
    services: [
      { title: 'Landing Pages', description: 'High-converting single pages built for campaigns, launches, and lead generation.' },
      { title: 'Corporate Websites', description: 'Credible multi-page websites that present your company at its best.' },
      { title: 'E-commerce', description: 'Online stores designed for smooth browsing and effortless checkout.' },
      { title: 'Website Redesign', description: 'Modernizing outdated sites with better structure, speed, and visual polish.' },
      { title: 'Maintenance & Support', description: 'Ongoing updates, fixes, and improvements so your site never falls behind.' },
    ],
    works: [
      {
        title: 'Tagvolt Corporate Website',
        client: 'Tagvolt',
        year: '2025',
        description: 'A fast, modern corporate website for Tagvolt, built to present the brand clearly and generate qualified leads.',
        image: '/images/website-design.jpg',
        tags: ['Corporate Website', 'Web Design'],
      },
      {
        title: 'EcoBuildings SARL Corporate Website',
        client: 'EcoBuildings SARL',
        year: '2025',
        description: 'A credible, mobile-first website for EcoBuildings SARL showcasing services and projects to prospective clients.',
        image: '/images/website-design.jpg',
        tags: ['Corporate Website', 'Responsive Design'],
      },
      {
        title: 'MasterSkills AI Website',
        client: 'MasterSkills AI',
        year: '2024',
        description: 'A conversion-focused website for MasterSkills AI, presenting courses and programs with clarity and credibility.',
        image: '/images/website-design.jpg',
        tags: ['Website Design', 'Landing Pages'],
      },
    ],
  },
  {
    slug: 'presentation-design',
    title: 'Presentation Design',
    tagline: 'Decks and documents that close deals.',
    description:
      'Professional pitch decks, corporate presentations, and strategic documents designed to persuade and win.',
    image: '/images/presentations.jpg',
    tagColor: 'text-pink-400',
    gradient: 'from-peak-accent to-pink-500',
    services: [
      { title: 'Investor Pitch Decks', description: 'Compelling narratives and visuals that help you raise funding.' },
      { title: 'Corporate Presentations', description: 'Polished decks for sales, board meetings, and internal communication.' },
      { title: 'Company Profiles', description: 'Beautifully designed profiles that introduce your business with impact.' },
      { title: 'Reports & Documents', description: 'Annual reports and strategic documents made clear and engaging.' },
      { title: 'Template Systems', description: 'Reusable, on-brand templates your team can build on independently.' },
    ],
    works: [
      {
        title: 'SheCode Pitch Deck',
        client: 'SheCode',
        year: '2025',
        description: 'A compelling investor pitch deck for SheCode, translating its mission and impact into a persuasive visual narrative.',
        image: '/images/presentations.jpg',
        tags: ['Pitch Deck', 'Storytelling'],
      },
      {
        title: 'Liliane Professional Presentation',
        client: 'Liliane',
        year: '2024',
        description: 'A polished, personal-brand presentation deck for Liliane, designed for high-stakes professional meetings.',
        image: '/images/presentations.jpg',
        tags: ['Presentation Design', 'Personal Branding'],
      },
      {
        title: 'Cuso Company Profile',
        client: 'Cuso',
        year: '2024',
        description: 'A clear, well-structured company profile deck for Cuso, introducing the business with impact to new partners.',
        image: '/images/presentations.jpg',
        tags: ['Company Profile', 'Corporate Deck'],
      },
    ],
  },
  {
    slug: 'ux-ui-design',
    title: 'UX/UI Design',
    tagline: 'Digital products that delight and convert.',
    description:
      'User-centered interfaces for web and mobile apps — researched, prototyped, and designed for real people.',
    image: '/images/ux-ui-design.jpg',
    tagColor: 'text-orange-400',
    gradient: 'from-orange-500 to-peak-accent2',
    services: [
      { title: 'Mobile App Design', description: 'Intuitive iOS and Android interfaces users love from the first tap.' },
      { title: 'Web App & Dashboard Design', description: 'Complex products made simple through clear information design.' },
      { title: 'UX Research & Audits', description: 'Identifying friction in your product and turning it into opportunity.' },
      { title: 'Wireframing & Prototyping', description: 'Testable prototypes that validate ideas before development.' },
      { title: 'Design Systems', description: 'Scalable component libraries that keep your product consistent as it grows.' },
    ],
    works: [
      {
        title: 'Safe Driving Mobile App Design',
        client: 'Safe Driving',
        year: '2025',
        description: 'An intuitive mobile app interface for Safe Driving, guiding learners through lessons and progress tracking with ease.',
        image: '/images/ux-ui-design.jpg',
        tags: ['Mobile App', 'UX Research'],
      },
      {
        title: 'Sims BTP Dashboard Design',
        client: 'Sims BTP',
        year: '2024',
        description: 'A clear, data-dense dashboard for Sims BTP, turning complex construction project data into an easy-to-navigate interface.',
        image: '/images/ux-ui-design.jpg',
        tags: ['Dashboard', 'Web App'],
      },
      {
        title: 'Orange Product UX Design',
        client: 'Orange',
        year: '2024',
        description: 'User experience design for an Orange digital product, focused on simplifying a complex flow for everyday users.',
        image: '/images/ux-ui-design.jpg',
        tags: ['UX Design', 'Prototyping'],
      },
    ],
  },
  {
    slug: 'creative-campaign',
    title: 'Creative Campaigns',
    tagline: 'Ideas that capture attention and drive emotion.',
    description:
      'Integrated creative campaigns — from concept to rollout — that make brands impossible to ignore.',
    image: '/images/creative-campaign.jpg',
    tagColor: 'text-cyan-400',
    gradient: 'from-peak-accent3 to-cyan-500',
    services: [
      { title: 'Campaign Concept & Strategy', description: 'Big ideas grounded in insight, built to travel across channels.' },
      { title: 'Print & Outdoor Design', description: 'Flyers, posters, billboards, and brochures that speak with clarity.' },
      { title: 'Digital Ads & Banners', description: 'Ad creatives designed to perform on every platform and format.' },
      { title: 'Video & Motion Design', description: 'Video editing and motion graphics that bring your story to life.' },
      { title: 'Event & Launch Materials', description: 'Complete creative kits for product launches, events, and activations.' },
    ],
    works: [
      {
        title: 'CN Partner Creative Campaign',
        client: 'CN Partner',
        year: '2025',
        description: 'An integrated creative campaign for CN Partner, carrying one clear idea across print, digital, and outdoor formats.',
        image: '/images/creative-campaign.jpg',
        tags: ['Campaign', 'Print & Digital'],
      },
      {
        title: 'SheCode Events Campaign',
        client: 'SheCode Events',
        year: '2024',
        description: 'A complete creative kit for a SheCode event, from posters and social assets to on-site signage.',
        image: '/images/creative-campaign.jpg',
        tags: ['Event Materials', 'Campaign'],
      },
      {
        title: 'MasterSkills AI Event Campaign',
        client: 'MasterSkills AI',
        year: '2024',
        description: 'Launch campaign materials for a MasterSkills AI event, designed to drive registrations and attendance.',
        image: '/images/creative-campaign.jpg',
        tags: ['Launch Campaign', 'Event Materials'],
      },
    ],
  },
]

export function getWorkCategory(slug: string): WorkCategory | undefined {
  return workCategories.find((c) => c.slug === slug)
}
