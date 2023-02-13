import "./App.css";
import Counter from "./components/counter";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Counter />
    </div>
  );
}

export default App;
