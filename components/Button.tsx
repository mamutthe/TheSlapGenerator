import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={`bg-[#0070F3] active:bg-[#2587f7] hover:bg-[#147cf1] rounded-lg w-36 h-12 shadow-lg text-white text-xl flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
