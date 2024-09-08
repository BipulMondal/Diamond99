import React, { useEffect, useState } from "react";
import modalImg from "../images/modalImg.png";
import "./Modal.css";
import { requestHandler } from "../utils/requestHandler";

const EditButtonModal = ({ setShowModal }) => {
  return (
    <div>
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
          <div className="edit-modal-body">
            <div className="headone">
              <button className="btn btn-dark">Game Buttons</button>
              <button className="btn btn-secondary">Cashino Buttons</button>
            </div>
            <div className="row gx-2 main_edit_modal">
              <div className="col-md-6">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditButtonModal;
