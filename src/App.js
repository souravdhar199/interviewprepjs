import "./App.css";
import { useState } from "react";

function App() {
  const [one, Setone] = useState([""]);
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hi this is for Interview Prep </h1>
        <button
          onClick={() => {
            Setone([...one, "Callback"]);
          }}
        >
          Call Back Fucntion
        </button>
        {
          <p>
            {one.map((item) => (
              <li>{item}</li>
            ))}
          </p>
        }
      </header>
    </div>
  );
}

export default App;
