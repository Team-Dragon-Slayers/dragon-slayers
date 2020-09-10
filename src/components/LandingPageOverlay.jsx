import React, { Component } from 'react';
import AriaModal from 'react-aria-modal';
import '../App.css';

class LandingPageOverlay extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        modalActive: true
      };
  
      this.activateModal = this.activateModal.bind(this);
      this.deactivateModal = this.deactivateModal.bind(this);
      this.getApplicationNode = this.getApplicationNode.bind(this);
    }
  
    activateModal = () => {
      this.setState({ modalActive: true });
    };
  
    deactivateModal = () => {
      this.setState({ modalActive: false });
    };
  
    getApplicationNode = () => {
      return document.getElementById('application');
    };
  
    render() {
      const modal = this.state.modalActive
        ? <AriaModal
            titleText="overlay"
            onExit={this.deactivateModal}
            initialFocus="#overlay-deactivate"
            getApplicationNode={this.getApplicationNode}
            underlayStyle={{ paddingTop: '2em' }}
          >
            <div>
              <div className="overlay">
                <h2 className="title">Welcome to Dragon Slayers! </h2>
                <p>Dragon Slayers is a work-in-progress MERN-stack turn-based board game.</p>
                <p>Check out the footer to learn more about the creators of this site and the source code for this page.</p>
                <p>Click the "roll die" button to start your journey!</p>
                <button onClick={this.deactivateModal}>
                  Close this window
                </button>
              </div>
              <footer className="modal-footer">
              </footer>
            </div>
          </AriaModal>
        : false;
  
      return (
        <div>
          {modal}
        </div>
      );
    }
  }

  export default LandingPageOverlay;