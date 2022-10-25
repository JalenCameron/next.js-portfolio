import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { data } from "../data";

function Portfolio() {
  return (
    <div>
      <Navbar />

      <main className="pt-24">
        <h1 className="text-center text-2xl">{data[3].title}</h1>
      </main>

      <Footer />
    </div>
  );
}

export default Portfolio;
