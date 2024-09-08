import React, { useState } from "react";
import "./Modal.css";
import { requestHandler } from "../utils/requestHandler";
import { toast } from "react-toastify";

const EditButtonModal = ({ setShowModal, buttonsData }) => {
  const [data, setData] = useState({
    bettingButtons: [...buttonsData.bettingButtons],
    casinoButtons: [...buttonsData.casinoButtons],
  });

  const [activeButtons, setActiveButtons] = useState(data.bettingButtons);

  // Handle button click to display betting buttons
  const handleBetClick = () => {
    setActiveButtons(data.bettingButtons);
  };

  // Handle button click to display casino buttons
  const handleCasinoClick = () => {
    setActiveButtons(data.casinoButtons);
  };

  // Handle input change
  const handleInputChange = (e, index, field) => {
    const newButtons = [...activeButtons];
    newButtons[index][field] = e.target.value; // Update the value in the array
    setActiveButtons(newButtons); // Set the updated buttons as active

    // Update the correct part of the state (betting or casino buttons)
    if (activeButtons === data.bettingButtons) {
      setData((prevData) => ({
        ...prevData,
        bettingButtons: newButtons,
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        casinoButtons: newButtons,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      let res = await requestHandler({
        endpoint: "/user-buttons",
        method: "PUT",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res && res.success) {
        setShowModal(false)
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <div>
      <div className="custom-modal-overlay">
        <div className="custom-modal">
          <div className="edit-modal-header">
            <h3>Set Button Value</h3>
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
              <button className="btn btn-dark" onClick={handleBetClick}>
                Game Buttons
              </button>
              <button className="btn btn-secondary" onClick={handleCasinoClick}>
                Casino Buttons
              </button>
            </div>
            <div className="row gx-2 main_edit_modal">
              <div className="col-md-6 mb-3">
                <p className="edit_price_text">Price Label: </p>
              </div>
              <div className="col-md-6 mb-3">
                <p className="edit_price_text">Price Value: </p>
              </div>
              {activeButtons.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      value={item.tag}
                      onChange={(e) => handleInputChange(e, index, "tag")}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="number"
                      className="form-control"
                      value={item.price}
                      onChange={(e) => handleInputChange(e, index, "price")}
                    />
                  </div>
                </React.Fragment>
              ))}
              <div>
                <button className="update_price" onClick={(e) => handleSubmit(e)}>Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditButtonModal;
