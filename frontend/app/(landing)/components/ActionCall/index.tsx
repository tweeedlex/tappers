"use client";
import React, { FC } from 'react';
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import {scrollToSection} from "@/helpers/navigation";

const ActionCall: FC = () => {
  return (
    <Container className={"flex flex-col gap-5 items-center text-center"}>
      <h2 className={"h2"}>Let&#39;s discuss <span className={"text-secondary"}>your project!</span></h2>
      <p className={"subtitle"}>Leave your message and we will contact you, or text us directly in our socials!</p>
      <Button variant={"primary"} onClick={() => scrollToSection("contact")}>Contact us</Button>
    </Container>
  );
};

export default ActionCall;
