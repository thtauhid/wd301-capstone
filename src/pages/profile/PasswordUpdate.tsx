import { API_ENDPOINT } from "@/config/constants";
import { getAuthToken } from "@/utils/auth";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  current_password: string;
  new_password: string;
};

function PasswordUpdate() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const token = getAuthToken();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { current_password, new_password } = data;

    const response = await fetch(`${API_ENDPOINT}/user/password`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ current_password, new_password }),
    });

    const res = await response.json();

    if (res.status != "error") {
      setSuccess(true);
      setError("");
      reset();
      return;
    }

    setError(res.message);
    setSuccess(false);
    return;
  };

  return (
    <div className='m-4'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error.length > 0 && (
          <div className='bg-red-600 px-4 py-2 mb-4 text-white'>{error}</div>
        )}

        {success && (
          <div className='bg-green-600 px-4 py-2 mb-4 text-white'>
            Password updated successfully
          </div>
        )}

        <div>
          <div className='flex justify-between'>
            <label className='block text-gray-700 font-semibold mb-2'>
              Current Password:
            </label>

            {errors.current_password && (
              <div className='text-red-500'>This field is required</div>
            )}
          </div>
          <input
            type='password'
            id='current_password'
            {...register("current_password", { required: true })}
            className={`w-full border rounded-md py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
              errors.current_password ? "border-red-500" : ""
            }`}
          />
        </div>

        <div>
          <div className='flex justify-between'>
            <label className='block text-gray-700 font-semibold mb-2'>
              Updated Password:
            </label>

            {errors.new_password && (
              <div className='text-red-500'>This field is required</div>
            )}
          </div>
          <input
            type='password'
            id='new_password'
            {...register("new_password", { required: true })}
            className={`w-full border rounded-md py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
              errors.new_password ? "border-red-500" : ""
            }`}
          />
        </div>

        <button
          type='submit'
          className='w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4'
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default PasswordUpdate;
