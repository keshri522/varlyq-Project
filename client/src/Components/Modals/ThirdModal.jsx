import { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "../Styles/ThirdModal.module.css"; // this is the module css to avoid overlapping the css porpperty i use this
import { setSecondModalData } from "../Redux/reducers/SecodModalSlice";
const ThirdModal = ({ CloseThirdModal, openFoursModal }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    // this is data that  user can fill in this from
    skill: "",
    intern: "",
  });
  // this is the second modal that will open once user clcked on post new job

  const handleSubmit = () => {
    // making an action call to disptach al the datq in the redux store
    dispatch(setSecondModalData(formData));
    openFoursModal(); // this will open the fourth modal
    CloseThirdModal();
    // CloseThirdModal(); // this will cloase the thrid one
  };
  // this function will handle all the changes
  const HandleChanges = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // console.log(formData); just for debugging
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

          <div className="row mt-2">
            <div className="col-md-10">
              <label htmlFor="Skill" className="form-label">
                Skill Required
              </label>
              <input
                onChange={HandleChanges}
                type="text"
                value={formData.skill}
                className="form-control"
                id="skill"
                name="skill"
                required
              />
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-10">
              <label htmlFor="intern" className="form-label">
                Intern’s Responsibilities
              </label>
              <input
                name="intern"
                type="text"
                className="form-control"
                id="jobTitle"
                required
                onChange={HandleChanges}
                value={formData.intern}
                placeholder="selected Intern’s day-to-day responsibilities include"
              />
            </div>
          </div>

          <div className="row mt-1 d-flex justify-content-between mt-2">
            <div className="col-md-3">
              <button
                disabled={
                  formData.skill.length === 0 || formData.intern.length === 0
                }
                onClick={handleSubmit}
                className="btn btn-primary btn-block btn-mobile mb-2 mb-md-0"
              >
                Save and Next
              </button>
            </div>

            <div className="col-md-3">
              <button
                onClick={CloseThirdModal}
                className="btn btn-danger res btn-mobile"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdModal;
