import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../hooks/useToken';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn, googleSignIn } = useContext(AuthContext);

  const [loginUserEmail, setLoginUserEmail] = useState('');

  const [token] = useToken(loginUserEmail);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = data => {
    console.log(data);

    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;

        setLoginUserEmail(data.email);

        toast.success('Login successful');
      })
      .catch(err => console.error(err));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success('Login successful');
      })
      .catch(err => console.error(err));
  };

  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <div className="h-[90vh]">
      <div className="container mx-auto h-full flex items-center justify-center px-4">
        <div className="w-96 mx-auto shadow-md p-8 rounded-xl border">
          <h2 className="text-center font-bold text-2xl">Login</h2>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col gap-4"
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput
                {...register('email', {
                  required: 'Email address is required',
                })}
                type="email"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Password" />
              </div>
              <TextInput
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be atleast 6 characters or longer',
                  },
                })}
                type="password"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>
            <Link className="hover:text-primary ">
              <p>Forgot password?</p>
            </Link>
            <Button
              className="bg-gradient-to-r from-primary to-secondary border-0"
              type="submit"
            >
              Login
            </Button>
          </form>
          <p className="mt-2 font-semibold">
            New to Doctors Portal?{' '}
            <Link to={'/register'} className="text-[#19D3AE]">
              Create new account
            </Link>
          </p>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray- font-semibold">
              OR
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <GoogleButton className="mx-auto" onClick={handleGoogleSignIn} />
        </div>
      </div>
    </div>
  );
};

export default Login;
