import React from "react";
import { data } from "../components/data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import Contact from "../components/Contact";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";
import HeadSEO from "../components/HeadSEO";

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
      <HeadSEO />

      <Navbar />

      <main className="mx-auto max-w-[52rem] px-5 pt-24">
        <h1 className="mt-6 text-center text-4xl">{props.post.title}</h1>

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
            <a
              target="_blank"
              className="border-2 border-solid border-[#7f96bb] border-opacity-70 px-4 py-2 hover:bg-[#7f96bb] hover:text-[#f1f3f4]"
            >
              GitHub
            </a>
          </Link>
          <Link href={props.post.liveSite}>
            <a
              target="_blank"
              className="border-2 border-solid border-[#7f96bb] border-opacity-70 px-4 py-2 hover:bg-[#7f96bb] hover:text-[#f1f3f4]"
            >
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
            {/* Design Paragraph 1 */}
            <p className="py-4">{props.post.designParagraph1}</p>
            {/* Design Image 1 */}
            {props.post.designImage1 && (
              <div className="text-center">
                <Image
                  src={props.post.designImage1}
                  alt={props.post.desAlt1}
                  width={550}
                  height={400}
                  className="h-auto max-w-[250px]"
                />
              </div>
            )}
            {/* Design Paragraph 2 */}
            {props.post.designParagraph2 && (
              <p className="py-4">{props.post.designParagraph2}</p>
            )}
            {/* Design Image 2 */}
            {props.post.designImage2 && (
              <div className="text-center">
                <Image
                  src={props.post.designImage2}
                  alt={props.post.desAlt2}
                  width={550}
                  height={400}
                  className="h-auto max-w-[250px]"
                />
              </div>
            )}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {/* Developer Paragraph 1 */}
            <p className="py-4">{props.post.devParagraph1}</p>
            {/* Developer Image 1*/}
            {props.post.devImage1 && (
              <div className="text-center">
                <Image
                  src={props.post.devImage1}
                  alt={props.post.devAlt1}
                  width={550}
                  height={400}
                  className="h-auto max-w-[250px]"
                />
              </div>
            )}
            {/* Developer Codeblock 1 */}
            {props.post.codeblock && (
              <figure>
                <SyntaxHighlighter
                  language="javascript"
                  style={nightOwl}
                  customStyle={{
                    borderRadius: "5px",
                    backgroundColor: "#001E3C",
                  }}
                >
                  {props.post.codeblock}
                </SyntaxHighlighter>
                <figcaption className="mx-auto mb-8 max-w-2xl pt-2">
                  {props.post.figcaption}
                </figcaption>
              </figure>
            )}
            {/* Developer Paragraph 2 */}
            {props.post.devParagraph2 && (
              <p className="py-4">{props.post.devParagraph2}</p>
            )}
            {/* Developer Codeblock 2 */}
            {props.post.codeblock2 && (
              <figure>
                <SyntaxHighlighter
                  language="javascript"
                  style={nightOwl}
                  customStyle={{
                    borderRadius: "5px",
                    backgroundColor: "#001E3C",
                  }}
                >
                  {props.post.codeblock2}
                </SyntaxHighlighter>
                <figcaption className="mx-auto mb-8 max-w-2xl pt-2">
                  {props.post.figcaption}
                </figcaption>
              </figure>
            )}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {/* Takeaway 1 */}
            <p className="py-4">{props.post.takeaway1}</p>
            {/* Takeaway Image */}
            {props.post.takeawayImage && (
              <div className="text-center">
                <Image
                  src={props.post.takeawayImage}
                  alt={props.post.takeawayAlt}
                  width={550}
                  height={400}
                  className="h-auto max-w-[250px]"
                />
              </div>
            )}
            {/* Takeaway 2 */}
            {props.post.takeaway2 && (
              <p className="py-4">{props.post.takeaway2}</p>
            )}
          </TabPanel>
        </Box>
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

export default Project;
