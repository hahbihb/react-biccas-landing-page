import React from "react";
import { Element } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";
import { plans } from "../constants";
import { CircleCheck } from "lucide-react";
import CountUp from "react-countup";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <section>
      <Element name="pricing">
        <div className="container flex flex-col items-center">
          <h2 className="mb-6">Choose The Plan That's Right For You</h2>
          <p className="text-light mb-6">
            Choose the plan that works best for you. Feel free to contact us
          </p>
          <div className="rounded-md flex gap-1 mb-10 p-1 shadow-lg relative">
            <button
              className={clsx(
                "square-btn bg-transparent z-2 transition-transform duration-500",
                !isMonthly && " text-text"
              )}
              onClick={() => setIsMonthly(true)}
            >
              Bill Monthly
            </button>
            <button
              className={clsx(
                "square-btn bg-transparent z-2 transition-transform duration-500",
                isMonthly && " text-text"
              )}
              onClick={() => setIsMonthly(false)}
            >
              Bill Yearly
            </button>
            <div
              className={clsx(
                " rounded-md bg-primary absolute left-2 top-1 h-[calc(100%-8px)] w-[calc(50%-8px)] overflow-hidden transition-transform duration-500",
                !isMonthly && "translate-x-full"
              )}
            ></div>
          </div>
          <div className="flex items-center gap-4">
            {plans.map(
              ({
                id,
                title,
                priceMonthly,
                priceYearly,
                caption,
                features,
                btnText,
              }) => (
                <div
                  key={id}
                  className="pricing-card group pricing-plan_odd pricing-plan_even text-center w-1/3 shadow-lg"
                >
                  <h3>{title}</h3>
                  <p className="w-3/4 mb-2">{caption}</p>
                  <div className="mb-4 flex align-center">
                    $
                    <h2>
                      <CountUp
                        start={priceMonthly}
                        end={isMonthly ? priceMonthly : priceYearly}
                        duration={0.4}
                        useEasing={false}
                        preserveValue
                      />
                    </h2>
                  </div>
                  <div className="list-container">
                    {features.map((feature, i) => (
                      <span key={i} className="flex align-center gap-3 mb-4">
                        <CircleCheck color="white" fill="#54bd95" />
                        <p>{feature}</p>
                      </span>
                    ))}
                    <button className="square-btn py-3 shadow-md hover:shadow-xl transition duration-500 mt-5">
                      {btnText}
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
