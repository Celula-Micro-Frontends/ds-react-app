import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { InputComponent, MyComponent } from "react-library";

function App() {
  return (
    <div className="grid-container">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React</h1>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>

      <div>
        <div>
          <MyComponent first="Name" middle="Second" last="Lastname" />
        </div>
        <div>
          <InputComponent text_label="Nombre" />
        </div>
      </div>
    </div>
  );
}

export default App;
