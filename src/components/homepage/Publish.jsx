import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const publishItems = [
  {
    title: "Easy Content Creation",
    description:
      "Create engaging content with our intuitive editor. Support for text, images, videos, and more.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Instant Publishing",
    description:
      "Go live with just one click. Your content is immediately available to your audience.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Audience Insights",
    description:
      "Understand your readers with detailed analytics and engagement metrics.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Audience Insights",
    description:
      "Understand your readers with detailed analytics and engagement metrics.",
    image: "https://via.placeholder.com/300x200",
  },
];

export function PublishSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-12">
        <div className="flex flex-col items-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Publish with Ease
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our platform makes it simple to share your content with the world.
            Just a few clicks and you&apos;re live!
          </p>
        </div>
        <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4">
          {publishItems.map((item, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="p-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="text-xl mb-2 mt-2">{item.title}</CardTitle>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
