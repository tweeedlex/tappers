import Container from "@/components/layout/Container";
import FAQList from "./components/FAQList";
import { getFaqs } from "@/requests/faqs";
import Head from "next/head";

export default async function FAQ() {
  const faqs = await getFaqs();
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.data.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
    <Container className={"faq flex flex-col gap-4 items-center"}>
      <p className={"text-secondary text-sm"}>Support</p>
      <h2 className={"h2 text-center"}>Got Questions? We&#39;ve Got Answers!</h2>
      <p className={"subtitle text-center"}>The questions we get asked the most</p>
      <FAQList initialFaqs={faqs.data} />
    </Container>
    </>
  );
}