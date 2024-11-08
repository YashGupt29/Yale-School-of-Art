import { useEffect, useRef, useState } from "react";
import student from "../assets/student.png";
const Welcome = () => {
  const [imgVisible, setImgVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const imgObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setImgVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const textObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setTextVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (imgRef.current) imgObserver.observe(imgRef.current);
    if (textRef.current) textObserver.observe(textRef.current);

    return () => {
      if (imgRef.current) imgObserver.unobserve(imgRef.current);
      if (textRef.current) textObserver.unobserve(textRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center md:flex-row  md:w-10/12 md:justify-between md:items-center gap-4 mt-14 p-[50px] md:ml-20">
      <div>
        <img
          ref={imgRef}
          src={student}
          className={`h-[550px] w-[400px] hidden md:flex ${
            imgVisible ? "slide-ins" : "hidden"
          }`}
        />
      </div>
      <div
        className={`flex flex-col md:w-[60%] gap-8 ${
          textVisible ? "slide-in-right" : ""
        }`}
        ref={textRef}
      >
        <div className="flex items-center gap-11">
          <p className="font-semibold mr-2 text-lg">Welcome To</p>
          <hr className="flex-grow border-t-2 border-gray-200" />
        </div>

        <div className={`flex md:flex-row flex-col gap-4 md:gap-10`}>
          <h1
            className="text-black text-2xl md:text-6xl font-bold drop-shadow-lg font-serif"
            style={{
              color: "black",
              WebkitTextStroke: "1px #fbbf24",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Yale School ­of Art
          </h1>
          <div className="flex flex-col">
            <p className="font-serif text-[#343434]">
              The Yale School of Art is a graduate school that confers MFAs in
              Graphic Design, Painting/Printmaking, Photography, and Sculpture;
              and offers undergraduate-level art courses to Yale College
              students. Our website exists as an ongoing collaborative
              experiment in digital publishing and information sharing. It
              functions as a wiki—all members of the School of Art community
              have the ability to add new, and edit most existing content.
            </p>
            <div className="flex gap-2 mt-5">
              <button className="bg-[#d89c0c] text-white px-10 py-2 rounded-2xl text-lg font-semibold">
                Log In
              </button>
              <button className="text-[#d89c0c] border-2 border-[#d89c0c] rounded-2xl p-2 font-semibold">
                Academic Calendar{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
