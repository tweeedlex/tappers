import React, {FC} from 'react';
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  variant: string;
  className?: string;
}

const Button: FC<Props> = ({ children, variant = "default", className }) => {
  const classList = classNames(generateClasses(variant), className);

  return (
    <button className={classList}>
      {children}
    </button>
  );
};

const generateClasses = (variant: string) => {
  switch (variant) {
    case "default":
      return "bg-blue-500 text-white px-4 py-2 rounded";
    case "secondary":
      return `
        border-[1px] px-2 m:px-4 xl:px-8 py-1 m:py-2 xl:py-4 xxl:px-10 rounded-[4px] m:rounded-[8px] l:rounded-[12px] xl:rounded-[16px] py-4 rounded-[16px] max-w-[fit-content]
      `;
    default:
      return "bg-blue-500 text-white px-4 py-2 rounded";
  }
}

export default Button;