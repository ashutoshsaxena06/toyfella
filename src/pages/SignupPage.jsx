import React, { useState } from 'react';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup:', { name, email, password });
    // Add your signup logic here (e.g., API call)
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-[#F5F4F5]">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-[#222D65] tracking-wide">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#222D65] font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-xl border border-[#EFEFEF] bg-[#F5F4F5] text-[#222D65] focus:outline-none focus:ring-2 focus:ring-[#52BDFF]"
              required
            />
          </div>
          <div>
            <label className="block text-[#222D65] font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-xl border border-[#EFEFEF] bg-[#F5F4F5] text-[#222D65] focus:outline-none focus:ring-2 focus:ring-[#52BDFF]"
              required
            />
          </div>
          <div>
            <label className="block text-[#222D65] font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-xl border border-[#EFEFEF] bg-[#F5F4F5] text-[#222D65] focus:outline-none focus:ring-2 focus:ring-[#52BDFF]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#52BDFF] text-white py-3 rounded-xl font-bold text-lg shadow hover:bg-[#3660A1] transition"
          >
            Sign Up
          </button>
          <p className="mt-4 text-center text-[#222D65]">
            Already have an account?{' '}
            <a href="/login" className="text-[#FAA41B] font-bold hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;