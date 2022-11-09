import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Featured from "../components/Featured";
import HeadSEO from "../components/HeadSEO";

export default function Home() {
  return (
    <div>
      <HeadSEO />

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
