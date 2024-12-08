import React, { useState } from "react";
import { ButtonDemo } from "./components/custom-ui/button";
import { Modal } from "./components/custom-ui/modal";
import Navbar from "./components/navbar";

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-4">
        <ButtonDemo onClick={handleOpenModal} />
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </>
  );
};

export default App;
