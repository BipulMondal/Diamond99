import React, { useEffect, useState } from "react";
import modalImg from "../images/modalImg.png";
import "./Modal.css";
import { requestHandler } from "../utils/requestHandler";

const HomePageModal = () => {
  const [showModal, setShowModal] = useState(true);

  const getBanner = async () => {
    let res = await requestHandler({
      endpoint: "/banner",
      method: "GET",
    });
    console.log("banner_image", res?.data?.bannerImagePath);
  };

  useEffect(() => {
    getBanner();
  }, []);

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
              {/* <img src={modalImg} alt="Modal" className="modal-image" /> */}
              <img src="http://134.209.148.155:5000/uploads/1725731154870-513252310.jpg" alt="Uploaded Image" className="modal-image"/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePageModal;
