import { useContext } from "react"
import AuthModalContext from "../context/AuthModalContext"

const EditAndDelete = (props) => {
  // console.log(props)
  const{ showEditandDelete, setShowEditandDelete } = useContext(AuthModalContext)
  const setShow = showEditandDelete ? "new-comp" : "hide-new-comp"
  return (
    <div className={setShow}></div>
  )
}

export default EditAndDelete



// import { BsThreeDotsVertical } from "react-icons/bs";
// import React from 'react';
// import Modal from 'react-modal';
// import { useState } from 'react';
// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// // Modal.setAppElement('#yourAppElement');

// function EditAndDelete () {
//   let subtitle;
//   const [modalIsOpen, setIsOpen] = useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = '#f00';
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   return (
//     <div >
//       {/* <button onClick={openModal}>Open Modal</button> */}
//       <BsThreeDotsVertical onClick={ope}/>
//       <Modal
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
//         {/* <button onClick={closeModal}>close</button> */}
//         <div>I am a modal</div>
//         {/* <form>
//           <input />
//           <button>tab navigation</button>
//           <button>stays</button> */}
//           <button>inside</button>
//           <button>the modal</button>
//         {/* </form> */}
//       </Modal>
//     </div>
//   );
// }


// export default EditAndDelete