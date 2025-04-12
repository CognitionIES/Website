"use client";
import Image from "next/image";
import outcomeImage from "@/constants/images/projects/outcome.jpg";

export default function Outcome() {
  return (
    <div>
      <section className="w-full py-8 sm:py-10 lg:py-6 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-3xl uppercase font-bold text-[#003C46] relative ">
            💡 Key Results & Outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="relative h-[320px] md:h-[420px] mt-8 w-full rounded-xl shadow-md overflow-hidden">
              <Image
                src={outcomeImage}
                alt="Outcome Image"
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-2">
              <p className="text-lg sm:text-xl leading-relaxed text-gray-700 text-justify "></p>

              <div className="mt-8 text-justify">
                <ul className="space-y-2">
                  <li className="text-base text-gray-700">
                    {" "}
                    <span className="text-[#0098af] pr-2">⦿</span>
                    <span className="font-semibold text-lg">
                      {" "}
                      Improved Accuracy:
                    </span>{" "}
                    3D validation reduced layout deviations drastically, saving
                    hours in installation rework.
                  </li>
                  <li className="text-base text-gray-700">
                    {" "}
                    <span className="text-[#0098af] pr-2">⦿</span>
                    <span className="font-semibold text-lg">
                      Operational Efficiency:
                    </span>{" "}
                    Downtime was minimized through real-time alerts & predictive
                    maintenance insights.
                  </li>
                  <li className="text-base text-gray-700">
                    {" "}
                    <span className="text-[#0098af] pr-2">⦿</span>
                    <span className="font-semibold text-lg">
                      Energy Optimization:
                    </span>{" "}
                    Monitoring & simulation helped reduce energy consumption per
                    unit produced.
                  </li>
                  <li className="text-base text-gray-700">
                    {" "}
                    <span className="text-[#0098af] pr-2">⦿</span>
                    <span className="font-semibold text-lg">
                      Scalable Infrastructure:
                    </span>{" "}
                    The platform is future-ready, adaptable for upcoming
                    automation and robotics integration.
                  </li>{" "}
                  <li className="text-base text-gray-700">
                    {" "}
                    <span className="text-[#0098af] pr-2">⦿</span>
                    <span className="font-semibold text-lg">
                      Better Visibility:
                    </span>{" "}
                    Stakeholders can now access real-time status, performance
                    metrics, and alerts via a centralized dashboard.
                  </li>
                </ul>
              </div>
              <table className="w-full mt-20 text-center border-collapse ">
                <tbody>
                  <tr>
                    <td className="p-4 border border-gray-100 bg-[#0098af]/60 uppercase">
                      <span className="font-semibold text-lg">Metric</span>
                    </td>
                    <td className="p-4 border border-gray-100 bg-[#0098af]/60 uppercase">
                      <span className="font-semibold  text-lg">Before</span>
                    </td>
                    <td className="p-4 border border-gray-100 bg-[#0098af]/60 uppercase">
                      <span className="font-semibold  text-lg   ">After</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 border bg-[#00b4d8]/20 border-gray-100">
                      <span className="font-semibold"></span> Layout Error Rate
                    </td>
                    <td className="px-4 border bg-[#00b4d8]/20  border-gray-100">
                      -8%
                    </td>
                    <td className="px-4 border bg-[#00b4d8]/20  border-gray-100">
                      1%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 border bg-[#00b4d8]/20  border-gray-100">
                      Production Downtime
                    </td>
                    <td className="px-4 border bg-[#00b4d8]/20  border-gray-100">
                      12hrs/month
                    </td>
                    <td className="px-4 border bg-[#00b4d8]/20  border-gray-100">
                      3hrs/month
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 border bg-[#00b4d8]/20  border-gray-100">
                      Rework due to fit issues
                    </td>
                    <td className="px-4 border bg-[#00b4d8]/20  border-gray-100">
                      5+ incidents/month
                    </td>
                    <td className="px-4 border bg-[#00b4d8]/20  border-gray-100">
                      0 incident
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="absolute top-12 left-8 w-12 h-12 border-t border-l border-[#0098AF]/10" />
      </section>
    </div>
  );
}
