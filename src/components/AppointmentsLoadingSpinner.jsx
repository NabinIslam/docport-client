import { Spinner } from 'flowbite-react';
import React from 'react';

const AppointmentsLoadingSpinner = () => {
  return (
    <div className="text-center">
      <Spinner
        aria-label="Extra large Center-aligned spinner example"
        size="xl"
      />
    </div>
  );
};

export default AppointmentsLoadingSpinner;
