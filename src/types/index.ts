export interface IModalWrapperContextProps {
  options?: IModalWrapperProps;
  showModal?: boolean;
  setShowModal?: (modal: boolean) => void;
  children?: React.ReactNode;
}

export interface IModalWrapperProps {
  children?: React.ReactNode;
  className?: string;
  backdropClose?: boolean;
  backdropClassName?: string;
}

export interface IModalWrapperResponse {
  modal?: React.ReactNode;
  openModal?: () => void;
  closeModal?: () => void;
}
