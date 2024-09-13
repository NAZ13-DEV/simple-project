import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  
  
  const date = new Date("Aug 17 2024");
  date.setDate(date.getDate() + count);

  return (
    <div>
      
      <div className="">
      <div>
        <button
          className="px-6 py-1 mb-5 mr-4 rounded-md bg-slate-700"
          onClick={() => setStep((c) => c - 1)}
        >
          -
        </button>
        <span>step: {step}</span>
        <button
          className="px-6 py-1 ml-4 rounded-md bg-slate-700"
          onClick={() => setStep((c) => c + 1)}
        >
          +
        </button>
      </div>
      
      <div>
        <button
          className="px-6 py-1 mr-4 rounded-md bg-slate-700"
          onClick={() => setCount((c) => c - step)}
        >
          -
        </button>
        <span>count: {count}</span>
        <button
          className="px-6 py-1 ml-4 rounded-md bg-slate-700"
          onClick={() => setCount((c) => c + step)}
        >
          +
        </button>
      </div>
      </div>
      
      <p className="mt-4 text-lg text-center text-white">
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </span>
        <span> {date.toDateString()}</span>
      </p>
    </div>
  );
};

export default Counter;
