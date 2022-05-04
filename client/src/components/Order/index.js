import React, {useState} from 'react';
import Modal from '../Modal';

const Order = () => {

const [show, setShow] = useState(false)

  return (
    <div className="p-4">
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal onClose={() => setShow(false)} show={show}/>
    </div>
  );
};

export default Order;
