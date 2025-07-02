'use client';
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import TiptapEditor from './TiptapEditor';
import { communityAPI } from '@/lib/api';

export default function CommunitySubmitForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [featuredImage, setFeaturedImage] = useState(null);
  const [featuredImageUrl, setFeaturedImageUrl] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef();
  const router = useRouter();

  // Handle featured image upload
  const handleImageChange = async (e) => {
    setError('');
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 100 * 1024) {
      setError('Image must be less than 100kb');
      return;
    }
    // Upload to backend
    const formData = new FormData();
    formData.append('image', file);
    try {
      const response = await communityAPI.uploadCommunityImage(formData);
      setFeaturedImage(response.data);
      setFeaturedImageUrl(response.data.url);
    } catch (err) {
      setError(err.message || 'Upload failed');
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    if (!title || !content || !featuredImageUrl) {
      setError('All fields are required.');
      setLoading(false);
      return;
    }
    try {
      const response = await communityAPI.submitCommunityPost({
        title,
        content,
        authorName: 'Anonymous', // Replace with real user if available
        featuredImage,
        images: [],
      });
      setSuccess('Your post has been submitted and is pending approval.');
      setTitle('');
      setContent('');
      setFeaturedImage(null);
      setFeaturedImageUrl('');
      if (fileInputRef.current) fileInputRef.current.value = '';
      setTimeout(() => router.push('/community'), 2000);
    } catch (err) {
      setError(err.message || 'Submission failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Submit Your Writing</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={200}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Featured Image (max 100kb)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            className="block w-full text-sm text-gray-500"
          />
          {featuredImageUrl && (
            <img src={featuredImageUrl} alt="Preview" className="mt-2 w-40 h-40 object-cover rounded" />
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
          <TiptapEditor
            onChange={setContent}
            onImageError={setError}
          />
        </div>
        {error && <div className="p-2 bg-red-100 text-red-700 rounded">{error}</div>}
        {success && <div className="p-2 bg-green-100 text-green-700 rounded">{success}</div>}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
} 