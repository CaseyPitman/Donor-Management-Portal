//This module renders the modal dialog used when deleting a record.

import React, {useState} from "react";
import ReactDOM from "react-dom";


import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
