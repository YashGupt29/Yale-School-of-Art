import video from "../assets/video.webm";
import Box from "./box";
import Navbar from "./navbar/navbar";

const VideoComponent = () => {
  return (
    <div className="relative flex items-center justify-center h-screen mb-32">
      <video
        src={video}
        autoPlay
        loop
        muted
        className="w-full h-[90vh] object-cover mt-[-70px]"
      ></video>
      <div className="absolute inset-0 flex flex-col items-center   space-y-4">
        <Navbar />
        <div className="flex flex-col items-center pt-[220px] gap-2">
          <h1 className="text-white text-4xl md:text-3xl font-semibold drop-shadow-lg">
            Where Creativity Meets Collaboration?
          </h1>
          <h1
            className="text-black text-2xl md:text-8xl font-bold drop-shadow-lg"
            style={{
              color: "black",
              WebkitTextStroke: "1px #fbbf24",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Yale School of Art
          </h1>
          <p className="text-white mt-[10px]">
            Yale School of Art 1156 Chapel Street, POB 208339 New Haven,
            Connecticut, 06520-8339
          </p>
        </div>
        <Box />
      </div>
    </div>
  );
};

export default VideoComponent;
