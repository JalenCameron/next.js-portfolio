import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
      <Navbar />

      <main className="about-me my-[120px] mx-[12px] max-w-[1000px] border-2 border-solid border-[#7f96bb] p-5 lg:mx-auto">
        <h1>
          Hi <Emoji label="sheep" symbol="👋🏼" /> I&apos;m Jalen
        </h1>

        <section className="my-10 mx-auto py-10 px-5">
          Thank you for taking the time to visit my portfolio. I first came
          across web development back in 2018 through YouTube videos and other
          free courses. I passively followed along, however I was never fully
          committed to learning it until the beginning of 2022.
        </section>

        <section className="my-5 mx-auto py-[30px] px-[10px] leading-10">
          Tools & Education
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;
