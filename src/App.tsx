import React, { useState } from "react";
import { ButtonDemo } from "./components/custom-ui/button";
import { Modal } from "./components/custom-ui/modal";

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-4">
      <h3 className="text-xl font-bold text-gray-800">Hello Vite!!</h3>
      <ButtonDemo onClick={handleOpenModal} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
