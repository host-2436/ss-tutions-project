import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../components/Supabase";
export default function TutorForm() {
   const [tutorName, setTutorName] = useState('');
  const [collegename, setCollegeName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subjects, setSubjects] = useState('');
  const [availableTime, setAvailableTime] = useState('');
  const [location, setLocation] = useState('');
  const [about, setAbout] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    const {data,error}=await supabase.from('recruitment').insert([
            {
            name: tutorName,
            college: collegename,
            email: email,
            number: phone,
            subjects:subjects,
            time: availableTime,
            location: location,
            info: about,
            }
        ])

    if(error)
    {
        alert("Something went wrong try after few minutes")
        console.log(error)
        return
    }
    alert('Thank you for applying! Our team will reach you in no time.');

    setTutorName('');
    setEmail('');
    setPhone('');
    setSubjects('');
    setAvailableTime('');
    setLocation('');
    setAbout('');
  };
  return (
    <section className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-12">
       {/* Home button at very top right corner, no top gap */}
  <div className="absolute top-4 right-4">
    <Link
      to="/"
      className="bg-[#f46173] hover:bg-red-700 text-white font-semibold px-4 py-2 rounded"
      style={{ margin: 0 }}
    >
      Home
    </Link>
  </div>

      <h2 className="text-4xl font-bold mb-8 text-[#345ba0] text-center">
        Tutor Application Form
      </h2>

      <form onSubmit={(e)=>handleSubmit(e)} noValidate>
        {/* Tutor Name */}
        <div className="mb-6">
          <label htmlFor="tutorName" className="block mb-2 font-semibold text-gray-700">
            Tutor Name
          </label>
          <input
            type="text"
            id="tutorName"
            name="tutorName"
            value={tutorName}
            onChange={(e)=>setTutorName(e.target.value)}
            required
            placeholder="Your full name"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              tutorName ? "border-green-500 focus:ring-green-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
          
        </div>

        {/* College Name */}
        <div className="mb-6">
          <label htmlFor="collegeName" className="block mb-2 font-semibold text-gray-700">
            College Name
          </label>
          <input
            type="text"
            id="collegeName"
            name="collegeName"
            value={collegename}
            onChange={(e)=>setCollegeName(e.target.value)}
             required 
            placeholder="Your college or university"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              collegename ? "border-green-500 focus:ring-green-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
          
        </div>

        {/* Email */}
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            placeholder="Your email address"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              email ? "border-green-500 focus:ring-green-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
          
        </div>

        {/* Phone Number */}
        <div className="mb-6">
          <label htmlFor="phoneNumber" className="block mb-2 font-semibold text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
             required 
            placeholder="10 to 15 digit phone number"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              phone ? "border-green-500 focus:ring-green-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
        
        </div>

        {/* Subjects */}
        <div className="mb-6">
          <label htmlFor="subjects" className="block mb-2 font-semibold text-gray-700">
            Subjects You Teach
          </label>
          <input
            type="text"
            id="subjects"
            name="subjects"
            value={subjects}
            onChange={(e)=>setSubjects(e.target.value)}
             required 
            placeholder="E.g., Math, English"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              subjects ? "border-green-500 focus:ring-green-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
         
        </div>

        {/* Available Time */}
        <div className="mb-6">
          <label htmlFor="availableTime" className="block mb-2 font-semibold text-gray-700">
            Available Time
          </label>
          <input
            type="text"
            id="availableTime"
            name="availableTime"
            value={availableTime}
            onChange={(e)=>setAvailableTime(e.target.value)}
             required 
            placeholder="E.g., Weekdays 4-6 PM"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              availableTime ? "border-green-500 focus:ring-green-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
          
        </div>

        {/* Location */}
        <div className="mb-6">
          <label htmlFor="location" className="block mb-2 font-semibold text-gray-700">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
             required 
            placeholder="Your city or area"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              location ? "border-green-500 focus:ring-green-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
          
        </div>

        {/* Experience */}
        <div className="mb-6">
          <label htmlFor="experience" className="block mb-2 font-semibold text-gray-700">
            About Yourself
          </label>
          <textarea
            id="experience"
            name="experience"
            rows="4"
            value={about}
            onChange={(e)=>setAbout(e.target.value)}
             required 
            placeholder="About"
            className={`w-full px-4 py-3 border rounded-md resize-none focus:outline-none focus:ring-2 ${
              about ? "border-green-500 focus:ring-green-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
        </div>

    

        {/* Submit button */}
        <button
          type="submit"
          className="w-full py-3 bg-[#345ba0] text-white font-semibold rounded-md hover:opacity-90 transition-opacity duration-300"
        >
          Submit
        </button>

      </form>
    </section>
  );
}
