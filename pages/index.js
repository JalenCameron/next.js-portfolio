import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeadSEO from "../components/HeadSEO";
import SkipContent from "../components/SkipContent";
import Nomi from "../components/Nomi";
import Weather from "../components/Weather";
import Capstone from "../components/Capstone";

export default function Home() {
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
      <HeadSEO />

      <div>
        <SkipContent />
        <Navbar />
        <main>
          <section className="mt-[20rem] w-full" id="main-content">
            <div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2">
              <div>
                <h1 className="text-xl tracking-widest sm:text-2xl lg:text-4xl">
                  Hi, I&apos;m
                </h1>
                <h2 className="py-4 text-4xl text-[#7f96bb] sm:text-5xl lg:text-8xl">
                  Jalen Cameron
                </h2>
                <div className="horizontal-line"></div>
                <div className="carousel-wrapper h-[50px] w-full overflow-hidden">
                  <div className="carousel-mover relative bottom-[0%]">
                    <div className="h-[50px] w-full">
                      <p className="py-4 text-lg uppercase lg:text-2xl">
                        Front-End Web Developer{" "}
                        <Emoji label="laptop" symbol="💻" />
                      </p>
                    </div>
                    <div className="h-[50px] w-full">
                      <p className="py-4 text-lg uppercase lg:text-2xl">
                        UI/UX Designer <Emoji label="draw" symbol="✍🏽" />
                      </p>
                    </div>
                    <div className="h-[50px] w-full">
                      <p className="py-4 text-lg uppercase lg:text-2xl">
                        Wordpress Wizard <Emoji label="wizard" symbol="🧙🏽‍♂️" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="my-40 mx-[12px] max-w-[900px] p-5 lg:mx-auto">
            <h2 className="text-center font-bold">Featured Work</h2>
            <Nomi />
            <Weather />
            <Capstone />
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
