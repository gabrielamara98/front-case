import { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} onCancel={onClose} className="b m-auto w-4xl">
      {children}
      <form className="flex flex-col items-center py-4 px-6" method="dialog">
        <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded w-fit cursor-pointer">Fechar</button>
      </form>
    </dialog>
  );
};

export default Modal;