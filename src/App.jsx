import AddNewSpecs from "./component/specs/AddNewSpecs";
import Specs from "./component/specs/specs";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Specs />} />
          <Route path="/add-new-specs" element={<AddNewSpecs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
