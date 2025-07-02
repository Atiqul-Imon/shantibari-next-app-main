'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { authAPI, apiUtils } from '@/lib/api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await authAPI.login({ email, password });
      
      // Save token to localStorage
      if (response.data.token) {
        localStorage.setItem('accessToken', response.data.token);
        // Save user data
        apiUtils.setCurrentUser(response.data);
      }
      
      // Redirect to dashboard
      router.push('/dashboard');
    } catch (err) {
      const errorData = apiUtils.handleError(err);
      setError(errorData.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900">Login</h1>
        <form onSubmit={loginHandler} className="space-y-6">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
            />
          </div>
          {error && (
            <div className="p-3 text-sm text-red-800 bg-red-100 border border-red-200 rounded-md">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <Link href="/register" className="font-medium text-indigo-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}