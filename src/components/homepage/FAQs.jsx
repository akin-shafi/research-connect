import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What is Research Connect?',
    answer: 'Research Connect is a marketplace designed for researchers, innovators, and industry professionals to showcase their products, receive feedback, and connect with collaborators or potential investors.',
  },
  {
    question: 'Who can use the Research Connect platform?',
    answer: 'The platform is open to researchers/innovators, reviewers/experts, and collaborators/investors. Each user type can engage differently to foster collaboration and innovation.',
  },
  {
    question: 'How do I sign up as a researcher?',
    answer: 'You can register by visiting the Research Connect website and filling out the registration form. After verification, you can create your profile and start showcasing your projects.',
  },
  {
    question: 'What type of projects can I showcase',
    answer: 'You can showcase any research product, solution, or innovation that you are developing. This includes technical specifications, images, videos, and relevant documentation.',
  },
  {
    question: 'How do I find projects to invest in or collaborate with?',
    answer: 'As a collaborator or investor, you can register on the platform, specify your interests, and browse through projects that match your criteria.',
  },
]

export function FAQs() {
//   const [openItem, setOpenItem] = useState(null);

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className=" px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}