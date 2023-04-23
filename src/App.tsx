import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import userReducer from "./hooks/useReducerTest";
import Items from "./components/recursvie";
import { evaluate } from "./funcs/composition";
import Deffered from "./components/deffered";
import { useFetch } from "./hooks/useFetch";
import { TextFile } from "./test";

function App() {
  const [count, setCount] = useState(0);
  const { state, dispatch } = userReducer();
  useFetch();
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to tests!</h1>
      <div className="card">
        <button
          onClick={() =>
            dispatch({
              type: "updateProfile",
              payload: {
                key: "gender",
                val: "female",
              },
            })
          }
          className="test_button"
        >
          <p className="name">count is {state.name}</p>
        </button>
        {state.gender && (
          <p className="gender">My whatever is {state.gender}</p>
        )}
      </div>
      <Items />
      <Deffered />
      {/* <TextFile /> */}
    </div>
  );
}

export default App;
