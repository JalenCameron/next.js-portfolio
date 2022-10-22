import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { data } from "../data";

function Project() {
  const router = useRouter();
  const { project } = router.query;

  return (
    <div>
      <main>
        <h1>Image</h1>
        <div>
          <h2>{data[0].title}</h2>
        </div>
      </main>
    </div>
  );
}

export default Project;
