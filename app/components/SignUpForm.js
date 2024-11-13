'use client';
import { useState } from 'react';

export default function SignUpForm() {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting
    setError(''); // Clear previous errors

    // Create the endpoint URL
    const endpoint = `${process.env.NEXT_PUBLIC_API}/send_weather_email/${city}/${state}/${email}`;

    // Call the backend API
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
      });

      const data = await response.json();
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        setError(`Error: ${data.detail}`);
      }
    } catch (error) {
      setError('Failed to send the email.');
    } finally {
      setLoading(false); // Set loading to false after the request is complete
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mb-[100]">
      <h2 className="text-2xl text-center font-bold mb-4">
        Sign Up for Weather Updates
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center justify-center">
        <div className='w-full'>
          <label className="block font-semibold text-xl">
            City
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-1 p-2 w-full border-[2px] border-black rounded-md"
            required
          />
        </div>
        <div className='w-full'>
          <label className="block font-semibold text-xl">
            State
          </label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="mt-1 p-2 w-full border-[2px] border-black rounded-md"
            required
          />
        </div>
        <div className='w-full'>
          <label className="block font-semibold text-xl">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border-[2px] border-black rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 sm:hover:bg-blue-800 transition duration-200 ease-in-out text-white p-2 rounded-full"
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Sending...' : 'Get Recommendation'}
        </button>
      </form>
    </div>
  );
}
