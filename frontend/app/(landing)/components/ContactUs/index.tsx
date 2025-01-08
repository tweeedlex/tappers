import React, {FC} from 'react';
import Container from "@/components/layout/Container";
import SocialLinks from "@/components/misc/SocialLinks";
import Form from "@/app/(landing)/components/ContactUs/Form";

const ContactUs: FC = () => {


  return (
    <Container className={"contact flex flex-col gap-5 items-center"}>
        <p className={"text-secondary text-sm"}>Contact us</p>
        <h2 className={"h2"}>Let&#39;s Talk!</h2>
        <p className={"subtitle"}>We know that you want to implement your idea in reality. Why shouldn&#39;t we do this together?</p>
        <Form />
      <SocialLinks />
    </Container>
  );
};

export default ContactUs;