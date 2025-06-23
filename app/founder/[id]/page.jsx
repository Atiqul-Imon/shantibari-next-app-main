import Image from 'next/image';
import members from '@/lib/data/founders';

export async function generateStaticParams() {
  return members.map((member) => ({
    id: member.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const member = members.find((member) => member.id === parseInt(params.id));

  if (!member) {
    return {
      title: "Founder Not Found",
      description: "The requested founder could not be found.",
    };
  }

  return {
    title: `${member.name} - ${member.title}`,
    description: member.description.substring(0, 160),
    openGraph: {
      title: `${member.name} | Shantibari Founder`,
      description: member.description.substring(0, 160),
      images: [
        {
          url: member.imgSrc,
          width: 800,
          height: 600,
          alt: member.name,
        },
      ],
      type: 'profile',
      profile: {
        firstName: member.name.split(' ')[0],
        lastName: member.name.split(' ').slice(1).join(' '),
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: `${member.name} - Shantibari`,
      description: member.description.substring(0, 160),
      images: [member.imgSrc],
    },
  };
}

export default async function FounderDetail({ params }) {
  const { id } = params;
  const member = members.find((member) => member.id === parseInt(id));

  if (!member) {
    return <div className="text-center p-8">Founder member not found.</div>;
  }

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": member.name,
    "jobTitle": member.title,
    "image": member.imgSrc,
    "description": member.description,
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
        "name": "Founder Members",
        "item": "https://shantibaribd.org/#founders" 
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": member.name
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([personJsonLd, breadcrumbJsonLd]) }}
      />
      <div className="bg-gray-100 p-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <div className="h-60 w-60 relative mx-auto">
            <Image
              src={member.imgSrc}
              alt={member.name}
              fill
              className="object-cover rounded-full"
              sizes="240px"
            />
          </div>
          <h2 className="text-3xl font-bold text-center mt-6 text-gray-900">{member.name}</h2>
          <p className="text-center text-gray-600">{member.title}</p>
          <p className="mt-4 text-lg text-gray-700">{member.description}</p>
        </div>
      </div>
    </>
  );
}
