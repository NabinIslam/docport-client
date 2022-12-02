import React, { useContext } from 'react';
import { Button, Modal, Select, TextInput } from 'flowbite-react';
import { format } from 'date-fns';
import { AuthContext } from '../contexts/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({
  show,
  setShow,
  treatment,
  selectedDate,
  setTreatment,
  refetch,
}) => {
  const { name: treatmentName, slots, price } = treatment;

  const { user } = useContext(AuthContext);

  const date = format(selectedDate, 'PP');

  const handleAppointment = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const slot = form.slot.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      phone,
      price,
    };

    console.log(booking);

    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success('Booking confirmed');
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <Modal show={show} onClose={() => setShow(false)}>
      <Modal.Header>{treatmentName}</Modal.Header>
      <Modal.Body>
        <form
          onSubmit={handleAppointment}
          className="flex flex-col gap-4 max-w-md mx-auto my-5"
        >
          <div>
            <TextInput
              name="date"
              type="text"
              value={date}
              required={true}
              disabled
            />
          </div>
          <div>
            <Select name="slot" required={true}>
              {slots.map((slot, id) => (
                <option key={id} value={slot}>
                  {slot}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <TextInput
              name="name"
              type="text"
              defaultValue={user?.displayName}
              placeholder="Full Name"
              required={true}
              disabled
            />
          </div>
          <div>
            <TextInput name="phone" type="tel" placeholder="Phone Number" />
          </div>
          <div>
            <TextInput
              name="email"
              type="email"
              defaultValue={user?.email}
              placeholder="Email"
              required={true}
              disabled
            />
          </div>

          <Button
            className="bg-gradient-to-r from-primary to-secondary border-0"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default BookingModal;
