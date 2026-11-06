export const PRODUCTS = [
  {
    id: 'noire-01',
    name: 'The Obsidian Atelier Overcoat',
    tagline: 'Hand-tailored double-faced cashmere with sculpted lapels.',
    price: 68500,
    originalPrice: 78000,
    category: 'Clothing',
    subcategory: 'Outerwear',
    badge: 'Iconic Piece',
    isNew: false,
    isBestseller: true,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 42,
    primaryImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=900',
    secondaryImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'An architectural silhouette designed to withstand fleeting trends. Handcrafted from pure Mongolian double-faced cashmere, featuring relaxed drop shoulders, deep welt pockets, and a whisper-light horn button closure. Each piece requires 18 hours of master tailoring.',
    details: [
      '100% Grade-A Mongolian Cashmere',
      'Hand-stitched interior seams with silk binding',
      'Natural horn buttons sustainably sourced',
      'Relaxed architectural fit with unlined fluidity',
      'Dry clean exclusively by luxury garment specialists'
    ],
    materials: 'Grade-A Mongolian Cashmere, Habotai Silk seam taping',
    dimensions: 'Center back length: 118 cm (Size M)',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Onyx Noir', hex: '#111111' },
      { name: 'Warm Charcoal', hex: '#2C2B29' },
      { name: 'Raw Camel', hex: '#9E866C' }
    ],
    inStock: true
  },
  {
    id: 'noire-02',
    name: 'The Silhouette Weekender Duffel',
    tagline: 'Sculptural travel vessel in full-grain Tuscan calfskin.',
    price: 72000,
    originalPrice: null,
    category: 'Bags',
    subcategory: 'Luggage',
    badge: 'Bestseller',
    isNew: false,
    isBestseller: true,
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 68,
    primaryImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=900',
    secondaryImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'The archetype of effortless transit. Shaped from vegetable-tanned Italian calfskin that develops an irreplaceable patina with each voyage. Features dual two-way brass zippers from Raccagni, reinforced suede-lined base, and an ergonomic detachable shoulder strap.',
    details: [
      'Full-grain vegetable-tanned Tuscan leather',
      'Solid antique-finish brass hardware',
      'Water-resistant bonded microfiber suede interior',
      'Padded interior compartment accommodates up to 16" laptop',
      'Complimentary custom monogramming available'
    ],
    materials: 'Vegetable-tanned Calfskin, Micro-suede, Hand-poured Brass',
    dimensions: '52 cm (W) x 30 cm (H) x 24 cm (D)',
    sizes: ['Standard 42L'],
    colors: [
      { name: 'Midnight Black', hex: '#0B0B0B' },
      { name: 'Espresso', hex: '#31231E' }
    ],
    inStock: true
  },
  {
    id: 'noire-03',
    name: 'The Nocturne Automatic Chronograph',
    tagline: 'Minimalist mechanical precision engineered with matte ceramic.',
    price: 115000,
    originalPrice: 128000,
    category: 'Watches',
    subcategory: 'Timepieces',
    badge: 'New Arrival',
    isNew: true,
    isBestseller: false,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 29,
    primaryImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=900',
    secondaryImage: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'A study in monochromatic reduction. The Nocturne pairs a 41mm sandblasted high-tech ceramic case with a Swiss-calibre automatic movement. Features an anti-reflective sapphire crystal face, exhibition sapphire caseback, and a hand-stitched FKM rubber-leather hybrid band.',
    details: [
      'Swiss Calibre NE88 automatic movement with 45-hour reserve',
      'High-tech zirconium oxide matte ceramic monobloc case',
      'Double-domed anti-reflective sapphire crystal',
      'Water resistant to 100 meters / 10 ATM',
      'Limited numbered production run'
    ],
    materials: 'Matte Ceramic, Sapphire Crystal, 316L Caseback, FKM Rubber Strap',
    dimensions: 'Case diameter: 41mm | Thickness: 11.2mm | Lug width: 20mm',
    sizes: ['41mm Case'],
    colors: [
      { name: 'Stealth Black', hex: '#141414' },
      { name: 'Titanium Slate', hex: '#3B3D40' }
    ],
    inStock: true
  },
  {
    id: 'noire-04',
    name: 'The Solis Sculpted 18k Cuff',
    tagline: 'Fluid hand-carved geometry in solid brushed gold vermeil.',
    price: 54000,
    originalPrice: null,
    category: 'Jewellery',
    subcategory: 'Bracelets',
    badge: 'Iconic Piece',
    isNew: false,
    isBestseller: true,
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 51,
    primaryImage: 'https://images.unsplash.com/photo-1611591475152-473523daec6f?auto=format&fit=crop&q=80&w=900',
    secondaryImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1611591475152-473523daec6f?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Inspired by modern monumental sculptures, The Solis Cuff wraps the wrist in fluid, organic curvature. Cast in recycled sterling silver and layered with a rich 5-micron coat of 18k warm yellow gold with an artisan satin finish.',
    details: [
      'Heavy 18k Gold Vermeil over recycled 925 Sterling Silver',
      'Hand-applied micro-satin finish with polished inner bevels',
      'Naturally malleable fit for seamless custom adjustment',
      'Hallmarked with NOIRÉ atelier signature stamp',
      'Delivered in embossed lacquer wooden presentation box'
    ],
    materials: '18k Warm Gold Vermeil (5 Micron), Recycled 925 Silver',
    dimensions: 'Width: 14mm | Weight: 46 grams',
    sizes: ['Small (15-16.5cm)', 'Medium (17-18.5cm)', 'Large (19-20.5cm)'],
    colors: [
      { name: 'Warm 18k Gold', hex: '#C6A46C' },
      { name: 'Oxidized Silver', hex: '#9E9E9E' }
    ],
    inStock: true
  },
  {
    id: 'noire-05',
    name: 'The Drape Silk Sateen Shirt',
    tagline: 'Fluid elegance cut from heavy 22-momme Mulberry silk.',
    price: 24000,
    originalPrice: 28000,
    category: 'Clothing',
    subcategory: 'Tops',
    badge: 'New Arrival',
    isNew: true,
    isBestseller: false,
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 36,
    primaryImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=900',
    secondaryImage: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'A sensory garment with liquid drape. Spun from organic Mulberry silk with a luminous sandwashed surface that feels sublime against bare skin. Concealed mother-of-pearl placket and elongated cuffs provide subtle couture refinement.',
    details: [
      '100% Organic Grade-6A Mulberry Silk (22 momme)',
      'Sandwashed matte-luster finish',
      'Concealed placket with smoke mother-of-pearl buttons',
      'Single-needle French seams throughout',
      'Gentle cold hand wash or eco dry clean'
    ],
    materials: 'Grade-6A Mulberry Silk, Mother-of-pearl closures',
    dimensions: 'Back length: 76 cm',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Onyx Silk', hex: '#0F0F0F' },
      { name: 'Champagne Sand', hex: '#E2D7C7' }
    ],
    inStock: true
  },
  {
    id: 'noire-06',
    name: 'The Minimalist Arc Shoulder Bag',
    tagline: 'Graceful architectural contour with magnetic concealed closure.',
    price: 46500,
    originalPrice: null,
    category: 'Bags',
    subcategory: 'Handbags',
    badge: 'Bestseller',
    isNew: false,
    isBestseller: true,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 74,
    primaryImage: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=900',
    secondaryImage: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Designed around clean harmonic curvature, the Arc bag balances structured discipline with feminine grace. Carried by hand or tucked under the shoulder, its sculpted leather body opens to a soft lambskin interior with integrated card slots.',
    details: [
      'Smooth box calfskin from certified Italian tanneries',
      'Soft nappa lambskin interior lining',
      'Discreet dual magnetic closure',
      'Interior zippered slip compartment',
      'Protective gold-toned base studs'
    ],
    materials: 'Box Calfskin, Nappa Lambskin, Solid Brass Hardware',
    dimensions: '28 cm (W) x 18 cm (H) x 8 cm (D)',
    sizes: ['One Size'],
    colors: [
      { name: 'Sable Noir', hex: '#111111' },
      { name: 'Bone White', hex: '#EBE7DE' },
      { name: 'Caramel Toffee', hex: '#875330' }
    ],
    inStock: true
  },
  {
    id: 'noire-07',
    name: 'The Horizon Minimalist Steel 38mm',
    tagline: 'Subtle pure proportions with bespoke Milanese mesh band.',
    price: 58000,
    originalPrice: 65000,
    category: 'Watches',
    subcategory: 'Timepieces',
    badge: 'New Arrival',
    isNew: true,
    isBestseller: false,
    isFeatured: false,
    rating: 4.7,
    reviewsCount: 22,
    primaryImage: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=900',
    secondaryImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Understated elegance for discerning collectors. The Horizon features a 38mm brushed surgical-grade stainless steel case, clean sunray dial without distracting numeral markers, and ultra-slim profile designed to glide under shirt cuffs effortlessly.',
    details: [
      'Ultra-thin 6.8mm profile with 316L stainless steel',
      'Japanese high-torque precision quartz movement',
      'Domed scratch-resistant sapphire crystal',
      'Integrated quick-release Milanese steel mesh strap',
      '50m water resistance'
    ],
    materials: '316L Stainless Steel, Domed Sapphire, Sunray Lacquer',
    dimensions: 'Case: 38mm | Thickness: 6.8mm',
    sizes: ['38mm Case'],
    colors: [
      { name: 'Gunmetal Dark', hex: '#2B2C2E' },
      { name: 'Brushed Silver', hex: '#D6D6D6' }
    ],
    inStock: true
  },
  {
    id: 'noire-08',
    name: 'The Monolith Onyx Signet Ring',
    tagline: 'Bold geometric statement carved with Brazilian black onyx.',
    price: 29500,
    originalPrice: null,
    category: 'Jewellery',
    subcategory: 'Rings',
    badge: 'Bestseller',
    isNew: false,
    isBestseller: true,
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 63,
    primaryImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=900',
    secondaryImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Channeling ancient signet traditions through a modernist lens. Cast in substantial recycled 925 sterling silver, hand-beveled with stepped flank shoulders and bezel-set with an untreated deep black Brazilian onyx table.',
    details: [
      'Hand-cut natural Brazilian Black Onyx gemstone',
      'Substantial solid 925 Sterling Silver weighing 18g',
      'Satin hand-brushed finish on bezel sides',
      'Comfort-fit curved interior shank',
      'Individually hallmarked with artisanal insignia'
    ],
    materials: 'Natural Black Onyx, 925 Sterling Silver',
    dimensions: 'Top table: 16mm x 14mm',
    sizes: ['US 7 (54mm)', 'US 8 (57mm)', 'US 9 (60mm)', 'US 10 (62mm)', 'US 11 (65mm)'],
    colors: [
      { name: 'Silver & Onyx', hex: '#1C1C1C' },
      { name: '18k Gold & Onyx', hex: '#C6A46C' }
    ],
    inStock: true
  },
  {
    id: 'noire-09',
    name: 'The Verona Japanese Acetate Sunglasses',
    tagline: 'Sculpted rectangular frame with Zeiss anti-glare lenses.',
    price: 22500,
    originalPrice: 26000,
    category: 'Accessories',
    subcategory: 'Eyewear',
    badge: 'Iconic Piece',
    isNew: false,
    isBestseller: false,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 38,
    primaryImage: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=900',
    secondaryImage: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Precision cut from 8mm Japanese block acetate, the Verona evokes 1960s Italian cinematic glamour sharpened with contemporary rectilinear angles. Fitted with certified Carl Zeiss polarized lenses providing 100% UV protection and exceptional optical clarity.',
    details: [
      '8mm Takiron Japanese cellulose acetate',
      'Custom 7-barrel hinges pinned with steel rivets',
      'Carl Zeiss Category 3 polarized tint lenses',
      'Beveled temple tips for weightless balance',
      'Supplied with hand-stitched leather hard case and microfiber cloth'
    ],
    materials: 'Cellulose Acetate, German Steel Hinges, Zeiss Crystal',
    dimensions: 'Lens: 52mm | Bridge: 20mm | Temple: 145mm',
    sizes: ['Universal Fit'],
    colors: [
      { name: 'Deep Tortoise', hex: '#2F1E15' },
      { name: 'Obsidian Gloss', hex: '#000000' }
    ],
    inStock: true
  },
  {
    id: 'noire-10',
    name: 'The Scent of Silence Extrait (100ml)',
    tagline: 'An intoxicating whisper of smoked oud, rare vetiver and bergamot.',
    price: 16500,
    originalPrice: null,
    category: 'Lifestyle',
    subcategory: 'Fragrance',
    badge: 'Bestseller',
    isNew: false,
    isBestseller: true,
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 88,
    primaryImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=900',
    secondaryImage: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Created in collaboration with master perfumers in Grasse. An elevated 30% concentration extrait de parfum that unfolds in intimate waves: crisp Calabrian bergamot yielding to heartwood incense, black tea leaves, Haitian vetiver, and smoky Cambodian oud.',
    details: [
      '30% Extrait concentration for 14+ hours longevity',
      'Top: Calabrian Bergamot, Cardamom, Juniper',
      'Heart: Black Tea Leaves, Iris Concrete, Cedarwood',
      'Base: Haitian Vetiver, Smoked Oud, Ambergris',
      'Heavy smoked glass flacon with solid weighted zamak magnetic cap'
    ],
    materials: 'High-concentration botanical essences in French denatured alcohol',
    dimensions: '100 ml / 3.4 fl oz',
    sizes: ['100 ml / 3.4 fl oz'],
    colors: [
      { name: 'Smoked Flacon', hex: '#1E1E1E' }
    ],
    inStock: true
  },
  {
    id: 'noire-11',
    name: 'The Brutalist Cast Iron Tea Service',
    tagline: 'Artisanal sand-cast iron vessel with matte heat-resistant enamel.',
    price: 21000,
    originalPrice: null,
    category: 'Lifestyle',
    subcategory: 'Home Objects',
    badge: 'Iconic Piece',
    isNew: false,
    isBestseller: false,
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 19,
    primaryImage: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=900',
    secondaryImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Bridging sculptural presence with contemplative daily rituals. Hand-cast in Morioka iron foundries using traditional sand molds, finished with a raw tactile charcoal exterior and porcelain-enameled interior to maintain heat and purity of flavor.',
    details: [
      'Heavy virgin sand-cast iron retaining heat for hours',
      'Food-safe glazed black enamel interior',
      'Includes removable micro-mesh stainless steel infuser basket',
      'Capacity: 850ml (serves 3-4 cups)',
      'Heat-resistant walnut wood handle wrap'
    ],
    materials: 'Sand-cast Iron, Porcelain Enamel, Walnut, Stainless Steel',
    dimensions: '19 cm (W) x 16 cm (H) | Weight: 1.85 kg',
    sizes: ['850ml Service'],
    colors: [
      { name: 'Charcoal Black', hex: '#1B1B1B' }
    ],
    inStock: true
  },
  {
    id: 'noire-12',
    name: 'The Tailored Pleated Trouser',
    tagline: 'Super 130s virgin wool with fluid drape and side tab adjusters.',
    price: 28500,
    originalPrice: 32000,
    category: 'Clothing',
    subcategory: 'Tailoring',
    badge: 'Bestseller',
    isNew: false,
    isBestseller: true,
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 45,
    primaryImage: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&q=80&w=900',
    secondaryImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Crafted from high-twist Super 130s virgin wool milled in Biella, Italy. Cut with a high rise, relaxed double reverse pleats, extended tab waistband, and elegant gentle taper that pools with natural grace over leather footwear.',
    details: [
      '100% Super 130s Italian Virgin Wool',
      'Deep double reverse front pleats',
      'Buckled side waist adjusters (belt-free design)',
      'Cotton curtain waistband and viscose knee lining',
      'Unfinished hem for bespoke length tailoring'
    ],
    materials: 'Super 130s Virgin Wool, Italian Cupro Lining',
    dimensions: 'Rise: 32cm | Inseam: 89cm unfinished',
    sizes: ['IT 46 (30W)', 'IT 48 (32W)', 'IT 50 (34W)', 'IT 52 (36W)'],
    colors: [
      { name: 'Onyx Black', hex: '#141414' },
      { name: 'Deep Midnight Navy', hex: '#161B26' }
    ],
    inStock: true
  },
  {
    id: 'noire-13',
    name: 'The Cashmere-Silk Whisper Scarf',
    tagline: 'Featherlight 70/30 cashmere-silk blend with eyelash fringes.',
    price: 18000,
    originalPrice: null,
    category: 'Accessories',
    subcategory: 'Scarves',
    badge: 'Iconic Piece',
    isNew: false,
    isBestseller: false,
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 31,
    primaryImage: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=900',
    secondaryImage: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Woven on vintage wooden shuttle looms in Nepal. This featherweight wrap blends 70% softest Himalayan cashmere with 30% silk, delivering cocooning warmth in winter and breathable softness during temperate evenings.',
    details: [
      '70% Grade-A Himalayan Cashmere, 30% Fine Silk',
      'Weight: only 95 grams for effortless drapery',
      'Delicate hand-frayed eyelash edges',
      'Subtle tonal NOIRÉ jacquard monogram',
      'Gift-boxed in signature matte black ribbon-tied box'
    ],
    materials: '70% Cashmere, 30% Silk',
    dimensions: '200 cm x 90 cm',
    sizes: ['One Size'],
    colors: [
      { name: 'Smoke Ash', hex: '#444444' },
      { name: 'Oatmeal Taupe', hex: '#8C8275' },
      { name: 'Pure Ink', hex: '#0D0D0D' }
    ],
    inStock: true
  },
  {
    id: 'noire-14',
    name: 'The Vesper Textured Crossbody',
    tagline: 'Architectural pouch in pebble-grained French calf with palladium.',
    price: 34000,
    originalPrice: 38500,
    category: 'Bags',
    subcategory: 'Crossbody',
    badge: 'New Arrival',
    isNew: true,
    isBestseller: false,
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 17,
    primaryImage: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=900',
    secondaryImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Compact utility reimagined with sculptural poise. Hand-stitched with supple pebble-grain leather, fitted with a custom palladium lock and modular strap that converts effortlessly from high-chest crossbody to clutch.',
    details: [
      'Full-grain grained French bull calfskin',
      'Palladium-plated custom geometric push-lock',
      'Adjustable 7-hole strap with hand-painted edges',
      'Internal zip pocket and dedicated passport sleeve',
      'Reinforced gusseted structure'
    ],
    materials: 'French Bull Calfskin, Palladium Hardware',
    dimensions: '23 cm (W) x 15 cm (H) x 6 cm (D)',
    sizes: ['One Size'],
    colors: [
      { name: 'Jet Noir', hex: '#0F0F0F' },
      { name: 'Cognac', hex: '#794429' }
    ],
    inStock: true
  },
  {
    id: 'noire-15',
    name: 'The Aurelia Fine Snake Chain',
    tagline: 'Liquid metallic drape in high-polish 18k gold vermeil.',
    price: 38000,
    originalPrice: null,
    category: 'Jewellery',
    subcategory: 'Necklaces',
    badge: 'Bestseller',
    isNew: false,
    isBestseller: true,
    isFeatured: false,
    rating: 5.0,
    reviewsCount: 59,
    primaryImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=900',
    secondaryImage: 'https://images.unsplash.com/photo-1611591475152-473523daec6f?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1611591475152-473523daec6f?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Like liquid sunlight draped across the collarbone. Tightly linked round snake chain engineered to move with zero kink or catch. Features an architectural custom-machined bayonet clasp with discreet safety catch.',
    details: [
      '5-micron 18k Rich Yellow Gold on solid 925 Silver',
      'Diamond-cut rounded links for intense fluid shine',
      'Custom hidden cylinder safety clasp',
      'Length: 45cm (18") standard with 5cm extension',
      'Hypoallergenic and nickel-free'
    ],
    materials: '18k Yellow Gold Vermeil, 925 Sterling Silver',
    dimensions: 'Length: 45 cm | Width: 3.2 mm',
    sizes: ['45cm (18")', '50cm (20")'],
    colors: [
      { name: '18k Warm Gold', hex: '#C6A46C' },
      { name: 'Silver Rhodium', hex: '#E0E0E0' }
    ],
    inStock: true
  },
  {
    id: 'noire-16',
    name: 'The Eclipse Dual-Time Automatic',
    tagline: 'Titanium aviation case with 24-hour second time zone disc.',
    price: 92000,
    originalPrice: 104000,
    category: 'Watches',
    subcategory: 'Timepieces',
    badge: 'Iconic Piece',
    isNew: false,
    isBestseller: false,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 34,
    primaryImage: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&q=80&w=900',
    secondaryImage: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=900',
    images: [
      'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&q=80&w=900',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=900'
    ],
    description: 'Designed for the global nomad. Lightweight Grade-5 titanium case housing an automatic dual-time complication with an understated revolving disc display. Treated with charcoal PVD and paired with vegetable-tanned bridle leather.',
    details: [
      'Grade 5 aerospace titanium case with micro-bead blast finish',
      'Custom automatic caliber with 24-hour GMT complication',
      'Matte dial with Super-LumiNova BGW9 indices',
      'Anti-reflective sapphire crystal front and back',
      'Integrated French bridle leather strap with titanium pin buckle'
    ],
    materials: 'Grade 5 Titanium, Bridle Leather, Sapphire Crystal',
    dimensions: 'Case: 40mm | Thickness: 10.5mm',
    sizes: ['40mm Case'],
    colors: [
      { name: 'Matte Titanium', hex: '#4A4C50' },
      { name: 'Black DLC', hex: '#111111' }
    ],
    inStock: true
  }
];

export const CATEGORIES = [
  {
    id: 'fashion',
    name: 'Fashion',
    slug: 'Clothing',
    description: 'Tailored silhouettes, double-faced cashmere and fluid silk essentials.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=900',
    itemCount: '3 Curated Pieces'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    slug: 'Accessories',
    description: 'Handcrafted Japanese acetate eyewear, silk scarves and leather essentials.',
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=900',
    itemCount: '4 Curated Pieces'
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    slug: 'Lifestyle',
    description: 'Artisanal sand-cast iron objects, sculptural tea sets and rare extrait parfums.',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=900',
    itemCount: '3 Curated Pieces'
  },
  {
    id: 'essentials',
    name: 'Essentials',
    slug: 'Watches',
    description: 'Mechanical timepieces, fine jewellery and heirloom leather travel companions.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=900',
    itemCount: '6 Curated Pieces'
  }
];

export const COLLECTIONS = [
  {
    id: 'monochrome-edit',
    title: 'The Monochrome Edit',
    subtitle: 'Autumn / Winter Atelier',
    description: 'A study in absolute shadow and light. Sculpted overcoats, fluid silk and sharp tailoring stripped of superfluous noise.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200',
    tag: 'EDITORIAL',
    category: 'Clothing'
  },
  {
    id: 'nocturne-horology',
    title: 'The Nocturne Watch Series',
    subtitle: 'Mechanical Excellence',
    description: 'Sandblasted ceramic, aerospace Grade 5 titanium, and hand-finished Swiss calibres designed for quiet distinction.',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=1200',
    tag: 'LIMITED',
    category: 'Watches'
  },
  {
    id: 'atelier-leatherworks',
    title: 'Atelier Leatherworks',
    subtitle: 'Tuscan Heritage',
    description: 'Full-grain vegetable-tanned calfskin travel bags and structured totes that grow richer with every voyage.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1200',
    tag: 'HERITAGE',
    category: 'Bags'
  },
  {
    id: 'sculptural-adornments',
    title: 'Sculptural Adornments',
    subtitle: 'Fine Jewellery',
    description: 'Organic 18k gold vermeil and Brazilian black onyx jewelry cast in harmonious, modern architecture.',
    image: 'https://images.unsplash.com/photo-1611591475152-473523daec6f?auto=format&fit=crop&q=80&w=1200',
    tag: 'SIGNATURE',
    category: 'Jewellery'
  }
];
