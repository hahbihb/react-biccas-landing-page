import React from "react";

const Companies = () => {
  return (
    <section>
      <div className="container w-full">
        <h2 className="mb-12 text-center">
          More than 25,000 teams use Collabs
        </h2>
        <div className="flex z-1 items-center justify-between max-md:justify-center max-lg:flex-wrap *:max-md:w-40 max-md:gap-8 gap-3">
          <img src="/unsplash-logo.png" alt="" />
          <img src="/notion-logo.png" alt="" />
          <img src="/intercom-logo.png" alt="" />
          <img src="/descript-logo.png" alt="" />
          <img src="/grammarly-logo.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Companies;
