import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    )
      errs.email = "Invalid email address";
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      setSubmitted(false);
      return;
    }
    // TODO: Add your form submit logic here (API call etc)
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="mt-25 bg-gradient-to-br from-white to-[#f8f8f8] ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12">
        {/* Contact Form */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold mb-8 text-[#f46173] text-center md:text-left">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 font-semibold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-[#345ba0]"
                }`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-red-600 mt-1 text-sm">{errors.name}</p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-[#345ba0]"
                }`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-600 mt-1 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-md resize-none focus:outline-none focus:ring-2 ${
                  errors.message
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-[#345ba0]"
                }`}
                placeholder="Write your message here..."
              ></textarea>
              {errors.message && (
                <p className="text-red-600 mt-1 text-sm">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#f46173] text-white font-semibold rounded-md hover:opacity-90 transition-opacity duration-300"
            >
              Send Message
            </button>

            {submitted && (
              <p className="mt-6 text-center text-green-600 font-semibold">
                Thank you! Your message has been sent.
              </p>
            )}
          </form>
        </div>

        {/* Contact Info & Map */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-gray-700">
            <h3 className="text-3xl font-bold mb-6 text-[#345ba0]">
              Our Contact Info
            </h3>
            <p className="mb-4 text-gray-700">
              <strong>Address:</strong> Kokapet, Hyderabad, Telangana, India
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+919876543210"
                className="text-[#345ba0] hover:underline"
              >
                +91 98765 43210
              </a>
            </p>

            
            <div className="flex gap-6 mt-6">
  <a
    href="https://www.instagram.com/yourprofile"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
    className="hover:opacity-80 transition-opacity"
  >
    <img
      src="/instagram.png"
      alt="Instagram"
      width={32}
      height={32}
      style={{ display: "block" }}
    />
  </a>

  <a
    href="https://wa.me/919876543210"
    target="_blank"
    rel="noreferrer"
    aria-label="WhatsApp"
    className="hover:opacity-80 transition-opacity"
  >
    <img
      src="/whatsapp.png"
      alt="WhatsApp"
      width={32}
      height={32}
      style={{ display: "block" }}
    />
  </a>
</div>

          </div>

          {/* Google Maps Embed */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Kokapet Hyderabad Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.309994386346!2d78.38921641518114!3d17.371484988047444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb937d5ee4b571%3A0x384b47e59336b9b3!2sKokapet%2C%20Telangana%20500507!5e0!3m2!1sen!2sin!4v1691670020117!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
