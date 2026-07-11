import { Code2, Palette, Rocket, Users } from "lucide-react";
import FadeSection from "./FadeSection";

const About = () => {
  const skills = [
    "React", "TypeScript", "BP.JS", "Node.js",
    "TailwindCSS", "Figma", "Docker", "MongoDB", "PHP", "MySQL", "Git", "Shadcn UI"
  ];

  const features = [
    {
      icon: Code2,
      title: "Not So Clean Code",
      description: "Ill write code that is not clean, but it works! I promise.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "I Suck at design, but I can make it look decent.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "If it works, it works! Performance is not my priority.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Never worked in a team, but I can try.",
    }
  ];

  return (
    <FadeSection>
      <section id="about" className="py-10 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gt-panel p-4 sm:p-6 mb-10 relative">
            <div className="text-center mb-8">
              <h2 className="gt-title text-accent mb-4">
                About Me
              </h2>
              <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto text-shadow-sm font-semibold">
                Ingin Menjadi Programmer Handal Namun Enggan Ngoding
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 items-center mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white drop-shadow-md uppercase tracking-wider mb-2">My Journey</h3>
                <p className="text-white leading-relaxed text-shadow-sm">
                  Started my journey in web development in my highschool days, I have always been fascinated by the power of code to create and innovate.
                </p>
                <p className="text-white leading-relaxed text-shadow-sm">
                  Ive never been a smart student, but I always found joy in solving problems through programming.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="gt-button flex flex-col items-center text-center space-y-2 p-3 sm:p-4 h-full justify-start">
                      <Icon className="w-8 h-8 text-white drop-shadow-md" />
                      <h4 className="font-bold text-white uppercase tracking-wider text-sm text-shadow-sm">{feature.title}</h4>
                      <p className="text-xs text-cyan-100 text-shadow-sm leading-snug">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-white drop-shadow-md uppercase tracking-wider mb-4">Technologies & Tools</h3>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="gt-button px-4 py-2 text-sm cursor-default inline-block"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeSection>
  );
};

export default About;