import Image from "next/image";
import React from "react";
import Link from "next/link";
import data from "@/lib/data/psychiatrists";

export async function generateStaticParams() {
  return Object.keys(data).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const profile = data[slug];

  if (!profile) {
    return {
      title: "Profile Not Found",
      description: "The requested profile could not be found.",
    };
  }

  const descriptionText = typeof profile.description === 'string' 
    ? profile.description.substring(0, 160) 
    : `Learn more about ${profile.name}, ${profile.title} at Shantibari.`;

  return {
    title: `${profile.name} - ${profile.title}`,
    description: descriptionText,
    openGraph: {
      title: `${profile.name} | Shantibari`,
      description: descriptionText,
      images: [
        {
          url: profile.imgSrc,
          width: 800,
          height: 600,
          alt: profile.name,
        },
      ],
      type: 'profile',
      profile: {
        firstName: profile.name.split(' ')[0],
        lastName: profile.name.split(' ').slice(1).join(' '),
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: `${profile.name} - Shantibari`,
      description: descriptionText,
      images: [profile.imgSrc],
    },
  };
}

const ProfileContent = ({ description }) => {
    if (typeof description === "string") {
        return <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">{description}</p>;
    }
    const listItems = description.props.children.map((child, index) => 
        React.isValidElement(child) ? React.cloneElement(child, { key: index }) : child
    );
    return <ul className="list-disc list-inside text-left text-gray-700 space-y-2 text-lg leading-relaxed">{listItems}</ul>
}

export default async function ProfilePage({ params }) {
  const { slug } = await params;
  const profile = data[slug];

  if (!profile) {
    return <div className="p-10 text-center text-red-600">Profile not found.</div>;
  }

  const descriptionText = typeof profile.description === 'string' 
    ? profile.description
    : `Learn more about ${profile.name}, ${profile.title} at Shantibari.`;

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": profile.name,
    "jobTitle": profile.title,
    "image": profile.imgSrc,
    "description": descriptionText,
    "worksFor": {
      "@type": "Organization",
      "name": "Shantibari"
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://shantibaribd.org"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Psychiatrists & Psychologists",
        "item": "https://shantibaribd.org/#psych" 
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": profile.name
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([personJsonLd, breadcrumbJsonLd]) }}
      />
      {/* Hero Section with Gradient Background */}
      <div className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 min-h-screen">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link 
            href="/#psych" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-200 group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Psychiatrists & Psychologists</span>
          </Link>

          {/* Main Content Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header Section with Image */}
            <div className="bg-gradient-to-r from-rose-600 to-pink-600 px-8 py-12 text-center relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px'
                }}></div>
              </div>
              
              {/* Profile Image */}
              <div className="relative z-10">
                <div className="relative h-48 w-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-white rounded-full p-1 shadow-2xl transform rotate-6"></div>
                  <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <Image
                      src={profile.imgSrc}
                      alt={profile.name}
                      fill
                      className="object-cover"
                      sizes="192px"
                      priority
                    />
                  </div>
                </div>
                
                {/* Name and Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
                  {profile.name}
                </h1>
                <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30">
                  <p className="text-white text-lg font-semibold">{profile.title}</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="px-8 py-12">
              {/* Breadcrumb */}
              <nav className="mb-8 text-sm text-gray-500">
                <ol className="flex items-center space-x-2">
                  <li><Link href="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
                  <li>/</li>
                  <li><Link href="/#psych" className="hover:text-gray-900 transition-colors">Psychiatrists & Psychologists</Link></li>
                  <li>/</li>
                  <li className="text-gray-900 font-medium">{profile.name}</li>
                </ol>
              </nav>

              {/* Description */}
              <div className="prose prose-lg max-w-none">
                <div className="bg-gradient-to-br from-gray-50 to-rose-50 rounded-xl p-8 border-l-4 border-rose-600">
                  <ProfileContent description={profile.description} />
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-12 text-center">
                <Link
                  href="/#psych"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold rounded-full hover:from-rose-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>View All Psychiatrists & Psychologists</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
