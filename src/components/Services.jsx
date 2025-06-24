import React from "react";

const services = [
  {
    id: 1,
    title: "Full-Stack Development",
    description:
      "I build full-fledged web applications, managing everything from responsive front-end interfaces to secure and scalable server-side logic using modern stacks.",
  },
  {
    id: 2,
    title: "Android Development",
    description:
      "I create efficient and intuitive Android apps using Android Studio, focusing on performance, usability, and real-world deployment practices.",
  },
  {
    id: 3,
    title: "Poster Design",
    description:
      "I design striking and informative posters tailored for events, promotions, and branding, blending creativity with clear visual messaging.",
  },
  {
    id: 4,
    title: "Frontend Development",
    description:
      "I develop clean, responsive, and interactive UIs with technologies like React and Tailwind, ensuring seamless user experiences across all devices.",
  },
  {
    id: 5,
    title: "Programming",
    description:
      "I build robust backends and utility scripts using Java and Python, with experience in automation, data processing, and scalable system design.",
  },
];

const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 py-6 rounded-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105 flex flex-col justify-between h-[230px]"
            >
              <div>
                <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                  {service.id}
                </div>
                <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
