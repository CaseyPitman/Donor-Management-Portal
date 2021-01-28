/* 
This component renders a modal to add a donor to donor details without 
going through full edit process.
 */



const Modal = props => {
  console.log("bingo");


  //define onDismiss in AddDonation componenet (redirect to detail)
  return ReactDOM.createPortal(
    <div className='modal-background' onClick={props.onDismiss}>
      <div className='modal-dialog' onClick={e => e.stopPropagation()}>
        <div className='header'>Title</div>
        <div className='content'>Content</div>
        <div className='actions'>Actions</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
