import React from 'react';

const InfoCard = ({ cardData }) => {
  const { name, desc, icon, bgClass } = cardData;
  return (
    <div
      className={`${bgClass} px-6 py-12 flex items-center gap-4 rounded-xl shadow-2xl`}
    >
      <img src={icon} alt="" />
      <div>
        <h5 className="font-semibold text-white text-xl">{name}</h5>
        <p className="text-white">{desc}</p>
      </div>
    </div>
  );
};

export default InfoCard;
