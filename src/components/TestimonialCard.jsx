import React from 'react';

const TestimonialCard = ({ testimonialData }) => {
  const { name, address, photo, desc } = testimonialData;
  return (
    <div className="shadow-md p-6 rounded-xl flex flex-col gap-5 border">
      <p>{desc}</p>
      <div className="flex items-center gap-5">
        <div>
          <img
            className="rounded-full border-primary border-4"
            src={photo}
            alt=""
          />
        </div>
        <div>
          <h6>{name}</h6>
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
