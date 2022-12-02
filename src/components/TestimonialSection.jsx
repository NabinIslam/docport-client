import React from 'react';
import testimonialImg from '../assets/images/testimonial-icon.png';
import people1 from '../assets/images/people1.png';
import people2 from '../assets/images/people2.png';
import people3 from '../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';

const TestimonialSection = () => {
  const testimonialDatas = [
    {
      id: 1,
      desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      photo: people1,
      name: 'Winson Herry',
      address: 'California',
    },
    {
      id: 2,
      desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      photo: people2,
      name: 'Winson Herry',
      address: 'California',
    },
    {
      id: 3,
      desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      photo: people3,
      name: 'Winson Herry',
      address: 'California',
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <h4 className="text-primary font-bold text-lg ">Testimonial</h4>
            <h2 className="text-3xl text-neutral font-semibold">
              What Our Patients Says
            </h2>
          </div>
          <div>
            <img src={testimonialImg} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonialDatas.map(testimonialData => (
            <TestimonialCard
              key={testimonialData.id}
              testimonialData={testimonialData}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
