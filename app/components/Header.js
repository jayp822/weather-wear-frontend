export default function Header() {
  return (
    <div className="mx-auto sm:w-[60%] space-y-7 px-1">
      <h1 className="text-center text-balance text-white font-bold text-[1.5rem] sm:text-[2rem] w-[85%] sm:w-[75%] pt-[5rem] mx-auto">
        Hello, Welcome to{' '}
        <span className="text-blue-400 underline decoration-wavy decoration-[2px] text-nowrap ">
          Weather Wear
        </span>{' '}
        with just one click you can always be prepared for what the day&apos;s
        weather might bring.
      </h1>
      <p className="text-balance text-center text-gray-300 text-lg">
        By inputting the following information into the form, you will receive
        an email with clothing recommendations for the day based on your city
        and state. The application works globally, not just in the USA!
      </p>
      <p className="text-balance text-center text-gray-200 italic">
        * Please note that the application is currently hosted on a cloud
        service provider&apos;s free tier, so wait times might be longer.
      </p>
    </div>
  );
}
