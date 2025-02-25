import React from "react";
import { Element } from "react-scroll";
import { features } from "../constants";
import LazyLoadComponent from "../components/LazyLoadComponent";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="flex justify-between items-start mb-12 max-md:flex-col *:max-md:w-full *:last:max-md:w-1/3 max-md:text-center">
            <h2 className="w-1/3 text-[40px] max-xs:text-[25px] max-md:mb-5">
              Our Features <span className="max-lg:hidden">you Can Get</span>
            </h2>
            <p className="w-2/5 text-[18px] max-xs:text-[14px] max-md:mb-5">
              We offer a variety of interesting features that you can help
              increase yor productivity at work and manage your projrct easily.
            </p>
            <button className="rounded-btn self-center">Get Started</button>
          </div>
          <div className="flex justify-between items-center gap-10 max-sm:flex-col max-md:flex-wrap max-lg:justify-center *:basis-1/3">
            {features.map(({ id, title, desc, picture }, i) => (
              <LazyLoadComponent key={id} delay={150 * i}>
                <div>
                  <img
                    src={picture}
                    alt={`${title} image`}
                    className="w-full mb-4"
                  />
                  <h3>{title}</h3>
                  <p className="text-light">{desc}</p>
                </div>
              </LazyLoadComponent>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
