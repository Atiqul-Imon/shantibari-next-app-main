'use client';
import dynamic from 'next/dynamic';

const CommunitySubmitForm = dynamic(() => import('./CommunitySubmitForm'), { ssr: false });

export default function CommunitySubmitPage() {
  return <CommunitySubmitForm />;
}