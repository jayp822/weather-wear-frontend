import React from 'react';

export default function Footer() {
  return (
    <div className="mt-full h-[10rem] w-full bg-white flex flex-row items-center sm:items-center justify-around">
      <p className="text-black text-center p-[1.5rem] sm:p-[3rem] font-bold text-[1.1rem] sm:text-[1.2rem]">
        &copy; {new Date().getFullYear()} Weather Wear by Jay Patel
      </p>
    </div>
  );
}
