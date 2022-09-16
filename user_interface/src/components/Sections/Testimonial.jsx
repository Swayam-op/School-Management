import React from "react";
import TestimonialCard from "../Cards/TestimonialCard";

const Testimonial = () => {
  return (
    <div className="w-full md:my-12 my-8 ">
      <h1 className="text-center md:text-4xl text-3xl font-bold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-stone-700">
          TESTIMONIALS
        </span>
      </h1>
      <section className="text-gray-600 body-font">
        <div className="scrollbar flex flex-row flex-nowrap  snap-x  py-12 mx-auto overflow-x-scroll scroll-m-0.5">
      
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
        
        
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
