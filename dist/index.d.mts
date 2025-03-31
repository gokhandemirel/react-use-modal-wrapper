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

declare const useModalWrapper: ({ children, className, backdropClose, backdropClassName }: IModalWrapperProps) => IModalWrapperResponse;

export { useModalWrapper };
