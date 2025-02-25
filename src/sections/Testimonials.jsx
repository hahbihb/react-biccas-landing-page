import React, { useState } from "react";
import { Element } from "react-scroll";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const [swiperIndex, setSwiperIndex] = useState(0);
  return (
    <section className="bg-secondary text-white">
      <Element name="testimonials">
        <div className="container flex items-center justify-between gap-4 max-md:flex-col">
          <div className=" *:mb-7 last:mb-0 w-2/5 max-md:w-full">
            <h2>What People Are Saying About Us</h2>
            <p>
              Everything you need to accept to payment and grow your money of
              manage anywhere on planet
            </p>

            <Swiper
              slidesPerView={1}
              modules={[Navigation]}
              navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
            >
              {testimonials.map(({ id, comment, name }) => (
                <SwiperSlide key={id}>
                  <div>
                    <Quote className="w-10 h-10 mb-2" fill="white" />
                    <p className="mb-6 text-[18px]">{comment}</p>
                    <p>- {name}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex items-center *:max-md:size-12 gap-3">
              <button
                onClick={() =>
                  setSwiperIndex(
                    (prevIndex) => prevIndex !== 0 && prevIndex - 1
                  )
                }
                className="border border-white mr-2 max-xs:mr-0 bg-transparent size-8 max-sm:size-6  cursor-pointer rounded-full flex items-center justify-center custom-prev"
              >
                <ChevronLeft color="white" />
              </button>
              {testimonials.map(({ id, avatarUrl }, i) => (
                <img
                  key={id}
                  src={avatarUrl}
                  alt={`testimonial-${i}`}
                  className={`max-sm:size-12 size-14 cursor-pointer rounded-full ${
                    i === swiperIndex
                      ? "outline outline-offset-2 outline-2 outline-primary"
                      : ""
                  }`}
                />
              ))}
              <button
                onClick={() =>
                  setSwiperIndex(
                    (prevIndex) => prevIndex !== 3 && prevIndex + 1
                  )
                }
                className="border border-white ml-2 max-xs:ml-0 bg-transparent size-8 max-sm:size-6  cursor-pointer rounded-full flex items-center justify-center custom-next"
              >
                <ChevronRight color="white" />
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

              <button
                type="submit"
                className="w-full square-btn py-3 hover:bg-primary-dark "
              >
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
