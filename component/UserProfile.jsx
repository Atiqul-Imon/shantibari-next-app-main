'use client';

import { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCalendar, FaMapMarkerAlt, FaEdit, FaSave, FaTimes } from 'react-icons/fa';
import { authAPI, apiUtils } from '@/lib/api';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    bio: '',
    address: {
      street: '',
      city: '',
      district: '',
      postalCode: ''
    },
    preferences: {
      notifications: {
        email: true,
        sms: false,
        push: true
      },
      privacy: 'private'
    }
  });

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await authAPI.getProfile();
      const userData = response.data;
      setUser(userData);
      setFormData({
        fullName: userData.fullName || '',
        phone: userData.phone || '',
        dateOfBirth: userData.dateOfBirth ? new Date(userData.dateOfBirth).toISOString().split('T')[0] : '',
        gender: userData.gender || '',
        bio: userData.bio || '',
        address: {
          street: userData.address?.street || '',
          city: userData.address?.city || '',
          district: userData.address?.district || '',
          postalCode: userData.address?.postalCode || ''
        },
        preferences: {
          notifications: {
            email: userData.preferences?.notifications?.email ?? true,
            sms: userData.preferences?.notifications?.sms ?? false,
            push: userData.preferences?.notifications?.push ?? true
          },
          privacy: userData.preferences?.privacy || 'private'
        }
      });
    } catch (err) {
      const errorData = apiUtils.handleError(err);
      setError(errorData.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: type === 'checkbox' ? checked : value
        }
      }));
    } else if (name.includes('address.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value
        }
      }));
    } else if (name.includes('notifications.')) {
      const notificationType = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        preferences: {
          ...prev.preferences,
          notifications: {
            ...prev.preferences.notifications,
            [notificationType]: checked
          }
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSuccess('');

    try {
      const response = await authAPI.updateProfile(formData);
      const updatedUser = response.data;
      setUser(updatedUser);
      setSuccess('Profile updated successfully!');
      setIsEditing(false);
    } catch (err) {
      const errorData = apiUtils.handleError(err);
      setError(errorData.message);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data to original user data
    if (user) {
      setFormData({
        fullName: user.fullName || '',
        phone: user.phone || '',
        dateOfBirth: user.dateOfBirth ? new Date(user.dateOfBirth).toISOString().split('T')[0] : '',
        gender: user.gender || '',
        bio: user.bio || '',
        address: {
          street: user.address?.street || '',
          city: user.address?.city || '',
          district: user.address?.district || '',
          postalCode: user.address?.postalCode || ''
        },
        preferences: {
          notifications: {
            email: user.preferences?.notifications?.email ?? true,
            sms: user.preferences?.notifications?.sms ?? false,
            push: user.preferences?.notifications?.push ?? true
          },
          privacy: user.preferences?.privacy || 'private'
        }
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error && !user) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <p className="text-red-800">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <FaEdit className="mr-2" />
                Edit Profile
              </button>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={handleSubmit}
                  disabled={saving}
                  className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-400"
                >
                  <FaSave className="mr-2" />
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                  <FaTimes className="mr-2" />
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Success/Error Messages */}
        {success && (
          <div className="mx-6 mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-800">{success}</p>
          </div>
        )}
        {error && (
          <div className="mx-6 mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Profile Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Basic Information</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaUser className="inline mr-2" />
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  ) : (
                    <p className="text-gray-900">{user?.fullName || 'Not provided'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaEnvelope className="inline mr-2" />
                    Email
                  </label>
                  <p className="text-gray-900">{user?.email}</p>
                  <p className="text-sm text-gray-500">Email cannot be changed</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaPhone className="inline mr-2" />
                    Phone Number
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900">{user?.phone || 'Not provided'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaCalendar className="inline mr-2" />
                    Date of Birth
                  </label>
                  {isEditing ? (
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900">
                      {user?.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : 'Not provided'}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  {isEditing ? (
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  ) : (
                    <p className="text-gray-900 capitalize">{user?.gender || 'Not provided'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      rows="3"
                      maxLength="500"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about yourself..."
                    />
                  ) : (
                    <p className="text-gray-900">{user?.bio || 'No bio provided'}</p>
                  )}
                  {isEditing && (
                    <p className="text-sm text-gray-500 mt-1">
                      {formData.bio.length}/500 characters
                    </p>
                  )}
                </div>
              </div>

              {/* Address Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Address Information</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address.street"
                      value={formData.address.street}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900">{user?.address?.street || 'Not provided'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address.city"
                      value={formData.address.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900">{user?.address?.city || 'Not provided'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address.district"
                      value={formData.address.district}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900">{user?.address?.district || 'Not provided'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address.postalCode"
                      value={formData.address.postalCode}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900">{user?.address?.postalCode || 'Not provided'}</p>
                  )}
                </div>

                {/* Preferences */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Preferences</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Privacy Setting</label>
                    {isEditing ? (
                      <select
                        name="preferences.privacy"
                        value={formData.preferences.privacy}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="private">Private</option>
                        <option value="public">Public</option>
                        <option value="friends">Friends Only</option>
                      </select>
                    ) : (
                      <p className="text-gray-900 capitalize">{user?.preferences?.privacy || 'private'}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Notification Preferences</label>
                    <div className="space-y-2">
                      {isEditing ? (
                        <>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="notifications.email"
                              checked={formData.preferences.notifications.email}
                              onChange={handleInputChange}
                              className="mr-2"
                            />
                            Email notifications
                          </label>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="notifications.sms"
                              checked={formData.preferences.notifications.sms}
                              onChange={handleInputChange}
                              className="mr-2"
                            />
                            SMS notifications
                          </label>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="notifications.push"
                              checked={formData.preferences.notifications.push}
                              onChange={handleInputChange}
                              className="mr-2"
                            />
                            Push notifications
                          </label>
                        </>
                      ) : (
                        <div className="space-y-1">
                          <p className="text-sm text-gray-600">
                            Email: {user?.preferences?.notifications?.email ? 'Enabled' : 'Disabled'}
                          </p>
                          <p className="text-sm text-gray-600">
                            SMS: {user?.preferences?.notifications?.sms ? 'Enabled' : 'Disabled'}
                          </p>
                          <p className="text-sm text-gray-600">
                            Push: {user?.preferences?.notifications?.push ? 'Enabled' : 'Disabled'}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile; 