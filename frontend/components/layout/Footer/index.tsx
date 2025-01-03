import React, {FC} from 'react';
import Container from "@/components/layout/Container";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className={"py-10 w-full flex s:px-0 px-2 justify-center"}>
      <Container className={"flex relative items-center gap-5 justify-between"}>
        <Image src={"/img/logo.png"} alt={"logo"} width={64} height={64} className={"absolute top-[100px] s:static h-[70px] w-[52px]"}/>
        <nav>
          <ul className={"flex gap-5 flex-wrap items-center justify-center"}>
            <li>
              About us
            </li>
            <li>
              Our projects
            </li>
            <li>
              Reviews
            </li>
            <li>
              Contact us
            </li>
            <li>
              FAQ
            </li>
          </ul>
        </nav>
        <nav>
          <ul className={"absolute top-[110px] right-0 s:static flex gap-2"}>
            <li>
              <a href={"#"}>
                <Image src={"/img/footer/socials/telegram.png"} alt={""} width={36} height={36}/>
              </a>
            </li>
            <li>
              <a href={"#"}>
                <Image src={"/img/footer/socials/instagram.png"} alt={""} width={36} height={36}/>
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
};

export default Footer;