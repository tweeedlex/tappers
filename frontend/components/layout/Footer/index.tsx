import React, {FC} from 'react';
import Container from "@/components/layout/Container";
import Image from "next/image";
import FooterLink from "@/components/layout/Footer/components/FooterLink";
import SocialLinks from "@/components/misc/SocialLinks";

const Footer: FC = async () => {
  const links = [
    {
      name: "About us",
      class: "stats"
    },
    {
      name: "Reviews",
      class: "reviews"
    },
    {
      name: "Contact us",
      class: "contact"
    },
    {
      name: "FAQ",
      class: "faq"
    },
    {
      name: "Our projects",
      class: "works"
    }
  ]

  return (
    <footer className={"py-10 w-full flex s:px-0 px-2 justify-center"}>
      <Container className={"flex relative items-center gap-5 justify-between"}>
        <Image src={"/img/logo.png"} alt={"logo"} width={64} height={64} className={"absolute top-[100px] s:static h-[70px] w-[52px]"}/>
        <nav>
          <ul className={"flex gap-5 flex-wrap items-center justify-center"}>
            {links.map(link => (
              <FooterLink key={link.name} link={link} />
            ))}
          </ul>
        </nav>
        <div className={"absolute top-[110px] right-0 s:static"}>
          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;