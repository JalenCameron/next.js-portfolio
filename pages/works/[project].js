import React from "react";
import { data } from "../data";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

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
  console.log(props);
  return (
    <div>
      <Navbar />

      <main className="mx-auto max-w-3xl pt-24">
        <h1 className="text-center text-2xl">{props.post.title}</h1>
        <div className="text-center">
          <Image
            src={props.post.image}
            alt={props.post.alt}
            width={500}
            height={330}
            className="w-96 max-w-full overflow-x-hidden"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Project;
