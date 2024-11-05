import "./App.css";
import Calendar from "./components/calendar";
import Lines from "./components/designing/lines";
import VideoComponent from "./components/video";
import Welcome from "./components/welcome";

function App() {
  return (
    <div className="mb-[1000px]">
      <VideoComponent />
      <Lines />
      <Welcome />
      <div className="space-y-10 py-9 md:pl-[150px] w-full mt-5">
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
        </h1>
        <Calendar />
      </div>
    </div>
  );
}

export default App;
