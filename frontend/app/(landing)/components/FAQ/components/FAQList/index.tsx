"use client";
import Image from "next/image";
import { useState } from "react";

interface Question {
  id: number;
  question: string;
  answer: string;
}

interface FAQClientProps {
  initialFaqs: Question[];
}

function FAQList({ initialFaqs }: FAQClientProps) {
  const [faqs, setFaqs] = useState(initialFaqs.map(faq => ({ ...faq, isActive: false })));

  return (
    <div className={"w-full max-w-[800px] flex flex-col gap-3 items-start"}>
      {faqs.map((question) => (
        <div key={question.id} className={"flex flex-col gap-3"}>
          <div
            onClick={() =>
              setFaqs((questions) =>
                questions.map((q) =>
                  q.id === question.id
                    ? { ...q, isActive: !q.isActive }
                    : q
                )
              )
            }
            className={"flex items-center justify-between w-full cursor-pointer"}
          >
            <h3 className={"h3"}>{question.question}</h3>
            <button className="flex-shrink-0">
              <Image
                className={`transition-transform ${
                  question.isActive ? "rotate-180" : "rotate-90"
                }`}
                alt="Toggle answer"
                width={24}
                height={24}
                src={"/img/landing/hero/arrow.png"}
              />
            </button>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              question.isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className={"text-sm subtitle"}>{question.answer}</p>
          </div>
          <hr className={"bg-white opacity-15"} />
        </div>
      ))}
    </div>
  );
}

export default FAQList;