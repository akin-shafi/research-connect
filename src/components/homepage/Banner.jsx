import { Button } from "@/components/ui/button";

export function Banner() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-white">
      <div className=" px-4 md:px-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Join Our Community
            </h2>
            <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Become a part of the Research Connect community today! Whether
              you&apos;re a researcher looking to showcase your innovative products,
              an expert eager to provide feedback, or a collaborator seeking the
              next big idea, our platform is designed for you.
            </p>
            <Button variant="outline" size="lg">
              Get Started Now
            </Button>
          </div>
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/400x600"
              alt="Community illustration"
              className="w-full max-w-[500px] h-[300px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
