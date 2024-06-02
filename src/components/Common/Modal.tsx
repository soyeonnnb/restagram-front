import { Outlet } from "react-router-dom";

type ModalProps = {
  children: React.ReactNode;
};

function Modal({ children }: ModalProps) {
  return <>{children}</>;
}
export default Modal;
