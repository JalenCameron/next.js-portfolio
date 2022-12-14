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
            My journey into web development actually started when I was quite
            young. As a kid I used to add and create content on{" "}
            <em>piczo.com</em> (which for those that are unfamiliar, it was a
            blogging website that offered a few features similar to what
            WordPress offers today). This was exciting to me, mostly due to the
            fact that the possibilities seemed endless when it came to running
            my own blog/&quot;site&quot;. Unfortunately I fell out of touch with
            that passion, and passively followed along with the IT world as I
            continued to grow up.
          </p>

          <p className="py-2">
            It wasn&apos;t until 2022 where I really started to take notice of
            web development and all that it had to offer. With solid
            fundamentals in various Front-End programming languages such as
            React and PhP, I&apos;m competent at building dynamic and fully
            responsive sites. I&apos;m also very capable of creating high
            quality user-centered designs thanks to my proficiency with such
            tools as Adobe XD, Figma and Tailwind.
          </p>

          <p className="py-2">
            When I&apos;m not busy with coding or design you can catch me
            analyzing soccer games, watching anime or playing some sort of
            physical sport. Oh, and I also know conversational German
            <Emoji label="peace-sign" symbol="✌🏽" />
          </p>
        </section>

        <section className="my-10 mx-auto py-5 px-[10px] text-center leading-10 lg:flex lg:justify-around">
          <article className="pb-4 leading-8">
            <h2 className="text-xl">Developer Tools</h2>
            <div>
              <p>HTML5</p>
              <p>JavaScript</p>
              <p>PHP</p>
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
