import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../assets/images/chair.png';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="flex flex-col-reverse p-4 gap-10 lg:gap-0 lg:flex-row lg:p-0 lg:py-10">
      <div className="basis-full lg:basis-1/2 flex items-center justify-center">
        <div>
          <DayPicker
            className="shadow-md rounded-xl p-4"
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </div>
      <div className="basis-full lg:basis-1/2">
        <img src={chair} alt="" />
      </div>
    </div>
  );
};

export default AppointmentBanner;
