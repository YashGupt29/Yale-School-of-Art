const SoaContent = () => {
  return (
    <div className="space-y-10">
      <p className="text-xl rainbow-text md:text-3xl text-white font-bold">
        Happening at SoA
      </p>
      <div className="border-2 border-gray-300 py-8 px-5 text-white">
        <ul className="list-disc pl-5 space-y-4">
          <li className="hover:text-blue-300 cursor-pointer hover:underline">
            Developing Fall 2024 Visiting Artist lecture schedule here &gt;
          </li>
          <li className="hover:text-blue-300 cursor-pointer hover:underline">
            Spring 2024 archive &gt;
          </li>
          <li className="hover:text-blue-300 cursor-pointer hover:underline">
            Fall 2024 exhibitions + schedule here &gt;
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SoaContent;
