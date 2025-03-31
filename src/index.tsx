import React, { useState } from 'react';
import Modal from './components/modal';
import { ModalWrapperProvider } from './context/modalWrapperContext';
import { IModalWrapperProps, IModalWrapperResponse } from './types';

const useModalWrapper = ({
  children,
  className = '',
  backdropClose = true,
  backdropClassName = ''
}: IModalWrapperProps): IModalWrapperResponse => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const modal = showModal && (
    <ModalWrapperProvider
      showModal={showModal}
      setShowModal={setShowModal}
      options={{
        children,
        className,
        backdropClose,
        backdropClassName
      }}
    >
      <Modal className={className} backdropClose={backdropClose} backdropClassName={backdropClassName}>
        {children}
      </Modal>
    </ModalWrapperProvider>
  );

  return {
    modal,
    openModal,
    closeModal
  };
};

export { useModalWrapper };
