import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOption from './AppointmentOption';
import AppointmentsLoadingSpinner from './AppointmentsLoadingSpinner';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ selectedDate }) => {
  const [show, setShow] = useState(false);
  const [treatment, setTreatment] = useState(null);

  const date = format(selectedDate, 'PP');

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['appointmentOptions', date],
    queryFn: () =>
      fetch(`http://localhost:5000/appointment-options?date=${date}`).then(
        res => res.json()
      ),
  });

  if (isLoading) {
    return <AppointmentsLoadingSpinner />;
  }

  return (
    <section>
      <h4 className="text-primary text-center font-semibold text-lg ">
        Available Appointments on {format(selectedDate, 'PP')}
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {appointmentOptions.map(option => (
          <AppointmentOption
            key={option._id}
            option={option}
            show={show}
            setShow={setShow}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          show={show}
          setShow={setShow}
          treatment={treatment}
          setTreatment={setTreatment}
          selectedDate={selectedDate}
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default AvailableAppointments;
