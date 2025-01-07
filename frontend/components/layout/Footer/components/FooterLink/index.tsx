"use client";
import React, { FC } from 'react';

type Link = {
  name: string;
  class: string;
}

interface Props {
  link: Link
}

const FooterLink: FC<Props> = ({ link }) => {
  const scrollToSection = (section: string) => {
    const el: (HTMLDivElement | null) = document.querySelector(`.${section}`);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: "smooth"
      });
    }
  }

  return (
    <li>
      <a onClick={() => scrollToSection(link.class)} className={"cursor-pointer"}>
        {link.name}
      </a>
    </li>
  );
};

export default FooterLink;
