import React from "react";
import { CircleCheck } from "lucide-react";
import LazyLoadComponent from "../components/LazyLoadComponent";

const Benefits = () => {
  return (
    <section className="relative">
      <div className="absolute size-200 rounded-full bg-primary opacity-20 -z-1 blur-3xl -bottom-2/3 -right-100"></div>
      <div className="absolute size-200 rounded-full bg-pink-light opacity-40 blur-3xl -z-1 -top-1/2 -left-20 -translate-x-1/2"></div>
      <div className="container flex items-center justify-between max-md:flex-col">
        <div className="relative z-2 max-w-[600px] max-lg:max-w-388 mb-10">
          <LazyLoadComponent>
            <h2 className="mb-5">What Benefits Will You Get</h2>
            <ul>
              <li className="flex gap-3 mb-3 text-[18px]">
                <CircleCheck fill="#54bd95" color="white" />
                <span> Free Consulting With Expert Saving Money</span>
              </li>
              <li className="flex gap-3 mb-3 text-[18px]">
                <CircleCheck fill="#54bd95" color="white" />
                <span> Online Banking</span>
              </li>
              <li className="flex gap-3 mb-3 text-[18px]">
                <CircleCheck fill="#54bd95" color="white" />
                <span> Investment Report Every Month</span>
              </li>
              <li className="flex gap-3 mb-3 text-[18px]">
                <CircleCheck fill="#54bd95" color="white" />
                <span> Saving Money For The Future</span>
              </li>
              <li className="flex gap-3 mb-3 text-[18px]">
                <CircleCheck fill="#54bd95" color="white" />
                <span> Online Transanction</span>
              </li>
            </ul>
          </LazyLoadComponent>
        </div>

        <div className=" pointer-events-none">
          <LazyLoadComponent delay={200}>
            <img src="/benefits-img.png" className="max-lg:h-auto" alt="hero" />
          </LazyLoadComponent>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
