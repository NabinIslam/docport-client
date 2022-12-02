import { Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate('/login');
        toast.success('Logout successful');
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="shadow bg-white sticky top-0 z-30 w-full">
      <div className="container mx-auto py-2">
        <Navbar className="" fluid={true} rounded={true}>
          <Link to={'/'}>
            <h2 className="self-center whitespace-nowrap text-xl font-extrabold dark:text-white hover:bg-gray-300 px-2 py-1 rounded-md">
              DocPort
            </h2>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `bg-neutral px-2 py-1 rounded text-white m-0 font-normal`
                  : 'font-semibold py-1 m-0'
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `bg-neutral px-2 py-1 rounded text-white m-0 font-normal`
                  : 'font-semibold py-1 m-0'
              }
              to={'/about'}
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `bg-neutral px-2 py-1 rounded text-white m-0 font-normal`
                  : 'font-semibold   py-1 m-0'
              }
              to={'/appointment'}
            >
              Appointment
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `bg-neutral px-2 py-1 rounded text-white m-0 font-normal`
                  : 'font-semibold   py-1 m-0'
              }
              to={'/reviews'}
            >
              Reviews
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `bg-neutral px-2 py-1 rounded text-white m-0 font-normal`
                  : 'font-semibold  py-1 m-0'
              }
              to={'/contact-us'}
            >
              Contact Us
            </NavLink>
            {user ? (
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `bg-neutral px-2 py-1 rounded text-white m-0 font-normal`
                      : 'font-semibold   py-1 m-0'
                  }
                  to={'/dashboard'}
                >
                  Dashboard
                </NavLink>
                <NavLink
                  onClick={handleLogout}
                  className={({ isActive }) =>
                    isActive
                      ? `bg-gradient-to-r from-primary to-secondary px-2 py-1 rounded text-white m-0 font-normal`
                      : 'font-semibold   py-1 m-0'
                  }
                >
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `bg-neutral px-2 py-1 rounded text-white m-0 font-normal`
                      : 'font-semibold   py-1 m-0'
                  }
                  to={'/login'}
                >
                  Login
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-neutral px-2 py-1 rounded text-white m-0 font-normal'
                      : 'font-semibold py-1 m-0'
                  }
                  to={'/register'}
                >
                  Register
                </NavLink>
              </>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
