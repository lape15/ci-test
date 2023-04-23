import React, { createContext, useReducer } from "react";

type State = {
  count: number;
};

const initialtate: State = {
  count: 0,
};
// Create a new context
const CounterContext = createContext(undefined);
type Action =
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number }
  | { type: "error" };

// Define a reducer function
const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// Define a provider component that will wrap our app
const CounterProvider = ({ children }) => {
  // Use the useReducer hook to manage our state
  const [state, dispatch] = useReducer(counterReducer, initialtate);

  // Create an object with our state and dispatch function
  const value = { state, dispatch };

  // Render the provider with our context value and children components
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

// Define a consumer hook to access the context
const useCounter = () => {
  const context = React.useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};

// Define a component that uses the counter state
const Counter = () => {
  // Use our custom hook to get the state and dispatch function
  const { state, dispatch } = useCounter();

  // Define our click handlers
  const handleIncrement = () => dispatch({ type: "INCREMENT" });
  const handleDecrement = () => dispatch({ type: "DECREMENT" });

  // Render the counter UI
  return (
    <>
      <div>Count: {state.count}</div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  );
};

// Finally, we can use our provider component to wrap our app
const App = () => (
  <CounterProvider>
    <Counter />
  </CounterProvider>
);

export default App;
