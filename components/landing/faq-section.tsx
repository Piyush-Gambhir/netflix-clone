"use client";
import React from "react";

import FAQ from "@/components/landing/faq";
import EmailInput from "@/components/landing/email-input";

const FAQs = [
  {
    header: "What is Netflix?",
    body: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices.",
  },
  {
    header: "How much does Netflix cost?",
    body: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.",
  },
  {
    header: "Where can I watch?",
    body: "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
  },
  {
    header: "How do I cancel?",
    body: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    header: "What can I watch on Netflix?",
    body: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    header: "Is Netflix good for kids?",
    body: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.\n Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

type Props = {};

export default function FAQSection({}: Props) {
  const [open, setOpen] = React.useState<number | null>(null);

  return (
    <section className="bg-black py-[72px] w-full">
      <h1 className="text-3xl lg:text-5xl font-[900] mx-auto w-full text-center">
        Frequently Asked Questions
      </h1>
      <div className="w-full mt-6 mb-12 flex flex-col gap-2">
        {FAQs.map((faq, index) => (
          <FAQ
            {...faq}
            key={index}
            open={open === index}
            onClick={() => {
              if (open === index) {
                setOpen(null);
              } else {
                setOpen(index);
              }
            }}
          />
        ))}
      </div>
      <EmailInput />
    </section>
  );
}
