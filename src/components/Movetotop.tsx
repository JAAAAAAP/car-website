"use client"
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function MoveToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-primary-500 text-white shadow-lg transition-opacity duration-300 transform hover:scale-110 active:scale-90 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <ArrowUp size={24} />
    </button>
  );
}