import React, { useState } from 'react';
import AppointmentBanner from '../components/AppointmentBanner';
import AvailableAppointments from '../components/AvailableAppointments';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <div className="container mx-auto px-4 lg:p-0">
        <AppointmentBanner
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <AvailableAppointments selectedDate={selectedDate} />
      </div>
    </div>
  );
};

export default Appointment;
