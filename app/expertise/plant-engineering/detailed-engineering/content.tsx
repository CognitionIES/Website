export default function Content() {
    return (
      <div className="lg:w-3/5">
        <section className="bg-white p-6 rounded-xl shadow-lg border border-[#0098AF]/20 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-[#0098AF]">
            Conceptual Design & Front-End Engineering Design (FEED)
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button
            onClick={() => document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-6 bg-[#0098AF] text-white px-4 py-2 rounded-lg hover:bg-[#007B8F] transition-colors duration-300 flex items-center gap-2 hover:scale-105"
          >
            Learn More
            <span className="animate-pulse">→</span>
          </button>
        </section>
        <section
          id="expertise"
          className="bg-white p-6 rounded-xl shadow-lg mt-8 border border-[#0098AF]/20 hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#0098AF]">
            Our Expertise
          </h3>
          <p className="text-gray-700 leading-relaxed">Description 1</p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </div>
    );
  }