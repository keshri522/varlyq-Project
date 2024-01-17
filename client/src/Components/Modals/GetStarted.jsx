// this is the get started page like the home page
import React, { useState } from "react";
import styles from "../Styles/GetStarted.module.css";
import ReactDOM from "react-dom";
import FirstModal from "./FirstModal";
import SecondModal from "./SecondModal";
import ThirdModal from "./ThirdModal";
import FourthModal from "./FourthModal";
const GetStarted = () => {
  const [showFirstModal, setShowFirstModal] = useState(false); // this will manage the state for the first modal
  const [showSecondModal, setShowSecondModal] = useState(false); // this will mange thev state of showing or hiding the second modals
  const [showThridModal, setshowThridModal] = useState(false); // this is fro the third one
  const [showFourthModal, setshowFourthModal] = useState(false); // the is same for fourth one
  // this function will open the first modal these function are parent function i am sending the function as props in the child compoents to open or hide the modals
  const openFirstModal = () => {
    setShowFirstModal(true);
  };

  const closeFirstModal = () => {
    setShowFirstModal(false);
  };

  const openSecondModal = () => {
    setShowSecondModal(true);
  };

  const closeSecondModal = () => {
    setShowSecondModal(false);
  };

  const OpenThirdModal = () => {
    setshowThridModal(true);
  };
  const CloseThirdModal = () => {
    setshowThridModal(false);
  };
  const openFoursModal = () => {
    setshowFourthModal(true);
  };
  const CloaseFourthModal = () => {
    setshowFourthModal(false);
  };

  const modalRoot = document.getElementById("custom-modal");

  return (
    <>
      <div className={`${styles.center}`}>
        <button onClick={openFirstModal} className="btn btn-primary">
          Get Started
        </button>
      </div>
      {/* // this is the react dom means using react portal to handle modal and poups  */}
      {showFirstModal &&
        ReactDOM.createPortal(
          <FirstModal
            closeModal={closeFirstModal}
            openSecondModal={openSecondModal}
          />,
          modalRoot
        )}
      {/* // for the second one this will active once second state of the application true */}
      {showSecondModal &&
        ReactDOM.createPortal(
          <SecondModal
            OpenThirdModal={OpenThirdModal}
            closeSecondModal={closeSecondModal}
          />,
          modalRoot
        )}
      {/* for the 3rd modals */}
      {showThridModal &&
        ReactDOM.createPortal(
          <ThirdModal
            openFoursModal={openFoursModal}
            CloseThirdModal={CloseThirdModal}
          />,
          modalRoot
        )}
      {/* this is for fourth modal this is just a portal  */}
      {showFourthModal &&
        ReactDOM.createPortal(
          <FourthModal CloaseFourthModal={CloaseFourthModal} />,
          modalRoot
        )}
    </>
  );
};

export default GetStarted;
