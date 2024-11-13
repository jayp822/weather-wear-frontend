import Link from 'next/link';

export default function Footer() {
  return (
    <Link
      href="https://www.jaydpatel.com"
      className="text-balance mt-auto h-[10rem] w-full bg-white flex flex-row items-center sm:items-center justify-around "
    >
      <p className="text-black hover:text-blue-700 transition duration-200 ease-out text-center   font-semibold text-xl sm:hover:text-blue-500 sm:hover:underline sm:hover:decoration-wavy sm:hover:decoration-[2px] ">
        &copy; {new Date().getFullYear()} Weather Wear by Jay Patel
      </p>
    </Link>
  );
}
