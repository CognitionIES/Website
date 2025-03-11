// import Image from "next/image";

export default function ServiceContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Section 1: Heading and Overview */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-4xl font-bold text-[#0098AF] mb-6 animate-fade-in">
        Digitalization & Industry 4.0 Services
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Description 1{" "}
        </p>
      </section>

      {/* Section 2: Tools/Technology with Infinite Slider */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#0098AF] mb-6">
          Tools & Technologies
        </h2>
        <div className="w-full py-4">
          <p>
            Slider Component
          </p>
          {/* <div
            className="group relative flex gap-6 overflow-hidden p-2"
            style={{
              maskImage:
                "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
            }}
          >
            {Array(2) // Reduced to 2 for simplicity; adjust as needed
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
                >
                  {logos.map((logo, key) => (
                    <Image
                      key={key}
                      src={logo.url}
                      className="h-12 md:h-16 w-auto object-contain"
                      alt={`${logo.name}`}
                    />
                  ))}
                </div>
              ))}
          </div> */}
        </div>
      </section>

      {/* Section 3: What We Offer */}
      <section>
        <h2 className="text-2xl font-semibold text-[#0098AF] mb-6">
          What We Offer
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl">
          We provide a comprehensive set of services to ensure your success.
          Here’s how we can support you:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#0098AF]">•</span>
              <span>...</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0098AF]">•</span>
              <span>...</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0098AF]">•</span>
              <span>...</span>
            </li>
          </ul>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#0098AF]">•</span>
              <span>...</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0098AF]">•</span>
              <span>...</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0098AF]">•</span>
              <span>...</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
