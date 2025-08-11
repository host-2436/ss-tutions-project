import { useEffect, useRef } from "react";
import "../index.css";

export default function Reviews() {
  const reviews = [
    {
      name: "Aarav Sharma",
      text: "SS Tuitions helped me improve my grades drastically. The tutors are patient and very knowledgeable!",
      color: "#f46173",
    },
    {
      name: "Priya Mehta",
      text: "Flexible timings and engaging classes made learning so much easier for me.",
      color: "#345ba0",
    },
    {
      name: "Rohan Gupta",
      text: "The small batch sizes meant I got the attention I needed. Highly recommend!",
      color: "#f46173",
    },
    {
      name: "Ananya Singh",
      text: "Tutors from IIT & NIT ensure top-quality education. Really inspiring!",
      color: "#345ba0",
    },
    {
      name: "Vikram Rao",
      text: "The interactive approach kept me interested in learning, even in tough topics.",
      color: "#f46173",
    },
    {
      name: "Sanya Roy",
      text: "Loved the personalized attention. Made learning enjoyable and effective!",
      color: "#345ba0",
    },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollPos = 0;

    const slideInterval = setInterval(() => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      const scrollStep = slider.clientWidth;

      if (scrollPos >= maxScroll) {
        scrollPos = 0;
      } else {
        scrollPos += scrollStep;
        if (scrollPos > maxScroll) scrollPos = maxScroll;
      }

      slider.scrollTo({ left: scrollPos, behavior: "smooth" });
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="py-16 mt-20 bg-gradient-to-br from-white to-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-center mb-10 text-[#345ba0]">
          What Our Students Say
        </h2>

        <div ref={sliderRef} className="reviews-slider">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="review-card"
              style={{
                border: `3px solid ${review.color}`,
                background: `linear-gradient(135deg, #345ba033 0%, #f4617333 100%)`,
              }}
            >
              <div
                className="speech-arrow"
                style={{ borderTopColor: review.color }}
              />
              <p className="text-gray-700 text-lg mb-4 italic">"{review.text}"</p>
              <span className="font-semibold" style={{ color: review.color }}>
                — {review.name}
              </span>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
