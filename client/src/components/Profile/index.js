import React, {useState} from "react"; 
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_USER } from "../../utils/queries";
import AddressForm from "../AddressForm";
import AddressList from "../AddressList";
import Auth from '../../utils/auth';
// import UsernameEdit from '../UsernameEdit'


const Profile = () => {
  const [show, setShow] = useState(false)
  // const [showUsername, setShowUsername] = useState(false)
  const { username: userParam } = useParams();

  const {  data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="p-4">
      <label><b>User Name</b></label>
        <div className="form-profile">
          {user?.username}
        </div>
      <label><b>Email</b></label>
        <div className="form-profile">
          {user?.email}

        </div>

      <label ><b>Address Book</b></label>
        <div className="address-book">
            <div className="col-12">
              <AddressList addresses={user.addresses} title={`${user.username}'s address book: `} />
            </div>
            <div className="col-12">
                <button className="btn-newAddress" onClick={() => setShow(true)}>ADD ADDRESS</button>
                <AddressForm onClose={() => setShow(false)} show={show}/>
              </div>
        </div>
    </div>
  );
};

export default Profile;
