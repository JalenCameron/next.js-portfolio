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
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";
import HeadSEO from "../components/HeadSEO";
import SkipContent from "../components/SkipContent";

/* Using the getStaticPaths() function to tell Next.js to render the pages defined in paths. This function always returns the object, which would be the data that I've mapped through and turned into string results. */
export async function getStaticPaths() {
  const paths = data.map((post) => ({
    params: { project: post.url.toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}
/* I'm pre-rendering a page during build time by generating all the HTML code and data in advance. And the data is later cached by the server. Using getStaticPaths() I'm able to create props for each piece of data passed through. I then compare the ID's of my data.js file and the props I've passed through, and only return the information with the matching ID number */
export async function getStaticProps(context) {
  const url = context.params.project;

  const project = data.filter((d) => d.url === url);

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
      {/* Adding custom Head tag with SEO content */}
      <HeadSEO />
      {/* Adding a Skip Button for Text Readers */}
      <SkipContent />
      <Navbar />

      <main className="mx-auto max-w-[52rem] px-5 pt-24">
        {/* PROJECT TITLE AND MOCKUP IMAGE */}
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
        <section
          className="work-ctas mx-auto flex w-80 justify-evenly"
          id="main-content"
        >
          {props.post.github && (
            <Link href={props.post.github}>
              <a
                target="_blank"
                className="border-2 border-solid border-[#7f96bb] border-opacity-70 px-4 py-2 hover:bg-[#7f96bb] hover:text-[#f1f3f4]"
              >
                GitHub
              </a>
            </Link>
          )}
          {props.post.liveSite && (
            <Link href={props.post.liveSite}>
              <a
                target="_blank"
                className="border-2 border-solid border-[#7f96bb] border-opacity-70 px-4 py-2 hover:bg-[#7f96bb] hover:text-[#f1f3f4]"
              >
                Live Site
              </a>
            </Link>
          )}
          {props.post.mockups && (
            <Link href={props.post.mockups}>
              <a
                target="_blank"
                className="border-2 border-solid border-[#7f96bb] border-opacity-70 px-4 py-2 hover:bg-[#7f96bb] hover:text-[#f1f3f4]"
              >
                Designs
              </a>
            </Link>
          )}
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

        {/* TABS CONTAINER */}
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
              <Tab label="Insights" {...a11yProps(2)} />
            </Tabs>
          </Box>

          {/* INDIVIDUAL CONTAINER FOR DESIGN CONTENT */}
          <TabPanel value={value} index={0}>
            {/* IF there is Branding in my data.js file, a Brand Guidelines section will render */}
            {props.post.designBrandParagraph1 && (
              <section>
                {/* Brand Guidelines */}
                <h3 className="border-l-4 border-solid border-[#7f96bb] pl-2 text-xl font-bold leading-8">
                  Branding
                </h3>
                <p className="py-4">{props.post.designBrandParagraph1}</p>
                {/* IF there is a brand image in my data.js file, an extra section will render */}
                {props.post.designBrandImage && (
                  <div className="text-center">
                    <Image
                      src={props.post.designBrandImage}
                      alt={props.post.designBrandImageAlt}
                      width={400}
                      height={200}
                      className="h-auto max-w-[250px]"
                    />
                  </div>
                )}
                {/* IF there is more in my data.js file, an extra section will render */}
                {props.post.designBrandParagraph2 && (
                  <div>
                    {/* Brand Content 2 */}
                    <p className="py-4">{props.post.designBrandParagraph2}</p>
                  </div>
                )}
              </section>
            )}

            {/* IF there are Product Features in my data.js file, a Product Features section will render */}
            {props.post.productFeatures1 && (
              <section>
                {/* Product Features */}
                <h3 className="mt-4 border-l-4 border-solid border-[#7f96bb] pl-2 text-xl font-bold leading-8">
                  Product Features
                </h3>
                <p className="py-4">{props.post.productFeatures1}</p>
                {/* IF there are any product feature images, an image tag will render */}
                {props.post.productFeaturesImage1 && (
                  <div className="text-center md:flex md:justify-between">
                    <div className="pb-4">
                      <Image
                        src={props.post.productFeaturesImage1}
                        alt={props.post.productFeaturesImageAlt}
                        width={350}
                        height={300}
                        className=" h-auto max-w-[250px]"
                      />
                    </div>
                    <div>
                      <Image
                        src={props.post.productFeaturesImage2}
                        alt={props.post.productFeaturesImageAlt2}
                        width={350}
                        height={300}
                        className=" h-auto max-w-[250px]"
                      />
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* IF there is UI to talk about in my data.js file, a User Interface section will render */}
            {props.post.userInterface1 && (
              <section>
                {/* Product Features */}
                <h3 className="mt-8 border-l-4 border-solid border-[#7f96bb] pl-2 text-xl font-bold leading-8">
                  User Interface
                </h3>
                <p className="py-4">{props.post.userInterface1}</p>
                {/* If there are any UI Images to add, an image tag will render */}
                {props.post.userInterfaceImage && (
                  <div className="text-center">
                    <Image
                      src={props.post.userInterfaceImage}
                      alt={props.post.userInterfaceImageAlt}
                      width={500}
                      height={300}
                      className=" h-auto max-w-[250px]"
                    />
                  </div>
                )}
              </section>
            )}
          </TabPanel>

          {/* INDIVIDUAL CONTAINER FOR DEVELOPMENT CONTENT */}
          <TabPanel value={value} index={1}>
            {/* IF I want to mention Frameworks in my data.js file, a Frameworks section will render */}
            {props.post.devFrameworks1 && (
              <section>
                {/* Brand Guidelines */}
                <h3 className="border-l-4 border-solid border-[#7f96bb] pl-2 text-lg font-bold leading-normal">
                  Frameworks
                </h3>
                <p className="py-4">{props.post.devFrameworks1}</p>
              </section>
            )}

            {/* IF there is a Developer Codeblock in my data.js file, a block of code will render */}
            {props.post.codeblock && (
              <section>
                {/* Code Snippet */}
                <h3 className="border-l-4 border-solid border-[#7f96bb] pl-2 text-lg font-bold leading-normal">
                  Code Snippets
                </h3>
                <p className="py-4">{props.post.codeblockParagraph}</p>
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
              </section>
            )}

            {/* IF there were Problems I want to discuss in my data.js file, a Problems section will render */}
            {props.post.devProblems1 && (
              <section className="mt-4">
                <h3 className="border-l-4 border-solid border-[#7f96bb] pl-2 text-lg font-bold leading-normal">
                  Problems &amp; Solutions
                </h3>
                <p className="py-4">{props.post.devProblems1}</p>

                {/* IF there are more Problems I want to discuss in my data.js file, a paragraph will render */}
                {props.post.devProblems2 && (
                  <p className="py-4">{props.post.devProblems2}</p>
                )}

                {/* IF there are more Problems I want to discuss in my data.js file, a paragraph will render */}
                {props.post.devProblemsImage && (
                  <div className="text-center">
                    <Image
                      src={props.post.devProblemsImage}
                      alt={props.post.devProblemsImageAlt}
                      width={500}
                      height={300}
                      className=" h-auto max-w-[250px]"
                    />
                  </div>
                )}
              </section>
            )}
          </TabPanel>

          {/* INDIVIDUAL CONTAINER FOR TAKEAWAY CONTENT */}
          <TabPanel value={value} index={2}>
            {/* Takeaway Paragraph */}
            <p className="py-4">{props.post.takeaway1}</p>

            {/* IF there is a Takeaway Image in my data.js file, an <Image> tag will render */}
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

            {/* IF there is a second Takeaway parapraph in my data.js file, a <p> tag will render */}
            {props.post.takeaway2 && (
              <p className="py-4">{props.post.takeaway2}</p>
            )}
          </TabPanel>
        </Box>

        {/* Contact Section that will display for every project*/}
        <section className="mx-auto max-w-md p-4">
          <h2 className="mb-4 border-l-4 border-solid border-[#7f96bb] pl-2 text-xl font-bold leading-8">
            Get in Touch.
          </h2>
          <div className="flex flex-col justify-center">
            <Link href="mailto:jalenccameron@gmail.com">
              <a className="mt-6 mb-1 w-full border border-solid bg-[#7f96bb] p-4 text-center text-[#f1f3f4] hover:text-[#343437]">
                Contact Me Here
              </a>
            </Link>
            <Link href="./work">
              <a className="mb-6 w-full border border-solid border-[#7f96bb] p-4 text-center hover:bg-[#7f96bb] hover:text-[#f1f3f4]">
                View my other work
              </a>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Project;
