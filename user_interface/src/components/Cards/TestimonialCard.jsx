import React from 'react'

const TestimonialCard = () => {
  return (
    <div className='snap-center bg-white'>
        <div className="w-80 m-3    p-4 border shadow-sm">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/images/toppers/topper2.jpg"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-gradient-to-r from-pink-500 to-violet-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  SWAYAM PRAKASH SAHOO
                </h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
    </div>
  )
}

export default TestimonialCard