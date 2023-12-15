import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeadSEO from "../components/HeadSEO";
import SkipContent from "../components/SkipContent";
import Nomi from "../components/Nomi";
import Weather from "../components/Weather";
import Edealer from "../components/Edealer";

export default function Home() {
  const Emoji = (props) => (
    <span
      className="emoji mx-2"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  );

  return (
    <div>
      {/* Adding custom Head tag with SEO content */}
      <HeadSEO />

      <div>
        {/* Adding a Skip Button for Text Readers */}
        <SkipContent />

        <Navbar />
        <main>
          <section className="mt-[20rem] w-full" id="main-content">
            <div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2">
              {/* An Animation to essentially have my text slide up the screen */}
              <div className="hero-container">
                <div className="slide-up">
                  <span>
                    <h1 className="text-xl tracking-widest sm:text-2xl lg:text-4xl">
                      Hi, I&apos;m
                    </h1>
                    <h2 className="py-4 text-4xl text-[#7f96bb] sm:text-5xl lg:text-8xl">
                      Jalen Cameron
                    </h2>
                  </span>
                </div>

                {/* Adding a Line Animation */}
                <div className="horizontal-line"></div>

                <div className="slide-up my-2">
                  <span>
                    {/* Adding a Carousel Animation for fun */}
                    <div className="carousel-wrapper h-[50px] w-full overflow-hidden">
                      <div className="carousel-mover relative bottom-[0%]">
                        <div className="h-[50px] w-full">
                          <p className="flex py-4 text-lg uppercase lg:text-2xl">
                            UI/UX Designer <Emoji label="draw" symbol="✍🏽" />
                          </p>
                        </div>
                        <div className="h-[50px] w-full">
                          <p className="flex py-4 text-lg uppercase lg:text-2xl">
                            Product Designer
                            <Emoji label="wizard" symbol="📲" />
                          </p>
                        </div>
                        <div className="h-[50px] w-full">
                          <p className="flex py-4 text-lg uppercase lg:text-2xl">
                            Front-End Developer
                            <Emoji label="laptop" symbol="💻" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Work Section to showcase some of my projects */}
          <section className="my-40 mx-[12px] max-w-[900px] p-5 lg:mx-auto">
            <h2 className="text-center font-bold">Featured Work</h2>
            <Nomi />
            <Weather />
            <Edealer />
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
