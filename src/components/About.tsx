import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ingin Menjadi Programmer Handal Namun Enggan Ngoding
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Started my journey in web development in my highschool days, I have always been fascinated by the power of code to create and innovate.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ive never been a smart student, but I always found joy in solving problems through programming.</p>
            </div>

            <div className="grid grid-cols-2 gap-1">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 group">
                    <CardContent className="p-0">
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="p-3 bg-primary/30 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="font-semibold">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8">Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeSection>
  );
};

export default About;