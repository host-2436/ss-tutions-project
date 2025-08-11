import React from "react";
import {
  FaLaptopHouse,
  FaUsers,
  FaUniversity,
  FaBookOpen,
  FaUserFriends,
  FaShieldAlt,
  FaHandsHelping,
  FaCalendarAlt,
} from "react-icons/fa";

const points = [
  { title: "Online & Offline Learning", icon: <FaLaptopHouse className="text-5xl md:text-6xl" />, description: "Learn from anywhere or attend in-person sessions for maximum flexibility." },
  { title: "1 Tutor : 1 Students", icon: <FaUsers className="text-5xl md:text-6xl" />, description: "Highly personalized attention with a 1:2 tutor-student ratio." },
  { title: "Tutors from IITs, NITs & IIITs", icon: <FaUniversity className="text-5xl md:text-6xl" />, description: "Learn from India’s best educators." },
  { title: "Deep Conceptual Understanding", icon: <FaBookOpen className="text-5xl md:text-6xl" />, description: "We focus on long-term mastery instead of rote memorization." },
  { title: "Relatable Tutors", icon: <FaUserFriends className="text-5xl md:text-6xl" />, description: "Tutors who understand student struggles and connect easily." },
  { title: "Carefully Selected Tutors", icon: <FaShieldAlt className="text-5xl md:text-6xl" />, description: "Only the best and most qualified tutors are chosen." },
  { title: "Academic + Motivation + Real Experiences", icon: <FaHandsHelping className="text-5xl md:text-6xl" />, description: "Tutors provide academic help, guidance, and share real-world experiences." },
  { title: "Flexible Schedules", icon: <FaCalendarAlt className="text-5xl md:text-6xl" />, description: "Plan your classes around your availability for convenience." }
];

export default function WhyChoose() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-[#f2617a]">
          Why Choose SS Tuition?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="relative group bg-[#f5f5f5] rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#345ba0] hover:text-white"
            >
              {/* Icon */}
              <div className="mb-4 text-[#345ba0] group-hover:text-white transition-colors duration-300">
                {point.icon}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold">{point.title}</h3>

              {/* Hover Content */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#345ba0] text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <p className="text-sm sm:text-base md:text-lg">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
