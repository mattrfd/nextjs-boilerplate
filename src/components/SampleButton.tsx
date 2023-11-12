import React from "react";
import "../styles/button.css";

interface SmapleButtonProps {
  children: React.ReactNode | string;
  className?: string;
  onClick: () => void;
}

export const SmapleButton: React.FC<SmapleButtonProps> = ({
  children,
  className,
  onClick
}) => (
  <button onClick={onClick} className={`btn ${className}`}>
    {children}
  </button>
);