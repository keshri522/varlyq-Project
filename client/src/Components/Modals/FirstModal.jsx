// import React, { useEffect, useState } from "react";
// import styles from "../Styles/FirstModal.module.css";
// import SecondModal from "./SecondModal";
// import ReactDOM from "react-dom";
// const FirstModal = ({ closeModal, showModal, setShowModal }) => {
//   const [openModal, SetopenMoal] = useState(false); // this will handle the 32nd modal status
//   const handleCreateJob = () => {
//     // closeModal();
//     SetopenMoal(true);
//     setShowModal(true);
//     // this will open the modal

//     // this will close the previous modal which is the first one
//   };

//   // this function will close the second modal
//   const ClosesecondModal = () => {
//     SetopenMoal(false);
//   };

//   return (
//     <>
//       <div
//         className={`d-flex justify-content-center align-items-center ${styles.modalContainer}`}
//       >
//         <div className={`col-md-4 ${styles.modalContent}`}>
//           <div className={`col-md-12 text-end`}>
//             <button onClick={closeModal} className="btn btn-danger ">
//               X
//             </button>
//           </div>

//           <div className={`row d-flex justify-content-center mb-5 `}>
//             <div className="col-md-6 ">
//               <h4 className="">Create New Job</h4>
//             </div>
//           </div>

//           <div className={`d-flex justify-content-center`}>
//             <div className="col-md-6 mt-2">
//               <button
//                 className="btn btn-success w-100"
//                 onClick={handleCreateJob}
//               >
//                 Post New Job
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* // this will show the second modal here in other nodes */}
//       {/* {openModal &&
//         ReactDOM.createPortal(
//           <SecondModal ClosesecondModal={ClosesecondModal} />,
//           document.getElementById("custom-modal")
//         )} */}
//       {openModal
//         ? ReactDOM.createPortal(
//             <SecondModal ClosesecondModal={ClosesecondModal} />,
//             document.getElementById("custom-modal")
//           )
//         : null}
//     </>
//   );
// };

// export default FirstModal;
import React, { useState } from "react";
import styles from "../Styles/FirstModal.module.css";
import SecondModal from "./SecondModal";
import ReactDOM from "react-dom";

const FirstModal = ({ closeModal, openSecondModal }) => {
  const handleCreateJob = () => {
    closeModal(); // Close the first modal
    openSecondModal(); // Open the second modal
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
