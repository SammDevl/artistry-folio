import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Picture */}
          <div className="animate-scale-in mb-8">
            <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
              <div className="absolute inset-0 bg-gradient-primary rounded-full p-1 shadow-glow">
                <Avatar className="w-full h-full">
                  <AvatarImage 
                    src="/placeholder.svg" 
                    alt="Profile picture"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-secondary text-primary-foreground">
                    JD
                  </AvatarFallback>
                </Avatar>
              </div>
              {/* Floating ring animation */}
              <div className="absolute -inset-4 border-2 border-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                John Doe
              </span>
            </h1>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
              Full Stack Developer & UI/UX Designer
            </h2>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              I create beautiful, functional web applications with modern technologies.
              Passionate about clean code, great design, and exceptional user experiences.
            </p>
          </div>

          <div className="animate-scale-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-3"
              onClick={() => scrollToSection('education')}
            >
              View My Education
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-3"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>

          <div className="animate-fade-in flex justify-center space-x-6" style={{ animationDelay: '0.8s' }}>
            <Button variant="ghost" size="sm" className="hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-primary transition-colors">
              <Download className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;