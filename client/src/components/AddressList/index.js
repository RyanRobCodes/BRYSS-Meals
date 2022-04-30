import React from 'react';

const AddressList = ({ addresses, title }) => {
  if (!addresses.length) {
    return <h3>{title} No addresses Yet </h3>;
  }

  return (
    <div className='address-holder'>
      {addresses &&
        addresses.map(address => (
          <div key={address._id} className="address">
            <p className="address-name">

                {address.addressName}

            </p>

          </div>
        ))}
    </div>
  );
};

export default AddressList;