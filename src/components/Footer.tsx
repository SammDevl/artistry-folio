import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Heart, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Samuel Dipta Yogi Taruna
            </div>
            <p className="text-muted-foreground">
              Full Stack Developer
            </p>
          </div>

          <div className="flex space-x-4">
            <Button asChild variant="ghost" size="sm" className="hover:text-primary transition-colors">
              <a href="https://github.com/SammDevl" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="hover:text-primary transition-colors">
              <a href="https://www.linkedin.com/in/samuel-dipta-89697336a/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="hover:text-primary transition-colors">
              <a href="https://www.facebook.com/samueldipta.yogitaruna" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Samuel Dipta Yogi Taruna. Made with <Heart className="w-4 h-4 text-red-500" /> using React, Vite & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;