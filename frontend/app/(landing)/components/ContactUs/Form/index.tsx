"use client";
import React, {FC, useState} from 'react';
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import Button from "@/components/ui/Button";
import {toastError, toastSuccess} from "@/helpers/toasts";
import {addContact} from "@/requests/contact";

const Form: FC = () => {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    budget: "",
    message: ""
  });

  const formValidation = () => {
    return !(!formInfo.name || !formInfo.email || !formInfo.budget || !formInfo.message);
  }

  const handleSubmit = async () => {
    if (!formValidation()) {
      return toastError("Please fill all the fields");
    }
    const response = await addContact(formInfo);

    if (response.error) {
      return toastError("Unexpected error occurred. Please try again later.");
    }
    setFormInfo({
      name: "",
      email: "",
      budget: "",
      message: ""
    });
    toastSuccess("Thank you for your message! We will contact you soon.");
  };

  return (
    <div className={"flex w-full max-w-[600px] flex-col gap-3 items-center"}>
      <div className={"flex w-full flex-col gap-1 items-start"}>
        <p className={"text-sm text-primary"}>Name</p>
        <Input className={"w-full"} placeholder={"Nik"} value={formInfo.name}
               onChange={(value: string) => setFormInfo({...formInfo, name: value})}/>
      </div>
      <div className={"flex w-full flex-col gap-1 items-start"}>
        <p className={"text-sm text-primary"}>E-Mail</p>
        <Input className={"w-full"} placeholder={"nik@mail.com"} value={formInfo.email}
               onChange={(value: string) => setFormInfo({...formInfo, email: value})}/>
      </div>
      <div className={"flex w-full flex-col gap-1 items-start"}>
        <p className={"text-sm text-primary"}>Your estimated budget</p>
        <Input className={"w-full"} placeholder={"2000$"} value={formInfo.budget}
               onChange={(value: string) => setFormInfo({...formInfo, budget: value})}/>
      </div>
      <div className={"flex w-full flex-col gap-1 items-start"}>
        <p className={"text-sm text-primary"}>Message</p>
        <TextArea className={"w-full h-[100px]"} placeholder={"Feel free to share your thoughts on the project!"}
                  value={formInfo.message} onChange={(value: string) => setFormInfo({...formInfo, message: value})}/>
      </div>
      <Button onClick={handleSubmit} variant={"primary"}
              className={"m:min-w-[unset] mt-4 m:max-w-[fit-content] min-w-full mac-w-unset'"}>Submit</Button>
    </div>
  );
};

export default Form;
