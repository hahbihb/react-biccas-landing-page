import { Element } from "react-scroll";
import { Check, Database, CirclePlay } from "lucide-react";
import LazyLoadComponent from "../components/LazyLoadComponent";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  return (
    <section className="relative pt-24 pb-20">
      <Element name="home">
        <div className="container flex items-center justify-between max-md:flex-col max-md:items-center relative">
          <div className="absolute size-120 rounded-full bg-primary-light opacity-20 blur-3xl -top-40 -left-40"></div>
          <div className="absolute size-160 rounded-full bg-primary opacity-20 -z-1 blur-3xl -bottom-2/3 -right-100"></div>
          <div className="absolute size-120 rounded-full bg-pink-light opacity-20 blur-3xl -top-2/3 left-1/2 -translate-x-1/2"></div>
          <LazyLoadComponent>
            <div className="relative z-2 max-w-[600px] max-lg:max-w-388 max-md:mb-8 *:max-md:text-center flex flex-col max-md:items-center">
              <h1 className="text-left mb-16 capitalize relative ">
                We're here
                <br className="sm:hidden" /> to increase your productivity
                <img
                  src="/hero-svg.svg"
                  className="absolute max-w-7/10 max-xs:w-9/10 top-[105%] left-[13%] md:left-0 "
                  alt="hero-svg"
                />
              </h1>
              <p className="max-w-440 mb-10 text-text max-md:mb-10 text-left max-md:text-[16px]">
                Let's make your work more organize and easily using
                <br className="max-md:hidden" /> the Taskio Dashboard with many
                of the latest
                <br className="max-md:hidden" /> features in managing work every
                day.
              </p>
              <div className="flex items-center gap-[5px]">
                <button className="rounded-btn hover:shadow-lg hover:bg-primary-light">
                  Try free trial
                </button>
                <button className="rounded-btn text-black hover:shadow-lg bg-white flex items-center gap-2">
                  <CirclePlay color="#191a15" />
                  <span>View Demo</span>
                </button>
              </div>
            </div>
          </LazyLoadComponent>
          <LazyLoadComponent>
            <div className=" pointer-events-none relative">
              <img
                src="/hero-img.png"
                className="max-lg:h-auto"
                alt="hero Image"
              />
              <div
                className={`max-lg:hidden absolute top-[10%] -left-[40%] flex rounded-lg shadow-md bg-white justify-between items-center w-62 p-3 transition-opacity duration-500 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
              >
                <div>
                  <p className="text-light font-bold">Enter Amount</p>
                  <h4 className="text-[20px] font-bold">$450.00</h4>
                </div>
                <button className="rounded-btn text-sm py-2">Send</button>
              </div>
              <img
                src="/hero-rectangle-bl.png"
                alt=""
                className={`absolute max-lg:hidden bottom-[10%] -left-[20%] shadow-sm transition-opacity duration-500 delay-800 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
              <img
                src="/hero-shape-bottom.png"
                alt=""
                className="absolute max-lg:hidden -bottom-[5%] right-[10%] transition-opacity duration-500"
              />
              <div className="absolute top-[40%] max-lg:hidden -left-[20%] rounded-md p-2 bg-violet-950 shadow-md -rotate-30 transition-opacity duration-500">
                <Check color="white" />
              </div>
              <div className="absolute top-[15%] max-lg:hidden -right-[5%] rounded-md p-3 bg-gold shadow-md rotate-30">
                <Database color="white" />
              </div>
              <img
                src="/hero-card.png"
                alt=""
                className={`absolute max-lg:hidden -right-[17%] bottom-10 transition-opacity duration-500 delay-500 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </LazyLoadComponent>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
