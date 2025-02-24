import React from "react";
import { Element } from "react-scroll";
import { features } from "../constants";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="flex justify-between items-start mb-12">
            <h2 className="w-1/3 text-[40px]">Our Features you Can Get</h2>
            <p className="w-2/5 text-[18px]">
              We offer a variety of interesting features that you can help
              increase yor productivity at work and manage your projrct easily.
            </p>
            <button className="rounded-btn self-center">Get Started</button>
          </div>
          <div className="flex justify-between gap-10">
            {features.map(({ id, title, desc, picture }) => (
              <div key={id} className="w-1/3">
                <img src={picture} alt={`${title} image`} className="w-full" />
                <h3>{title}</h3>
                <p className="text-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
