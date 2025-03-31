import React, { useState } from 'react';
import Modal from './components/modal';
import { ModalWrapperContext } from './context/modalWrapperContext';

interface IModalWrapperProps {
  children?: React.ReactNode;
  className?: string;
  backdropClose?: boolean;
  backdropClassName?: string;
}

interface IModalWrapperResponse {
  modal?: React.ReactNode;
  openModal?: () => void;
  closeModal?: () => void;
}

const useModalWrapper = ({
  children,
  className = '',
  backdropClose = true,
  backdropClassName = '',
}: IModalWrapperProps): IModalWrapperResponse => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const modal = showModal && (
    <ModalWrapperContext.Provider
      value={{
        showModal,
        setShowModal,
      }}
    >
      <Modal
        className={className}
        backdropClose={backdropClose}
        backdropClassName={backdropClassName}
      >
        {children}
      </Modal>
    </ModalWrapperContext.Provider>
  );

  return {
    modal,
    openModal,
    closeModal,
  };
};

export { useModalWrapper };
