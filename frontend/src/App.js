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
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Plant-Care-Scheduling">
              <PlantCare />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
