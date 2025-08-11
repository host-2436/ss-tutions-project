export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "How to Ace Your Exams with Smart Study Tips",
      snippet:
        "Discover proven study strategies to maximize your learning and boost your exam scores efficiently...",
      link: "#",
      color: "#345ba0",
    },
    {
      id: 2,
      title: "The Importance of Consistency in Learning",
      snippet:
        "Learn why consistent study habits beat cramming and how to build a sustainable learning routine...",
      link: "#",
      color: "#f46173",
    },
    {
      id: 3,
      title: "Balancing College Life and Academics",
      snippet:
        "Tips to help you juggle your social life, extracurriculars, and studies without stress...",
      link: "#",
      color: "#345ba0",
    },
    {
      id: 4,
      title: "Effective Time Management for Students",
      snippet:
        "Master time-blocking, prioritization, and goal-setting to make the most of your study hours...",
      link: "#",
      color: "#f46173",
    },
  ];

  return (
    <section className="py-16 mt-10 bg-gradient-to-br from-white to-[#f8f8f8]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-center mb-10 text-[#f46173]">
          Latest Blogs
        </h2>

        <div className="flex flex-col gap-8">
          {blogs.map(({ id, title, snippet, link, color }) => (
            <a
              key={id}
              href={link}
              className="flex items-start gap-6 p-6 rounded-lg bg-white shadow-sm hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
              style={{ borderLeft: `6px solid ${color}` }}
            >
              <div className="flex-1">
                <h3
                  className="text-xl font-semibold text-[#345ba0] mb-2"
                  style={{ color }}
                >
                  {title}
                </h3>
                <p className="italic text-gray-700">{snippet}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
