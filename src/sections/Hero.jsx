import { Element, Link as LinkScroll } from "react-scroll";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20">
      <Element name="home">
        <div className="container flex items-center justify-between ">
          <div className="relative z-2 max-w-[600px] max-lg:max-w-388 ">
            <h1 className="text-left mb-16 capitalize">
              We're here to increase your productivity
              <img src="/hero-svg.svg" className="absolute" alt="hero-svg" />
            </h1>
            <p className="max-w-440 mb-10 text-text max-md:mb-10 text-left">
              Let's make your work more organize and easily using
              <br /> the Taskio Dashboard with many of the latest
              <br /> features in managing work every day.
            </p>
            <div className="flex items-center gap-[5px]">
              <button className="rounded-btn">Try free trial</button>
              <button className="rounded-btn text-black bg-white">
                View Demo
              </button>
            </div>
          </div>

          <div className=" pointer-events-none">
            <img src="/hero-img.png" className="max-lg:h-auto" alt="hero" />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
