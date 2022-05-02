import React, {useState} from "react"; 
import AddressEdit from "../AddressEdit";

const AddressList = ({ addresses, title }) => {
  const [showEdit, setShowEdit] = useState(false)

  const [selectedAddress, setAddress] =useState('');

  const changeAddress = e => {
    setAddress(e);
    setShowEdit(true);
  }

  if (!addresses.length) {
    return <h3>{title} No addresses Yet </h3>;
  }

  return (
    <div className='address-holder'>
      {addresses.map(address => {
          return (
          <div key={address._id} className="address">
            <div className="address-name col-12">
                <b>{address.addressName}</b>
            </div>
            <div className="col-12 flex-row justify-center">
              <button className="address-edit-btn" key={address._id} onClick={() => changeAddress(address)}>Edit</button>
            </div>
          </div>
          )}
        )}
      <AddressEdit currentAddress={selectedAddress} onClose={() => setShowEdit(false)} show={showEdit}/>
    </div>
  );
};

export default AddressList;