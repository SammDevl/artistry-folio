import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isChatOpen, setIsChatOpen] = useState(true);

  const navItems = [
    { id: "home", command: "/warp home" },
    { id: "about", command: "/info samuel" },
    { id: "education", command: "/status education" },
    { id: "contact", command: "/msg contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-4 left-4 z-50 w-72 max-w-[calc(100vw-2rem)] bg-black/60 border border-white/20 rounded p-2 shadow-md pointer-events-auto font-gt text-sm backdrop-blur-sm">
      <div className="mb-2 border-b border-white/20 pb-1 flex justify-between items-center relative">
        <div>
          <span className="text-yellow-400">{'<System>'}</span> <span className="text-white">Welcome to Portfolio!</span>
        </div>
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="absolute -top-6 -right-6 w-8 h-8 bg-black border-[2px] border-white rounded-md flex items-center justify-center text-white hover:bg-gray-800 transition-colors shadow-md z-50 font-gt font-bold text-lg"
          title={isChatOpen ? "Minimize" : "Expand"}
        >
          {isChatOpen ? 'X' : '+'}
        </button>
      </div>
      {isChatOpen && (
        <div className="flex flex-col space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left px-1 py-0.5 rounded transition-colors hover:bg-white/10 ${
                activeSection === item.id ? "bg-white/5" : ""
              }`}
            >
              <span className="text-blue-300">{'<Guest>'}</span>{' '}
              <span className={activeSection === item.id ? "text-green-400" : "text-white"}>
                {item.command}
              </span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
