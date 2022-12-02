import { useQuery } from '@tanstack/react-query';
import { Dropdown, Table } from 'flowbite-react';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users');
      const data = await res.json();

      return data;
    },
  });

  const handleMakeAdmin = id => {
    fetch(`http://localhost:5000/user/admin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success('Made admin successfully');
        }
      });
  };

  return (
    <div className="p-4">
      <div>
        <h3 className="text-xl font-semibold">All Users</h3>
        <div className="mt-6">
          <Table>
            <Table.Head>
              <Table.HeadCell>Sl No.</Table.HeadCell>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {users.map((user, i) => (
                <Table.Row
                  key={user._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>{i + 1}</Table.Cell>

                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {user.name}
                  </Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>
                    <Dropdown label="" inline={true}>
                      {user?.role !== 'admin' && (
                        <Dropdown.Item
                          onClick={() => handleMakeAdmin(user._id)}
                        >
                          Make Admin
                        </Dropdown.Item>
                      )}
                      <Dropdown.Item>Delete</Dropdown.Item>
                    </Dropdown>
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

export default AllUsers;
