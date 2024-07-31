import { useState } from "react";
import "./App.css";

function App() {
   const [display, setDisplay] = useState("");

   const handleClick = (value) => {
      if (value === "=") {
         setDisplay(eval(display));
      } else if (value === "AC") {
         setDisplay("");
      } else {
         setDisplay(display + value);
      }
   };

   return (
      <div className="flex justify-center items-cente my-24">
         <div className="grid grid-cols-4 grid-rows-6 rounded-lg font-semibold text-[24px] overflow-auto">
            <div className="text-right col-span-4 bg-gray-300 p-4 text-3xl">
               {display}
            </div>
            <button onClick={() => handleClick("AC")} className="row-start-2 key">AC</button>
            <button className="row-start-2 key">+/-</button>
            <button onClick={() => handleClick("/100")} className="row-start-2 key">%</button>
            <button onClick={() => handleClick("/")} className="row-start-2 key operation">÷</button>
            <button onClick={() => handleClick("*")} className="key operation">X</button>
            <button onClick={() => handleClick("7")} className="row-start-3 key">7</button>
            <button onClick={() => handleClick("8")} className="row-start-3 key">8</button>
            <button onClick={() => handleClick("9")} className="row-start-3 key">9</button>
            <button onClick={() => handleClick("-")} className="key operation">-</button>
            <button onClick={() => handleClick("4")} className="row-start-4 key">4</button>
            <button onClick={() => handleClick("5")} className="row-start-4 key">5</button>
            <button onClick={() => handleClick("6")} className="row-start-4 key">6</button>
            <button onClick={() => handleClick("+")} className="key operation">+</button>
            <button onClick={() => handleClick("1")} className="row-start-5 key">1</button>
            <button onClick={() => handleClick("2")} className="row-start-5 key">2</button>
            <button onClick={() => handleClick("3")} className="row-start-5 key">3</button>
            <button onClick={() => handleClick("0")} className="border-gray-400 col-span-2 border">0</button>
            <button onClick={() => handleClick(".")} className="col-start-3 row-start-6 key">.</button>
            <button onClick={() => handleClick("=")} className="col-start-4 row-start-6 key operation">=</button>
         </div>
      </div>
   );
}

export default App;
