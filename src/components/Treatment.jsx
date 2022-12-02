import React from 'react';
import treatment from '../assets/images/treatment.png';
import PrimaryButton from './PrimaryButton';

const Treatment = () => {
  return (
    <section className="py-10">
      <div className="container px-4 mx-auto flex gap-6 flex-col lg:flex-row lg:items-center justify-center">
        <div className="basis-full lg:basis-1/2">
          <img
            className="rounded-lg shadow w-full border"
            src={treatment}
            alt=""
          />
        </div>
        <div className="basis-full lg:basis-1/2 flex flex-col items-start gap-3">
          <h2 className="text-3xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton to="/appointment">GET STARTED</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Treatment;
