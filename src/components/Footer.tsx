import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Heart, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="gt-title text-2xl mb-2">
                Samuel Dipta Yogi Taruna
              </div>
              <p className="text-cyan-200 font-bold">
                Full Stack Developer
              </p>
            </div>

            <div className="flex space-x-4">
              <Button asChild size="sm" className="bg-[#114b5f] hover:bg-[#0a2f3c] text-white transition-colors border-2 border-black shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] rounded shadow-sm">
                <a href="https://github.com/SammDevl" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6" />
                </a>
              </Button>
              <Button asChild size="sm" className="bg-[#114b5f] hover:bg-[#0a2f3c] text-white transition-colors border-2 border-black shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] rounded shadow-sm">
                <a href="https://www.linkedin.com/in/samuel-dipta-89697336a/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6" />
                </a>
              </Button>
              <Button asChild size="sm" className="bg-[#114b5f] hover:bg-[#0a2f3c] text-white transition-colors border-2 border-black shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] rounded shadow-sm">
                <a href="https://www.facebook.com/samueldipta.yogitaruna" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t-2 border-black/20 text-center">
            <p className="text-white font-bold text-shadow-sm flex items-center justify-center gap-2">
              © {currentYear} Samuel Dipta Yogi Taruna. Made with <Heart className="w-5 h-5 text-red-500 fill-red-500 drop-shadow-md" /> using NextJS & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;