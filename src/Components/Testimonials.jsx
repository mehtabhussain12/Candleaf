import React from 'react';
import T1 from '../assets/T2.png'
import T2 from '../assets/T1.png'
import T3 from '../assets/T3.png'
import Popular from './Popular';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Luisa",
      quote: "“I love it! No more air fresheners”",
      img: T1 
    },
    {
      name: "Edorado",
      quote: "“Raccomended for everyone”",
      img: T2 
    },
    {
      name: "Mart",
      quote: "“Looks very natural, the smell is awesome”",
      img: T3 
    }
  ];

  return (
    <>
      <div className='bg-[#56B280] bg-opacity-10'>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold pt-20">Testimonials</h1>
          <p className="font-Poppins mt-6 text-lg text-[#5E6E89]">
            Some quotes from our happy customers
          </p>
        </div>
        <div className='flex flex-wrap justify-center gap-8 px-4 pb-20'>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='bg-white rounded-lg shadow-md p-6 max-w-sm'>
              <div className='flex justify-center mb-4'>
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className='w-24 h-24 rounded-full object-cover'
                />
              </div>
              <div className='text-center'>
                <p className='text-lg text-gray-700 mb-4'>" {testimonial.quote} "</p>
                <h5 className='text-xl font-semibold text-gray-900'>{testimonial.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Popular></Popular>
    </>
  );
}

export default Testimonials;
