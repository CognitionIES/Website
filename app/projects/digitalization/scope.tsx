"use client";

export default function Scope() {
  return (
    <div>
      <section className="w-full  py-6 sm:py-10 lg:py-6 relative bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative hidden  bg-white md:block h-[350px] rounded-xl overflow-hidden">
            {/* Overlay text on top of the image */}
            <div className="absolute inset-0  flex flex-col p-6 ">
              <div className="w-full flex justify-end">
                <ul className="">
                  <h3 className="text-3xl font-semibold uppercase  pl-2 text-[#5b5b5b] mb-2">
                    <span className="text-[#0098af]">🛠</span> <span className="pl-4"> Scope of Work</span>
                  </h3>
                  <li className="flex pl-4 ">
                    <span className="text-[#0098af] pr-2">⦿</span>
                    <p className="flex-1 text-indent-0 pl-6 hanging-indent">
                      <span className="font-bold uppercase  ">
                        Dimensional Laser Survey Scanning:{" "}
                      </span>
                      Conducted high-precision 3D scans of the facility to
                      capture accurate spatial data, ensuring a comprehensive
                      digital representation of the plant layout.
                    </p>
                  </li>
                  <li className="flex pl-4">
                    <span className="text-[#0098af] pr-2">⦿</span>
                    <p className="flex-1 text-indent-0 pl-6 hanging-indent">
                      <span className="font-bold uppercase    ">
                        Digital Dimensional Control:{" "}
                      </span>
                      Utilized AI-powered software to analyze and validate laser
                      survey scans against engineering designs and P&IDs,
                      identifying necessary adjustments before fabrication and
                      installation.
                    </p>
                  </li>
                  <li className="flex pl-4">
                    <span className="text-[#0098af] pr-2">⦿</span>
                    <p className="flex-1 text-indent-0 pl-6 hanging-indent">
                      <span className="font-bold uppercase  ">
                        Intelligent Digital Twin Creation:{" "}
                      </span>
                      Developed a dynamic digital twin of the facility,
                      integrating real-time data and enabling simulation of
                      operational scenarios for proactive decision-making.
                    </p>
                  </li>
                  <li className="flex pl-4">
                    <span className="text-[#0098af] pr-2">⦿</span>
                    <p className="flex-1 text-indent-0 pl-6 hanging-indent">
                      <span className="font-bold uppercase  ">
                        Software Application Integration:{" "}
                      </span>
                      Implemented a suite of applications within the digital
                      twin to drive efficiencies across departments, including
                      maintenance scheduling, inventory management, and
                      performance analytics.
                    </p>
                  </li>
                  <li className="flex pl-4">
                    <span className="text-[#0098af] pr-2">⦿</span>
                    <p className="flex-1 text-indent-0 pl-6 hanging-indent">
                      <span className="font-bold uppercase  ">
                        Evergreen Program Implementation:{" "}
                      </span>
                      Established a continuous update mechanism to maintain the
                      accuracy and relevance of the digital twin, ensuring it
                      reflects real-time changes in the facility.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-12 left-8 w-12 h-12 border-t border-l border-[#0098AF]/10" />
      </section>
    </div>
  );
}
