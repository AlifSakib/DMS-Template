// components/CustomLabel.tsx

import React, { HTMLProps } from 'react';

interface CustomLabelProps extends HTMLProps<HTMLLabelElement> {
  htmlFor: string;
  className?: string;
}

const Label: React.FC<CustomLabelProps> = ({ htmlFor, className = '', children, ...props }) => {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-700 ${className}`} {...props}>
      {children}
    </label>
  );
};

export default Label;
