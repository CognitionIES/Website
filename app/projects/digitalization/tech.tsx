"use client";

export default function Tech() {
  return (
    <div>
      <section className="w-full py-8 sm:py-10 bg-[#5b5b5b]/10 lg:py-6 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-3 bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#003C46] mb-4">
                💡 Technologies Used
              </h3>
              <ul className="space-y-2 text-gray-700 text-base">
                <li className="flex items-start">
                  <span className="text-[#0098AF] mr-2">⦿</span>
                  3D Laser Scanning Equipment: For precise spatial data
                  acquisition.
                </li>
                <li className="flex items-start">
                  <span className="text-[#0098AF] mr-2">⦿</span>
                  AI-Powered Analysis Tools: To validate and analyze scan data
                  against design specifications.
                </li>
                <li className="flex items-start">
                  <span className="text-[#0098AF] mr-2">⦿</span>
                  Digital Twin Platforms: For creating and managing the
                  intelligent digital replica of the facility.
                </li>
                <li className="flex items-start">
                  <span className="text-[#0098AF] mr-2">⦿</span>
                  Dashboard and Visualization Tools: For real-time monitoring
                  and analytics.
                </li>
              </ul>
            </div>
            <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#003C46] mb-4">
                🔄 Client Feedback
              </h3>
              <blockquote className="text-gray-700 text-lg italic border-l-4 border-[#0098AF]/30 pl-4">
                “This digital transformation has fundamentally changed how we
                operate. We now have a living, breathing model of our plant that
                helps us plan better, run smoother, and grow smarter.”
                <br />
                <cite className="not-italic mt-2 block text-right text-sm text-gray-500">
                  — Head of Operations, Confidential Client
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="absolute top-12 left-8 w-12 h-12 border-t border-l border-[#0098AF]/10" />
      </section>
    </div>
  );
}