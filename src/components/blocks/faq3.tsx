
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq3Props {
  heading: string;
  description: string;
  items?: FaqItem[];
  supportHeading: string;
  supportDescription: string;
  supportButtonText: string;
  supportButtonUrl: string;
}

const faqItems = [
  {
    id: "faq-1",
    question: "What rental spaces do you offer?",
    answer: "We offer versatile event spaces including grand ballrooms, intimate gathering rooms, outdoor gardens, and modern conference facilities.",
  },
  {
    id: "faq-2",
    question: "What is included in the rental fee?",
    answer: "Our rental fee includes basic furniture setup, cleaning, facility management, and on-site staff support during your event.",
  },
  {
    id: "faq-3",
    question: "Do you provide catering services?",
    answer: "Yes, we offer premium catering services and also work with approved external vendors if you have specific preferences.",
  },
  {
    id: "faq-4",
    question: "What is your cancellation policy?",
    answer: "Our flexible cancellation policy allows for full refunds up to 60 days before your event, with partial refunds available up to 30 days prior.",
  },
  {
    id: "faq-5",
    question: "Do you offer wedding packages?",
    answer: "Yes, we offer comprehensive wedding packages that can be customized to your specific needs, including ceremony and reception spaces.",
  },
  {
    id: "faq-6",
    question: "How far in advance should I book?",
    answer: "We recommend booking 6-12 months in advance for major events like weddings, and 2-3 months for smaller events, subject to availability.",
  },
];

const Faq3 = ({
  heading = "Frequently Asked Questions",
  description = "Find answers to common questions about our venue and services. Can't find what you're looking for? Our team is here to help.",
  items = faqItems,
  supportHeading = "Need more information?",
  supportDescription = "Our dedicated event planning team is here to help make your event perfect. Contact us for personalized assistance.",
  supportButtonText = "Contact Our Team",
  supportButtonUrl = "#contact",
}: Faq3Props) => {
  return (
    <section className="py-32">
      <div className="container space-y-16">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-lg bg-accent p-4 text-center md:rounded-xl md:p-6 lg:p-8">
          <div className="relative">
            <Avatar className="absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>EV</AvatarFallback>
            </Avatar>
            <Avatar className="absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>PL</AvatarFallback>
            </Avatar>
            <Avatar className="mb-4 size-16 border md:mb-5">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>CT</AvatarFallback>
            </Avatar>
          </div>
          <h3 className="mb-2 max-w-3xl font-semibold lg:text-lg">
            {supportHeading}
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            {supportDescription}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button className="w-full sm:w-auto" asChild>
              <a href={supportButtonUrl}>{supportButtonText}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Faq3 };
