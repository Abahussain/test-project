"use client";

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const [darkMood, setDarkMood] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMood(true);
  }, []);

  useEffect(() => {
    if (darkMood) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMood]);

  return (
    <div
      className="relative w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1"
      onClick={() => setDarkMood(!darkMood)}
    >
      <div
        className="absolute bg-white dark:bg-gray-700 w-6 h-6 rounded-full shadow-md transition-transform duration-300"
        style={{
          transform: darkMood ? "translateX(0)" : "translateX(100%)",
        }}
      ></div>
      <div
        className="flex items-center transition-transform duration-300"
        style={{
          transform: darkMood ? "translateX(0)" : "translateX(2rem)", // Adjust the distance as needed
        }}
      >
        {darkMood ? (
          <BsSunFill className="text-white" size={18} />
        ) : (
          <FaMoon className="text-white" size={18} />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
