import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What is your product?',
    answer: 'Our product is a comprehensive platform designed to help creators publish and monetize their content easily.',
  },
  {
    question: 'How much does it cost?',
    answer: 'We offer various pricing tiers to suit different needs. Our basic plan starts at $9.99/month, with more advanced features available in our premium plans.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, we offer a 14-day free trial for all new users. This allows you to explore all our features and decide if our platform is right for you.',
  },
  {
    question: 'How do I get started?',
    answer: 'Getting started is easy! Simply click the "Sign Up" button, create an account, and you can begin using our platform immediately.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide 24/7 customer support via email and live chat. Our team of experts is always ready to assist you with any questions or issues you may have.',
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