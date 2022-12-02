import React from 'react';

const OurServiceCard = ({ ourServicesCardData }) => {
  const { icon, name, desc } = ourServicesCardData;

  return (
    <div className="shadow-md p-6 rounded-xl text-center flex flex-col items-center justify-center gap-2 border">
      <img src={icon} alt="" />
      <h4 className="font-bold">{name}</h4>
      <p className="">{desc}</p>
    </div>
  );
};

export default OurServiceCard;
