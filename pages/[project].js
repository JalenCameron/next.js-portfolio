import React from "react";
import { data } from "./data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

// Creating a static path that matches with the Link tag path
export async function getStaticPaths() {
  const paths = data.map((post) => ({
    params: { project: post.id.toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}
// Taking the static path and seeing if it matches with the data returned from the path. Once data is found, creating props
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
  return (
    <div>
      <Navbar />

      <main className="mx-auto max-w-2xl px-5 pt-24">
        <h1 className="mt-6 text-center text-3xl">{props.post.title}</h1>

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
            <a className="border-2 border-solid border-[#7f96bb] border-opacity-70 px-4 py-2 hover:bg-[#7f96bb]">
              GitHub
            </a>
          </Link>
          <Link href={props.post.liveSite}>
            <a className="border-2 border-solid border-[#7f96bb] border-opacity-70 px-4 py-2 hover:bg-[#7f96bb]">
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
        <div>
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
      </main>

      <Footer />
    </div>
  );
}

export default Project;
