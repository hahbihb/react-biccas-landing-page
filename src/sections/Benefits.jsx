import React from "react";
import { CircleCheck } from "lucide-react";

const Benefits = () => {
  return (
    <section>
      <div className="container flex items-center justify-between ">
        <div className="relative z-2 max-w-[600px] max-lg:max-w-388 mb-10">
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
        </div>

        <div className=" pointer-events-none">
          <img src="/benefits-img.png" className="max-lg:h-auto" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
