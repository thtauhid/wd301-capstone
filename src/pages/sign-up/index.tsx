import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";

function SignUp() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-md w-full px-6 py-8 bg-white rounded-lg border border-stone-500'>
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-8'>
          Sign Up
        </h1>
        <SignUpForm />

        <p className='mt-4'>
          Already have an account?{" "}
          <Link to='/sign-in' className='text-stone-500 hover:text-stone-600'>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
