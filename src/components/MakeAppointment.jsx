import React from 'react';
import drImg from '../assets/images/doctor-small.png';
import PrimaryButton from './PrimaryButton';
import './MakeAppointment.css';

const MakeAppointment = () => {
  return (
    <section className="makeAppointmentBg mt-28">
      <div className="container mx-auto px-4 py-4 lg:py-0 flex flex-col gap-6 lg:flex-row lg:items-center">
        <div className="basis-full lg:basis-1/2">
          <img className="mt-0 lg:mt-[-100px]" src={drImg} alt="" />
        </div>
        <div className="flex flex-col items-start gap-3 basis-full lg:basis-1/2">
          <h4 className="text-primary font-bold text-lg ">Appointment</h4>
          <h2 className="text-3xl text-white font-semibold">
            Make an appointment Today
          </h2>
          <p className="text-white">
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

export default MakeAppointment;
