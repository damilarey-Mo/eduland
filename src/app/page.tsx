import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import FlexibleLeaseCalculator from "@/components/lease/FlexibleLeaseCalculator";

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Flexible Lease Calculator Section */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-primary-600">FLEXIBLE LEASING</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pay less for longer stays
            </p>
            <p className="mt-6 text-lg text-gray-600">
              Calculate how much you can save with our flexible lease terms. The longer you stay, the more you save.
            </p>
          </div>
          
          <div className="mx-auto max-w-3xl">
            <FlexibleLeaseCalculator />
          </div>
        </div>
      </div>
      
      <Features />
      <Testimonials />
    </main>
  );
}
