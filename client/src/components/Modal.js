//This module renders the modal dialog used when deleting a record.

import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div className='delete-modal' onClick={props.onDismiss}>
      <div onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          {props.title}
        </div>
        <div className='modal-content'>{props.content}</div>
        <div className='modal-actions'> {props.actions}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
