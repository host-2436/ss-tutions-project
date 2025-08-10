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
    { icon: <FaChalkboardTeacher size={40} className="text-[#f46173] group-hover:text-[#345ba0] transition-colors duration-300" />, title: "Expert Tutors", desc: "Learn from the best with years of teaching experience." },
    { icon: <FaLaptopCode size={40} className="text-[#f46173] group-hover:text-[#345ba0] transition-colors duration-300" />, title: "Online & Offline Classes", desc: "Flexible learning formats to suit your schedule." },
    { icon: <FaUsers size={40} className="text-[#f46173] group-hover:text-[#345ba0] transition-colors duration-300" />, title: "Small Batch Sizes", desc: "Get personal attention with limited students per batch." },
    { icon: <FaCertificate size={40} className="text-[#f46173] group-hover:text-[#345ba0] transition-colors duration-300" />, title: "Certified Programs", desc: "Industry-recognized certifications for your career." },
    { icon: <FaRegLightbulb size={40} className="text-[#f46173] group-hover:text-[#345ba0] transition-colors duration-300" />, title: "Interactive Learning", desc: "Engaging lessons to make learning exciting." },
    { icon: <FaGraduationCap size={40} className="text-[#f46173] group-hover:text-[#345ba0] transition-colors duration-300" />, title: "Top University Tutors", desc: "Tutors from IIT, NIT, and other reputed institutes." },
    { icon: <FaClock size={40} className="text-[#f46173] group-hover:text-[#345ba0] transition-colors duration-300" />, title: "Flexible Timings", desc: "Classes that fit your personal schedule." },
    { icon: <FaUserTie size={40} className="text-[#f46173] group-hover:text-[#345ba0] transition-colors duration-300" />, title: "Career Guidance", desc: "Expert advice for academic and career success." },
  ];

  const leftCol = offers.slice(0, 4);
  const rightCol = offers.slice(4);

  return (
    <section id="offer" className="py-16 mt-4 bg-gradient-to-br from-[#fff8f9] to-[#f9fbff]" style={{ height: "calc(100vh - 90px)" }}>
      <div className="max-w-5xl mt-8 mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 pb-10 text-[#345ba0]">What We Offer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="space-y-6">
            {leftCol.map((item, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-4  bg-gradient-to-br from-[#f46173]/20 to-[#345ba0]/20 backdrop-blur-md border border-white/40 rounded-xl p-4 shadow-lg hover:shadow-xl transition w-full h-25"
              >
                {idx % 2 === 0 ? (
                  <>
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#345ba0]">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h3 className="text-lg font-semibold text-[#f46173]">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                    <div className="flex-shrink-0">{item.icon}</div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightCol.map((item, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-4 bg-gradient-to-br from-[#f46173]/20 to-[#345ba0]/20 backdrop-blur-md border border-white/40 rounded-xl p-4 shadow-lg hover:shadow-xl transition w-full h-25"
              >
                {idx % 2 === 0 ? (
                  <>
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#345ba0]">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h3 className="text-lg font-semibold text-[#f46173]">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                    <div className="flex-shrink-0">{item.icon}</div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
