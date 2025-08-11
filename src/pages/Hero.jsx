import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const goToStudentForm = () => {
    navigate("/student-form");
  };
  const goToTutorForm = () => {
    navigate("/tutor-form");
  };

  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-14"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      {/* Left Content */}
      <div className="max-w-3xl text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
          <span className="text-[#f46173]">SS TUITIONS</span>
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#4f4d4e] leading-tight pt-2 pb-1">
          Provides <span className="text-[#345ba0]">BEST</span> and <span className="text-[#345ba0]">FRIENDLY</span> Tutors
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#4f4d4e] leading-tight">
          Study From <span className="text-[#345ba0] inline-flex items-center">HOME <img src="./home.png" className='h-[1em] w-[1em] ml-2 relative top-[0.05em]' alt="home"/></span>
        </h1>
        <p className="pt-2 text-gray-700 text-lg md:text-xl">
          Connecting students with expert tutors for a brighter future.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4 text-lg md:text-xl lg:text-2xl">
          <button
            onClick={goToStudentForm}
            className="bg-[#f46173] border-4 border-[#f46173] hover:bg-[#f46172e8] text-white px-8 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6 rounded-lg shadow-md transition-all"
          >
            Student Form
          </button>
          <button
            onClick={goToTutorForm}
            className="bg-white border-4 hover:bg-[#a9bee6] border-[#a9bee6] text-gray-700 px-8 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6 rounded-lg shadow-md transition-all"
          >
            Recruit Tutors
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src="./woman.jpg"
          alt="Online Tuition Illustration"
          className="w-full max-w-md md:max-w-lg lg:max-w-2xl"
        />
      </div>
    </section>
  );
}
