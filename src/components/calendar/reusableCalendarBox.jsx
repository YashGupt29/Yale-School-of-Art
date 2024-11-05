import { CiClock1 } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";

const CalendarBox = ({
  day,
  month,
  title,
  description,
  location,
  children,
  time,
  color,
}) => {
  return (
    <div className="bg-white flex py-4 px-6 gap-5 justify-between cursor-pointer hover:bg-yellow-50 rounded-md transform transition-transform duration-300 hover:scale-95 mt-3">
      <div
        className={`h-[80px] ${color} w-[10px] rounded-t-full rounded-b-full`}
      />
      <div className="space-y-[-5px] text-center">
        <p className="text-[25px] font-bold text-gray-700">{day}</p>
        <p className="text-xs font-light">{month}</p>
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p className="font-light">{description}</p>
        <div className="flex gap-3">
          <p className="text-gray-400 text-xs flex items-center gap-2">
            <FaLocationArrow fill="gray" className="text-[12px]" />
            {location}
          </p>
          <p className="text-gray-400 text-xs flex items-center gap-1">
            <CiClock1 fill="gray" className="text-[14px] align-middle" /> {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalendarBox;
