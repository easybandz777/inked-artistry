export const SITE_CONFIG = {
    name: 'Inked Permanent Artistry',
    tagline: 'Precision. Artistry. Confidence.',
    description: 'Premium permanent makeup, cosmetic tattoo, and fine-line tattoo studio in Carrollton, GA. Specializing in brows, lips, and delicate ink with naturally defining results.',
    url: 'https://inkedpermanentartistry.com',
    email: 'hello@inkedpermanentartistry.com',
    phone: '(555) 123-4567',
    address: {
        street: '315 Bankhead Hwy',
        city: 'Carrollton',
        state: 'GA',
        zip: '30117',
    },
    hours: {
        weekdays: 'Tuesday – Friday: 9:00 AM – 5:00 PM',
        saturday: 'Saturday: 10:00 AM – 3:00 PM',
        sunday: 'Sunday & Monday: Closed',
    },
    social: {
        instagram: 'https://instagram.com/inkedpermanentartistry',
        facebook: 'https://facebook.com/inkedpermanentartistry',
        tiktok: 'https://tiktok.com/@inkedpermanentartistry',
    },
    booking: {
        url: '#',
        squareUrl: '#',
    },
    artist: {
        name: 'Rachel',
        title: 'Owner & Lead PMU Artist',
        bio: 'Hi, I\'m Rachel — Carrollton\'s most trusted & beloved PMU artist. I specialize in brows, lips, fineline and tiny tattoos that enhance your natural beauty with defining yet natural results. Whether you\'re looking for low-maintenance glam or meaningful micro ink, I\'m your go-to girl.',
    },
} as const;

export const NAV_LINKS = [
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
    { label: 'Care', href: '/care' },
    { label: 'Academy', href: '/academy' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_LINKS = {
    services: [
        { label: 'Microblading', href: '/services/microblading' },
        { label: 'Powder Brows', href: '/services/powder-brows' },
        { label: 'Lip Blush', href: '/services/lip-blush' },
        { label: 'Lash Enhancement', href: '/services/lash-enhancement' },
        { label: 'Fine-Line Tattoo', href: '/services/fine-line-tattoo' },
        { label: 'Tiny Tattoos', href: '/services/tiny-tattoos' },
        { label: 'All Services', href: '/services' },
    ],
    academy: [
        { label: 'Training Overview', href: '/academy' },
        { label: 'PMU Foundations Course', href: '/academy/training' },
        { label: 'Apply Now', href: '/academy/apply' },
        { label: 'Join Waitlist', href: '/academy/waitlist' },
        { label: 'Student Portal', href: '/academy/portal/login' },
    ],
    company: [
        { label: 'About', href: '/about' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Blog', href: '/blog' },
        { label: 'FAQs', href: '/faqs' },
        { label: 'Gift Cards', href: '/gift-cards' },
        { label: 'Contact', href: '/contact' },
    ],
    legal: [
        { label: 'Policies', href: '/policies' },
        { label: 'Aftercare', href: '/care' },
        { label: 'Terms of Service', href: '/legal/terms' },
        { label: 'Privacy Policy', href: '/legal/privacy' },
        { label: 'Disclaimer', href: '/legal/disclaimer' },
    ],
} as const;
