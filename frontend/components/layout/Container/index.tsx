import React, { FC } from 'react';
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: FC<Props> = ({ children, className }) => {
  return (
    <div className={classNames("w-full max-w-[1440px] px-2 md:px-5", className)}>
      { children }
    </div>
  );
};

export default Container;
