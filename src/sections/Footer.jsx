import React from "react";
import { ArrowRight, Dot } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pb-0">
      <div className="container">
        <div className="footer-top flex items-center max-md:items-start justify-between pb-4 max-md:flex-col">
          <div className="w-1/3 max-md:w-full *:mb-5 last:mb-0">
            <h2 className="text-primary">Biccas</h2>
            <p>Get Started now. Buy Our Product</p>
            <div className="flex w-full p-1 mb-4  text-white border border-white rounded-full justify-between">
              <input
                type="email"
                placeholder="Enter your email here"
                className="px-4 py-2 focus:outline-none focus:border-blue-400"
              />
              <button className="rounded-btn px-3 hover:bg-primary-dark">
                <ArrowRight />
              </button>
            </div>
          </div>
          <div className="max-md:mb-6">
            <h3 className="text-[18px] mb-2">Company</h3>
            <ul className="text-[14px] *:hover:text-white transition duration-400 *:cursor-pointer *:mb-2 *:last:mb-0 text-light">
              <li>About</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className="max-md:mb-6">
            <h3 className="text-[18px] mb-2">Support</h3>
            <ul className="text-[14px] *:hover:text-white transition duration-400 *:cursor-pointer *:mb-2 *:last:mb-0 text-light ">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="max-md:mb-6">
            <h3 className="text-[18px] mb-2">Community</h3>
            <ul className="text-[14px] *:hover:text-white transition duration-400 *:cursor-pointer *:mb-2 *:last:mb-0 text-light ">
              <li>Blog</li>
              <li>Forum</li>
              <li>Meetups</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom py-4 flex justify-between">
          <p>© 2022 Biccas Inc. Copyright and rights reserved</p>
          <ul className="flex">
            <li>Terms and Condtions</li>
            <Dot size={30} />
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
