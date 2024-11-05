import { FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logoreal.png";
import { FaCar, FaFacebook, FaPhone, FaYoutube } from "react-icons/fa6";
import { MdOutlineHandshake } from "react-icons/md";
import { BiAccessibility } from "react-icons/bi";
import { TiSocialInstagram } from "react-icons/ti";
const Footer = () => {
  return (
    <div className="bg-[#d89c0c] mt-10 p-10 flex flex-col gap-10 md:gap-0 md:flex-row md:justify-between">
      <div className="flex flex-col md:w-1/4 text-white font-semibold gap-6 text-start">
        <div className="flex items-center gap-2">
          <div className="w-16 h-16 overflow-hidden rounded-full">
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h1
            className="text-black text-2xl md:text-5xl font-bold drop-shadow-lg"
            style={{
              color: "black",
              WebkitTextStroke: "1px #fbbf24",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            YSOA
          </h1>
        </div>
        <p>
          The Yale School of Art is a graduate school that confers MFAs in
          Graphic Design, Painting/Printmaking, Photography, and Sculpture; and
          offers undergraduate-level art courses to Yale College students. Our
          website exists as an ongoing collaborative experiment in digital
          publishing and information sharing. It functions as a wiki—all members
          of the School of Art community have the ability to add new, and edit
          most existing content.
        </p>
      </div>
      <div className="flex flex-col text-white font-bold ">
        <p className="border-b border-white py-2 hover:text-stone-800 cursor-pointer">
          © 2024
        </p>
        <p className="border-b border-white py-2 hover:text-[#504c4c] cursor-pointer flex gap-1 items-center">
          <MdOutlineHandshake />
          Support the School
        </p>
        <p className="border-b border-white py-2 hover:text-[#504c4c] cursor-pointer flex gap-1 items-center">
          <FaCar />
          Visiting
        </p>
        <p className="border-b border-white py-2 hover:text-[#504c4c] cursor-pointer flex items-center gap-1">
          <TiSocialInstagram />
          Instagram
        </p>
        <p className="border-b border-white py-2 hover:text-[#504c4c] cursor-pointer flex gap-1 items-center">
          <FaFacebook />
          Facebook
        </p>
        <p className="border-b border-white py-2 hover:text-[#504c4c] cursor-pointer flex gap-1 items-center">
          <FaYoutube />
          YouTube
        </p>
        <p className="border-b border-white py-2 hover:text-[#504c4c] cursor-pointer flex gap-1 items-center">
          <FaPhone />
          Contact
        </p>
        <p className="border-b border-white py-2 hover:text-[#504c4c] cursor-pointer flex gap-1 items-center">
          <FaMapMarkerAlt />
          Sitemap
        </p>
        <p className="border-b border-white py-2 hover:text-[#504c4c] cursor-pointer flex gap-1 items-center">
          <BiAccessibility />
          Accessibility at Yale
        </p>
      </div>
      <div className="flex flex-col p-4 md:w-[32%]">
        <h2 className="text-white text-2xl mb-4 font-bold font-serif">
          Newsletter Signup
        </h2>
        <input
          type="text"
          placeholder="Enter your name"
          className="mb-2 p-2 border border-white rounded-lg"
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="mb-4 p-2 border border-white  rounded-lg "
        />
        <button className="border border-white rounded-xl  py-2 px-4 hover:bg-white hover:text-black transition duration-300">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Footer;
