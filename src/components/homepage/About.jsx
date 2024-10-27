import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function AboutUs() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-12">
        <div className="flex flex-col items-start space-y-4">
          <div className="space-y-2">
            <p className="uppercase text-primary font-semibold">About Us</p>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Empowering Research Connect Marketplace
            </h2>
            <p className="max-w-[1000px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are a team of passionate individuals dedicated to creating
              innovative solutions for businesses and individuals alike. Our
              mission is to empower our clients with cutting-edge technology and
              unparalleled support, helping them achieve their goals and
              transform their visions into reality.
            </p>
          </div>
          <Button size="lg" variant="ghost" className="underline text-primary">
            Read More <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
