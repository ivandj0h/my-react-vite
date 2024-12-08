import React from "react";

interface ButtonDemoProps {
  onClick?: () => void;
}

export const ButtonDemo: React.FC<ButtonDemoProps> = ({ onClick }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={onClick}
    >
      Open Modal
    </button>
  );
};
