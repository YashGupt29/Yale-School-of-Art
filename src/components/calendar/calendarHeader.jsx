import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiWindows } from "react-icons/si";
import { FaFilter } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
const CalendarHeader = () => {
  return (
    <div className="flex bg-[#d89c0c] p-4 justify-between rounded-xl">
      <div className="flex gap-2 ">
        <button className="bg-white p-3 rounded-md">
          <FaChevronLeft fill="#343434" />
        </button>
        <button className="bg-white p-3 rounded-md">
          <FaChevronRight fill="#343434" />
        </button>
      </div>
      <div className="flex gap-3">
        <button className="bg-white py-2 px-4 rounded-lg text-[#343434]">
          Subscribe
        </button>
        <button className="bg-white py-2 px-4 rounded-lg">
          <CiCalendarDate className="text-xl" />
        </button>
        <button>
          <GiHamburgerMenu />
        </button>
        <button className="bg-white py-2 px-4 rounded-lg">
          <SiWindows fill="gray" />
        </button>
        <div className="flex gap-1">
          <button className="flex items-center justify-center bg-white py-2 px-5 rounded-lg">
            <FaFilter fill="gray" />
            Filter
          </button>
          <button className="bg-white py-2  px-3 rounded-lg">
            <CiSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;
