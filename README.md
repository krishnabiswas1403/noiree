# NOIRÉ — Objects of Desire

> A luxury, minimalist, modern e-commerce experience celebrating timeless essentials, artisanal horology, fine jewellery, and everyday luxury objects.

---

## Brand Identity & Aesthetic

- **Brand Name**: NOIRÉ
- **Tagline**: Objects of Desire
- **Philosophy**: *"Less, but better. True luxury is never loud."*
- **Color Palette**:
  - Primary Background: `#090909` (Obsidian Noir)
  - Secondary Background: `#111111` (Deep Charcoal)
  - Card Surfaces: `#171717`
  - Main Text: `#F5F0E8` (Bone White / Cream Silk)
  - Secondary Text: `#A8A29E` (Warm Stone)
  - Accent: `#C6A46C` (Warm 18k Atelier Gold)
  - Borders: `#292929`
- **Typography**:
  - Headings & Editorial Statements: *Playfair Display*
  - Body & Microcopy: *DM Sans*

---

## Features & Capabilities

1. **Sticky Adaptive Navigation Bar**:
   - Transparent initial state, transitioning to frosted dark glass with backdrop blur upon scroll.
   - Live badge counters for both Wishlist and Shopping Bag.
   - Integrated Search modal trigger, VIP Client Suite modal trigger, and animated mobile navigation drawer.

2. **Cinematic Editorial Hero Section**:
   - "LESS, BUT BETTER."
   - Subheading with curated call-to-actions (`Explore Collection` and `Discover NOIRÉ`).
   - Architectural specs ticker highlighting noble material provenance.

3. **Featured Categories & Curated Collections**:
   - Four pillars: *Fashion*, *Accessories*, *Lifestyle*, and *Essentials*.
   - Interactive zoom cards with smooth transitions.
   - Dedicated Collections page detailing editorial themes (*The Monochrome Edit*, *The Nocturne Watch Series*, *Atelier Leatherworks*, *Sculptural Adornments*).

4. **Curated Product Catalog (16 Masterworks across 6 Categories)**:
   - *Clothing*: Double-faced Cashmere Overcoat, Mulberry Silk Sateen Shirt, Tailored Pleated Wool Trousers.
   - *Bags*: Full-grain Tuscan Calfskin Weekender, Minimalist Box Calf Arc Shoulder Bag, Vesper Crossbody.
   - *Watches*: Matte Ceramic Nocturne Chronograph, Horizon Minimalist 38mm Steel, Eclipse Dual-Time Titanium.
   - *Jewellery*: Solis Sculpted 18k Cuff, Monolith Brazilian Onyx Signet Ring, Aurelia Fine Snake Chain.
   - *Accessories*: Verona Japanese Acetate Eyewear, Cashmere-Silk Whisper Scarf.
   - *Lifestyle*: Scent of Silence Extrait de Parfum (100ml), Brutalist Cast Iron Sand-cast Tea Service.

5. **Full Product Details (`/product/:id`)**:
   - High-definition multi-angle gallery with thumbnail switcher.
   - Color swatch selector with active indicators.
   - Size / dimension selector.
   - Quantity counter with real-time price multiplication.
   - Accordions for *Details & Tailoring*, *Provenance & Craft*, and *White-Glove Delivery & Returns*.
   - Complementary product recommendations ("You May Also Desire").

6. **Interactive Shopping Cart & Slide-Over Bag Drawer**:
   - Slide-over mini-bag drawer accessible anywhere on the site.
   - Full dedicated cart page (`/cart`).
   - Free shipping calculation threshold (Complimentary over ₹10,000).
   - Voucher code system (`NOIRE10` for 10% Privé courtesy, `ATELIER15` for 15% privilege).
   - LocalStorage persistence across sessions.

7. **Curated Saved Desires (Wishlist)**:
   - Dedicated wishlist page (`/wishlist`).
   - One-click heart toggling with floating toast feedback.
   - "Move to Bag" integration.
   - LocalStorage persistence.

8. **White-Glove Checkout & Order Confirmation**:
   - Two-column responsive checkout layout (`/checkout`).
   - Complete customer identification and postal validation.
   - Delivery method & settlement method simulations (Centurion/Platinum Card, UPI/Wire, White-Glove Handover).
   - Comprehensive Order Confirmation receipt page (`/order-confirmation`) with unique reference ID (`NR-XXXXXX`), estimated delivery date, dossier summary, and printable receipt.

9. **The Maison Editorial Page (`/about`)**:
   - "A QUIETER KIND OF LUXURY."
   - Detailed breakdown of noble materials, founders' pledge, and provenance.

10. **Client Discretion & Service Modals**:
    - Privacy Protocol, Terms of Acquisition, White-Glove Delivery, and Horology Care modals accessible from the footer.

---

## Tech Stack

- **Framework**: React.js 18
- **Build Tool**: Vite
- **Language**: JavaScript (ESM)
- **Styling**: Pure Modern CSS3 with Design Tokens & Variables
- **Routing**: React Router v6 (`react-router-dom`)
- **Icons**: Lucide React (`lucide-react`)
- **Persistence**: Web Storage API (`localStorage` & `sessionStorage`)

---

## Running Locally

1. **Clone or navigate to the directory**:
   ```bash
   cd noire-luxury-store
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000` (or the port Vite outputs).

4. **Build for production**:
   ```bash
   npm run build
   ```
   The production-ready artifacts are output to `dist/`.

5. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## Deploying to GitHub & Vercel

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: NOIRÉ Luxury E-Commerce Frontend"
git branch -M main
git remote add origin https://github.com/<your-username>/noire-luxury-store.git
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Method A: Via Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New..."** > **"Project"**.
3. Select your GitHub repository `noire-luxury-store`.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your luxury store will be live in seconds!

#### Method B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the interactive prompts to deploy. Single-page client routing is pre-configured via the included `vercel.json`.
