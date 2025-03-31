import React, { useState } from 'react';
import { createContext } from 'react';
import { IDateCalendarContextProps } from '../types';

const ModalWrapperContext = createContext<IDateCalendarContextProps>({});

const ModalWrapperProvider = ({
  options,
  children,
}: IDateCalendarContextProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <ModalWrapperContext.Provider
      value={{
        showModal,
        setShowModal,
        options,
      }}
    >
      {children}
    </ModalWrapperContext.Provider>
  );
};

export { ModalWrapperContext, ModalWrapperProvider };
