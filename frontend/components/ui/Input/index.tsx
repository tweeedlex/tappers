import React, {FC} from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const Input: FC<Props> = ({ className, placeholder, value, onChange  }) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      className={classNames(className, "focus:border-primary focus:outline-none bg-transparent border border-white border-opacity-20 py-2 px-3 rounded-[4px]")}
    />
  );
};

export default Input;