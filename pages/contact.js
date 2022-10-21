import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />

      <main className="h-screen w-full">
        <section className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2">
          <div>
            <h1 className="py-4 text-4xl text-[#7f96bb] sm:text-5xl">
              Get in Touch.
            </h1>
            <div className="horizontal-line max-w-[320px]"></div>
            <p className="py-4 text-base tracking-widest lg:text-2xl">
              Got a question about my work? Interested in collaborating
              together? Feel free to reach out!
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
