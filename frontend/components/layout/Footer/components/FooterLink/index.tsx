"use client";
import React, { FC } from 'react';
import { scrollToSection } from "@/helpers/navigation";

type Link = {
  name: string;
  class: string;
}

interface Props {
  link: Link
}

const FooterLink: FC<Props> = ({ link }) => {
  return (
    <li>
      <a onClick={() => scrollToSection(link.class)} className={"cursor-pointer"}>
        {link.name}
      </a>
    </li>
  );
};

export default FooterLink;
