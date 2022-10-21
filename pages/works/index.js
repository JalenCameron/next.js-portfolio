import Link from "next/link";
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function Works() {
  return (
    <div>
      <Navbar />

      <main className="h-screen w-full">
        <section className="mx-auto mt-36 flex h-full w-full max-w-[1240px] justify-center p-2">
          <h1 className="text-xl sm:text-2xl lg:text-4xl">Featured Works</h1>
          <ul>
            <li>
              <Link href="/works/123">
                <a>Project 123</a>
              </Link>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Works;
