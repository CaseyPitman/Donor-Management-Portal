/* This component renders the modal container and connects to redux store. */

import React from "react";
import { connect } from "react-redux";
import ReactModal from "react-modal";

import AddDonationModal from "./AddDonationModal";
import DeleteDonorModal from "./DeleteDonorModal";

const MODAL_TYPES = {
  "add donation": AddDonationModal,
  "delete donor": DeleteDonorModal,
};

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: props.modalProps.open,
    };
  }

  //Toggle open close
  componentWillReceiveProps(nextProps) {
    if (nextProps.modalProps.open !== this.props.modalProps.open) {
      this.setState({
        modalIsOpen: nextProps.modalProps.open,
      });
    }
  }

  //Close a modal
  closeModal = () => {
    this.props.hideModal();
  };

  render() {
    if (!this.props.modalType) {
      return null;
    }

    //Define specific type of modal to open.
    const SpecifiedModal = MODAL_TYPES[this.props.modalType];

    return (
      <div>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel='Modal'
          ariaHideApp={false}
          bodyOpenClassName='modal-open'
          className='modal-dialog modal-dialog-centered'
          style={{
            overlay: {
              backgroundColor: "rgb(44,44,44, 0.75)",
            },
          }}>
          <SpecifiedModal
            closeModal={this.closeModal}
            {...this.props.modalProps}
          />
        </ReactModal>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.modal });

export default connect(mapStateToProps, null)(ModalContainer);
