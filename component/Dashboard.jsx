'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaUser, FaSignOutAlt, FaCog, FaUsers, FaChartBar, FaCalendar, FaBell } from 'react-icons/fa';
import { authAPI, apiUtils } from '@/lib/api';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      router.push('/login');
      return;
    }

    try {
      const response = await authAPI.getProfile();
      setUser(response.data);
    } catch (err) {
      const errorData = apiUtils.handleError(err);
      if (errorData.status === 401) {
        apiUtils.clearUserData();
        router.push('/login');
      } else {
        setError(errorData.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await authAPI.logout();
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      apiUtils.clearUserData();
      router.push('/login');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <FaBell className="text-gray-400" />
                <span className="text-sm text-gray-600">Notifications</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaUser className="text-gray-400" />
                <span className="text-sm text-gray-600">{user.fullName || user.email}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center px-3 py-2 text-sm text-red-600 hover:text-red-800"
              >
                <FaSignOutAlt className="mr-1" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Welcome back, {user.fullName || user.email}!
            </h2>
            <p className="text-gray-600">
              Here's what's happening with your account today.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FaUser className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Profile Status</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {user.isActive ? 'Active' : 'Inactive'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FaCalendar className="text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Member Since</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <FaCog className="text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Account Type</p>
                  <p className="text-lg font-semibold text-gray-900 capitalize">
                    {user.role || 'User'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <FaChartBar className="text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Subscription</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {user.subscription?.plan || 'Free'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => router.push('/dashboard?tab=profile')}
                className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FaUser className="mr-2 text-blue-600" />
                <span>View Profile</span>
              </button>
              
              {apiUtils.isAdmin() && (
                <button
                  onClick={() => router.push('/dashboard?tab=users')}
                  className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FaUsers className="mr-2 text-green-600" />
                  <span>Manage Users</span>
                </button>
              )}
              
              <button
                onClick={() => router.push('/dashboard?tab=settings')}
                className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FaCog className="mr-2 text-purple-600" />
                <span>Settings</span>
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-600">Profile updated</span>
                </div>
                <span className="text-xs text-gray-500">
                  {user.updatedAt ? new Date(user.updatedAt).toLocaleDateString() : 'Recently'}
                </span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-600">Account created</span>
                </div>
                <span className="text-xs text-gray-500">
                  {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 