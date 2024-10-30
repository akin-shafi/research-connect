import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const researchItems = [
  {
    title: "Exploring Content Creation Techniques",
    description:
      "A deep dive into engaging content strategies with text, images, videos, and more.",
    image: "https://via.placeholder.com/300x200",
    researcher: "Dr. Emily Carter, Content Sciences Lab",
  },
  {
    title: "The Future of Instant Publishing",
    description:
      "Understanding the technology that powers instant content delivery to audiences worldwide.",
    image: "https://via.placeholder.com/300x200",
    researcher: "Dr. Max Alvarez, Instant Media Research Group",
  },
  {
    title: "Audience Insights and Analytics",
    description:
      "Insights into user engagement and the role of data in content strategy.",
    image: "https://via.placeholder.com/300x200",
    researcher: "Dr. Sarah Lee, Behavioral Analytics Center",
  },
  {
    title: "Optimizing for Engagement",
    description:
      "Research on optimizing content to boost user engagement metrics and retention.",
    image: "https://via.placeholder.com/300x200",
    researcher: "Dr. Ian Roberts, Engagement Metrics Institute",
  },
];

export function PublishSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="px-4 md:px-12">
        <div className="flex flex-col items-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Research Insights
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover in-depth research from industry experts and academics on content creation, analytics, and audience engagement.
          </p>
        </div>
        <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4">
          {researchItems.map((item, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="p-0 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="text-xl mb-2 mt-2">{item.title}</CardTitle>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <p className="text-sm font-semibold text-gray-500">{item.researcher}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
