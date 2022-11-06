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
      <Navbar highlighted="About" />

      <main className="about-me relative my-40 mx-[12px] max-w-[1000px] border-[3px] border-solid border-[#7f96bb] border-opacity-40 p-5 lg:mx-auto">
        <h1 className="absolute top-[-1.5rem] left-0 right-0 mx-auto max-w-xl bg-[#f1f3f4] text-center">
          Hi <Emoji label="wave" symbol="👋🏽" /> I&apos;m Jalen
        </h1>

        <section className="mx-auto py-8 px-5 shadow-lg lg:max-w-2xl lg:p-8">
          <p className="py-2">
            Growing up I&apos;ve always had a strong interest in technology.
            From editing YouTube videos with Sony Vegas Pro to creating blog
            posts on <em>piczo.com</em> (does anyone remember this site?),
            I&apos;ve always tried to immerse myself with whatever technological
            applications were offered at the time. That being said, it
            wasn&apos;t until 2022 where I really started to take notice of web
            development and all that it had to offer.
          </p>

          <p className="py-2">
            With solid fundamentals in various Front-End programming languages
            such as React and PhP I&apos;m competent at building dynamic and
            fully responsive sites. I&apos;m also very capable of creating high
            quality user-centered designs thanks to my proficiency with such
            tools as Adobe XD, Figma and Tailwind.
          </p>

          <p className="py-2">
            When I&apos;m not busy with coding or design you can catch me
            analyzing soccer games, watching anime or playing some sort of
            physical sport. Oh, and I also know conversational German
            <Emoji label="sheep" symbol="✌🏽" />
          </p>
        </section>

        <section className="my-10 mx-auto py-5 px-[10px] text-center leading-10 lg:flex lg:justify-around">
          <article className="pb-4 leading-8">
            <h2 className="text-xl">Developer Tools</h2>
            <div>
              <p>HTML5</p>
              <p>JavaScript</p>
              <p>jQuery</p>
              <p>React.js</p>
              <p>Next.js</p>
            </div>
          </article>

          <article className="pb-4 text-sm leading-8">
            <h2 className="text-xl">Designer Tools</h2>
            <p>CSS</p>
            <p>SASS</p>
            <p>Adobe XD</p>
            <p>Figma</p>
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
