import { useState } from "react";
import { Link } from "react-router-dom";

export default function TutorForm() {
  const [formData, setFormData] = useState({
    tutorName: "",
    collegeName: "",
    email: "",
    phoneNumber: "",
    subjects: "",
    availableTime: "",
    location: "",
    experience: "",
    styleGoal: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.tutorName.trim()) errs.tutorName = "Tutor name is required";
    if (!formData.collegeName.trim()) errs.collegeName = "College name is required";

    if (!formData.email.trim()) errs.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    )
      errs.email = "Invalid email address";

    if (!formData.phoneNumber.trim()) errs.phoneNumber = "Phone number is required";
    else if (!/^\d{10,15}$/.test(formData.phoneNumber.trim()))
      errs.phoneNumber = "Phone number should be 10-15 digits";

    if (!formData.subjects.trim()) errs.subjects = "Subjects are required";
    if (!formData.availableTime.trim()) errs.availableTime = "Available time is required";
    if (!formData.location.trim()) errs.location = "Location is required";
    if (!formData.experience.trim()) errs.experience = "Please tell us about your experience";
    if (!formData.styleGoal.trim()) errs.styleGoal = "Please share your teaching style and goal";

    return errs;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: null }));
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      setSubmitted(false);
      return;
    }

    // TODO: Submit formData to backend or API here

    setSubmitted(true);
    setFormData({
      tutorName: "",
      collegeName: "",
      email: "",
      phoneNumber: "",
      subjects: "",
      availableTime: "",
      location: "",
      experience: "",
      styleGoal: "",
    });
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

      <form onSubmit={handleSubmit} noValidate>
        {/* Tutor Name */}
        <div className="mb-6">
          <label htmlFor="tutorName" className="block mb-2 font-semibold text-gray-700">
            Tutor Name
          </label>
          <input
            type="text"
            id="tutorName"
            name="tutorName"
            value={formData.tutorName}
            onChange={handleChange}
            placeholder="Your full name"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.tutorName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
          {errors.tutorName && <p className="text-red-600 mt-1 text-sm">{errors.tutorName}</p>}
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
            value={formData.collegeName}
            onChange={handleChange}
            placeholder="Your college or university"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.collegeName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
          {errors.collegeName && <p className="text-red-600 mt-1 text-sm">{errors.collegeName}</p>}
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
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
          {errors.email && <p className="text-red-600 mt-1 text-sm">{errors.email}</p>}
        </div>

        {/* Phone Number */}
        <div className="mb-6">
          <label htmlFor="phoneNumber" className="block mb-2 font-semibold text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="10 to 15 digit phone number"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.phoneNumber ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
          {errors.phoneNumber && <p className="text-red-600 mt-1 text-sm">{errors.phoneNumber}</p>}
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
            value={formData.subjects}
            onChange={handleChange}
            placeholder="E.g., Math, English"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.subjects ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
          {errors.subjects && <p className="text-red-600 mt-1 text-sm">{errors.subjects}</p>}
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
            value={formData.availableTime}
            onChange={handleChange}
            placeholder="E.g., Weekdays 4-6 PM"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.availableTime ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
          {errors.availableTime && <p className="text-red-600 mt-1 text-sm">{errors.availableTime}</p>}
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
            value={formData.location}
            onChange={handleChange}
            placeholder="Your city or area"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.location ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
          {errors.location && <p className="text-red-600 mt-1 text-sm">{errors.location}</p>}
        </div>

        {/* Experience */}
        <div className="mb-6">
          <label htmlFor="experience" className="block mb-2 font-semibold text-gray-700">
            Tell us about your Experience
          </label>
          <textarea
            id="experience"
            name="experience"
            rows="4"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Share your tutoring experience"
            className={`w-full px-4 py-3 border rounded-md resize-none focus:outline-none focus:ring-2 ${
              errors.experience ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
          {errors.experience && <p className="text-red-600 mt-1 text-sm">{errors.experience}</p>}
        </div>

        {/* Style and Goal */}
        <div className="mb-6">
          <label htmlFor="styleGoal" className="block mb-2 font-semibold text-gray-700">
            Style and Goal
          </label>
          <textarea
            id="styleGoal"
            name="styleGoal"
            rows="4"
            value={formData.styleGoal}
            onChange={handleChange}
            placeholder="Tell us about your teaching style and goals"
            className={`w-full px-4 py-3 border rounded-md resize-none focus:outline-none focus:ring-2 ${
              errors.styleGoal ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
          {errors.styleGoal && <p className="text-red-600 mt-1 text-sm">{errors.styleGoal}</p>}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full py-3 bg-[#345ba0] text-white font-semibold rounded-md hover:opacity-90 transition-opacity duration-300"
        >
          Submit
        </button>

        {/* Submission success message */}
        {submitted && (
          <p className="mt-6 text-center text-green-600 font-semibold">
            Form submitted successfully! We will contact you soon.
          </p>
        )}
      </form>
    </section>
  );
}
