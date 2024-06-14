import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PlantCare from "./pages/PlantCare";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Content">
          <Switch>
            {/* landing  page */}
            <Route exact path="/">
              <Home />
            </Route>

            {/* login page */}
            <Route exact path="/Login">
              <PlantCare />
            </Route>

            {/* plant care page */}
            <Route excat path="/Plant-Care-Scheduling">
              <PlantCare />
            </Route>

            {/* inventory page */}
            <Route excat path="/Inventory">
              <PlantCare />
            </Route>

            {/* accounts page */}
            <Route path="/Accounts">
              <PlantCare />
            </Route>

            {/* Prediction page */}
            <Route path="/Prediction">
              <PlantCare />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
