import React from 'react';
import { BsClock, BsMap, BsPhone } from 'react-icons/bs';
import clock from '../assets/icons/clock.svg';
import marker from '../assets/icons/marker.svg';
import phone from '../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
  const cardDatas = [
    {
      id: 1,
      name: 'Opening Hours',
      desc: 'Lorem Ipsum is simply dummy text',
      icon: clock,
      bgClass: 'bg-gradient-to-r from-primary to-secondary',
    },
    {
      id: 2,
      name: 'Visit our location',
      desc: 'Brooklyn, NY 10036, United States',
      icon: marker,
      bgClass: 'bg-neutral',
    },
    {
      id: 3,
      name: 'Contact us now',
      desc: '+000 123 456789',
      icon: phone,
      bgClass: 'bg-gradient-to-r from-primary to-secondary',
    },
  ];

  return (
    <section>
      <div className="container px-4 mx-auto grid gap-5 grid-cols-1 py-9 md:grid-cols-2 lg:grid-cols-3">
        {cardDatas.map(cardData => (
          <InfoCard key={cardData.id} cardData={cardData} />
        ))}
      </div>
    </section>
  );
};

export default Info;
