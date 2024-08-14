import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

function Modal({ children, onClose }) {
  return createPortal(
    <div className="Overlay">
      <div className="styledModal">
        <button className="modal-btn" onClick={onClose}>
          <HiXMark />
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
