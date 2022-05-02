import React, {useState} from 'react';
import Modal from '../Modal';

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


const Order = () => {

const [show, setShow] = useState(false)

  // let orders = [
  //   {category: "This Week Orders",
  //   data: "something"},

  //   {category: "Last Week Orders",
  //   data: "something"},

  //   {category: "Past Orders",
  //   data: "something"},
  // ]

  return (
    <div className="p-4">
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal onClose={() => setShow(false)} show={show}/>
    </div>
  );
};

export default Order;
