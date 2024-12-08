import React, { useState } from "react";
import navbarData from "@/data/navbarData.json";

const Navbar: React.FC = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <a
          href="#"
          className="text-white text-lg font-semibold hover:text-gray-200 transition"
        >
          {navbarData.brand}
        </a>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          {navbarData.links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className={`px-3 py-2 rounded ${
                  active === link.name
                    ? "bg-gray-200 text-blue-500"
                    : "hover:bg-blue-600 hover:text-white text-white"
                } transition`}
                onClick={() => setActive(link.name)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
