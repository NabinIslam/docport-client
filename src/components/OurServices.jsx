import React from 'react';
import fluoride from '../assets/images/fluoride.png';
import cavity from '../assets/images/cavity.png';
import whitening from '../assets/images/whitening.png';
import OurServiceCard from './OurServiceCard';

const OurServices = () => {
  const ourServicesCardDatas = [
    {
      id: 1,
      icon: fluoride,
      name: 'Fluoride Treatment',
      desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
    },
    {
      id: 2,
      icon: cavity,
      name: 'Cavity Filling',
      desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
    },
    {
      id: 3,
      icon: whitening,
      name: 'Teeth Whitening',
      desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
    },
  ];

  return (
    <section>
      <div className="container mx-auto py-10 px-4">
        <h3 className="font-bold text-center text-primary">OUR SERVICES</h3>
        <h2 className="font-semibold text-3xl text-center">
          Services We Provide
        </h2>
        <div className="py-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {ourServicesCardDatas.map(ourServicesCardData => (
            <OurServiceCard
              key={ourServicesCardData.id}
              ourServicesCardData={ourServicesCardData}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
