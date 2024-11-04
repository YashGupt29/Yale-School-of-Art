import { useState } from "react";
import logo from "../../assets/logoLight.png";
import { useEffect } from "react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? `bg-white text-gray-800` : `bg-transparent text-white`
      } flex w-full fixed mt-[-20px] z-50 transition-all duration-300`}
    >
      <div className="container mx-8 flex justify-between  items-center">
        <div>
          <img src={logo} className="h-[130px]" />
        </div>
        <ul className="ml-3 flex space-x-6">
          <li>
            <a href="#home" className="hover:text-yellow-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-500">
              About the School
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-500">
              Apply to the School
            </a>
          </li>
          <li>
            <a href="#Exhibitions" className="hover:text-yellow-500">
              Exhibitions
            </a>
          </li>
          <li>
            <a href="#Publications" className="hover:text-yellow-500">
              Publications
            </a>
          </li>
          <li>
            <a href="#News" className="hover:text-yellow-500">
              News
            </a>
          </li>
          <li>
            <a href="#PublicEvents" className="hover:text-yellow-500">
              Public Events
            </a>
          </li>
        </ul>
        <div className="flex">
          <button className="bg-yellow-400 text-white px-10 py-2 rounded-l-full">
            Quick Links
          </button>
          <button className="text-white bg-black px-10 py-2 rounded-r-full ">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
