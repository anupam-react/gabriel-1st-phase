import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionCustomIcon({data}) {

  console.log(data)
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
    {data?.map((d, i)=>(
      <Accordion open={open === i+1} icon={<Icon id={i+1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(i+1)}>
          <p className="text-[18px] text-[#000000B2]">
           {d?.question}
          </p>
        </AccordionHeader>
        <AccordionBody>
        {d?.answer}
        </AccordionBody>
      </Accordion>

    ))}
    
    </>
  );
}
