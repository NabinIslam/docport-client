import { useQuery } from '@tanstack/react-query';
import { Button, Table } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const MyAppointments = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      const data = await res.json();

      return data;
    },
  });

  return (
    <div className="p-4">
      <div>
        <h3 className="text-xl font-semibold">My Appointments</h3>
        <div className="mt-6">
          <Table>
            <Table.Head>
              <Table.HeadCell>Sl No.</Table.HeadCell>
              <Table.HeadCell>Patient Name</Table.HeadCell>
              <Table.HeadCell>Treatment</Table.HeadCell>
              <Table.HeadCell>Date</Table.HeadCell>
              <Table.HeadCell>Time</Table.HeadCell>
              <Table.HeadCell>Payment</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {bookings.map((booking, i) => (
                <Table.Row
                  key={booking._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>{i + 1}</Table.Cell>

                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {booking.patient}
                  </Table.Cell>
                  <Table.Cell>{booking.treatment}</Table.Cell>
                  <Table.Cell>{booking.appointmentDate}</Table.Cell>
                  <Table.Cell>{booking.slot}</Table.Cell>
                  <Table.Cell>
                    {booking.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <Button>Pay</Button>
                      </Link>
                    )}
                    {booking.price && booking.paid && <span>Paid</span>}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;
