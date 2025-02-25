import React from "react";
import { Star } from "lucide-react";
import { Element } from "react-scroll";
import { about } from "../constants/index";
import LazyLoadComponent from "../components/LazyLoadComponent";

const About = () => {
  return (
    <section className="bg-[#F9F8FE]">
      <Element name="about">
        <div className="container flex gap-3 max-md:flex-col">
          <div className="left max-w-150 max-md:mb-10">
            <h2 className="max-md:mb-3">
              How we support our partners all over the world
            </h2>
            <p className="mb-10 text-light text-[16px]">
              SaaS become a common delivery model for many business application,
              including office software, messaging software, payroll processing
              software, DBMS software, management software
            </p>
            <div className="ratings flex gap-7">
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <Star fill="#ffc728" color="t" />
                  <Star fill="#ffc728" color="t" />
                  <Star fill="#ffc728" color="t" />
                  <Star fill="#ffc728" color="t" />
                  <Star fill="#a6a6a6" color="t" />
                </div>
                <p>
                  <b>4.9</b> / 5 rating
                </p>
                <p className="font-bold text-light">databricks</p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <Star fill="#ffc728" color="t" />
                  <Star fill="#ffc728" color="t" />
                  <Star fill="#ffc728" color="t" />
                  <Star fill="#ffc728" color="t" />
                  <Star fill="#a6a6a6" color="t" />
                </div>
                <p>
                  <b>4.4</b> / 5 rating
                </p>
                <p className="font-bold text-light">chainanalysis</p>
              </div>
            </div>
          </div>
          <div className="right flex flex-col justify-between *:max-md:mb-5">
            {about.map(({ title, id, text, icon }, i) => (
              <LazyLoadComponent key={id} delay={150 * i}>
                <div className="flex items-start gap-3">
                  <div className="bg-white flex items-center justify-center text-primary size-10 text-center place-content-center rounded-sm  ">
                    {icon}
                  </div>
                  <div className="w-9/10 ">
                    <h3>{title}</h3>
                    <p className="text-light">{text}</p>
                  </div>
                </div>
              </LazyLoadComponent>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default About;
