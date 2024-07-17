import { Tabs, Tab, TabPanel, TabList } from "react-tabs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

import "./Dashboard.css";
import Chart from "./Chart";

import kidney from "../images/Kidney.png";
import depression from "../images/Depression.png";
import diabetes from "../images/Diabetes.png";
import cardio from "../images/Cardiovascular.png";
import snap from "../images/SNAP Allocation.png";

const url =
  "https://public.tableau.com/views/SNAP_17211359810550/Map?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link&:showVizHome=no&:embed=yes";

const chart1 =
  "https://www.ers.usda.gov/scripts/widget_charts_of_note.js?key=LgB2wBomDUtX8BKU8h3LN9DcmC98g0ID5EhgPB9i&cId=55416";

const Viz = () => (
  <div>
    <iframe
      src={url}
      width="100%"
      height="600px"
      title="Tableau Dashboard"
    ></iframe>
    ;
  </div>
);
const About = () => (
  <div className="container">
    <h2 className="heading">
      Does participation in SNAP have an effect on chronic health conditions and
      their outcomes?
    </h2>
    <p className="paragraph">
      Supplemental Nutrition Assistance Program (SNAP) provides food benefits to
      low-income families to supplement their grocery budget so they can afford
      the nutritious food essential to health and well-being. In this project,
      we analyzed data from the Census Survey and the Center for Disease
      Control’s Behavorial Risk Factor Surveillance System (BRFSS) to see if
      there existed any significant imporvements in health conditions among
      those who participate in SNAP.
    </p>

    <div className="chart">
      <Chart scriptUrl={chart1} containerId="chart_container_1" />
    </div>

    <div>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="expand" />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="summary"
        >
          Who is our client?
        </AccordionSummary>
        <AccordionDetails className="details">
          Supplemental Nutrition Assistance Program (SNAP) provides food
          benefits to low-income families to supplement their grocery budget so
          they can afford the nutritious food essential to health and
          well-being. In this project, we analyzed data from the Census Survey
          and the Center for Disease Control’s Behavorial Risk Factor
          Surveillance System (BRFSS) to see if there existed any significant
          imporvements in health conditions among those who participate in SNAP.
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="expand" />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="summary"
        >
          Hypothesis
        </AccordionSummary>
        <AccordionDetails className="details">
          <i>
            Between 2013 and 2022, increased SNAP allocation in each state will
            decrease the prevalence of Cardiovascular Disease, Diabetes,
            Depression, and Kidney Disease among SNAP-eligible populations.
          </i>

          <p>
            To test our hypothesis, we used the percentage change in Yes
            responses from the BRFSS survey for each health condition between
            2013 and 2022 as our metric.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="expand" />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="summary"
        >
          Data overview
        </AccordionSummary>
        <AccordionDetails className="details">
          Data was pulled from the census and the CDC's BRFSS. For all of this
          data, 2013 to 2022 was reviewed for the 50 United States and DC, with
          Guam, Puerto Rico and the Virgin Islands not being included. Once all
          data was pulled, each table was joined to the others on State and
          Year.{" "}
          <p>
            Two separate queries were conducted on the census data: retrieving
            SNAP allocation numbers (tract level and summed up to state level)
            and retrieving the average household size and income data (state
            level.) Population totals were calculated and compared to verify
            presence.
          </p>
          <p>
            {" "}
            From this data, a maximum income to qualify for SNAP was calculated
            for each State-Year utilizing the USDA's eligibility standards. From
            the BRFSS, chronic health condition data relating to cardiovascular
            disease, depression, diabetes, and kidneys was pulled. Additionally,
            household income groups for these health conditions was pulled in
            order to discover potential SNAP qualified persons.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="expand" />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="summary"
        >
          Results
        </AccordionSummary>
        <AccordionDetails className="details">
          <div className="image-container">
            <img src={snap} alt="result" className="image" />
            <p className="description">
              Result 1: This figure illustrates the rate of change in the
              percentage of SNAP allocation among the eligible population by
              state from 2013 to 2022. We can observe a significant increase in
              SNAP allocation across each state, with the percentage of SNAP
              allocation doubling in most states.
            </p>
          </div>

          <div className="image-container">
            <img src={cardio} alt="result" className="image" />
            <p className="description">
              Result 2: This figure illustrates the rate of change in
              cardiovascular disease among SNAP-eligible populations by state
              from 2013 to 2022. Blue bars represent a positive rate of change,
              whereas red bars indicate a negative rate of change.
              Interestingly, Washington DC is the only location in the U.S. that
              shows a negative rate of change.
            </p>
          </div>

          <div className="image-container">
            <img src={depression} alt="result" className="image" />
            <p className="description">
              Result 3: This figure displays the rate of change in depression
              among SNAP-eligible populations by state from 2013 to 2022. Blue
              bars represent a positive rate of change, whereas red bars
              indicate a negative rate of change. As observed, only eight states
              in the U.S. show a negative rate of change.
            </p>
          </div>

          <div className="image-container">
            <img src={diabetes} alt="result" className="image" />
            <p className="description">
              Result 4: This figure illustrates the rate of change in diabetes
              among SNAP-eligible populations by state from 2013 to 2022. Blue
              bars represent a positive rate of change, whereas red bars
              indicate a negative rate of change. Only five states in the U.S.
              exhibit a negative rate of change.
            </p>
          </div>

          <div className="image-container">
            <img src={kidney} alt="result" className="image" />
            <p className="description">
              Result 5: This figure shows the rate of change in kidney disease
              among SNAP-eligible populations by state from 2013 to 2022. Blue
              bars represent a positive rate of change, whereas red bars
              indicate a negative rate of change. Unfortunately, none of the
              states in the U.S. exhibit a negative rate of change.
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="expand" />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="summary"
        >
          Limitations
        </AccordionSummary>
        <AccordionDetails className="details">
          <ul>
            <li>
              Applying finer degrees of data from census was difficult due to
              sampling.
            </li>
            <li>
              Breaking down demographic information beyond household income
              posed challenges as there was no way to link a person from one to
              the other within health conditions
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  </div>
);

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
