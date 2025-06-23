import Image from "next/image";
import React from "react";
import data from "@/lib/data/psychiatrists";

export async function generateStaticParams() {
  return Object.keys(data).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
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
        return <p className="text-justify text-gray-700 whitespace-pre-wrap">{description}</p>;
    }
    const listItems = description.props.children.map((child, index) => 
        React.isValidElement(child) ? React.cloneElement(child, { key: index }) : child
    );
    return <ul className="list-disc list-inside text-left text-gray-700 space-y-2 mt-4">{listItems}</ul>
}

export default async function ProfilePage({ params }) {
  const { slug } = params;
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
      <div className="bg-gray-200 text-gray-800 min-h-screen flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800 bg-gray-50">
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 relative mb-6">
              <Image
                src={profile.imgSrc}
                alt={profile.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
            <p className="text-lg text-gray-600 mb-6">{profile.title}</p>
            <ProfileContent description={profile.description} />
          </div>
        </div>
      </div>
    </>
  );
}
