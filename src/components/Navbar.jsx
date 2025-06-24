import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-[#FFFFFF]/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5)] rounded-full py-3 px-10 transition-all duration-500">

      <div className="flex items-center justify-between gap-6">
        <ul className="flex items-center gap-8 text-black font-[cursive] text-lg md:text-xl">
          {["Profile", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:underline transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
