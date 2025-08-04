import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              John Doe
            </div>
            <p className="text-muted-foreground">
              Full Stack Developer & UI/UX Designer
            </p>
          </div>

          <div className="flex space-x-4">
            <Button variant="ghost" size="sm" className="hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} John Doe. Made with <Heart className="w-4 h-4 text-red-500" /> using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;