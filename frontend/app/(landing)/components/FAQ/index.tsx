import Head from 'next/head';
import Container from "@/components/layout/Container";
import FAQList from "./components/FAQList";
import { getFaqs } from "@/requests/faqs";

export default async function FAQ() {
  const faqs = await getFaqs();

  const addFaqsJsonLd = () => {
    return {
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.data.map(faq => {
          return {
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer
            }
          }
        })
      })
    }
  }

  return (
    <Container className={"faq flex flex-col gap-4 items-center"}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addFaqsJsonLd()}
          key="product-jsonld"
        />
      </Head>
      <p className={"text-secondary text-sm"}>Support</p>
      <h2 className={"h2 text-center"}>Got Questions? We&#39;ve Got Answers!</h2>
      <p className={"subtitle text-center"}>The questions we get asked the most</p>
      <FAQList initialFaqs={faqs.data} />
    </Container>
  );
}