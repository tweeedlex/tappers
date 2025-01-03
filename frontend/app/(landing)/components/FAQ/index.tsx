"use client";

import React, { FC, useState } from "react";
import Container from "@/components/layout/Container";
import Image from "next/image";

interface Question {
  id: number;
  question: string;
  answer: string;
  isActive: boolean;
}

const FAQ: FC = () => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      question: "How do I get started?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
      isActive: false,
    },
    {
      id: 2,
      question: "What is your refund policy?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
      isActive: false,
    },
    {
      id: 3,
      question: "How does customer support work?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
      isActive: false,
    },
    {
      id: 4,
      question: "Can I customize my plan?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
      isActive: false,
    },
  ]);

  return (
    <Container className={"flex py-15 flex-col gap-4 items-center"}>
      <p className={"text-secondary text-sm"}>Support</p>
      <h2 className={"h2 text-center"}>Got Questions? We've Got Answers!</h2>
      <p className={"subtitle text-center"}>The questions we get the most</p>
      <div className={"w-full max-w-[600px] flex flex-col gap-3 items-start"}>
        {questions.map((question) => (
          <div key={question.id} className={"flex flex-col gap-3"}>
            <div
              onClick={() =>
                setQuestions((questions) =>
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
                  alt=""
                  width={24}
                  height={24}
                  src={"/img/landing/hero/arrow.png"}
                />
              </button>
            </div>
            {/* Анімація для відповіді */}
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
    </Container>
  );
};

export default FAQ;
