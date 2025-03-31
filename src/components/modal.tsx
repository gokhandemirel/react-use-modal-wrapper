import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { ModalWrapperContext } from '../context/modalWrapperContext';
import { useClickOutside } from '../hooks/useClickOutside';

interface IModalProps {
  children?: React.ReactNode;
  className?: string;
  backdropClose?: boolean;
  backdropClassName?: string;
}

const Backdrop = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.12);
  position: fixed;
  left: 0;
  top: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: 240px;
  height: 100px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.04);
`;

export default function Modal({
  children,
  className = '',
  backdropClose,
  backdropClassName = '',
}: IModalProps) {
  const { setShowModal } = useContext(ModalWrapperContext);
  const ref = useRef<HTMLDivElement | null>(null);

  const closeModal = () => {
    setShowModal(false);
  };

  if (backdropClose) {
    useClickOutside(ref, closeModal);
  }

  return (
    <Backdrop className={backdropClassName}>
      <Wrapper className={className} ref={ref}>
        {children}
      </Wrapper>
    </Backdrop>
  );
}
