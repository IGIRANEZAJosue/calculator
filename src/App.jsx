import "./App.css";

function App() {
   return (
      <div className="flex justify-center items-center">
         <div className="grid grid-cols-4 grid-rows-6 font-semibold text-[24px]">
            <div className="col-span-4">00</div>
            <button className="row-start-2 key">AC</button>
            <button className="row-start-2 key">+/-</button>
            <button className="row-start-2 key">%</button>
            <button className="row-start-2 key operation">÷</button>
            <button className="key operation">X</button>
            <button className="row-start-3 key">7</button>
            <button className="row-start-3 key">8</button>
            <button className="row-start-3 key">9</button>
            <button className="key operation">-</button>
            <button className="row-start-4 key">4</button>
            <button className="row-start-4 key">5</button>
            <button className="row-start-4 key">6</button>
            <button className="key operation">+</button>
            <button className="row-start-5 key">1</button>
            <button className="row-start-5 key">2</button>
            <button className="row-start-5 key">3</button>
            <button className="col-span-2 key">0</button>
            <button className="col-start-3 row-start-6 key">.</button>
            <button className="col-start-4 row-start-6 key operation">=</button>
         </div>
      </div>
   );
}

export default App;
