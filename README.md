# Samuel Dipta Yogi Taruna - Portfolio

A unique, retro-themed personal portfolio website built for Samuel Dipta Yogi Taruna. The entire user interface is heavily inspired by the classic **Growtopia Player Profile and Main Menu** aesthetic. 

Designed with thick borders, pixelated elements, bubbly fonts, and vibrant teal/cyan color palettes, this portfolio stands out with a heavily stylized, nostalgic game UI look.

## 🎮 Theme & Aesthetic
- **Growtopia UI Style:** The site uses the iconic dark teal panels (`#114b5f`), sky blue backgrounds, bright cyan buttons, and neon green accents directly referencing the classic MMO sandbox game.
- **Varela Round Font:** A soft, bubbly font paired with thick, solid black text-shadows (`text-shadow: 1px 1px 0px black`) to emulate retro game text.
- **Pixel Art Background:** Features a custom dark azure-blue pixel art scene with cross-shaped clouds and ground silhouettes in the hero section.

## ✨ Features
- **Floating Chat-Box Navigation:** The navbar mimics an in-game system chat box floating on the top left. It can be collapsed (`[-]`) and expanded (`[+]`) seamlessly without taking up full screen width.
- **Interactive Stacked Arrow:** A retro `ChevronsDown` arrow icon in the hero section smoothly scrolls down to the content below when clicked.
- **Fully Responsive:** Beautifully packed tight to fit all panels (About, Education, Contact) onto screens comfortably without excessive scrolling.
- **Static Solid Panels:** Removed generic modern fade-in scroll animations in favor of static, punchy game-window layouts that load instantly.

## 🛠️ Tech Stack
- **Framework:** React 18 & Vite
- **Language:** TypeScript
- **Styling:** TailwindCSS (with heavily customized `index.css` utility classes like `.gt-panel`, `.gt-button`, `.text-shadow-sm`)
- **Icons:** Lucide-React
- **UI Components:** Shadcn UI base (Heavily modified)

## 🚀 Getting Started

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

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Custom Design System (`index.css`)
The project utilizes a custom design system built on top of Tailwind to enforce the game UI aesthetic globally:
- `.gt-panel`: The large dark teal window boxes with inner white highlights and black borders.
- `.gt-button`: The bright cyan interactable grid buttons.
- `.gt-title`: The iconic neon green headers.
- `.text-shadow-sm`: Forces a sharp 1px solid black shadow behind white text for maximum readability.

## 👨‍💻 About The Developer
**Samuel Dipta Yogi Taruna**  
*"Ingin Menjadi Programmer Handal Namun Enggan Ngoding"*  
I write code that works (most of the time). Performance might not be the priority, but the aesthetic always is!

- **GitHub:** [SammDevl](https://github.com/SammDevl)
- **LinkedIn:** [Samuel Dipta](https://www.linkedin.com/in/samuel-dipta-89697336a/)
