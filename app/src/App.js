import "./App.css";
import "react-tabs/style/react-tabs.css";

import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <h1 className="title">Impact of SNAP Allocation on Health Outcomes</h1>
      <h4 className="subtitle">A Decade-Long Analysis (2013-2022)</h4>
      <Dashboard />
    </div>
  );
}

export default App;
