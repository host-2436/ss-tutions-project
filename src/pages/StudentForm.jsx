import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../components/Supabase";
import { useNavigate } from "react-router-dom";
export default function StudentForm() {
  const [parentName, setParentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [grade, setGrade] = useState('');
  const [location, setLocation] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  async function handleSubmit(e) 
  {
    e.preventDefault();
    const {data,error}=await supabase.from('students').insert([
        {
        parent_name: parentName,
        student_name: studentName,
        number: contactNumber,
        class: grade,
        location: location,
        time: preferredTime,
        additional_info: additionalInfo,
        }
    ])

    if (error) {
    console.error('Insert error:', error.message);
    alert('Something went wrong!,try after few minutes');
    return;
    }
    alert('Thank you for applying! Our team will reach you in no time.');
    setParentName('');
    setStudentName('');
    setContactNumber('');
    setGrade('');
    setLocation('');
    setPreferredTime('');
    setAdditionalInfo('');
  };


  const navigate=useNavigate()

  return (
    <section className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-12">
       {/* Home button at top right corner */}
      <div className="absolute top-4 right-4">
        <Link
          to="/"
          className="bg-[#f46173] hover:bg-red-700 text-white font-semibold px-4 py-2 rounded"
        >
          Home
        </Link>
      </div>
      <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-8 text-[#345ba0] text-center">
        Student Registration Form
      </h2>
      <form onSubmit={(e)=>handleSubmit(e)} noValidate>
        {/* Parent's Name */}
        <div className="mb-6">
          <label htmlFor="parentName" className="block mb-2 font-semibold text-gray-700">
            Parent's Name
          </label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            value={parentName}
            onChange={(e)=>setParentName(e.target.value)}
            placeholder="Parent's full name"
            required
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              parentName ? "border-green-500 focus:ring-green-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
        </div>

        {/* Student's Name */}
        <div className="mb-6">
          <label htmlFor="studentName" className="block mb-2 font-semibold text-gray-700">
            Student's Name
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={studentName}
            onChange={(e)=>setStudentName(e.target.value)}
             required 
            placeholder="Student's full name"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              studentName ? "border-green-500 focus:ring-green-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
         
        </div>

        {/* Contact Number */}
        <div className="mb-6">
          <label htmlFor="contactNumber" className="block mb-2 font-semibold text-gray-700">
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={contactNumber}
            onChange={(e)=>setContactNumber(e.target.value)}
             required 
            placeholder="Phone Number"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              contactNumber ? "border-green-500 focus:ring-green-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
        </div>

        {/* Grade/Class */}
        <div className="mb-6">
          <label htmlFor="grade" className="block mb-2 font-semibold text-gray-700">
            Grade / Class
          </label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={grade}
            onChange={(e)=>setGrade(e.target.value)}
             required 
            placeholder="e.g. 6th Grade, Class 8, etc."
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              grade ? "border-green-500 focus:ring-green-400" : "border-gray-300 focus:ring-[#345ba0]"
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
            placeholder="City, Area or Address"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              location ? "border-green-500 focus:ring-green-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
         
        </div>

        {/* Preferred Time */}
        <div className="mb-6">
          <label htmlFor="preferredTime" className="block mb-2 font-semibold text-gray-700">
            Preferred Time
          </label>
          <input
            type="text"
            id="preferredTime"
            name="preferredTime"
            value={preferredTime}
            onChange={(e)=>setPreferredTime(e.target.value)}
             required 
            placeholder="e.g. Weekdays 4-6 PM"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              preferredTime ? "border-green-500 focus:ring-green-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
          
        </div>

        {/* Additional Info */}
        <div className="mb-6">
          <label htmlFor="additionalInfo" className="block mb-2 font-semibold text-gray-700">
            Additional Info (e.g., subjects needed, preferences)
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            rows="4"
            value={additionalInfo}
            onChange={(e)=>setAdditionalInfo(e.target.value)}
             required 
            placeholder="Write any specific requirements or preferences..."
            className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#345ba0]"
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full py-3 bg-[#345fa0] text-white font-semibold rounded-md hover:opacity-90 transition-opacity duration-300"
        >
          Submit
        </button>

      </form>
    </section>
  );
}
