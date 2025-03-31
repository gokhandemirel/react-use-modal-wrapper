import React from 'react';
import { createContext } from 'react';
import { IModalWrapperContextProps } from '../types';

const ModalWrapperContext = createContext<IModalWrapperContextProps>({});

const ModalWrapperProvider = ({ showModal, setShowModal, options, children }: IModalWrapperContextProps) => {
  return (
    <ModalWrapperContext.Provider
      value={{
        options,
        showModal,
        setShowModal
      }}
    >
      {children}
    </ModalWrapperContext.Provider>
  );
};

export { ModalWrapperContext, ModalWrapperProvider };
