import "./App.css";
import Lottie from "lottie-react";
import animate from "./assets/Animation1712517229911.json";
function App() {
  return (
    <>
      <div className="w-[300px]">
        <Lottie animationData={animate}/>
      </div>
    </>
  );
}

export default App;
