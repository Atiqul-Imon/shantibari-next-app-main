'use client';

import { useEffect, useState } from 'react';
import { FaSearch, FaUserEdit, FaTrash, FaEye, FaUserShield, FaTimes } from 'react-icons/fa';
import { adminAPI, apiUtils } from '@/lib/api';

const AdminUserList = () => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({ currentPage: 1, totalPages: 1, totalUsers: 0, usersPerPage: 10 });
  const [search, setSearch] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, [pagination.currentPage, search, role, status, refresh]);

  const fetchUsers = async () => {
    setLoading(true);
    setError('');
    try {
      const params = {
        page: pagination.currentPage,
        limit: pagination.usersPerPage,
        search,
        role,
        status
      };
      
      const response = await adminAPI.getUsers(params);
      setUsers(response.data.users);
      setPagination(response.data.pagination);
    } catch (err) {
      const errorData = apiUtils.handleError(err);
      setError(errorData.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
  };

  const handleRoleFilter = (e) => {
    setRole(e.target.value);
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
  };

  const handleStatusFilter = (e) => {
    setStatus(e.target.value);
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
  };

  const handlePageChange = (page) => {
    setPagination((prev) => ({ ...prev, currentPage: page }));
  };

  const handleView = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleDelete = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      await adminAPI.deleteUser(userId);
      setRefresh((r) => !r);
    } catch (err) {
      const errorData = apiUtils.handleError(err);
      alert(errorData.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FaUserShield className="mr-2 text-blue-600" /> User Management
      </h2>
      <div className="flex flex-wrap gap-4 mb-4 items-center">
        <div className="flex items-center border rounded px-2">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search by name, email, username..."
            value={search}
            onChange={handleSearch}
            className="outline-none py-2"
          />
        </div>
        <select value={role} onChange={handleRoleFilter} className="border rounded px-3 py-2">
          <option value="">All Roles</option>
          <option value="user">User</option>
          <option value="provider">Provider</option>
          <option value="admin">Admin</option>
          <option value="super-admin">Super Admin</option>
        </select>
        <select value={status} onChange={handleStatusFilter} className="border rounded px-3 py-2">
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      {loading ? (
        <div className="flex items-center justify-center min-h-32">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Role</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Registered</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-gray-500">No users found.</td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user._id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{user.fullName}</td>
                    <td className="py-2 px-4 border-b">{user.email}</td>
                    <td className="py-2 px-4 border-b capitalize">{user.role}</td>
                    <td className="py-2 px-4 border-b">
                      <span className={user.isActive ? 'text-green-600' : 'text-red-600'}>
                        {user.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b">{user.createdAt ? new Date(user.createdAt).toLocaleDateString() : ''}</td>
                    <td className="py-2 px-4 border-b flex gap-2">
                      <button
                        className="p-2 bg-blue-100 rounded hover:bg-blue-200"
                        title="View"
                        onClick={() => handleView(user)}
                      >
                        <FaEye className="text-blue-600" />
                      </button>
                      {/* Edit and Delete can be implemented as needed */}
                      {/* <button
                        className="p-2 bg-yellow-100 rounded hover:bg-yellow-200"
                        title="Edit"
                      >
                        <FaUserEdit className="text-yellow-600" />
                      </button> */}
                      <button
                        className="p-2 bg-red-100 rounded hover:bg-red-200"
                        title="Delete"
                        onClick={() => handleDelete(user._id)}
                      >
                        <FaTrash className="text-red-600" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-gray-600">
          Showing page {pagination.currentPage} of {pagination.totalPages} | Total users: {pagination.totalUsers}
        </div>
        <div className="flex gap-2">
          {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded ${pagination.currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
      {/* User Modal */}
      {showModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              <FaTimes size={20} />
            </button>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FaUserShield className="mr-2 text-blue-600" /> User Details
            </h3>
            <div className="space-y-2">
              <div><strong>Name:</strong> {selectedUser.fullName}</div>
              <div><strong>Email:</strong> {selectedUser.email}</div>
              <div><strong>Role:</strong> {selectedUser.role}</div>
              <div><strong>Status:</strong> {selectedUser.isActive ? 'Active' : 'Inactive'}</div>
              <div><strong>Registered:</strong> {selectedUser.createdAt ? new Date(selectedUser.createdAt).toLocaleDateString() : ''}</div>
              <div><strong>Phone:</strong> {selectedUser.phone || 'N/A'}</div>
              <div><strong>Gender:</strong> {selectedUser.gender || 'N/A'}</div>
              <div><strong>Bio:</strong> {selectedUser.bio || 'N/A'}</div>
              <div><strong>Address:</strong> {selectedUser.address ? `${selectedUser.address.street || ''}, ${selectedUser.address.city || ''}, ${selectedUser.address.district || ''}, ${selectedUser.address.postalCode || ''}` : 'N/A'}</div>
              <div><strong>Subscription:</strong> {selectedUser.subscription?.plan || 'Free'} ({selectedUser.isSubscriptionActive ? 'Active' : 'Inactive'})</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUserList; 