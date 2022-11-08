import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Featured from "../components/Featured";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jalen Cameron · Web Developer</title>
        <meta
          name="description"
          content="Jalen Cameron's Web Development Portfolio"
        />
        <meta
          name="keywords"
          content="Nextjs, React, Web Developer, UI/UX Designer, JavaScript"
        />
        <meta name="author" content="Jalen Cameron" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
        <main>
          <Main />
          <Featured />
        </main>
      </div>

      <Footer />
    </div>
  );
}
