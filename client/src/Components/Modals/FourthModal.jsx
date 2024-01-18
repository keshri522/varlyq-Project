import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import styles from "../Styles/Fourth.module.css"; // this is the module css to avoid overlapping the css porpperty i use this
const FourthModal = ({ CloaseFourthModal }) => {
  // creating the instance of usedispatch
  // const dispatch = useDispatch();

  const [formData, setformData] = useState({
    checkskill: "",
    qualification: "",
    finalQuestion: "",
    availiblity: "",
  });
  const SecondModalData = useSelector((state) => state.rootReducers.userdata);
  const ThirdMoidalData = useSelector(
    (state) => state.rootReducers.secondmodal
  );
  // here i am merging all the redux store and send the merged data in the backend
  const mergedData = { ...SecondModalData, ...ThirdMoidalData, ...formData };

  // this is the second modal that will open once user clcked on post new job
  const handleSubmit = async () => {
    console.log(mergedData);
    // try {
    //   fetch(apiEndpoint, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(mergedData),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       // Handle the response from the backend
    //       console.log("API Response:", data);
    //       // Perform other actions or navigate to the next step
    //       // CloaseFourthModal();
    //     });
    // } catch (error) {
    //   console.log(error);
    //   alert(error);
    // }
    // this will handle all the api calls and othe5 functions
    // CloaseFourthModal();
  };
  // this function will handle all the changes in that compoents
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };
  return (
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
          <div className="col-md-8 text-center ">
            <div className="row mt-4 d-flex justify-content-between">
              <div className="col-md-6">
                <span className={`${styles.round} bg-success`}>
                  <i class="fa-solid fa-check "></i>
                </span>{" "}
                Job Description <span className={`${styles.round}`}>2</span>
              </div>
              <div className="col-md-6">
                <span className={`${styles.round}`}>3</span> Interview Process
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-2 d-flex justify-content-between">
          <div className="col-md-6">
            <label htmlFor="Skill" className="form-label">
              Kindly Check the Skills
            </label>
            <input
              onChange={handleChanges}
              value={formData.checkskill}
              type="text"
              className="form-control"
              id="checkskill"
              name="checkskill"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="intern" className="form-label">
              Any Plateform or Qualification
            </label>
            <input
              onChange={handleChanges}
              name="qualification"
              type="text"
              className="form-control"
              id="qualification"
              value={formData.qualification}
              placeholder="selected Intern’s day-to-day responsibilities include"
            />
          </div>
        </div>
        <div className="row mt-2 d-flex justify-content-between">
          <div className="col-md-6">
            <label htmlFor="textArea1" className="form-label">
              Finalise Questione
            </label>
            <textarea
              onChange={handleChanges}
              className={`form-control ${styles.resizeOff}`}
              id="finalQuestion"
              rows="3"
              placeholder="Enter text here..."
              name="finalQuestion"
              value={formData.finalQuestion}
            ></textarea>
          </div>
          <div className="col-md-6">
            <label htmlFor="textArea2" className="form-label">
              Share Availiblity
            </label>
            <textarea
              className={`form-control ${styles.resizeOff}`}
              id="availiblity"
              rows="3"
              onChange={handleChanges}
              name="availiblity"
              placeholder="Enter text here..."
              value={formData.availiblity}
            ></textarea>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-md-3">
            <button
              disabled={
                formData.checkskill.length === 0 ||
                formData.availiblity.length === 0 ||
                formData.finalQuestion.length === 0 ||
                formData.qualification.length === 0
              }
              onClick={handleSubmit}
              className="btn btn-primary px-5"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthModal;
