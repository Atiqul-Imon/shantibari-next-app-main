import axios from 'axios';

// Create axios instance
const api = axios.create({
  baseURL: 'http://localhost:8030/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('accessToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API methods
export const authAPI = {
  // Register new user
  register: (userData) => api.post('/auth/register', userData),
  
  // Login user
  login: (credentials) => api.post('/auth/login', credentials),
  
  // Logout user
  logout: () => api.post('/auth/logout'),
  
  // Get user profile
  getProfile: () => api.get('/auth/profile'),
  
  // Update user profile
  updateProfile: (profileData) => api.put('/auth/profile', profileData),
  
  // Change password
  changePassword: (passwordData) => api.put('/auth/change-password', passwordData),
};

// Admin API methods
export const adminAPI = {
  // Get all users with pagination and filters
  getUsers: (params = {}) => api.get('/auth/users', { params }),
  
  // Get user statistics
  getUserStats: () => api.get('/auth/users/stats'),
  
  // Get user by ID
  getUserById: (userId) => api.get(`/auth/users/${userId}`),
  
  // Update user (admin only)
  updateUser: (userId, userData) => api.put(`/auth/users/${userId}`, userData),
  
  // Delete user (admin only)
  deleteUser: (userId) => api.delete(`/auth/users/${userId}`),
};

// Gallery API methods
export const galleryAPI = {
  // Get all gallery images
  getImages: () => api.get('/gallery'),
  
  // Upload image
  uploadImage: (formData) => {
    return api.post('/gallery/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  
  // Delete image
  deleteImage: (imageId) => api.delete(`/gallery/${imageId}`),
};

// Service API methods (for future use)
export const serviceAPI = {
  // Get all services
  getServices: (params = {}) => api.get('/services', { params }),
  
  // Get service by ID
  getServiceById: (serviceId) => api.get(`/services/${serviceId}`),
  
  // Create service (admin only)
  createService: (serviceData) => api.post('/services', serviceData),
  
  // Update service (admin only)
  updateService: (serviceId, serviceData) => api.put(`/services/${serviceId}`, serviceData),
  
  // Delete service (admin only)
  deleteService: (serviceId) => api.delete(`/services/${serviceId}`),
  
  // Book service
  bookService: (serviceId, bookingData) => api.post(`/services/${serviceId}/book`, bookingData),
};

// Appointment API methods (for future use)
export const appointmentAPI = {
  // Get all appointments
  getAppointments: (params = {}) => api.get('/appointments', { params }),
  
  // Get appointment by ID
  getAppointmentById: (appointmentId) => api.get(`/appointments/${appointmentId}`),
  
  // Create appointment
  createAppointment: (appointmentData) => api.post('/appointments', appointmentData),
  
  // Update appointment
  updateAppointment: (appointmentId, appointmentData) => api.put(`/appointments/${appointmentId}`, appointmentData),
  
  // Delete appointment
  deleteAppointment: (appointmentId) => api.delete(`/appointments/${appointmentId}`),
  
  // Cancel appointment
  cancelAppointment: (appointmentId) => api.post(`/appointments/${appointmentId}/cancel`),
  
  // Reschedule appointment
  rescheduleAppointment: (appointmentId, rescheduleData) => api.post(`/appointments/${appointmentId}/reschedule`, rescheduleData),
};

// Payment API methods (for future use)
export const paymentAPI = {
  // Create payment intent
  createPaymentIntent: (paymentData) => api.post('/payments/create-intent', paymentData),
  
  // Confirm payment
  confirmPayment: (paymentId, confirmationData) => api.post(`/payments/${paymentId}/confirm`, confirmationData),
  
  // Get payment by ID
  getPaymentById: (paymentId) => api.get(`/payments/${paymentId}`),
  
  // Refund payment
  refundPayment: (paymentId, refundData) => api.post(`/payments/${paymentId}/refund`, refundData),
  
  // Get user payments
  getUserPayments: (userId) => api.get(`/payments/user/${userId}`),
};

// Community API methods
export const communityAPI = {
  // Get all community posts
  getPosts: () => api.get('/community'),
  
  // Upload image for community post
  uploadCommunityImage: (formData) =>
    api.post('/community/upload-image', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  // Submit a new community post
  submitCommunityPost: (postData) =>
    api.post('/community', postData),
};

// Utility functions
export const apiUtils = {
  // Handle API errors
  handleError: (error) => {
    if (error.response) {
      // Server responded with error status
      return {
        message: error.response.data?.error || error.response.data?.message || 'An error occurred',
        status: error.response.status,
        data: error.response.data,
      };
    } else if (error.request) {
      // Request was made but no response received
      return {
        message: 'No response from server. Please check your connection.',
        status: 0,
      };
    } else {
      // Something else happened
      return {
        message: error.message || 'An unexpected error occurred',
        status: 0,
      };
    }
  },
  
  // Check if user is admin
  isAdmin: () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role === 'admin' || user.role === 'super-admin';
  },
  
  // Get current user
  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user') || 'null');
  },
  
  // Set current user
  setCurrentUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  },
  
  // Clear user data
  clearUserData: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  },
};

// Export the main api instance for custom requests
export default api; 