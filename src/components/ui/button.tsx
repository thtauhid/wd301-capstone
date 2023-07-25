import React from "react";

function Button(props: { children: React.ReactNode }) {
  return (
    <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
      {props.children}
    </button>
  );
}

export default Button;
