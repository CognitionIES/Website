import Image from "next/image";
import image from "@/constants/images/Careers.jpg"

export default function Hero() {
  return (
    <div className="relative h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={image} // Make sure to add this image to your public/images folder
        alt="Office Environment"
        fill
        className="object-cover"
        priority
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003C46]/90 to-[#00A4B4]/80" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          Join Our Team
        </h1>
        <p className="text-xl md:text-2xl text-[#99D5DF] max-w-2xl">
          Be part of a team that&apos;s engineering the future. We&apos;re looking for talented individuals who share our passion for innovation.
        </p>
      </div>
    </div>
  );
}
