import { AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";

export default function FaqItem({ question, answer }: { question: string; answer: string }) {
    return (
      <AccordionItem value={question} className="border-b border-gray-800">
        <AccordionTrigger className="text-left font-medium py-4 text-gray-200">{question}</AccordionTrigger>
        <AccordionContent className="text-gray-400 pb-4">{answer}</AccordionContent>
      </AccordionItem>
    )
  }