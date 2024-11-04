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
      <Calendar />
    </div>
  );
}

export default App;
