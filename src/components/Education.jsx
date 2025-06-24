import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    year: 'MARCH 2020',
    institution: 'Stella Maris School, Visakhapatnam',
    level: 'Schooling',
    details:
      'Secured 10 CGPA in Secondary Schooling. Actively participated in science fairs and exhibitions. Took part in sports like Kho-kho and Throw ball. Served as Blue House Captain, leading and organizing multiple events and activities.',
  },
  {
    year: 'DECEMBER 2020 - JUNE 2023',
    institution: 'Government Polytechnic, Chodavaram',
    level: 'Diploma',
    details:
      'Graduated with 84%. Completed 6 months of industrial training at Tecnics Integration Technologies Pvt. Ltd., Hyderabad. Gained hands-on experience through real-world projects. Enhanced teamwork, problem-solving, and project management skills.',
  },
  {
    year: 'AUGUST 2023 - Present',
    institution: 'Gayatri Vidya Parishad College (A), Visakhapatnam',
    level: 'B.Tech',
    details:
      'Currently pursuing B.Tech in Computer Science. Actively working on academic projects and gaining technical exposure. Branch coordinator of NSS (Social club), Design lead for AsCI (Technical club), member of Rotaract and JCI Visakha Knights. Proficient in Canva and regularly design promotional material for campus events.',
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-black text-white py-20 px-6 md:px-16 lg:px-32">
      <h2 className="text-4xl font-bold text-center mb-12">
        Education
      </h2>

      <div className="relative border-l-2 border-gray-700 pl-8">
        {educationData.map((item, index) => (
          <div key={index} className="mb-16 relative flex items-start">
            {/* Dot aligned center to box */}
            <div className="absolute -left-[1.45rem] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center shadow-md">
              <FaGraduationCap className="text-white text-sm" />
            </div>

            {/* Content Box */}
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 w-full">
              <p className="text-sm text-gray-400 mb-1">{item.year}</p>
              <h3 className="text-xl font-semibold text-green-400">{item.institution}</h3>
              <p className="text-sm text-blue-300 mb-2">{item.level}</p>
              <p className="text-gray-300 text-[15px] leading-relaxed">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
