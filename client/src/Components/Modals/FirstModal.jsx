import React from "react";
import styles from "../Styles/FirstModal.module.css";

const FirstModal = ({ closeModal }) => {
  const handleCreateJob = () => {
    // console.log('Creating a job...');
  };

  return (
    <>
      <div
        className={`d-flex justify-content-center align-items-center ${styles.modalContainer}`}
      >
        <div className={`col-md-4 ${styles.modalContent}`}>
          <div className={`col-md-12 text-end`}>
            <button onClick={closeModal} className="btn btn-danger ">
              X
            </button>
          </div>

          <div className={`row d-flex justify-content-center mb-5 `}>
            <div className="col-md-6 ">
              <h4 className="">Create New Job</h4>
            </div>
          </div>

          <div className={`d-flex justify-content-center`}>
            <div className="col-md-6 mt-2">
              <button
                className="btn btn-success w-100"
                onClick={handleCreateJob}
              >
                Post New Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstModal;
