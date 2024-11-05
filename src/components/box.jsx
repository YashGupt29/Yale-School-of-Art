import { FaPeopleGroup } from "react-icons/fa6";
import { TbBooks } from "react-icons/tb";
import { MdLocationCity } from "react-icons/md";

const Box = () => {
  return (
    <div className="md:flex  w-full flex-col md:flex-row md:justify-between md:w-10/12 md:gap-3 font-serif  ">
      <div className="bg-[#d89c0c] w-[22%] h-[200px] flex items-center justify-center text-black border border-white mt-[130px] p-5 text-start rounded-md">
        <p className="text-white text-3xl font-bold font-serif">
          Where will your creativity take you?
        </p>
      </div>
      <div className="bg-gray-50 w-[22%] h-[200px] flex items-center justify-center text-black border border-white mt-[130px] rounded-md">
        <div className="flex flex-col justify-center items-center w-full h-full gap-1 md:mt-2">
          <FaPeopleGroup className="text-[80px]" fill="#343434" />
          <p className="text-[#d89c0c] text-2xl  font-semibold ">
            Facuilty & Staff
          </p>
          <div className="mt-3">
            <button className="hover:bg-[#d89c0c] text-[#d89c0c] hover:text-white h-14 w-14 rounded-t-3xl transition-all text-4xl duration-300 border-2 border-gray-200">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 w-[22%] h-[200px] flex items-center justify-center text-black border border-white mt-[130px] rounded-md">
        <div className="flex flex-col justify-center items-center w-full h-full gap-1 md:mt-2">
          <TbBooks className="text-[#343434] text-[80px]" />
          <p className="text-[hsl(42,89%,45%)] text-2xl  font-semibold">
            Courses
          </p>
          <div className="mt-3">
            <button className="hover:bg-[#d89c0c] text-[#d89c0c] hover:text-white h-14 w-14 rounded-t-3xl transition-all text-4xl duration-300 border-2 border-gray-200">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 w-[22%] h-[200px] flex items-center justify-center text-black border border-white mt-[130px] rounded-md">
        <div className="flex flex-col justify-center items-center w-full h-full gap-1 md:mt-2">
          <MdLocationCity className="text-[80px] text-[#343434]" />
          <p className="text-[#d89c0c] text-2xl  font-semibold">Facilites</p>
          <div className="mt-3">
            <button className="hover:bg-[#d89c0c] text-[#d89c0c] hover:text-white h-14 w-14 rounded-t-3xl transition-all text-4xl duration-300 border-2 border-gray-200]">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
