import React from 'react';
import Link from 'next/link';
import { communityAPI } from '@/lib/api';

async function fetchPosts() {
  try {
    const response = await communityAPI.getPosts();
    return response.data;
  } catch (err) {
    console.error('Error fetching posts:', err);
    return [];
  }
}

export default async function CommunityPage() {
  const posts = await fetchPosts();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Community Blog</h1>
      {posts.length === 0 ? (
        <div className="text-center text-gray-500">No posts yet.</div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post._id} className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/community/${post._id}`}>{post.title}</Link>
              </h2>
              <div className="text-gray-500 text-sm mb-2">
                By {post.authorName} • {new Date(post.createdAt).toLocaleDateString()}
              </div>
              {post.featuredImage?.url && (
                <img src={post.featuredImage.url} alt="Featured" className="w-full h-64 object-cover rounded mb-4" />
              )}
              <div
                className="prose max-w-none text-gray-800"
                dangerouslySetInnerHTML={{ __html: post.content.substring(0, 200) + '...' }}
              />
              <Link href={`/community/${post._id}`} className="text-indigo-600 hover:underline mt-2 inline-block">
                Read More
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 