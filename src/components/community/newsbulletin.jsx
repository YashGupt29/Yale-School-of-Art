import { useState } from "react";
import { createPortal } from "react-dom";

const NewsBulletin = ({ title, subheading, shortText, fullContent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const Modal = () => (
    <div
      className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
      onClick={toggleModal}
    >
      <div
        className="bg-white text-black p-6 rounded-md max-w-lg w-full shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{fullContent}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={toggleModal}
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div
      className={`text-white rounded-md max-w-md  mx-auto space-y-10 ${
        isModalOpen ? "blur-sm" : ""
      }`}
    >
      <h2 className="md:text-3xl text-xl font-bold mb-2 md:text-nowrap rainbow-text">
        {title}
      </h2>
      <div className="border border-white p-4 rounded-md">
        <h3 className="text-lg mb-2 text-white/90 font-semibold">
          {subheading}
        </h3>
        <p className="text-sm mb-4 text-gray-200  font-thin italic">
          {shortText}
        </p>
        <button className="text-blue-400 underline" onClick={toggleModal}>
          See More
        </button>
      </div>

      {isModalOpen && createPortal(<Modal />, document.body)}
    </div>
  );
};

export default NewsBulletin;
