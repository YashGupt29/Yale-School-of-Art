import { useState, useEffect } from "react";
import logo from "../../assets/logoLight.png";
import { FaHamburger } from "react-icons/fa";
import darkLogo from "../../assets/darkLogo.png";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (text) => {
    setHoveredLink(text);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav
      className={`${
        isScrolled ? `bg-white text-gray-800` : `bg-transparent text-white`
      }  w-full flex  fixed mt-[-20px] z-50 transition-all duration-300 md:pr-5 p-3`}
    >
      <div className="container md:mx-8 flex justify-between items-center mb-[-20px]">
        <div>
          {isScrolled ? (
            <img
              src={darkLogo}
              className="pb-2 h-[100px] w-[100px] md:h-[110px] md:w-[80px] ml-[-8px] rounded-full object-cover"
              alt="Logo"
            />
          ) : (
            <img
              src={logo}
              className="h-[100px] md:h-[130px] ml-[-8px]"
              alt="Logo"
            />
          )}
        </div>
        <div className="hidden md:flex">
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
        </div>
        <button
          onClick={toggleSidebar}
          className={`md:hidden ${isScrolled ? `text-black` : ` text-white`}`}
        >
          {isSidebarOpen ? "Close" : <FaHamburger />}
        </button>
        <div className="hidden md:flex">
          <button className="bg-[#d89c0c] text-white px-10 py-2 rounded-l-full hover:bg-yellow-100 hover:text-amber-600">
            Quick Links
          </button>
          <button className="text-white bg-black px-10 py-2 rounded-r-full">
            Contact Us
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      >
        <div
          className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col p-4 space-y-4">
            <li>
              <a href="#home" className="hover:text-yellow-500 text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-500 text-black">
                About the School
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-500 text-black">
                Apply to the School
              </a>
            </li>
            <li>
              <a
                href="#Exhibitions"
                className="hover:text-yellow-500 text-black"
              >
                Exhibitions
              </a>
            </li>
            <li>
              <a
                href="#Publications"
                className="hover:text-yellow-500 text-black"
              >
                Publications
              </a>
            </li>
            <li>
              <a href="#News" className="hover:text-yellow-500 text-black">
                News
              </a>
            </li>
            <li>
              <a
                href="#PublicEvents"
                className="hover:text-yellow-500 text-black"
              >
                Public Events
              </a>
            </li>
            <li>
              <button className="bg-yellow-400 text-white px-10 py-2 rounded-md">
                Quick Links
              </button>
            </li>
            <li>
              <button className="text-white bg-black px-10 py-2 rounded-md">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
