import Soa from "./soa";
import laptop from "../../assets/laptop.png";

const Body = () => {
  return (
    <div className="flex md:flex-row flex-col gap-1 p-10 justify-center items-center md:pr-[100px] space-x-2 mt-10">
      <Soa />
      <div className="flex items-center justify-center md:h-[490px] md:w-[500px]">
        <img src={laptop} height={500} width={500} className="object-cover" />
      </div>
    </div>
  );
};

export default Body;
