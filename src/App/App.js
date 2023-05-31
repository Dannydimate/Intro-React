import React from "react";
import { AppComponent } from "./AppComponent";
import { TodoProvider } from "../TodoContext/TodoContext";


function App() {
  return (
    <TodoProvider>
      <AppComponent />
    </TodoProvider>
  );
}

export default App;