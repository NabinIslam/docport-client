import React from 'react';
import HeroImage from '../assets/images/chair.png';
import './Hero.css';
import PrimaryButton from './PrimaryButton';

const Hero = () => {
  return (
    <section className="h[80vh] hero_bg">
      <div className="container py-5 px-4 lg:py-28 mx-auto flex gap-4 lg:gap-0 flex-col-reverse items-center justify-center lg:flex-row">
        <div className="lg:basis-1/2 flex flex-col items-start justify-center gap-5">
          <h1 className="font-bold text-4xl text-center lg:text-start">
            Your New Smile Starts Here
          </h1>
          <p className="text-center lg:text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <div className="flex items-center justify-center mx-auto lg:m-0">
            <PrimaryButton to={'/appointment'}>GET STARTED</PrimaryButton>
          </div>
        </div>
        <div className="lg:basis-1/2">
          <img className="shadow border rounded-xl" src={HeroImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
