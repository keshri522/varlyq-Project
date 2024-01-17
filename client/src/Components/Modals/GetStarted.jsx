//
import React, { useState } from "react";
import styles from "../Styles/GetStarted.module.css";
import ReactDOM from "react-dom";
import FirstModal from "./FirstModal";

const GetStarted = () => {
  const [showModal, setShowModal] = useState(false); // this is the state will handle the the status of modal open or not

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const modalRoot = document.getElementById("custom-modal"); // this is the node  i have injected thev node in virtual dom

  return (
    <>
      <div className={`${styles.center}`}>
        <button onClick={openModal} className="btn btn-primary">
          Get Started
        </button>
      </div>
      {/* // this is the react portal with this we can show modals  */}
      {showModal &&
        ReactDOM.createPortal(
          <FirstModal closeModal={closeModal} />,
          modalRoot
        )}
    </>
  );
};

export default GetStarted;
