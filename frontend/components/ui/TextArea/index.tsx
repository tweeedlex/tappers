import React, {FC} from 'react';
import classNames from 'classnames';

interface Props {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const TextArea: FC<Props> = ({ className, placeholder, value, onChange  }) => {
  return (
    <textarea className={classNames(className, "focus:border-primary focus:outline-none bg-transparent border border-white border-opacity-20 py-2 px-3 rounded-[4px]")} placeholder={placeholder} value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)} />
  );
};

export default TextArea;