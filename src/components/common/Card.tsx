import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  title: string;
  icon?: ReactNode;
  className?: string;
}

const Card = ({ children, title, icon, className }: CardProps) => {
  return (
    <div className={`bg-white p-6 rounded-md flex flex-col items-start w-full ${className}`}>
      {icon && <div className="text-2xl">{icon}</div>}
      <h2 className="text-lg mb-2">{title}</h2>
      {children}
    </div>
  );
};

export default Card;
