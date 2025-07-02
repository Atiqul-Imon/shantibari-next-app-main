'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaUser, FaUsers, FaCog, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import Dashboard from '@/component/Dashboard';
import UserProfile from '@/component/UserProfile';
import AdminUserList from '@/component/AdminUserList';
import { authAPI, apiUtils } from '@/lib/api';

function DashboardContent() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['overview', 'profile', 'users', 'settings'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    router.push(`/dashboard?tab=${tab}`);
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
              <h1 className="text-2xl font-bold text-gray-900">Shantibari Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <nav className="bg-white rounded-lg shadow-sm p-4">
              <div className="space-y-2">
                <button
                  onClick={() => handleTabChange('overview')}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'overview'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <FaChartBar className="inline mr-2" />
                  Overview
                </button>
                <button
                  onClick={() => handleTabChange('profile')}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <FaUser className="inline mr-2" />
                  Profile
                </button>
                {apiUtils.isAdmin() && (
                  <button
                    onClick={() => handleTabChange('users')}
                    className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === 'users'
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <FaUsers className="inline mr-2" />
                    User Management
                  </button>
                )}
                <button
                  onClick={() => handleTabChange('settings')}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <FaCog className="inline mr-2" />
                  Settings
                </button>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {activeTab === 'overview' && <Dashboard />}
              {activeTab === 'profile' && <UserProfile />}
              {activeTab === 'users' && apiUtils.isAdmin() && <AdminUserList />}
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
                  <p className="text-gray-600">Settings page coming soon...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    }>
      <DashboardContent />
    </Suspense>
  );
} 