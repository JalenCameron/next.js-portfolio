import React from "react";
import { data } from "./data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

/* Using the getStaticPaths() function to tell Next.js to render the pages defined in paths. This function always returns the object, which would be the data that I've mapped through and turned into string results. */
export async function getStaticPaths() {
  const paths = data.map((post) => ({
    params: { project: post.id.toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}
/* I'm pre-rendering a page during build time by generating all the HTML code and data in advance. And the data is later cached by the server. Using getStaticPaths() I'm able to create props for each piece of data passed through. I then compare the ID's of my data.js file and the props I've passed through, and only return the information with the matching ID number */
export async function getStaticProps(context) {
  const id = context.params.project;

  const project = data.filter((d) => d.id.toString() === id);

  return {
    props: {
      post: project[0],
    },
  };
}

function Project(props) {
  // console.log(props);

  // TAB RELATED INFORMATION (TAKEN FROM MATERIAL UI)
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

      <main className="mx-auto max-w-5xl px-5 pt-24">
        <h1 className="mt-6 text-center text-3xl">{props.post.title}</h1>

        <div className="text-center">
          <Image
            src={props.post.image}
            alt={props.post.alt}
            width={500}
            height={330}
            className="w-96 max-w-full overflow-x-hidden"
          />
        </div>

        {/* PROJECT LINKS */}
        <section className="mx-auto flex w-72 justify-evenly">
          <Link href={props.post.github}>
            <a className="border-2 border-solid border-[#7f96bb] border-opacity-70 px-4 py-2 hover:bg-[#7f96bb]">
              GitHub
            </a>
          </Link>
          <Link href={props.post.liveSite}>
            <a className="border-2 border-solid border-[#7f96bb] border-opacity-70 px-4 py-2 hover:bg-[#7f96bb]">
              Live Site
            </a>
          </Link>
        </section>

        {/* PROJECT OVERVIEW */}
        <section className="mt-12 leading-8">
          <h2 className="border-l-4 border-solid border-[#7f96bb] pl-2 text-xl font-bold leading-8">
            Project Overview
          </h2>
          <p className="py-4">{props.post.overview}</p>
        </section>

        {/* PROJECT TOOLS/TIMELINE/ROLES */}
        <div className="my-10 leading-10 lg:flex lg:justify-between">
          <section className="mt-9 leading-8">
            <h2 className="border-l-4 border-solid border-[#7f96bb] pl-2 text-xl font-bold leading-8">
              Project Tools
            </h2>
            <p className="py-4">{props.post.tools}</p>
          </section>

          <section className="mt-9 leading-8">
            <h2 className="border-l-4 border-solid border-[#7f96bb] pl-2 text-xl font-bold leading-8">
              Project Duration
            </h2>
            <p className="py-4">{props.post.timeline}</p>
          </section>

          <section className="mt-9 leading-8">
            <h2 className="border-l-4 border-solid border-[#7f96bb] pl-2 text-xl font-bold leading-8">
              Roles
            </h2>
            <p className="py-4">{props.post.roles}</p>
          </section>
        </div>

        <Box sx={{ bgcolor: "#f1f3f4" }} className="mx-auto pt-4">
          <Box sx={{ width: "100%", bgcolor: "#f1f3f4" }} className="pt-4">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="Tabs to sort through Design, Development and Takeaways"
              variant="scrollable"
            >
              <Tab label="Design" {...a11yProps(0)} />
              <Tab label="Development" {...a11yProps(1)} />
              <Tab label="Takeaways" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <h1>Yo</h1>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <h1>Hey</h1>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <h1>Hello</h1>
          </TabPanel>
        </Box>
      </main>

      <Footer />
    </div>
  );
}

export default Project;
