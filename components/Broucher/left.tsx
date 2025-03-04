import { ArrowRight } from "lucide-react"

export default function Left(){
    return (<div className=" py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-xl ">
          <h2 className="text-3xl font-bold text-[#003C46] mb-6 relative drop-shadow-sm">
            Engineering for Efficient Projects and Plants
          </h2>
          <p className="text-gray-600 mb-8 text-justify">
            Plant Engineering is the most sought-after practice at LTTS, it creates a strong
            market differentiation with its offerings for efficient, safe, and sustainable
            production facilities.
          </p>
          <p className="text-gray-600 mb-6">
            We bring excellence in engineering and operation through our following
            service portfolios:
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <ArrowRight className="h-6 w-6 mt-1 text-[#23dce1]" />
              <p className="text-gray-700">
                CAPEX/OPEX plant engineering E/EPCM services
              </p>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="h-6 w-6 mt-1 text-[#23dce1]" />
              <p className="text-gray-700">
                Engineering re-application and global rollouts
              </p>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="h-6 w-6 mt-1 text-[#23dce1]" />
              <p className="text-gray-700">
                Services for digital makeover of manufacturing sites
              </p>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="h-6 w-6 mt-1 text-[#23dce1]" />
              <p className="text-gray-700">
                Operational excellence & WAGES program
              </p>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="h-6 w-6 mt-1 text-[#23dce1]" />
              <p className="text-gray-700">
                Plant reliability through AMS
              </p>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="h-6 w-6 mt-1 text-[#23dce1]" />
              <p className="text-gray-700">
                Regulatory and compliance engineering services
              </p>
            </div>
          </div>
        </div>
      </div>
      )
}