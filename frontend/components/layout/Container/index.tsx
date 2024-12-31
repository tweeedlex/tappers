import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <div className={"w-full max-w-[1440px] px-2 md:px-5"}>
      { children }
    </div>
  );
};

export default Container;
