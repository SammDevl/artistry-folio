import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";
import FadeSection from "./FadeSection";

const Education = () => {
  const education = [
    {
      school: "Telkom University",
      period: "2025 - 2028",
      description: "Trying to specialize in Software Engineering, focusing on full stack development and software architecture.",
      gpa: "TBD",
      achievements: ["Something Lab Member"]
    },
    {
      school: "Vocational High School of TI Bali Global Denpasar",
      period: "2022 - 2025",
      description: "Graduated with a focus on Software Engineering, learning the fundamentals of programming and web development.",
      gpa: "85",
      achievements: ["Web Development Club Member"]
    }
  ];

  const courses = [
    "React Native Development",
    "Beginner JavaScript",
    "Beginner Node.js",
    "Intermediate PHP",
    "Intermediate MySQL",
    "Beginner TypeScript",
    "Beginner Docker"
  ];

  return (
    <FadeSection>
      <section id="education" className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Education & Learning
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My academic journey and continuous learning path in technology
            </p>
          </div>

          {/* Formal Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-primary" />
              Formal Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <CardTitle className="text-xl mb-2 md:mb-0 font-semibold text-primary">{edu.school}</CardTitle>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Final Score: {edu.gpa}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <Badge key={achievementIndex} variant="secondary" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 flex items-center justify-center">
              <BookOpen className="w-6 h-6 mr-3 text-primary" />
              Key Coursework
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {courses.map((course, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {course}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeSection>
  );
};

export default Education;