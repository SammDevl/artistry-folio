import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, ChevronsDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import FadeSection from "./FadeSection";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <FadeSection>
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-8">
          <div className="text-center max-w-4xl mx-auto gt-panel p-6 sm:p-8 shadow-2xl relative">
            
            {/* Close Button styling on the panel */}
            <div className="gt-close-btn cursor-pointer">X</div>

            {/* Profile Picture */}
            <div className="animate-scale-in mb-4 mt-6">
              <div className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36">
                <div className="absolute inset-0 bg-gradient-primary rounded-full p-1 shadow-glow">
                  <Avatar className="w-full h-full">
                    <AvatarImage 
                      src="/Profile_Picture.JPG" 
                      alt="Profile picture"
                      className="object-cover"
                    />
                    <AvatarFallback className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-secondary text-primary-foreground">
                      SD
                    </AvatarFallback>
                  </Avatar>
                </div>
                {/* Floating ring animation */}
                <div className="absolute -inset-4 border-2 border-accent/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
              </div>
            </div>

            <div className="animate-fade-in mt-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
                Hi, I'm{" "}
                <span className="gt-title block text-5xl sm:text-6xl lg:text-7xl">
                  Samuel Dipta Yogi Taruna
                </span>
              </h1>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-lg sm:text-xl lg:text-2xl text-white mb-4 font-bold text-shadow-sm">
                Full Stack Developer
              </h2>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-base sm:text-lg text-white mb-6 max-w-2xl mx-auto leading-relaxed font-semibold text-shadow-sm">
                I create decent and not so functional websites, but I always try to make them look good.
              </p>
            </div>

            <div className="animate-scale-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-6" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="bg-[#114b5f] hover:bg-[#0a2f3c] text-white transition-colors border-2 border-black shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] text-base px-6 py-3 h-auto rounded-lg font-bold"
                onClick={() => scrollToSection('education')}
              >
                View My Education
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-black/40 hover:bg-black/60 text-white border-2 border-black transition-colors text-base px-6 py-3 h-auto rounded-lg font-bold"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>

           
          </div>
        </div>


        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer transition-transform hover:scale-110" onClick={() => scrollToSection('about')}>
          <ChevronsDown className="w-10 h-10 text-white drop-shadow-md" />
        </div>
      </section>
    </FadeSection>
  );
};

export default Hero;