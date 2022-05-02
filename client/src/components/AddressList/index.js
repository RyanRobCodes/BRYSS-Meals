import React, {useState} from "react"; 
import AddressEdit from "../AddressEdit";

const AddressList = ({ addresses, title }) => {
  const [show, setShow] = useState(false)

  if (!addresses.length) {
    return <h3>{title} No addresses Yet </h3>;
  }

  return (
    <div className='address-holder'>
      {addresses &&
        addresses.map(address => {
          return (
          <div key={address._id} className="address" onClick={() => setShow(true)}>
            <div className="address-name">

                {address.addressName}
                <div key={address._id}>
                  <AddressEdit currentAddress={address} onClose={() => setShow(false)} show={show}/>
                </div>
            </div>
          


          </div>
          )}
        )}
    </div>
  );
};

export default AddressList;