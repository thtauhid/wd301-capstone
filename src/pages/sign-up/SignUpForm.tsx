import { API_ENDPOINT } from "@/config/constants";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type SignUpFormInputs = {
  name: string;
  email: string;
  password: string;
};

function SignUpForm() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    const { name, email, password } = data;

    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      // extract the response body as JSON data
      const data = await response.json();

      // After successful signup, first we will save the token in localStorage
      localStorage.setItem("authToken", data.auth_token);
      localStorage.setItem("userData", JSON.stringify(data.user));

      // Then we will redirect the user to the dashboard
      navigate("/");
      navigate(0);
    }

    setError("Sign up failed.");
    return;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error.length > 0 && (
        <div className='bg-red-600 px-4 py-2 mb-4 text-white'>{error}</div>
      )}
      <div>
        <div className='flex justify-between'>
          <label className='block text-gray-700 font-semibold mb-2'>
            Name:
          </label>

          {errors.name && (
            <div className='text-red-500'>This field is required</div>
          )}
        </div>
        <input
          type='text'
          id='name'
          autoFocus
          {...register("name", { required: true })}
          className={`w-full border rounded-md py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
            errors.name ? "border-red-500" : ""
          }`}
        />
      </div>

      <div>
        <div className='flex justify-between'>
          <label className='block text-gray-700 font-semibold mb-2'>
            Email:
          </label>

          {errors.email && (
            <div className='text-red-500'>This field is required</div>
          )}
        </div>
        <input
          type='email'
          id='email'
          {...register("email", { required: true })}
          className={`w-full border rounded-md py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
            errors.email ? "border-red-500" : ""
          }`}
        />
      </div>

      <div>
        <div className='flex justify-between'>
          <label className='block text-gray-700 font-semibold mb-2'>
            Password:
          </label>

          {errors.password && (
            <div className='text-red-500'>This field is required</div>
          )}
        </div>
        <input
          type='password'
          id='password'
          {...register("password", { required: true })}
          className={`w-full border rounded-md py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
            errors.password ? "border-red-500" : ""
          }`}
        />
      </div>

      <button
        type='submit'
        className='w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4'
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
