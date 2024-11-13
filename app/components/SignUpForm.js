'use client';
import { useState } from 'react';

export default function SignUpForm() {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false); // Loading state to disable button
  const [error, setError] = useState(''); // Error state to show errors if any

  const reset = () => {
    setLoading(false);
    setCity('');
    setEmail('');
    setState('');
    alert('Request Send Successfully and Email Sent');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting
    setError(''); // Clear previous errors

    // Create the endpoint URL dynamically from user inputs
    // const endpoint = `${process.env.NEXT_PUBLIC_API}/send_weather_email/${city}/${state}/${email}`;

    const endpoint = `${process.env.NEXT_PUBLIC_API}/send_weather_email/${city}/${state}/${email}`;

    // Make the request to the backend server

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
      });

      if (response.status == 200) {
        reset();
      } else {
        setError('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred. Please try again later.'); // Handle errors (e.g., network issues)
    } finally {
      console.log('Request finished');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mb-[100]">
      <h2 className="text-2xl text-center font-bold mb-4">
        Sign Up for Weather Updates
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 flex flex-col items-center justify-center"
      >
        <div className="w-full">
          <label className="block font-semibold text-xl">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-1 p-2 w-full border-[2px] border-black rounded-md"
            required
          />
        </div>
        <div className="w-full">
          <label className="block font-semibold text-xl">State</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="mt-1 p-2 w-full border-[2px] border-black rounded-md"
            required
          />
        </div>
        <div className="w-full">
          <label className="block font-semibold text-xl">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border-[2px] border-black rounded-md"
            required
          />
        </div>

        {/* Display error message if any */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <button
          type="submit"
          className={`w-full bg-blue-500 sm:hover:bg-blue-800 transition duration-200 ease-in-out text-white p-2 rounded-full ${loading ? 'bg-blue-900' : 'sm:hover:bg-blue-900 transition duration-200 ease-in-out'}`}
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Sending...' : 'Get Recommendation'}{' '}
          {/* Button text changes based on loading state */}
        </button>
      </form>
    </div>
  );
}
