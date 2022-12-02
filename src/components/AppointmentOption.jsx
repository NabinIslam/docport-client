import { Button, Card } from 'flowbite-react';
import React from 'react';

const AppointmentOption = ({ option, show, setShow, setTreatment }) => {
  const { name, slots, price } = option;
  return (
    <Card>
      <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <p className="font-semibold text-center text-gray-700 dark:text-gray-400">
        {slots.length > 0 ? slots[0] : 'Try another day :)'}
      </p>
      <p className="font-semibold text-center text-gray-700 dark:text-gray-400">
        {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available
      </p>
      <p className="font-semibold text-center text-gray-700 dark:text-gray-400">
        Price: ${price}
      </p>
      <Button
        onClick={() => {
          setShow(true);
          setTreatment(option);
        }}
        disabled={slots.length === 0}
        className="btn bg-gradient-to-r from-primary to-secondary"
      >
        BOOK APPOINTMENT
      </Button>
    </Card>
  );
};

export default AppointmentOption;
