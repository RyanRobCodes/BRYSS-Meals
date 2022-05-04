import React from 'react';
import {useParams} from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_USER } from "../../utils/queries";
import ReviewList from '../ReviewList';

const Review = () => {

  const { username: userParam } = useParams();

  const {  data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });

  const user = data?.me || data?.user || {};

  return (
    <div className="m-2">
        <ReviewList currentUser={user} />
    </div>
  );
};

export default Review;
