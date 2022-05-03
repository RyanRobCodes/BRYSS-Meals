import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { EDIT_ADDRESS } from '../../utils/mutations';

const AddressEdit = ({currentAddress, onClose, show}) => {
  let refreshPage = () => {
    window.location.reload(false)}


  const [addressName, setAddressName] = useState('');
  const [streetName, setStreet] = useState('');
  const [cityName, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZip] = useState('');

  const [editAddress] = useMutation(EDIT_ADDRESS)

  const handleChange1 = event => {
    setAddressName(event.target.value);
  };
  const handleChange2 = event => {
      setStreet(event.target.value);
  };
  const handleChange3 = event => {
      setCity(event.target.value);
  };
  const handleChange4 = event => {
      setState(event.target.value);
  };
  const handleChange5 = event => {
      setZip(event.target.value);
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      await editAddress({
        variables: {
          _id: currentAddress?._id,
          addressName: addressName,
          streetName: streetName,
          cityName: cityName,
          state: state,
          zipCode: zipCode
        }
      })
      setAddressName('');
      setStreet('');
      setCity('');
      setState('');
      setZip('');
      refreshPage()    
    } catch (error) {
      console.error(error)
    }
  }

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
          <form onSubmit={handleFormSubmit}>
            <input
            value={addressName}
            onChange={handleChange1}
            className="form-input col-12"
            placeholder={currentAddress.addressName} />
            <input
            value={streetName}
            onChange={handleChange2}
            className="form-input col-12"
            placeholder={currentAddress.streetName} />
            <input
            value={cityName}
            onChange={handleChange3}
            className="form-input col-12"
            placeholder={currentAddress.cityName} />
            <input
            value={state}
            onChange={handleChange4}
            className="form-input col-12"
            placeholder={currentAddress.state} />
            <input
            value={zipCode}
            onChange={handleChange5}
            className="form-input col-12"
            placeholder={currentAddress.zipCode} />
            <button className="btn-newAddress col-12 col-md-3" type="submit">
                Submit Changes
              </button>
          </form>

        </div>
        <div className="modal-footer py-1">
          <button onClick={onClose} className="btn">Close</button>
        </div>
      
      </div>
    </div>
  );
};

export default AddressEdit;