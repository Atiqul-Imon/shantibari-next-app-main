import React from "react";


const MentalHealthSupport = () => {
  const teamMembers = [
    {
      name: `Dr. Helal Uddin Ahmed`,
      role: `Senior Psychiatrist and Consultant`,
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735317397/drhelalcloud_fvdddg.jpg",
    },
    {
      name: `Dr. Nasim Jahan`,
      role: `Senior Psychiatrist and Consultant`,
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735317673/Nasimjahancloud_jl62lq.png",
    },
    {
      name: `Razia Sultana Rima`,
      role: `Psycho-social Counselor and Therapist`,
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735317558/Raziasultanarimacloud_vqmaug.png",
    },
    {
      name: `M S Mahmuda`,
      role: `Mental Health Specialist`,
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1737373449/m_s_mahmudacloud_tnrngg.jpg",
    },

    {
      name: `Tanzina Chowdhury`,
      role: `Educational and Counselling Psychologist`,
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1736852227/tanzinachoudhury01cloud_d92vrq.jpg",
    },


    {
      name: `Arpita Das`,
      role: `Psycho-social Counselor and Therapist`,
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735317781/Arpitadascloud_gdnt8q.png",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[400px] bg-cover bg-center" style={{
        backgroundImage: `url('https://res.cloudinary.com/db5yniogx/image/upload/v1736272011/mentalhealthSupportHeroImagecloud_ywnd3h_i08dbd.jpg')`,
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-white text-4xl font-bold">Mental Health Support</h1>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-[1440px] mx-auto px-4 py-12 bg-gray-50 rounded-lg shadow-lg mt-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          About Mental Health Support
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Mental health support plays a crucial role in promoting overall
          well-being and addressing the challenges that individuals face in
          relation to their mental and emotional health. It encompasses a wide
          range of interventions, services, and resources designed to assist
          people in maintaining good mental health, seeking help when needed,
          and navigating through various mental health conditions.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mt-4">
          One of the fundamental aspects of mental health support is awareness
          and education. Promoting mental health literacy and reducing the
          stigma associated with mental health issues are essential in
          fostering an environment where individuals feel comfortable seeking
          help. Educating the general public, schools, workplaces, and
          communities about mental health helps to create a more empathetic and
          understanding society.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8 rounded-md shadow-md">
          <p className="text-blue-700 font-semibold">
            If you're looking for more information or need assistance, feel free to reach out to us.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-[1440px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Our Team for Mental Health
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-[320px] bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthSupport;