import React from 'react';
import {useParams} from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { QUERY_ALL_REVIEWS} from "../../utils/queries";

const ReviewListModal = ({currentMeal}) => {

const { loading, error, data } = useQuery(QUERY_ALL_REVIEWS)
console.log(error)
const reviews = data?.allReviews
console.log(reviews)

return (
    <div className="mb-2">
        <h5>{currentMeal} Reviews</h5>
        <div className='mt-1'>
            {reviews?.slice((reviews.length-3),reviews.length).map(element => {
                return (
                    <>
                        {element.mealName === currentMeal ? (
                            <div className='review-container flex-row mb-1'>
                                <div className='review-header col-12 flex-row justify-space-between align-center'>
                                    <h6 className='pl-2 meal-review-username'> Reviewed by <span className='review-username'>{element.username}</span></h6>
                                    <h6 className='pr-2 meal-review-createdAt'>{element.createdAt}</h6>
                                </div>
                                <div className='modalReview-text col-12 p-2'>
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

export default ReviewListModal;
