//This module renders the modal dialog used when deleting a record.

import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div className='delete-modal' onClick={props.onDismiss}>
      <div onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          Are you sure you want to delete (donor name here){" "}
        </div>
        <div className='modal-content'>Confirm Deletion</div>
        <div className='modal-actions'> delete and cancel buttons</div>
      </div>
    </div>
  );
};

export default Modal;
