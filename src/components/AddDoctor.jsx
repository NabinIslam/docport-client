import { useQuery } from '@tanstack/react-query';
import {
  Button,
  FileInput,
  Label,
  Select,
  TextInput,
} from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import LoadingSpinner from './LoadingSpinner';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = import.meta.env.VITE_APP_imageBBApiKey;

  const { data: specialties, isLoading } = useQuery({
    queryKey: ['specialties'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/specialties');
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = data => {
    const image = data.image[0];

    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imgData => {
        if (imgData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };

          fetch('http://localhost:5000/doctors', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `baerer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(doctor),
          })
            .then(res => res.json())
            .then(result => {
              toast.success(`Dr. ${data.name} is added successfully`);
              navigate('/dashboard/manage-doctors');
            });
        }
      });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold">Add A Doctor</h3>
      <form
        onSubmit={handleSubmit(handleAddDoctor)}
        className="flex flex-col gap-4 my-10 max-w-md"
      >
        <div>
          <div className="mb-2 block">
            <Label className={paid ? ''} htmlFor="name" value="Name" />
          </div>
          <TextInput
            {...register('name', {
              required: "Doctor's name is required",
            })}
            type="text"
          />
          {errors.name && (
            <p className="text-red-600">{errors.name?.message}</p>
          )}
        </div>
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
            <Label htmlFor="specialty" value="Specialty" />
          </div>
          <Select
            {...register('specialty', { required: 'Specialty is required' })}
          >
            {specialties.map(specialty => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </Select>
          {errors.specialty && (
            <p className="text-red-600">{errors.specialty?.message}</p>
          )}
        </div>
        <div id="fileUpload">
          <div className="mb-2 block">
            <Label htmlFor="file" value="Upload Doctor's Photo" />
          </div>
          <FileInput
            {...register('image', { required: "Doctor's photo is required" })}
            id="file"
          />
          {errors.image && (
            <p className="text-red-600">{errors.image?.message}</p>
          )}
        </div>
        <Button
          className="bg-gradient-to-r from-primary to-secondary border-0"
          type="submit"
        >
          Add Doctor
        </Button>
      </form>
    </div>
  );
};

export default AddDoctor;
