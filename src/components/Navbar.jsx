import { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed z-50 transition-all duration-500 p-8 ${
        show
          ? "top-2 left-10 right-10 bg-[#F2E1E0]/90 backdrop-blur-md shadow-lg rounded-full py-2 px-6"
          : "top-0 left-0 right-0 bg-[#F2E1E0] py-2 px-12"
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">
        <h1
          className={`text-2xl md:text-4xl font-bold text-black transition-all duration-900 ${
            show ? "hidden md:block" : "block"
          }`}
        >
          Jeany Florencia
        </h1>
        <ul
          className={`flex justify-center items-center gap-6 text-black font-[cursive] text-lg md:text-xl transition-all duration-500`}
        >
          {["Profile", "Project", "Contact"].map((item, i) => (
            <li>
              <a href="#" className="hover:underline transition duration-300">
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
