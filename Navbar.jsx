"use client";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = ["Home", "Education", "Projects", "Skills", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Name Updated to Haris Tahir */}
        <div className="text-accent-yellow font-bold text-xl tracking-tighter">
          HARIS <span className="text-white">TAHIR</span>
        </div>

        {/* Navigation Items */}
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-light-gray hover:text-accent-red transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;