import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function Accordian() {
    return (
      <Accordion type="single" collapsible className="w-full mt-6 font-stolzl text-xs font-medium">
        <AccordionItem value="item-1 " className='border rounded-lg px-3 '>
          <AccordionTrigger>Recommended courses</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className='border rounded-lg px-3 mt-4'>
          <AccordionTrigger>Performance in previous tests</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className='border rounded-lg px-3 mt-4'>
          <AccordionTrigger>Strengths & weakness</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  