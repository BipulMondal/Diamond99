import React, { useState } from 'react';
import modalImg from "../images/modal.png";
import './Modal.css'; 

const HomePageModal = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div>
      {showModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <div className="custom-modal-header">
              <i
                className="close-icon"
                onClick={() => setShowModal(false)}
                style={{ cursor: "pointer" }}
              >
                &times;
              </i>
            </div>
            <div className="custom-modal-body">
              <img src={modalImg} alt="Modal" className="modal-image" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePageModal;
