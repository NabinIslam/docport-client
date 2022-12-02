import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import About from '../pages/About';
import Reviews from '../pages/Reviews';
import Appointment from '../pages/Appointment';
import ContactUs from '../pages/ContactUs';
import PrivateRoute from '../routes/PrivateRoute';
import DashboardLayout from '../layouts/DashboardLayout';
import MyAppointments from '../components/MyAppointments';
import AllUsers from '../components/AllUsers';
import AdminRoute from './AdminRoute';
import AddDoctor from '../components/AddDoctor';
import ManageDoctors from '../components/ManageDoctors';
import Payment from '../components/Payment';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/appointment',
        element: <Appointment />,
      },
      {
        path: '/reviews',
        element: <Reviews />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: '/dashboard/my-appointments',
            element: <MyAppointments />,
          },
          {
            path: '/dashboard/all-users',
            element: (
              <AdminRoute>
                <AllUsers />
              </AdminRoute>
            ),
          },
          {
            path: '/dashboard/add-doctor',
            element: (
              <AdminRoute>
                <AddDoctor />
              </AdminRoute>
            ),
          },
          {
            path: '/dashboard/manage-doctors',
            element: (
              <AdminRoute>
                <ManageDoctors />
              </AdminRoute>
            ),
          },
          {
            path: '/dashboard/payment/:id',

            element: (
              <AdminRoute>
                <Payment />
              </AdminRoute>
            ),
            loader: ({ params }) =>
              fetch(`http://localhost:5000/booking/${params.id}`),
          },
        ],
      },
    ],
  },
]);

export default router;
