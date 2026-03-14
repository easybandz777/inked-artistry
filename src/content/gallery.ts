import type { GalleryItem } from '@/lib/types';

export const GALLERY_ITEMS: GalleryItem[] = [
    { id: 'mb-1', category: 'Microblading', type: 'before-after', title: 'Natural Hair-Stroke Brows', caption: 'Sparse brows transformed with delicate, natural-looking hair strokes. Healed result shown.', beforeImage: '/images/gallery/mb-1-before.jpg', afterImage: '/images/gallery/mb-1-after.jpg' },
    { id: 'mb-2', category: 'Microblading', type: 'healed', title: 'Soft & Defined Microblading', caption: 'Beautifully healed microblading — soft, natural, and perfectly placed.', image: '/images/gallery/mb-2.jpg' },
    { id: 'mb-3', category: 'Microblading', type: 'before-after', title: 'Full Brow Reconstruction', caption: 'Complete brow restoration for a client with alopecia. Customized shape and density.', beforeImage: '/images/gallery/mb-3-before.jpg', afterImage: '/images/gallery/mb-3-after.jpg' },
    { id: 'pb-1', category: 'Powder Brows', type: 'before-after', title: 'Soft Powder Ombré', caption: 'Graduated powder brows creating a soft, polished makeup look. Ideal for oily skin.', beforeImage: '/images/gallery/pb-1-before.jpg', afterImage: '/images/gallery/pb-1-after.jpg' },
    { id: 'pb-2', category: 'Powder Brows', type: 'healed', title: 'Bold Yet Natural Powder Brows', caption: 'Healed powder brows with beautiful density and defined shape.', image: '/images/gallery/pb-2.jpg' },
    { id: 'lb-1', category: 'Lip Blush', type: 'before-after', title: 'Rosy Lip Blush Enhancement', caption: 'Natural lip color enhanced with a soft, rosy lip blush. Shape corrected for symmetry.', beforeImage: '/images/gallery/lb-1-before.jpg', afterImage: '/images/gallery/lb-1-after.jpg' },
    { id: 'lb-2', category: 'Lip Blush', type: 'healed', title: 'Subtle Pink Lip Blush', caption: 'Perfectly healed lip blush — a natural, effortless flush of color.', image: '/images/gallery/lb-2.jpg' },
    { id: 'le-1', category: 'Lash Enhancement', type: 'before-after', title: 'Invisible Lash Definition', caption: 'Subtle lash enhancement creating brighter, more defined eyes without visible liner.', beforeImage: '/images/gallery/le-1-before.jpg', afterImage: '/images/gallery/le-1-after.jpg' },
    { id: 'fl-1', category: 'Fine-Line Tattoo', type: 'detail', title: 'Delicate Floral Design', caption: 'A minimalist floral fine-line tattoo, custom designed and precisely executed.', image: '/images/gallery/fl-1.jpg' },
    { id: 'fl-2', category: 'Fine-Line Tattoo', type: 'detail', title: 'Script Lettering', caption: 'Elegant script lettering with clean, consistent linework.', image: '/images/gallery/fl-2.jpg' },
    { id: 'mb-4', category: 'Microblading', type: 'fresh', title: 'Fresh Microblading Session', caption: 'Immediately after the procedure — color will soften 30-50% as it heals.', image: '/images/gallery/mb-4.jpg' },
    { id: 'pb-3', category: 'Powder Brows', type: 'before-after', title: 'Combination Brows', caption: 'Hair strokes at the front with powder shading through the body for the perfect blend.', beforeImage: '/images/gallery/pb-3-before.jpg', afterImage: '/images/gallery/pb-3-after.jpg' },
];

export const GALLERY_CATEGORIES = ['All', 'Microblading', 'Powder Brows', 'Lip Blush', 'Lash Enhancement', 'Fine-Line Tattoo'] as const;
