import { useEffect, useRef, useState } from "react";

const NewsLetter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSecondVisible, setIsSecondVisible] = useState(false);
  const [isThirdVisible, setIsThirdVisible] = useState(false);
  const [isFourthVisible, setIsFourthVisible] = useState(false);
  const [isFifthVisible, setIsFifthVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current.getBoundingClientRect();
      const isInView =
        rect.top < window.innerHeight + 180 && rect.bottom >= -100;
      setIsVisible(isInView);
      if (isInView) {
        setTimeout(() => {
          setIsSecondVisible(true);
          setTimeout(() => {
            setIsThirdVisible(true);
            setTimeout(() => {
              setIsFourthVisible(true);
              setTimeout(() => {
                setIsFifthVisible(true);
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#d89c0c] w-[40%] p-4 rounded-md space-y-6">
      <div
        className={`bg-gray-100 p-4 rounded-md transition-transform duration-500 ${
          isVisible ? "slide-up" : "slide-in"
        }`}
        ref={ref}
      >
        <p className="font-bold rainbow-text">
          NEW CALENDARS BEGINNING SUMMER 2020
        </p>
      </div>
      <div className="space-y-2">
        <div
          className={`bg-white p-4 rounded-md text-start text-blue-500 transition-transform duration-500 ${
            isSecondVisible ? "slide-up" : "slide-in"
          }`}
          ref={ref}
        >
          <a className="font-semibold" href="#events">
            Public Calendar &gt;&gt;
          </a>
          <p className="text-neutral-700 font-normal">
            Containing those events open to the public.
          </p>
        </div>
        <div
          className={`bg-white p-4 rounded-md text-start text-blue-500 transition-transform duration-500 ${
            isThirdVisible ? "slide-up" : "slide-in"
          }`}
          ref={ref}
        >
          <a className="font-semibold" href="#events">
            School of Art in the World &gt;&gt;
          </a>
          <p className="text-neutral-700 font-normal">
            Containing events and exhibitions hosted by, led by, or featuring
            members of the School of Art community.
          </p>
        </div>
        <div
          className={`bg-white p-4 rounded-md text-start text-blue-500 transition-transform duration-500 ${
            isFourthVisible ? "slide-up" : "slide-in"
          }`}
          ref={ref}
        >
          <a className="font-semibold" href="#events">
            Community Calendar &gt;&gt;
          </a>
          <p className="text-neutral-700 font-normal">
            Containing those events open only to the SoA community.
          </p>
        </div>
      </div>
      <div
        className={`bg-gray-100 p-4 rounded-md transition-transform duration-500 ${
          isFifthVisible ? "slide-up" : "slide-in"
        }`}
        ref={ref}
      >
        <p className="font-bold rainbow-text">SIGN UP FOR OUR NEWSLETTER</p>
      </div>
      <div
        className={`bg-gray-50 p-2 rounded-lg text-center space-y-4 transition-transform duration-500 ${
          isVisible ? "slide-up" : ""
        }`}
        ref={ref}
      >
        <p className="text-neutral-700">
          We publish two newsletters during the academic year:
        </p>
        <p className="text-start">
          <span className="font-bold text-[#343434]">
            News From New Haven —{" "}
          </span>
          A public monthly newsletter about news and events happening on campus.
        </p>
        <p className="text-start text-[#343434]">
          <span className="font-bold">Week at SoA —</span>A weekly
          community-only email listing SoA events as well as public and
          university events in New Haven.
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;
