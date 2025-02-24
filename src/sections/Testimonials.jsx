import React from "react";
import { Element } from "react-scroll";
import { PlayIcon, Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="bg-secondary text-white">
      <Element name="testimonials">
        <div className="container flex items-center justify-between gap-4">
          <div className=" *:mb-7 last:mb-0 w-2/5">
            <h2>What People Are Saying About Us</h2>
            <p>
              Everything you need to accept to payment and grow your money of
              manage anywhere on planet
            </p>
            <div>
              <div>
                <Quote className="w-10 h-10 mb-2" fill="white" />
                <p className="mb-6 text-[18px]">
                  I am very helped by this E-wallet application , my days are
                  very easy to use this application and its very helpful in my
                  life , even I can pay a short time 😍
                </p>
                <p>- Aria Zinanrio</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src="/testimonial-img-1.png" alt="" />
              <img src="/testimonial-img-2.png" alt="" />
              <img src="/testimonial-img-3.png" alt="" />
              <img className="mr-4" src="/testimonial-img-4.png" alt="" />
              <button className="border border-white bg-transparent size-14 cursor-pointer rounded-full flex items-center justify-center">
                <PlayIcon fill="white" />
              </button>
            </div>
          </div>
          <div className="bg-secondary-light p-10 rounded-lg">
            <div className="flex flex-col items-center mb-2">
              <img width={50} src="/form-image.png" alt="" />
              <h3>Get Started</h3>
            </div>
            <form>
              <label className="block text-white mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mb-4 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-blue-400"
              />

              <label className="block text-white mb-1">Message</label>
              <textarea
                placeholder="What are you say ?"
                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-blue-400 mb-2"
              ></textarea>

              <button type="submit" className="w-full square-btn py-3">
                Request Demo
              </button>
            </form>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Testimonials;
