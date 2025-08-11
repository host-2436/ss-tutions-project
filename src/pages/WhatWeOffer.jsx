import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaUsers,
  FaCertificate,
  FaRegLightbulb,
  FaGraduationCap,
  FaClock,
  FaUserTie,
} from "react-icons/fa";

export default function WhatWeOffer() {
  const offers = [
    { icon: <FaChalkboardTeacher size={36} className="text-[#f46173] group-hover:text-[#345ba0] transition-colors duration-300" />, title: "Expert Tutors", desc: "Learn from the best with years of teaching experience." },
    { icon: <FaLaptopCode size={36} className="text-[#f46173] group-hover:text-[#345ba0] transition-colors duration-300" />, title: "Online & Offline Classes", desc: "Flexible learning formats to suit your schedule." },
    { icon: <FaUsers size={36} className="text-[#f46173] group-hover:text-[#345ba0] transition-colors duration-300" />, title: "Small Batch Sizes", desc: "Get personal attention with limited students per batch." },
    { icon: <FaCertificate size={36} className="text-[#f46173] group-hover:text-[#345ba0] transition-colors duration-300" />, title: "Certified Programs", desc: "Industry-recognized certifications for your career." },
    { icon: <FaRegLightbulb size={36} className="text-[#f46173] group-hover:text-[#345ba0] transition-colors duration-300" />, title: "Interactive Learning", desc: "Engaging lessons to make learning exciting." },
    { icon: <FaGraduationCap size={36} className="text-[#f46173] group-hover:text-[#345ba0] transition-colors duration-300" />, title: "Top University Tutors", desc: "Tutors from IIT, NIT, and other reputed institutes." },
    { icon: <FaClock size={36} className="text-[#f46173] group-hover:text-[#345ba0] transition-colors duration-300" />, title: "Flexible Timings", desc: "Classes that fit your personal schedule." },
    { icon: <FaUserTie size={36} className="text-[#f46173] group-hover:text-[#345ba0] transition-colors duration-300" />, title: "Career Guidance", desc: "Expert advice for academic and career success." },
  ];

  return (
    <section id="offer" className="py-16 bg-gradient-to-br from-[#fff8f9] to-[#f9fbff]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-[#345ba0]">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {offers.map((item, idx) => (
            <div
              key={idx}
              className="group flex items-center gap-4 bg-gradient-to-br from-[#f46173]/20 to-[#345ba0]/20 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#345ba0]">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
