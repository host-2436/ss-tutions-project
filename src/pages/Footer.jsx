export default function Footer() {
  return (
    <footer className="bg-[#345fa0] text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side: copyright */}
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} SS Tuitions. All rights reserved.
        </p>

        {/* Right side: social icons with PNG */}
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/ss_tuitions_?igsh=d29jbXF5aDUybnBy"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="/instagram.png"  // put your PNG in public/icons folder
              alt="Instagram"
              width={32}
              height={32}
              style={{ display: "block" }}
            />
          </a>

          <a
            href="https://wa.me/7799891976"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="/whatsapp.png"  // put your PNG in public/icons folder
              alt="WhatsApp"
              width={32}
              height={32}
              style={{ display: "block" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
