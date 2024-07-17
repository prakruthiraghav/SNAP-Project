import { Tabs, Tab, TabPanel, TabList } from "react-tabs";
import React from "react";

import "./Dashboard.css";
import About from "./About";
import Viz from "./Viz";

function Dashboard() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>About</Tab>
          <Tab>Visualizations</Tab>
        </TabList>
        <div>
          <TabPanel>
            <About />
          </TabPanel>
          <TabPanel>
            <Viz />
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
}

export default Dashboard;
