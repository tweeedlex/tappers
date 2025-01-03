"use client";

import React, {FC, useState} from 'react';
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

const ContactUs: FC = () => {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    budget: "",
    message: ""
  });

  return (
    <Container className={"py-20 flex flex-col gap-5 items-center"}>
        <p className={"text-secondary text-sm"}>Contact us</p>
        <h2 className={"h2"}>Let's Talk!</h2>
        <p className={"subtitle"}>We know that you want to implement your idea in reality. Why shouldn't we do this together?</p>
        <div className={"flex w-full max-w-[600px] flex-col gap-3 items-center"}>
          <div className={"flex w-full flex-col gap-1 items-start"}>
            <p className={"text-sm text-primary"}>Name</p>
            <Input className={"w-full"} placeholder={"Nik"} value={formInfo.name} onChange={(value: string) => setFormInfo({...formInfo, name: value})}/>
          </div>
          <div className={"flex w-full flex-col gap-1 items-start"}>
            <p className={"text-sm text-primary"}>E-Mail</p>
            <Input className={"w-full"} placeholder={"nik@mail.com"} value={formInfo.email} onChange={(value: string) => setFormInfo({...formInfo, email: value})}/>
          </div>
          <div className={"flex w-full flex-col gap-1 items-start"}>
            <p className={"text-sm text-primary"}>Your estimated budget</p>
            <Input className={"w-full"} placeholder={"2000$"} value={formInfo.budget} onChange={(value: string) => setFormInfo({...formInfo, budget: value})}/>
          </div>
          <div className={"flex w-full flex-col gap-1 items-start"}>
            <p className={"text-sm text-primary"}>Message</p>
            <TextArea className={"w-full h-[100px]"} placeholder={"Feel free to share your thoughts on the project!"} value={formInfo.message} onChange={(value: string) => setFormInfo({...formInfo, message: value})}/>
          </div>
          <Button variant={"primary"} className={"m:min-w-[unset] mt-4 m:max-w-[fit-content] min-w-full mac-w-unset'"}>Submit</Button>
        </div>
    </Container>
  );
};

export default ContactUs;