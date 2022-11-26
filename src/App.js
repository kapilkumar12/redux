import "./App.css";
import Navbar from "./component/Navbar";
import Shop from "./component/Shop";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container mt-3">
          <Shop />
        </div>
      </Router>
    </>
  );
}

export default App;
