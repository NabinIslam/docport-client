import { Sidebar } from 'flowbite-react';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { HiChartPie, HiUser, HiUserAdd, HiUserGroup } from 'react-icons/hi';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  return (
    <div className="flex">
      <div className="basis-1/5 h-screen p-4">
        <div className="w-fit">
          <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item className="cursor-pointer" icon={HiChartPie}>
                  <Link to="/dashboard/my-appointments">My Appointments</Link>
                </Sidebar.Item>
                {isAdmin && (
                  <>
                    <Sidebar.Item className="cursor-pointer" icon={HiUserGroup}>
                      <Link to="/dashboard/all-users">All Users</Link>
                    </Sidebar.Item>
                    <Sidebar.Item className="cursor-pointer" icon={HiUserAdd}>
                      <Link to="/dashboard/add-doctor">Add Doctor</Link>
                    </Sidebar.Item>
                    <Sidebar.Item className="cursor-pointer" icon={HiUser}>
                      <Link to="/dashboard/manage-doctors">Manage Doctors</Link>
                    </Sidebar.Item>
                  </>
                )}
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
      </div>
      <div className="bg-[#F1F5F9] basis-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
