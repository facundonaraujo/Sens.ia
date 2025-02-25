import { ReactNode } from 'react';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

const Button = ({ onClick, children, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent text-black px-4 py-2 rounded-xl border border-gray-300 ${className} cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;