import React from 'react';
import { QUERY_ALL_MEALS } from "../../utils/queries";
import { useQuery } from '@apollo/client';
import Modal from '../Modal';


const Shop = () => {

  const {data} = useQuery(QUERY_ALL_MEALS)

  const allMeals = data?.meals
  console.log(allMeals)
  // console.log(JSON.stringify(error, null, 2));

  return (
    <div className="p-4">
      <div className='mealContainer mb-3'>
        <p className='col-12 mealType'>VEGETARIAN</p>
        <div className='mealList'>
          {allMeals?.map(element => {
            return (
              <>
                {element.mealType==='Vegetarian' ? (
                  <div key={element._id} className='eachMeals'>
                  {element.name}
                  </div>
                  ) : (
                    <></>
                  )}
              </>
            )
          })}
        </div>
      </div>
      <div className='mealContainer mb-3'>
      <p className='col-12 mealType'>PESCATARIAN</p>
        <div className='mealList'>
          {allMeals?.map(element => {
            return (
              <>
                {element.mealType==='Pescatarian' ? (
                  <div className='eachMeals'>
                  {element.name}
                  </div>
                  ) : ('')}
              </>
            )
          })}
        </div>
      </div>
      <div className='mealContainer mb-3'>
      <p className='col-12 mealType'>MEATLOVER</p>
        <div className='mealList'>
          {allMeals?.map(element => {
            return (
              <>
                {element.mealType==='Carnivore' ? (
                  <div className='eachMeals'>
                  {element.name}
                  </div>
                  ) : ('')}
              </>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
