import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary/90 to-primary text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="relative  container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Shape the Future of Engineering
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Join a team that&apos;s shaping the future of automotive, aerospace,
          healthcare, robotics, and more.
        </p>
        <Button
          size="lg"
          className="bg-white text-primary hover:bg-white/90"
          onClick={() =>
            document
              .getElementById("positions")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View Open Positions
        </Button>
      </div>
    </section>
  );
}
