import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";
import FadeSection from "./FadeSection";

const Education = () => {
  const education = [
    {
      school: "Telkom University",
      period: "2025 - 2029",
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
      <section id="education" className="py-10 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gt-panel p-4 sm:p-6 mb-10 relative">
            <div className="text-center mb-8">
              <h2 className="gt-title text-3xl sm:text-4xl font-bold mb-2">
                Education & Learning
              </h2>
              <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto text-shadow-sm font-semibold">
                My academic journey and continuous learning path in technology
              </p>
            </div>

            {/* Formal Education */}
            <div className="mb-8">
              <h3 className="gt-title text-xl mb-4 flex items-center text-shadow-sm text-white">
                <GraduationCap className="w-5 h-5 mr-2 text-yellow-300 drop-shadow-md" />
                Formal Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-[#114b5f] border-[3px] border-black rounded-xl p-4 flex flex-col text-left shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 border-b-2 border-white/20 pb-3">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1 md:mb-0 drop-shadow-md">{edu.school}</h4>
                        <p className="text-xs text-cyan-200 font-bold">Final Score: {edu.gpa}</p>
                      </div>
                      <div className="flex items-center text-cyan-200 mt-2 md:mt-0 font-bold">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </div>
                    </div>
                    <div>
                      <p className="text-white text-sm mb-3 leading-relaxed text-shadow-sm">
                        {edu.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="bg-black/30 border border-white/30 text-white rounded px-3 py-1 text-xs">
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Relevant Coursework */}
            <div className="text-center">
              <h3 className="gt-title text-xl mb-4 flex items-center justify-center text-shadow-sm text-white">
                <BookOpen className="w-5 h-5 mr-2 text-yellow-300 drop-shadow-md" />
                Key Coursework
              </h3>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {courses.map((course, index) => (
                  <div 
                    key={index} 
                    className="gt-button px-4 py-2 text-sm font-medium cursor-default"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeSection>
  );
};

export default Education;