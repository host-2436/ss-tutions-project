import React from "react";
import { FaLaptopHouse, FaUsers, FaUniversity, FaBookOpen, FaUserFriends, FaShieldAlt, FaHandsHelping, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const points = [
  {
    title: "Online & Offline Learning",
    icon: <FaLaptopHouse className="text-6xl" />,
    description: "Learn from anywhere or attend in-person sessions for maximum flexibility."
  },
  {
    title: "1 Tutor : 1 Students",
    icon: <FaUsers className="text-6xl" />,
    description: "Highly personalized attention with a 1:2 tutor-student ratio."
  },
  {
    title: "Tutors from IITs, NITs & IIITs",
    icon: <FaUniversity className="text-6xl" />,
    description: "Learn from India’s best educators.",
    specialButton: true
  },
  {
    title: "Deep Conceptual Understanding",
    icon: <FaBookOpen className="text-6xl" />,
    description: "We focus on long-term mastery instead of rote memorization."
  },
  {
    title: "Relatable Tutors",
    icon: <FaUserFriends className="text-6xl" />,
    description: "Tutors who understand student struggles and connect easily."
  },
  {
    title: "Carefully Selected Tutors",
    icon: <FaShieldAlt className="text-6xl" />,
    description: "Only the best and most qualified tutors are chosen."
  },
  {
    title: "Academic + Motivation + Real Experiences",
    icon: <FaHandsHelping className="text-6xl" />,
    description: "Tutors provide academic help, guidance, and share real-world experiences."
  },
  {
    title: "Flexible Schedules",
    icon: <FaCalendarAlt className="text-6xl" />,
    description: "Plan your classes around your availability for convenience."
  }
];

export default function WhyChoose() {

   const scrollToMeetTutors = () => {
    const element = document.getElementById("tutors");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section className="py-16 mt-8 bg-white mb-15" style={{ height: "calc(100vh - 80px)" }}>
      <div className="max-w-7xl mt-8 mx-auto px-4">
        <h2 className="text-5xl font-bold text-center  mb-15 text-[#f2617a]">
          Why Choose SS Tuition?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15 pb-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="relative group bg-[#f5f5f5] rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-[#345ba0] hover:text-white cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-4 text-[#345ba0] group-hover:text-white transition-colors duration-300">
                {point.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold">{point.title}</h3>

              {/* Hover Content */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#345ba0]  text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                {point.specialButton ? (
                  <button onClick={scrollToMeetTutors} className="bg-[#f2617a] text-xl text-white px-4 py-2 rounded-lg shadow hover:bg-[#e0556e] transition">
                    Meet Tutors
                  </button>
                ) : (
                  <p className="text-xl">{point.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
