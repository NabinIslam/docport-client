import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Avatar, Dropdown, Table } from 'flowbite-react';
import LoadingSpinner from '../components/LoadingSpinner';
import ConfirmationModal from './ConfirmationModal';

const ManageDoctors = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      try {
        const res = await fetch('http://localhost:5000/doctors', {
          headers: {
            authorization: `baerer ${localStorage.getItem('accessToken')}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const handleDeleteDoctor = doctor => {
    setShowConfirmationModal(true);
    setDeletingDoctor(doctor);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold">Manage Doctors</h3>
      <div className="mt-6">
        <Table>
          <Table.Head>
            <Table.HeadCell>Sl No.</Table.HeadCell>
            <Table.HeadCell>Avatar</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {doctors.map((doctor, i) => (
              <Table.Row
                key={doctor._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>{i + 1}</Table.Cell>
                <Table.Cell>
                  <Avatar img={doctor.image} rounded={true} bordered={true} />
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Dr. {doctor.name}
                </Table.Cell>
                <Table.Cell>{doctor.email}</Table.Cell>
                <Table.Cell>
                  <Dropdown label="" inline={true}>
                    {doctor?.role !== 'admin' && (
                      <Dropdown.Item
                        onClick={() => handleMakeAdmin(doctor._id)}
                      >
                        Make Admin
                      </Dropdown.Item>
                    )}
                    <Dropdown.Item onClick={() => handleDeleteDoctor(doctor)}>
                      Delete Doctor
                    </Dropdown.Item>
                  </Dropdown>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure you wanna delete Dr. ${deletingDoctor.name}`}
          showConfirmationModal={showConfirmationModal}
          setShowConfirmationModal={setShowConfirmationModal}
          refetch={refetch}
          doctor={deletingDoctor}
        />
      )}
    </div>
  );
};

export default ManageDoctors;
