import React, { useState } from "react";
import { FirstModal } from "../Redux/reducers/User";
import { useDispatch } from "react-redux";
import styles from "../Styles/SecondModal.module.css"; // this is the module css to avoid overlapping the css porpperty i use this
const SecondModal = ({ closeSecondModal, OpenThirdModal }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    // this is data that  user can fill in this from
    jobTitle: "",
    companyname: "",
    jobpipeline: "",
    location: "",
    maxsalary: "",
    minsalary: "",
    frequency: "",
    currency: "",
    contact: "",
  });
  // this is the second modal that will open once user clcked on post new job
  // this function will open a new modal and save all the data in the redux
  const hanndleSaveData = () => {
    // here dispatching an action that will sent all the data in the redux store
    dispatch(FirstModal(formData));

    OpenThirdModal(); // this will open the thried one
    closeSecondModal(); // this will close the second one
  };
  // this function  will  handle the changes in this components
  const handleInputChange = (e) => {
    const { name, value } = e.target; // destructing the props
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className={`d-flex justify-content-center container `}>
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
              <input
                type="text"
                className="form-control"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label
                htmlFor="companyname"
                className="form-label"
                name="companyname"
              >
                Company Name
              </label>
              <select
                name="companyname"
                value={formData.companyname}
                className="form-select"
                id="jobLocation"
                onChange={handleInputChange}
              >
                {" "}
                <option value="" disabled>
                  Please Select Company
                </option>
                <option value="company1">Company 1</option>
                <option value="company2">Company 2</option>
              </select>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-6">
              <label htmlFor="jobpipeline" className="form-label">
                Job Pipeline
              </label>
              <select
                value={formData.jobpipeline}
                name="jobpipeline"
                className="form-select"
                id="jobpipeline"
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Please Select Job
                </option>
                <option value="pipeline1">Pipeline 1</option>
                <option value="pipeline2">Pipeline 2</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="location" className="form-label">
                Add Location
              </label>
              <select
                value={formData.location}
                name="location"
                className="form-select"
                id="salary"
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Please Select Location
                </option>
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
              </select>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-6">
              <label htmlFor="maxsalary" className="form-label">
                Add Maximum Salary
              </label>

              <input
                type="number"
                className="form-control"
                id="maxsalary"
                name="maxsalary"
                value={formData.maxsalary}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="minsalary" className="form-label">
                Add Minimum Salary
              </label>
              <input
                type="number"
                className="form-control"
                id="minsalary"
                name="minsalary"
                value={formData.minsalary}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-6">
              <label htmlFor="frequency" className="form-label">
                Select Frequency
              </label>
              <select
                value={formData.frequency}
                onChange={handleInputChange}
                name="frequency"
                className="form-select"
                id="endDate"
              >
                <option value="" disabled>
                  Please Select Frequency
                </option>
                <option value="frequency1">Frequency 1</option>
                <option value="frequency2">Frequency 2</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="contact" className="form-label">
                Contact Details
              </label>
              <input
                type="text"
                className="form-control"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <label htmlFor="currency" className="form-label">
                Currency
              </label>
              <input
                type="text"
                className="form-control"
                id="currency"
                name="currency"
                value={formData.currency}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="row mt-1 d-flex justify-content-between mt-2">
            <div className="col-md-3">
              <button
                // making the button disabled until all the fields are not filled
                disabled={
                  formData.jobTitle.length === 0 ||
                  formData.companyname.length === 0 ||
                  formData.jobpipeline.length === 0 ||
                  formData.location.length === 0 ||
                  formData.maxsalary.length === 0 ||
                  formData.minsalary.length === 0 ||
                  formData.frequency.length === 0 ||
                  formData.currency.length === 0 ||
                  formData.contact.length === 0
                }
                onClick={hanndleSaveData}
                className="btn btn-primary btn-block btn-mobile mb-2 mb-md-0"
              >
                Save and Next
              </button>
            </div>

            <div className="col-md-3">
              <button
                onClick={closeSecondModal}
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

export default SecondModal;
