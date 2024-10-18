import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { TelescopeIcon } from "lucide-react";

function ProjectCard({ projectDescription, tech }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button onClick={openModal}>Read More</Button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="text-emerald-500" >Project Description</ModalHeader>
          <ModalCloseButton  className="text-black"/>
          <ModalBody>
            <p className="text-lg font-mono">{projectDescription}</p>
            <p className="text-lg mt-6 font-bold"><TelescopeIcon/>{tech}</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ProjectCard;
