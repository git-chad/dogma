import { CardCarousel } from "@/components/global/card-carousel";
import Navbar from "@/components/global/navbar";
import { ContainerScroll } from "@/components/global/scroll-anim";
import { HeroParallax } from "@/components/global/hero-parallax";
import { Button } from "@/components/ui/button";
import { clients } from "@/lib/constant";
import { products } from "@/lib/constant";
import { Lamp } from "@/components/global/lamp";
import Plans from "@/components/global/plans";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section className="min-h-screen w-full bg-neutral-950 rounded-md !overflow-visible relative flex flex-col items-center antialiased">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]" />

        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex flex-col items-center justify-center">
                <Button
                  size={"lg"}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4d4d4d] bg-[#1f1f1f] hover:bg-white hover:shadow-xl hover:shadow-neutral-500 duration-500 group transition-all flex items-center justify-center gap-4"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                    Get started for free
                  </span>
                </Button>
                <h1 className="pointer-events-none text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold text-balance">
                  Automate your workflow with Dogma
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <CardCarousel
        className="md: mt-[18rem] md:mt-[-100px] mx-auto"
        items={clients}
        direction="right"
        speed="slow"
      />
      <section>
        <HeroParallax products={products} />
      </section>

      <section className="mt-[-1200px]">
        <Lamp />
        <Plans/>
      </section>
    </main>
  );
}
