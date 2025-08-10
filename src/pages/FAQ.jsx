import { useState } from "react";

const faqs = [
  {
    question: "How can I enroll in SS Tuitions?",
    answer:
      "You can enroll by visiting our website and filling out the registration form or contacting us directly via phone or email.",
  },
  {
    question: "What are the timings of the classes?",
    answer:
      "We offer flexible timings including morning, afternoon, and evening batches to fit your schedule.",
  },
  {
    question: "Are the tutors qualified?",
    answer:
      "Yes! Our tutors are highly qualified graduates from IITs, NITs, and other reputed institutes.",
  },
  {
    question: "Do you provide online classes?",
    answer:
      "Absolutely! We provide both in-person and online classes with the same quality of teaching.",
  },
  {
    question: "What subjects are covered?",
    answer:
      "We cover Maths, Physics, Chemistry, Computer Science, and more. You can check the full list on our website.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-19 bg-gradient-to-br from-white to-[#f8f8f8] ">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#345ba0]">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-6">
          {faqs.map(({ question, answer }, idx) => (
            <div
              key={idx}
              className="rounded-xl shadow-md border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className={`w-full text-left px-6 py-4 font-semibold text-white flex justify-between items-center transition-all duration-300
                  ${
                    openIndex === idx
                      ? "bg-gradient-to-r from-[#345ba0] to-[#f46173]"
                      : "bg-gradient-to-r from-[#7a9edc] to-[#f9b9c5]"
                  }
                `}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
              >
                {question}
                <span className="text-2xl select-none" aria-hidden="true">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>

              <div
                id={`faq-answer-${idx}`}
                role="region"
                aria-labelledby={`faq-question-${idx}`}
                className={`bg-[#fff0f3] text-gray-700 italic transform origin-top transition-all duration-300 ease-in-out
                  ${
                    openIndex === idx
                      ? "opacity-100 scale-y-100 max-h-[1000px] px-6 pt-4 pb-6"
                      : "opacity-0 scale-y-0 max-h-0 px-0 pt-0 pb-0"
                  }
                `}
                style={{ transitionProperty: "opacity, transform, max-height, padding" }}
              >
                {answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
