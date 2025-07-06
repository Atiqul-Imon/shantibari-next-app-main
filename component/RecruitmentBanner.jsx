import React from 'react';

const RecruitmentBanner = () => {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Job Opportunity at Shantibari</h2>
            <p className="text-blue-100 text-lg">Join our mission to empower women and create positive social impact</p>
          </div>

          {/* Job Details */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Job Description */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Program Executive</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Shantibari is looking for a dynamic and committed individual to join our team as a Program Executive. 
                  This is a full-time position based in Dhaka, ideal for someone passionate about women's empowerment 
                  and social impact.
                </p>

                {/* Job Type & Location */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Full-time
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Dhaka
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Salary: Negotiable
                      </span>
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Requirements:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Master's degree from a reputable university
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Strong English communication skills
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Proficiency in IT
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Hardworking and punctual
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Eager to contribute to a collaborative work environment
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Additional Qualifications */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Additional Qualifications:</h4>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    1–2 years of experience in program coordination, event planning, or nonprofit work (preferred but not mandatory)
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Strong organizational and verbal/written communication skills
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Ability to multitask, prioritize tasks, and meet deadlines independently
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    A strong sense of teamwork, cooperation, and adaptability in a collaborative setting
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Sensitivity to gender issues and commitment to feminist values
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Familiarity with Microsoft Office, Google Workspace, and basic social media platforms
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Willingness to travel outside Dhaka occasionally, if required
                  </li>
                </ul>

                {/* Application Info */}
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 border border-pink-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Application Details:</h4>
                  <p className="text-gray-700 mb-4">
                    We are committed to creating inclusive opportunities and encourage only female candidates to apply.
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <span className="font-semibold">Deadline:</span> July 12, 2025
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Email:</span> 
                      <a 
                        href="mailto:shantibari.feministfactor@gmail.com" 
                        className="text-blue-600 hover:text-blue-800 underline ml-1"
                      >
                        shantibari.feministfactor@gmail.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-600">
                      Please send your complete resume to the email address above.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentBanner; 