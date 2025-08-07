import React, { useRef, useEffect, useState } from "react";

const FadeSection = ({ children }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </section>
  );
};

export default FadeSection;