import "./App.css";
import HomePage from "./components/HomePage";
// import Home from "./"
function App() {
  return (
    <div className="App">
      <h1 className="navbar">Welcome!</h1>
      <div className="menu-details-container">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
