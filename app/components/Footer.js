import React from 'react';

export default function Footer() {
  return (
    <div className="text-balance mt-auto h-[10rem] w-full bg-white flex flex-row items-center sm:items-center justify-around">
      <p className="text-black text-center p-[1.5rem] sm:p-[3rem] font-normal text-xl ">
        &copy; {new Date().getFullYear()} Weather Wear by Jay Patel
      </p>
    </div>
  );
}
