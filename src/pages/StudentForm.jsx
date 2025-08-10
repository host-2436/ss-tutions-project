import { useState } from "react";
import { Link } from "react-router-dom";

export default function StudentForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    contactNumber: "",
    grade: "",
    location: "",
    preferredTime: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};

    if (!formData.parentName.trim()) errs.parentName = "Parent's name is required";
    if (!formData.studentName.trim()) errs.studentName = "Student's name is required";

    if (!formData.contactNumber.trim()) errs.contactNumber = "Contact number is required";
    else if (!/^\d{10,15}$/.test(formData.contactNumber.trim()))
      errs.contactNumber = "Contact number should be 10-15 digits";

    if (!formData.grade.trim()) errs.grade = "Grade/Class is required";

    if (!formData.location.trim()) errs.location = "Location is required";

    if (!formData.preferredTime.trim()) errs.preferredTime = "Preferred time is required";

    return errs;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
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

    // TODO: handle submission (API call or other)

    setSubmitted(true);
    setFormData({
      parentName: "",
      studentName: "",
      contactNumber: "",
      grade: "",
      location: "",
      preferredTime: "",
      additionalInfo: "",
    });
  };

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
      <h2 className="text-4xl font-bold mb-8 text-[#345ba0] text-center">
        Student Registration Form
      </h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Parent's Name */}
        <div className="mb-6">
          <label htmlFor="parentName" className="block mb-2 font-semibold text-gray-700">
            Parent's Name
          </label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            placeholder="Parent's full name"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.parentName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
          {errors.parentName && <p className="text-red-600 mt-1 text-sm">{errors.parentName}</p>}
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
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Student's full name"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.studentName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
          {errors.studentName && <p className="text-red-600 mt-1 text-sm">{errors.studentName}</p>}
        </div>

        {/* Contact Number */}
        <div className="mb-6">
          <label htmlFor="contactNumber" className="block mb-2 font-semibold text-gray-700">
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="10 to 15 digit phone number"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.contactNumber ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
          {errors.contactNumber && <p className="text-red-600 mt-1 text-sm">{errors.contactNumber}</p>}
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
            value={formData.grade}
            onChange={handleChange}
            placeholder="e.g. 6th Grade, Class 8, etc."
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.grade ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
          {errors.grade && <p className="text-red-600 mt-1 text-sm">{errors.grade}</p>}
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
            placeholder="City, Area or Address"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.location ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
          {errors.location && <p className="text-red-600 mt-1 text-sm">{errors.location}</p>}
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
            value={formData.preferredTime}
            onChange={handleChange}
            placeholder="e.g. Weekdays 4-6 PM"
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.preferredTime ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#345ba0]"
            }`}
          />
          {errors.preferredTime && <p className="text-red-600 mt-1 text-sm">{errors.preferredTime}</p>}
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
            value={formData.additionalInfo}
            onChange={handleChange}
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

        {/* Success message */}
        {submitted && (
          <p className="mt-6 text-center text-green-600 font-semibold">
            Form submitted successfully! We will contact you soon.
          </p>
        )}
      </form>
    </section>
  );
}
