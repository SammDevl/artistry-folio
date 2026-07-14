# Samuel Dipta Yogi Taruna - Portfolio

A unique, retro-themed personal portfolio website built for Samuel Dipta Yogi Taruna. The entire user interface is heavily inspired by the classic **Growtopia Player Profile and Main Menu** aesthetic.

Designed with thick borders, pixelated elements, bubbly fonts, and vibrant teal/cyan color palettes, this portfolio stands out with a heavily stylized, nostalgic game UI look.

## Theme and Aesthetic
- **Growtopia UI Style:** The site uses the iconic dark teal panels (`#114b5f`), dark midnight backgrounds, bright cyan buttons, and neon green accents directly referencing the classic MMO sandbox game.
- **Varela Round Font:** A soft, bubbly font paired with thick, solid black text-shadows (`text-shadow: 1px 1px 0px black`) to emulate retro game text.
- **Pixel Art Background:** Features a custom dark azure-blue pixel art scene with cross-shaped clouds and ground silhouettes in the hero section.

## Features
- **Floating Chat-Box Navigation:** The navbar mimics an in-game system chat box floating on the top left. It can be collapsed and expanded seamlessly without taking up full screen width.
- **Interactive Stacked Arrow:** A stacked `ChevronsDown` arrow icon in the hero section smoothly scrolls down to the content below when clicked.
- **Fully Responsive:** Beautifully packed tight to fit all panels (About, Education, Contact) onto screens comfortably without excessive scrolling.
- **Static Solid Panels:** Removed generic modern fade-in scroll animations in favor of static, punchy game-window layouts that load instantly.
- **SEO Optimized:** Full metadata, OpenGraph tags, Twitter cards, JSON-LD structured data, auto-generated sitemap, and robots configuration.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS (with heavily customized `index.css` utility classes like `.gt-panel`, `.gt-button`, `.text-shadow-sm`)
- **Icons:** Lucide-React
- **UI Components:** Shadcn UI base (heavily modified)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SammDevl/artistry-folio.git
   cd artistry-folio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/
    layout.tsx       # Root layout with SEO metadata, fonts, and providers
    page.tsx         # Main page with JSON-LD structured data
    providers.tsx    # Client-side context providers
    sitemap.ts       # Auto-generated sitemap for search engines
    robots.ts        # Auto-generated robots.txt
    icon.svg         # Favicon
  components/        # Reusable React components (Hero, Navigation, About, etc.)
  assets/            # Images and static assets
  hooks/             # Custom React hooks
  lib/               # Utility functions
public/
  Profile_Picture.JPG
```

## Custom Design System

The project utilizes a custom design system built on top of Tailwind to enforce the game UI aesthetic globally:
- `.gt-panel`: The large dark teal window boxes with inner white highlights and black borders.
- `.gt-button`: The bright cyan interactable grid buttons.
- `.gt-title`: The iconic neon green headers.
- `.text-shadow-sm`: Forces a sharp 1px solid black shadow behind white text for maximum readability.

## SEO

The site includes comprehensive SEO out of the box:
- **Metadata API:** Title templates, meta descriptions, keywords, author info, and canonical URLs configured in `layout.tsx`.
- **OpenGraph and Twitter Cards:** Rich previews when shared on social media platforms.
- **JSON-LD Structured Data:** Person schema with social profiles and skills for rich Google search results.
- **Sitemap:** Auto-generated at `/sitemap.xml` via `sitemap.ts`.
- **Robots:** Auto-generated at `/robots.txt` via `robots.ts` with sitemap reference.

## About The Developer

**Samuel Dipta Yogi Taruna**
*"Ingin Menjadi Programmer Handal Namun Enggan Ngoding"*
I write code that works (most of the time). Performance might not be the priority, but the aesthetic always is!

- **GitHub:** [SammDevl](https://github.com/SammDevl)
- **LinkedIn:** [Samuel Dipta](https://www.linkedin.com/in/samuel-dipta-89697336a/)

## License

This project is open source and available under the [MIT License](LICENSE).
