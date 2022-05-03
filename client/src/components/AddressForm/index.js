import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ADDRESS } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const Address = (e) => {

  const [addressName, setAddressName] = useState('');
  const [streetName, setStreet] = useState('');
  const [cityName, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZip] = useState('');
  
    const [addAddress, { error }] = useMutation(ADD_ADDRESS, {
      update(cache, {data: { addAddress } }) {

        const { me } = cache.readQuery({query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: {...me, addresses: [...me.addresses, addAddress] } }

        });
      }
    });

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
        // add address to database
        await addAddress({
          variables: { addressName: addressName, streetName: streetName, cityName: cityName, state: state, zipCode:zipCode }
        });
    
        // clear form value
        setAddressName('');
        setStreet('');
        setCity('');
        setState('');
        setZip('');
      } catch (e) {
        console.error(e + "error while putting in!");
      }
    };

    if (!e.show) {
      return null
  }

  return (
    <div className="modal" onClick={e.onClose}>
      <div className='modal-address-content' onClick={e => e.stopPropagation()}>
        <div className="modal-header">
                    <h4 className="modal-title">NEW ADDRESS</h4>
        </div>
        <p className={`m-0 ${ error ? 'text-error' : ''}`}>
            {error && <span className="ml-2">Something went wrong...</span>}
        </p>
        <form
            className="flex-row justify-center justify-space-between-md"
            onSubmit={handleFormSubmit}>        
            <input
                placeholder="Address Name"
                value={addressName}
                className="form-input col-12"
                onChange={handleChange1}
            ></input>
            <input
                placeholder="Street Name"
                value={streetName}
                className="form-input col-12"
                onChange={handleChange2}
            ></input>
            <input
                placeholder="City Name"
                value={cityName}
                className="form-input col-12"
                onChange={handleChange3}
            ></input>
            <input
                placeholder="State"
                value={state}
                className="form-input col-12"
                onChange={handleChange4}
            ></input>
            <input
                placeholder="Zip Code"
                value={zipCode}
                className="form-input col-12"
                onChange={handleChange5}
            ></input>
            <div className='col-12 flex-row justify-space-around'>
              <button className="btn-newAddress col-12 col-md-3" type="submit">
                Submit Address
              </button>
              <button className="btn-newAddress col-12 col-md-3" onClick={e.onClose}>
                Close
              </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Address;