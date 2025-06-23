import React from "react";

export const metadata = {
  title: "Audio-Visual Gallery - Shantibari",
  description: "Explore the audio-visual gallery of Shantibari, featuring videos from our Facebook and YouTube channels. See our events, interviews, and more.",
  keywords: "Shantibari video gallery, audio-visual content, women empowerment videos, Bangladesh events, Shantibari YouTube, Shantibari Facebook",
  
  alternates: {
    canonical: "https://shantibaribd.org/audiovisual",
  },
  
  openGraph: {
    title: "Audio-Visual Gallery - Shantibari",
    description: "Watch videos from our events, workshops, and interviews.",
    images: [
      {
        url: "https://res.cloudinary.com/db5yniogx/image/upload/v1735381653/mediacoveragecloud4_cdvffm.jpg", // A relevant image for the gallery
        width: 1200,
        height: 630,
        alt: "Shantibari Audio-Visual Gallery",
      },
    ],
    url: "https://shantibaribd.org/audiovisual",
    type: "website",
    locale: "en_BD",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Audio-Visual Gallery - Shantibari",
    description: "Explore videos from Shantibari's events and initiatives.",
    images: ["https://res.cloudinary.com/db5yniogx/image/upload/v1735381653/mediacoveragecloud4_cdvffm.jpg"],
    site: "@shantibari_bd",
  },
};

const AudioVisual = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Audio-Visual Gallery
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Facebook Video */}

          <div className="shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
              Facebook Video
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full aspect-video rounded-lg"
                src=" https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Shantibari24/videos/936415537913590/&show_text=false" // Fixed Facebook URL
                title="Facebook Video"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
              Facebook Video
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Shantibari24/videos/1319320779250231/&show_text=false" // Fixed Facebook URL
                title="Facebook Video"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
              Facebook Video
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Shantibari24/videos/619325083989689/&show_text=false" // Fixed Facebook URL
                title="Facebook Video"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* YouTube Video */}

          <div className="shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
              YouTube Video
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/ZBYl70rD9qQ" // Corrected YouTube embed URL
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
              YouTube Video
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/d1Otj5Mecis" // Corrected YouTube embed URL
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
              YouTube Video
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/iQyYrHO5RdU" // Corrected YouTube embed URL
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
              YouTube Video
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/bquQoL7nEvY" // Corrected YouTube embed URL
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
              YouTube Video
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/-gCSNWh-Id8" // Corrected YouTube embed URL
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
              YouTube Video
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/C9TjT7sqXVk" // Corrected YouTube embed URL
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
              YouTube Video
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/Drv2D-uHuJQ" // Corrected YouTube embed URL
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
              YouTube Video
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/iXFrKsuzFN8" // Corrected YouTube embed URL
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
              YouTube Video
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/D2bujW2xVyg" // Corrected YouTube embed URL
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
              YouTube Video
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/9Luh7FcpbDA" // Corrected YouTube embed URL
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
              YouTube Video
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/sH-sGApT6MU" // Corrected YouTube embed URL
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
              YouTube Video
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/gV_gt2JsG0s" // Corrected YouTube embed URL
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
              YouTube Video
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/VeIwexv6clM" // Corrected YouTube embed URL
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
              YouTube Video
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/4NTLwcDLfgI" // Corrected YouTube embed URL
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
              YouTube Video
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/d6Vy6m0zt1E" // Corrected YouTube embed URL
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Facebook Video */}
          <div className="shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
              Facebook Video
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Shantibari24/videos/1276492289976496/&show_text=false" // Fixed Facebook URL
                title="Facebook Video"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioVisual;