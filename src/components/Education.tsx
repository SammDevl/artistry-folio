import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      period: "2018 - 2020",
      description: "Specialized in Machine Learning and Artificial Intelligence. Completed thesis on neural network optimization for web applications.",
      gpa: "3.9/4.0",
      achievements: ["Summa Cum Laude", "Research Assistant", "Teaching Assistant"]
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "University of California, Berkeley",
      period: "2014 - 2018",
      description: "Comprehensive study of software development methodologies, data structures, algorithms, and system design.",
      gpa: "3.8/4.0",
      achievements: ["Dean's List", "Computer Science Honor Society", "Hackathon Winner"]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: Award
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      icon: Award
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      date: "2021",
      icon: Award
    },
    {
      title: "React Advanced Certification",
      issuer: "Meta",
      date: "2023",
      icon: Award
    }
  ];

  const courses = [
    "Advanced Algorithms & Data Structures",
    "Machine Learning & AI",
    "Database Systems Design",
    "Software Architecture Patterns",
    "Computer Networks & Security",
    "Human-Computer Interaction",
    "Mobile App Development",
    "Cloud Computing & DevOps"
  ];

  return (
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
                    <CardTitle className="text-xl mb-2 md:mb-0">{edu.degree}</CardTitle>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                  </div>
                  <p className="text-primary font-semibold">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>
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

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3 text-primary" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                        <p className="text-xs text-primary font-medium">{cert.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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
  );
};

export default Education;