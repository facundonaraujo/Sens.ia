import React from 'react';

interface LoaderProps {
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-48">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
      {text &&
        <span className="mt-2 text-gray-500">{text}</span>
      }
    </div>
  );
};

export default Loader;
