import React from 'react';


const AddressEdit = ({currentAddress, onClose, show}) => {
    let thisAddress = currentAddress
    console.log(thisAddress)

    if (!show) {
      return null
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className='modal-address-content' onClick={i => i.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">NEW ADDRESS</h4>
        </div>
        <div className='modal-body'>
            <div>{thisAddress._id}</div>
            <div>{thisAddress.addressName}</div>
            <div>{thisAddress.streetName}</div>
            <div>{thisAddress.cityName}</div>
            <div>{thisAddress.state}</div>
            <div>{thisAddress.zipCode}</div>


        </div>
        <div className="modal-footer py-1">
                    <button onClick={onClose} className="btn">Close</button>
        </div>
      
      </div>
    </div>
  );
};

export default AddressEdit;