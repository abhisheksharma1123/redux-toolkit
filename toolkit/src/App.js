import "./App.css";
import Counter from "./components/Counter/Counter";
import Tasks from "./components/Tasks/Task";
import Humans from "./components/Humans/Human";

function App() {
  return (
    <div className="App">
      <Counter />
      <Tasks />
      <Humans />
    </div>
  );
}

export default App;
