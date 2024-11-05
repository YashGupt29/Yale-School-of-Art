import { MdOutlineArrowLeft, MdOutlineCalendarMonth } from "react-icons/md";
import CalendarCarousel from "./carousel";
import { FaCaretRight } from "react-icons/fa";

const CalendarBody = () => {
  return (
    <div className="px-4 py-4 space-y-3">
      <CalendarCarousel />
      <div className="flex flex-col gap-3 pt-4">
        <div className="flex justify-between">
          <button className="bg-gray-100 pr-3 text-gray-400 rounded-md flex items-center justify-center">
            <MdOutlineArrowLeft
              className="md:text-4xl mt-[2px] mr-[-8px]"
              fill="gray"
            />
            Previous Events
          </button>
          <button className="bg-gray-100 pl-3 text-gray-400 rounded-md flex items-center justify-center">
            Next Events
            <FaCaretRight className="text-2xl mt-[2px]" fill="gray" />
          </button>
        </div>
        <div>
          <button className="flex gap-2 items-center justify-center bg-[#343434] text-white p-2 rounded-md">
            <MdOutlineCalendarMonth />
            Subscribe to this calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarBody;
