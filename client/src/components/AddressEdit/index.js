import React, { useState } from 'react';


const AddressEdit = (e) => {
    let thisAddress = e.currentAddress
    console.log(thisAddress)

    if (!e.show) {
      return null
  }

  return (
    <div className="modal" onClick={e.onClose}>
      <div className='modal-address-content' onClick={i => i.stopPropagation()}>
        <div className="modal-header">
                    <h4 className="modal-title">NEW ADDRESS</h4>
        </div>
        <div className='modal-body'>
            {thisAddress._id}

            {thisAddress.addressName}
            {thisAddress.streetName}
            {thisAddress.cityName}
            {thisAddress.state}
            {thisAddress.zipCode}


        </div>
        <div className="modal-footer py-1">
                    <button onClick={e.onClose} className="btn">Close</button>
        </div>
      
      </div>
    </div>
  );
};

export default AddressEdit;