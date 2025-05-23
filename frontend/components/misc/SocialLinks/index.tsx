import React, { FC } from 'react';
import Image from "next/image";
import {getSocials} from "@/requests/socials";

const SocialLinks: FC = async () => {
  const {data: socials} = await getSocials()

  return (
    <nav>
      <ul className={"flex gap-2"}>
        {
          socials.map(social => (
            <li key={social.id}>
              <a href={social.link} target={"_blank"}>
                <Image src={social.icon} alt={""} width={36} height={36}/>
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default SocialLinks;
