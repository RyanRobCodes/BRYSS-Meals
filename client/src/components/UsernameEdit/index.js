// import React, { useState } from "react";
// import { useMutation } from '@apollo/client';
// import { QUERY_ME } from '../../utils/queries';


// const UsernameEdit = ({ username, onClose, show }) => {

//     const [newUsername, setUsername] = sueState('')

//     const [changeUsername, { error }] = useMutation(ADD_ADDRESS, {
//         update(cache, {data: { addAddress } }) {
  
//           const { me } = cache.readQuery({query: QUERY_ME });
//           cache.writeQuery({
//             query: QUERY_ME,
//             data: { me: {...me, addresses: [...me.addresses, addAddress] } }
  
//           });
//         }
//       });

//     const handleChange = event => {
//         setUsername(event.target.value);
//       };

//     const handleFormSubmit = async event => {
//         event.preventDefault();
//         try {
//             // add thought to database
//             await changeUsername({
//               variables: { addressName: addressName, streetName: streetName, cityName: cityName, state: state, zipCode:zipCode }
//             });
        
//             // clear form value
//             setUsername('');
//           } catch (e) {
//             console.error(e + "error while putting in!");
//           }
//         };


//     if (!show) {
//         return null
//     }

//     return (
//         <div className="modal" onClick={onClose}>
//             <div className="modal-content" onClick={(Onclose, show) => (Onclose, show).stopPropagation()}>
//                 <div className="modal-header">
//                     <h4 className="modal-title">Change your Username</h4>
//                 </div>
//                 <div className= "modal-body">
//                     <form
//                         className="flex-row justify-center justify-space-between-md"
//                         onSubmit={handleFormSubmit}>
//                                 <input
//                                     placeholder={username}
//                                     value={newUsername}
//                                     className="form-input col-12"
//                                     onChange={handleChange}>
//                                 </input>
//                     </form>
//                 </div>
//                 <div className="modal-footer py-1">
//                     <button onClick={onClose} className="btn">Close</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default UsernameEdit