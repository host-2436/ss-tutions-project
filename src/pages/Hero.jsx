import React from 'react'
import { useNavigate } from "react-router-dom"

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
      className=" flex flex-col md:flex-row items-center justify-between  px-6 md:px-16 py-15 mt-15"
      style={{ height: "calc(100vh - 80px)" }}
    >
      {/* Left Content */}
      <div className="max-w-3xl  mx-10">
        <h1 className="text-xl md:text-8xl font-bold leading-tight">
          <span className="text-[#f46173]">SS TUITIONS</span>
        </h1>
        <h1 className="text-2xl md:text-4xl font-bold text-[#4f4d4e] leading-tight pt-2 pb-1">
          Provides <span className="text-[#345ba0]"> BEST</span> and <span className="text-[#345ba0]">FRIENDLY</span> Tutors
        </h1>
        <h1 className="text-2xl md:text-4xl font-bold text-[#4f4d4e] leading-tight">
          Study From <span className="text-[#345ba0] inline-flex items-center"> HOME <img src="./home.png" className='h-[1em] w-[1em] ml-2 relative top-[0.05em] '/></span>
        </h1>
        <p className="pt-2 text-gray-700 text-xl">
          Connecting students with expert tutors for a brighter future.
        </p>
        <div className="mt-6 space-x-4 text-4xl">
          <button onClick={goToStudentForm} className="bg-[#f46173] border-4 border-[#f46173] hover:bg-[#f46172e8] text-white  px-7 py-5 rounded-lg shadow-md transition-all">
            Student Form
          </button>
          <button onClick={goToTutorForm} className="bg-white border-4 hover:bg-[#a9bee6] border-[#a9bee6] text-gray-700 px-7 py-5 rounded-lg shadow-md transition-all">
            Recruit Tutors
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="mr-4 max-w-2xl">
        <img
          src="./woman.jpg"
          alt="Online Tuition Illustration"
          className="w-full max-w-[46rem]"
        />
      </div>
    </section>
  );
}
