import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Samuel Dipta Yogi Taruna",
  url: "https://sammdevl.github.io/artistry-folio",
  image: "https://sammdevl.github.io/artistry-folio/Profile_Picture.JPG",
  jobTitle: "Full Stack Developer",
  sameAs: [
    "https://github.com/SammDevl",
    "https://www.linkedin.com/in/samuel-dipta-89697336a/",
    "https://www.facebook.com/samueldipta.yogitaruna",
  ],
  knowsAbout: [
    "React",
    "TypeScript",
    "Node.js",
    "TailwindCSS",
    "Next.js",
    "MongoDB",
    "PHP",
    "MySQL",
    "Docker",
    "Git",
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <About />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
