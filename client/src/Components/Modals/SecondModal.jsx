import React, { useState } from "react";
import ThirdModal from "./ThirdModal";
import ReactDOM from "react-dom";
import styles from "../Styles/SecondModal.module.css"; // this is the module css to avoid overlapping the css porpperty i use this
const SecondModal = ({ ClosesecondModal }) => {
  const [thirdModal, setthirdModal] = useState(false);
  // this is the second modal that will open once user clcked on post new job
  // this function will open a new modal and save all the data in the redux
  const hanndleSaveData = () => {
    setthirdModal(true); // this will open the thrid modal
    // ClosesecondModal();
  };
  // this will close the modal
  const ThridMoalClose = () => {
    setthirdModal(false);
  };
  return (
    <>
      <div className={`d-flex justify-content-center col-md-8 `}>
        <div className={`col-md-7 mt-1 px-5 ${styles.modalContent}`}>
          <h1 className="text-center">Create a Job</h1>
          <div className="text-center mt-1">
            <div className=" col-md-12 ">
              <p className="text-muted">
                A job represents a new opening, an open position, or a vacancy
                listing. Creating a job will allow you to add candidates to that
                job and advertise it on your career page and job boards.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="col-md-12 text-center ">
              <div className="row mt-4 d-flex justify-content-between">
                <div className="col-md-3">
                  <span className={`${styles.round}`}>1</span> Job Application
                </div>
                <div className="col-md-3">
                  <span className={`${styles.round}`}>2</span> Job Description
                </div>
                <div className="col-md-3">
                  <span className={`${styles.round}`}>3</span> Interview Process
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-6">
              <label htmlFor="jobTitle" className="form-label">
                Position Name
              </label>
              <input type="text" className="form-control" id="jobTitle" />
            </div>
            <div className="col-md-6">
              <label htmlFor="jobLocation" className="form-label">
                Company Name
              </label>
              <select className="form-select" id="jobLocation">
                <option value="company1">Company 1</option>
                <option value="company2">Company 2</option>
              </select>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-6">
              <label htmlFor="jobType" className="form-label">
                Job Pipeline
              </label>
              <select className="form-select" id="jobType">
                <option value="pipeline1">Pipeline 1</option>
                <option value="pipeline2">Pipeline 2</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="salary" className="form-label">
                Add Location
              </label>
              <select className="form-select" id="salary">
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
              </select>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-6">
              <label htmlFor="education" className="form-label">
                Add Maximum Salary
              </label>
              <input type="text" className="form-control" id="education" />
            </div>
            <div className="col-md-6">
              <label htmlFor="education" className="form-label">
                Add Maximum Salary
              </label>
              <input type="text" className="form-control" id="education" />
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-6">
              <label htmlFor="endDate" className="form-label">
                Select Frequency
              </label>
              <select className="form-select" id="endDate">
                <option value="frequency1">Frequency 1</option>
                <option value="frequency2">Frequency 2</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="startDate" className="form-label">
                Currency
              </label>
              <input type="text" className="form-control" id="startDate" />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <label htmlFor="startDate" className="form-label">
                Currency
              </label>
              <input type="text" className="form-control" id="startDate" />
            </div>
          </div>
          <div className="row mt-1 d-flex justify-content-between  mt-2">
            <div className="col-md-3">
              <button onClick={hanndleSaveData} className="btn btn-primary">
                Save and Exit
              </button>
            </div>
            <div className="col-md-3">
              <button onClick={ClosesecondModal} className="btn btn-danger">
                Cloase
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* // this will add new node in the documents of virtual dom */}
      {thirdModal &&
        ReactDOM.createPortal(
          <ThirdModal ThridMoalClose={ThridMoalClose} />,
          document.getElementById("custom-modal")
        )}
    </>
  );
};

export default SecondModal;
