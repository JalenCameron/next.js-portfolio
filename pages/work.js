import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import Capstone from "../components/Capstone";
import Nomi from "../components/Nomi";
import Weather from "../components/Weather";
import Chef from "../components/Chef";
import MyPortolio from "../components/MyPortolio";
import Trivia from "../components/Trivia";
import HeadSEO from "../components/HeadSEO";
import SkipContent from "../components/SkipContent";

function Works() {
  // TAB INFORMATION (TAKEN FROM MATERIAL UI)
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box className="py-4">{children}</Box>}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // END OF TAB INFORMATION (TAKEN FROM MATERIAL UI)

  return (
    <div>
      {/* Adding custom Head tag with SEO content */}
      <HeadSEO />
      {/* Adding a Skip Button for Text Readers */}
      <SkipContent />
      <Navbar highlighted="Work" />

      <main
        className="my-40 mx-[12px] max-w-[900px] p-5 lg:mx-auto"
        id="main-content"
      >
        <h1 className="text-center text-2xl">Featured Work</h1>

        {/* A Container for my 3 Tabs: All, Development and Design */}
        <Box sx={{ bgcolor: "#f1f3f4" }} className="mx-auto pt-4">
          <Box sx={{ width: "100%", bgcolor: "#f1f3f4" }} className="pt-4">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="Tabs to sort through Design, Development and Takeaways"
              variant="scrollable"
            >
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="Development" {...a11yProps(1)} />
              <Tab label="Design" {...a11yProps(2)} />
            </Tabs>
          </Box>

          {/* The TabPanel acts as a container to hold each project, which I've set up as individual Components */}
          <TabPanel value={value} index={0}>
            <Capstone />
            <Nomi />
            <Weather />
            <Chef />
            <MyPortolio />
            <Trivia />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Nomi />
            <Weather />
            <Trivia />
            <MyPortolio />
            <Capstone />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <MyPortolio />
            <Nomi />
            <Weather />
            <Chef />
          </TabPanel>
        </Box>
      </main>

      <Footer />
    </div>
  );
}

export default Works;
