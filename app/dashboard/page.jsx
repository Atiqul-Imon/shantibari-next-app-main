'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      router.push('/login');
    } else {
      fetchUserData(token);
    }
    // eslint-disable-next-line
  }, [router]);

  const fetchUserData = async (token) => {
    try {
      const response = await fetch('/api/auth/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        localStorage.removeItem('token');
        router.push('/login');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      localStorage.removeItem('token');
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
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
              <span className="text-sm text-gray-600">Welcome, {user?.fullName}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
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
                  onClick={() => setActiveTab('overview')}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'overview'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab('gallery')}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'gallery'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Gallery Management
                </button>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {activeTab === 'overview' && <OverviewTab user={user} />}
              {activeTab === 'profile' && <ProfileTab user={user} setUser={setUser} />}
              {activeTab === 'gallery' && <GalleryTab />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Overview Tab Component
function OverviewTab({ user }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center">
            <div className="p-2 bg-white bg-opacity-20 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm opacity-90">Total Users</p>
              <p className="text-2xl font-bold">1</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
          <div className="flex items-center">
            <div className="p-2 bg-white bg-opacity-20 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm opacity-90">Gallery Images</p>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center">
            <div className="p-2 bg-white bg-opacity-20 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm opacity-90">Status</p>
              <p className="text-2xl font-bold">Active</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <span>Successfully logged in</span>
            <span className="ml-auto text-gray-400">Just now</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <span>Dashboard accessed</span>
            <span className="ml-auto text-gray-400">Just now</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Profile Tab Component
function ProfileTab({ user, setUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user?.fullName || '',
    email: user?.email || '',
    username: user?.username || ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/auth/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser);
        setIsEditing(false);
        setMessage('Profile updated successfully!');
        setTimeout(() => setMessage(''), 3000);
      } else {
        const error = await response.json();
        setMessage(error.message || 'Failed to update profile');
      }
    } catch (error) {
      setMessage('An error occurred while updating profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">User Profile</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      {message && (
        <div className={`mb-4 p-4 rounded-md ${
          message.includes('successfully') 
            ? 'bg-green-100 text-green-700 border border-green-200' 
            : 'bg-red-100 text-red-700 border border-red-200'
        }`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
            />
          </div>
        </div>

        {isEditing && (
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        )}
      </form>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Account Created:</span>
            <span className="ml-2 text-gray-900">
              {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
            </span>
          </div>
          <div>
            <span className="text-gray-500">Role:</span>
            <span className="ml-2 text-gray-900 capitalize">{user?.role || 'User'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Gallery Tab Component
function GalleryTab() {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('/api/gallery');
      if (response.ok) {
        const data = await response.json();
        setImages(data);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files);
    setUploading(true);
    setMessage('');

    for (const file of files) {
      // Check file size (100KB limit)
      if (file.size > 100 * 1024) {
        setMessage(`File ${file.name} is too large. Maximum size is 100KB.`);
        setUploading(false);
        return;
      }

      // Check file type
      if (!file.type.startsWith('image/')) {
        setMessage(`File ${file.name} is not an image.`);
        setUploading(false);
        return;
      }

      const formData = new FormData();
      formData.append('image', file);

      try {
        const token = localStorage.getItem('accessToken');
        const response = await fetch('/api/gallery/upload', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: formData
        });

        if (response.ok) {
          setMessage(`Successfully uploaded ${file.name}`);
          fetchImages(); // Refresh the gallery
        } else {
          const error = await response.json();
          setMessage(error.message || `Failed to upload ${file.name}`);
        }
      } catch (error) {
        setMessage(`Error uploading ${file.name}`);
      }
    }

    setUploading(false);
    setTimeout(() => setMessage(''), 5000);
  };

  const handleDeleteImage = async (imageId) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`/api/gallery/${imageId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        setMessage('Image deleted successfully');
        fetchImages(); // Refresh the gallery
      } else {
        setMessage('Failed to delete image');
      }
    } catch (error) {
      setMessage('Error deleting image');
    }

    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery Management</h2>

      {message && (
        <div className={`mb-4 p-4 rounded-md ${
          message.includes('Successfully') || message.includes('successfully')
            ? 'bg-green-100 text-green-700 border border-green-200'
            : 'bg-red-100 text-red-700 border border-red-200'
        }`}>
          {message}
        </div>
      )}

      {/* Upload Section */}
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Images</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Images (Max 100KB each)
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileUpload}
              disabled={uploading}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
            />
            <button
              type="button"
              onClick={() => document.querySelector('input[type=file]').click()}
              disabled={uploading}
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50"
            >
              {uploading ? 'Uploading...' : 'Upload Image(s)'}
            </button>
          </div>
          <p className="text-sm text-gray-600">
            Supported formats: JPG, PNG, GIF. Maximum file size: 100KB per image.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Gallery Images</h3>
        {images.length === 0 ? (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No images</h3>
            <p className="mt-1 text-sm text-gray-500">Upload some images to get started.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div key={image._id} className="relative group">
                <img
                  src={image.url}
                  alt={image.title || 'Gallery image'}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded-lg flex items-center justify-center">
                  <button
                    onClick={() => handleDeleteImage(image._id)}
                    className="opacity-0 group-hover:opacity-100 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 