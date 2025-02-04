import React from "react";
import Footer from "../components/Footer";
import HeadSEO from "../components/HeadSEO";
import Navbar from "../components/Navbar";
import SkipContent from "../components/SkipContent";

function About() {
  const Emoji = (props) => (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  );

  return (
    <div>
      {/* Adding custom Head tag with SEO content */}
      <HeadSEO />
      {/* Adding a Skip Button for Text Readers */}
      <SkipContent />
      <Navbar highlighted="About" />

      <main className="about-me relative my-40 mx-[12px] max-w-[1000px] border-[3px] border-solid border-[#7f96bb] border-opacity-40 p-5 lg:mx-auto">
        <h1 className="absolute top-[-1.5rem] left-0 right-0 mx-auto max-w-xl bg-[#f1f3f4] text-center">
          <span className="text-[#7f96bb]">Jalen</span> here{" "}
          <Emoji label="wave" symbol="👋🏽" />
        </h1>

        <section
          className="mx-auto py-8 px-5 shadow-lg lg:max-w-2xl lg:p-8"
          id="main-content"
        >
          <p className="py-2">
            Designing is more than just a job to me, it&apos;s my creative
            playground. I thrive on teaming up with diverse people like
            developers, product managers, and stakeholders, and exchanging ideas
            that breathe life into innovative concepts. With a deep
            understanding of user-centered design principles, I ensure that
            every interface I create not only looks great but also seamlessly
            connects with users, making their journeys effortless and memorable.
          </p>

          <p className="py-2">
            Whether it&apos;s wireframing, prototyping, or perfecting pixels, I
            dive headfirst into every project, obsessing over the tiniest
            details to create intuitive and delightful user interfaces.
            <Emoji label="peace-sign" symbol="✌🏽" />
          </p>

          <p className="py-2">
            <span className="text-[#7f96bb]">Currently</span>, I&apos;ve been
            fortunate to work with a great company, where I&apos;ve had the
            opportunity to flex my collaboration muscles with cross-functional
            teams, developers, product managers, and other awesome folks.
            It&apos;s been an incredible journey that has honed my ability to
            communicate effectively, work hand-in-hand with diverse
            professionals, and - of course - design and develop major projects.
          </p>
        </section>

        <section className="my-10 mx-auto py-5 px-[10px] text-center leading-10 lg:flex lg:justify-around">
          <article className="pb-4 leading-8">
            <h2 className="text-xl">Developer Tools</h2>
            <div>
              <p>HTML5</p>
              <p>JavaScript/jQuery</p>
              <p>PHP</p>
              <p>React.js</p>
              <p>Next.js</p>
            </div>
          </article>

          <article className="pb-4 text-sm leading-8">
            <h2 className="text-xl">Designer Tools</h2>
            <p>CSS/Sass</p>
            <p>Adobe XD/Photoshop/Illustrator</p>
            <p>Figma</p>
            <p>Sketch</p>
            <p>Tailwind</p>
          </article>

          <article className="pb-4 text-sm leading-8">
            <h2 className="text-xl">Education</h2>

            <div className="py-2">
              <p>
                <b>
                  <em>Front-End Web Developer Certificate</em>
                </b>
              </p>
              <p>BCIT | May 2022 - November 2022</p>
            </div>

            <div className="py-2">
              <p>
                <b>
                  <em>Bachelor of Linguistics Program</em>
                </b>
              </p>
              <p>SFU | September 2018 - December 2021</p>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;
