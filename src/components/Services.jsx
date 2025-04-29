import React from "react";

const services = [
  {
    id: 1,
    title: "Full-Stack Development",
    description: "I build complete web solutions, handling both front-end and back-end development. From responsive designs to robust server-side logic, I deliver seamless digital experiences.",
  },
  {
    id: 2,
    title: "Android Development",
    description: "I develop powerful Android applications using Android Studio, the official IDE for Android. From UI design to app deployment, I create smooth, high-performance mobile experiences.",
  },
  {
    id: 3,
    title: "Poster Making",
    description: "I design creative and impactful posters that visually communicate ideas and messages. From events to promotions, I craft posters that capture attention and inspire action.",
  },
  {
    id: 4,
    title: "Frontend Development",
    description: "I create responsive and engaging user interfaces using modern web technologies. From design to deployment, I ensure seamless and interactive user experiences.",
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content for your business and companies.",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team.",
  },
];

const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400"> {service.id} </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"> {service.title} </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              {/* <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;