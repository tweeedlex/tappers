import Container from "@/components/layout/Container";
import FAQList from "./FAQList";
import { getFaqs } from "@/requests/faqs";

export default async function FAQ() {
  const faqs = await getFaqs();

  return (
    <Container className={"flex flex-col gap-4 items-center"}>
      <p className={"text-secondary text-sm"}>Support</p>
      <h2 className={"h2 text-center"}>Got Questions? We&#39;ve Got Answers!</h2>
      <p className={"subtitle text-center"}>The questions we get asked the most</p>
      <FAQList initialFaqs={faqs.data} />
    </Container>
  );
}