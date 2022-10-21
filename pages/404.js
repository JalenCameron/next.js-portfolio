import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function fourZeroFour() {
  return (
    <div>
      <Navbar />

      {/* Thanks to https://codepen.io/tsotsoblotso/pen/mVMvVv for the idea */}
      <main className="code-area z-[-1] m-auto w-[95%] py-1 pr-1 pl-8">
        <span className="block py-4 italic text-[#7f96bb]">
          {"// 404 page not found."}
        </span>

        <span className="block">
          <span className="text-[#d65562]">if</span>(
          <span className="text-[#4ca8ef]">!</span>
          <span className="italic text-[#777]">found</span>)
          <span className="pl-2">{"{"}</span>
        </span>

        <span>
          <span className="pl-4 text-[#2796ec]">
            <i className="inline-block w-[10px]"></i>explain
          </span>
          <span>
            (
            <span className="text-[#777]">
              &apos;How did you get here?&apos;
            </span>
            );
          </span>
          <span className="block">{"}"}</span>
          <span className="block py-4 italic text-[#777] underline">
            {<Link href="/">Go home!</Link>}
          </span>
        </span>
      </main>
    </div>
  );
}

export default fourZeroFour;
