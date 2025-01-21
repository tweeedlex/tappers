import React from 'react';
import Image from "next/image";
import Container from "@/components/layout/Container";

const Header: React.FC = () => {
  return (
    <header className={"height-header w-full relative z-[6] flex justify-center"}>
      <Container>
        <Image src={"/img/logo.png"} alt={"logo"} width={70} height={52} className={"h-[70px] w-[52px]"} />
      </Container>
    </header>
  );
};

export default Header;
