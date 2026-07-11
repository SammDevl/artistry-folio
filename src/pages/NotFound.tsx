import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#87CEEB] p-4">
      <div className="gt-panel max-w-md w-full text-center">
        <h1 className="gt-title text-6xl mb-4">404</h1>
        <p className="text-white text-xl font-bold drop-shadow-md mb-8">Oops! Page not found</p>
        <a href="/" className="gt-button inline-block text-center w-full">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
