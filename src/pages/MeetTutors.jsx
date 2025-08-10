import React from "react";

const tutors = [
  { name: "Rahul Sharma", subject: "Mathematics", bio: "IIT Delhi graduate with 8 years of experience in competitive exam coaching.", img: "/tutors/rahul.jpg" },
  { name: "Priya Verma", subject: "Physics", bio: "M.Sc in Physics, specializes in making concepts easy with real-life examples.", img: "/tutors/priya.jpg" },
  { name: "Aman Gupta", subject: "Chemistry", bio: "NIT graduate with expertise in organic and inorganic chemistry.", img: "/tutors/aman.jpg" },
  { name: "Sneha Iyer", subject: "Biology", bio: "Passionate about life sciences and experienced NEET coach.", img: "/tutors/sneha.jpg" },
  { name: "Karan Singh", subject: "Computer Science", bio: "Software engineer turned educator, loves coding and teaching.", img: "/tutors/karan.jpg" },
  { name: "Anjali Mehta", subject: "English", bio: "Language expert with a knack for improving communication skills.", img: "/tutors/anjali.jpg" },
  { name: "Vikram Patil", subject: "Economics", bio: "Economics professor with a focus on conceptual clarity.", img: "/tutors/vikram.jpg" },
  { name: "Meera Nair", subject: "History", bio: "Historian and storyteller, making the past come alive.", img: "/tutors/meera.jpg" },
];

export default function MeetTutors() {
  return (
    <section className="py-16 mt-25 bg-gradient-to-br from-white to-gray-50" id="tutors" style={{ height: "calc(100vh - 80px)" }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl pb-4 font-bold text-center mb-12 text-[#345ba0]">
          Meet Our Tutors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutors.map((tutor, index) => {
            // Determine checkerboard pattern
            const row = Math.floor(index / 4); // each row has 4 cards
            const col = index % 4;
            const isPink = (row + col) % 2 === 0;

            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 text-center border-2 ${
                  isPink ? "border-[#f46173]" : "border-[#345ba0]"
                }`}
              >
                <img
                  src={tutor.img}
                  alt={tutor.name}
                  className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-white shadow-md"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {tutor.name}
                </h3>
                <p className={`${isPink ? "text-[#f46173]" : "text-[#345ba0]"} font-medium`}>
                  {tutor.subject}
                </p>
                <p className="mt-2 text-gray-600 text-sm">{tutor.bio}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
