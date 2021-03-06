import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_REVIEWS} from "../../utils/queries";

const ReviewList = ({currentUser}) => {

const {data } = useQuery(QUERY_ALL_REVIEWS)
const reviews = data?.allReviews

let thisUser = currentUser?.username

return (
    <div className="p-4 review-list">
        <h2>{thisUser}'s Reviews</h2>
        <div className='mt-5'>
            {reviews?.map(element => {
                return (
                    <>
                        {element.username === thisUser ? (
                            <div className='review-container flex-row mb-1'>
                                <div className='review-header col-12 flex-row justify-space-between align-center'>
                                    <h4 className='pl-2'>{element.mealName}</h4>
                                    <div className='pr-2 review-createdAt'>{element.createdAt}</div>
                                </div>
                                <div className='review-text col-12 p-2'>
                                    <div>{element.reviewText}</div>
                                </div>
                            </div>
                        ): (
                            <></>
                        )}

                    </>
                )
            })}
        </div>

    </div>
  );
}

export default ReviewList;
