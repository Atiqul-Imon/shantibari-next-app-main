import React from "react";


const Event = () => {
  return (
    <>
     

      <div>
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center h-[400px]"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/db5yniogx/image/upload/v1735340419/aboutuscloudinary_si2umb.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex justify-center items-center h-full">
            <h1 className="text-4xl md:text-6xl text-white font-bold">
              Events
            </h1>
          </div>
        </section>

        {/* All Events Section */}
        <section className="py-12 px-6 md:px-20 bg-gray-50">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            All Events
          </h2>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://res.cloudinary.com/db5yniogx/image/upload/v1736943683/parenting03_jpmi4u.jpg"
                alt="Parenting Session"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Parenting Session: সন্তানের বয়ঃসন্ধি ও বাবা-মা by Sabrina
                Sharmin{" "}
              </h3>
              <p className="text-gray-600">Date: November 18, 2023</p>
              <a
                href="#!"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View Details
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://res.cloudinary.com/db5yniogx/image/upload/v1736944336/deepascanvas2_twqksk.jpg"
                alt="Solo Art Exhibition - “DEEPA’S CANVAS”, Arunima Saha Deepa"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Solo Art Exhibition - “DEEPA’S CANVAS”, Arunima Saha Deepa{" "}
              </h3>
              <p className="text-gray-600">Date: November 3-6, 2023</p>
              <a
                href="#!"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View Details
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://res.cloudinary.com/db5yniogx/image/upload/v1736944491/troyee_kqp0ip.jpg"
                alt="ত্রয়ী"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                “ত্রয়ী” - শান্তিবাড়ি’তে তিন নারী উদ্যোক্তার পণ্য প্রদর্শনী{" "}
              </h3>
              <p className="text-gray-600">Date: October 13-14, 2023</p>
              <a
                href="#!"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View Details
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/400"
                alt="Event 1"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                শরৎ উৎসব - “মেঘ বলেছে যাবো যাবো”{" "}
              </h3>
              <p className="text-gray-600">Date: September 8, 2023</p>
              <a
                href="#!"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View Details
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/400"
                alt="Event 1"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                ভালো থাকার উৎসব - “Celebration of Life” by Shantibari{" "}
              </h3>
              <p className="text-gray-600">Date: July 27-28, 2023</p>
              <a
                href="#!"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View Details
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/400"
                alt="Event 1"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                শান্তিবাড়ি ঈদ উৎসব মেলা{" "}
              </h3>
              <p className="text-gray-600">Date: June 16-17, 2023</p>
              <a
                href="#!"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View Details
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/400"
                alt="Event 1"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                শান্তিবাড়ি বৈশাখ ও ঈদ নারী উদ্যোক্তা মেলা{" "}
              </h3>
              <p className="text-gray-600">Date: April 7-8, 2023</p>
              <a
                href="#!"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View Details
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/400"
                alt="Event 1"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Solo Art Exhibition - “The Beginning”, by Sadia Afrin Arin{" "}
              </h3>
              <p className="text-gray-600">Date: March 3-5, 2023</p>
              <a
                href="#!"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View Details
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/400"
                alt="Event 1"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Mental Health Session: ট্রমা থেকে বেরিয়ে আসবো কীভাবে? by Dr.
                Helal Uddin Ahmed
              </h3>
              <p className="text-gray-600">Date: January 13, 2023</p>
              <a
                href="#!"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View Details
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/400"
                alt="Event 1"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Sheet Adda
              </h3>
              <p className="text-gray-600">Date: January 6, 2023</p>
              <a
                href="#!"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View Details
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/400"
                alt="Event 1"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Basic and Restorative Workshop by Tasmiah T. Rahman{" "}
              </h3>
              <p className="text-gray-600">Date: December 10, 2022</p>
              <a
                href="#!"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View Details
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/400"
                alt="Event 1"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Mental Health Session: ডিপ্রেশন মোকাবেলা করবেন কীভাবে? by Dr.
                Helal Uddin Ahmed{" "}
              </h3>
              <p className="text-gray-600">Date: August 26, 2022</p>
              <a
                href="#!"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View Details
              </a>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/400"
                alt="Event 2"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Sharat Adda
              </h3>
              <p className="text-gray-600">Date: September 16, 2022</p>
              <a
                href="#!"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View Details
              </a>
            </div>

            {/* Event Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/400"
                alt="Event 3"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Hemanta Adda
              </h3>
              <p className="text-gray-600">Date: November 4, 2022</p>
              <a
                href="#!"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View Details
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Event;