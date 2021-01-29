/* 
This component renders a modal to add a donor to donor details without 
going through full edit process.
 */
import React from "react";
import ReactDOM from "react-dom";



  //define onDismiss in AddDonation componenet (redirect to detail)
  const Modal = props => {
    return ReactDOM.createPortal(
      <div className='modal'>
        <div className='modal-dialog' onClick={e => e.stopPropagation()}>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Modal title</h5>
              {/* <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button> */}
            </div>
            <div className='modal-body'>
              <p>Modal body text goes here.</p>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-primary'>
                Save changes
              </button>
              <button
                type='button'
                className='btn btn-secondary'>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>,
      document.getElementById("modal")
    );
  };


export default Modal;
