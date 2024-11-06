import "./App.css";
import Calendar from "./components/calendar";
import Body from "./components/community/body";
import Lines from "./components/designing/lines";
import Footer from "./components/footer";
import NewsLetter from "./components/newletter/newletter";
import VideoComponent from "./components/video";
import Welcome from "./components/welcome";

function App() {
  return (
    <div>
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
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div>
                <span className="text-4xl md:text-6xl">C</span>
                ALENDAR
              </div>
              <span className="text-5xl md:text-7xl mx-6">&</span>
              <div>
                <span className="text-4xl md:text-6xl">N</span>
                <span>EWSLETTER</span>
              </div>
            </div>
          </h1>
          <div className="flex flex-col gap-4  md:flex-row justify-between px-[10%]  p-10">
            <Calendar />
            <NewsLetter />
          </div>
        </div>
      </div>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
