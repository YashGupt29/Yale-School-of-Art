import "./App.css";
import Calendar from "./components/calendar";
import Body from "./components/community/body";
import Lines from "./components/designing/lines";
import NewsLetter from "./components/newletter/newletter";
import VideoComponent from "./components/video";
import Welcome from "./components/welcome";

function App() {
  return (
    <div className="mb-[1000px]">
      <VideoComponent />
      <Lines />
      <Welcome />
      <div className="py-9  w-full mt-5 flex ">
        <div className="w-full space-y-16 text-center">
          <h1
            className="text-black text-2xl md:text-4xl font-bold drop-shadow-lg font-serif"
            style={{
              color: "black",
              WebkitTextStroke: "1px #fbbf24",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            <span className="md:text-6xl">C</span>
            ALENDAR
            <span className="text-7xl mx-6">&</span>
            <span className="text-6xl">N</span>
            <span>EWSLETTER</span>
          </h1>
          <div className="flex justify-between px-[10%]">
            <Calendar />
            <NewsLetter />
          </div>
        </div>
      </div>
      <Body />
    </div>
  );
}

export default App;
