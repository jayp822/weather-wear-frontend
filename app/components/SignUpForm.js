'use client';
import React, { useState } from 'react';

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
    <div className="max-w-md mx-auto w-[85%] bg-white p-6 rounded-lg shadow-md ">
      <h2 className="text-2xl text-center font-bold mb-4">
        Sign Up for Weather Updates
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            State
          </label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md"
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Sending...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}
