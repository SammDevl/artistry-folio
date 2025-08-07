# Artistry Folio

A modern, responsive portfolio website built with React and Tailwind CSS. Artistry Folio showcases your creative work, skills, and contact information with elegant animations and a clean design.

## Features

- **Hero Section** with animated background and profile picture
- **Translucent Navigation Bar** that changes style on scroll
- **Fade-in Section Animations** using Intersection Observer
- **Responsive Design** for all devices
- **Customizable Content** for your projects, skills, and contact info

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/artistry-folio.git
   cd artistry-folio
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
  components/      # Reusable React components (Hero, Nav, FadeSection, etc.)
  assets/          # Images and icons
  App.tsx          # Main app component
  main.tsx         # Entry point
public/
  favicon.ico      # Site icon
  index.html       # HTML template
```

## Customization

- **Profile Picture:** Replace `/public/Profile_Picture.JPG` with your own image.
- **Favicon:** Replace `/public/favicon.ico` or `/public/favicon.svg`.
- **Content:** Edit components in `src/components/` to update your name, bio, projects, etc.
- **Colors & Styles:** Adjust Tailwind classes in the components for your preferred look.

## Deployment

You can deploy this site to [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or any static hosting provider.

```bash
npm run build
# or
yarn build
```

The output will be in the `dist/` folder.

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

Created by ##**SammDevl**.  
Inspired by modern
