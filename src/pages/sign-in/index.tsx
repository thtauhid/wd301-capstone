import { Link } from "react-router-dom";
import SignInForm from "./SignInForm";

function SignIn() {
  return (
    <div className='min-h-screen flex items-center justify-center '>
      <div className='max-w-md w-full px-6 py-8 bg-white rounded border border-stone-500'>
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-8'>
          Sign In
        </h1>
        <SignInForm />

        <p className='mt-4'>
          Don't have an account?{" "}
          <Link to='/sign-up' className='text-stone-500 hover:text-stone-600'>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
