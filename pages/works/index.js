import Link from "next/link";
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { data } from "../data";
import { useState } from "react";
import Design from "../../components/Design";
import Developer from "../../components/Developer";

function Works() {
  // TAB STUFF
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

  return (
    <div>
      <Navbar />

      <main className="my-40 mx-[12px] max-w-[900px] p-5 lg:mx-auto">
        <h1 className="text-center text-2xl">Featured Works</h1>
        <Box sx={{ bgcolor: "#f1f3f4" }} className="mx-auto pt-4">
          <Box sx={{ width: "100%", bgcolor: "#f1f3f4" }} className="pt-4">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="scrollable"
            >
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="Development" {...a11yProps(1)} />
              <Tab label="Design" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <span>
              <h2 className="text-base">{data[0].title}</h2>
            </span>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Developer />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Design />
          </TabPanel>
        </Box>
      </main>

      <Footer />
    </div>
  );
}

export default Works;
