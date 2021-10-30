import "./App.css";
import Timer from "./components/Timer";

function App() {
  const time = { hours: 0, minutes: 0, seconds: 5 };

  return (
    <div className="App">
      <Timer time={time} />
    </div>
  );
}

export default App;
