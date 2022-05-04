import React, {useState} from 'react';
import { QUERY_MEALS } from "../../utils/queries";
import { useQuery } from '@apollo/client';
import Modal from '../Modal';


const Shop = () => {
  const [showDetails, setShowDetails] = useState(false)
  const [selectedMeal, setMeal] =useState('');

  const mealDetailModal = e => {
    setMeal(e);
    setShowDetails(true);
  }


  const {data} = useQuery(QUERY_MEALS)

  const allMeals = data?.meals
  console.log(allMeals)
  // console.log(JSON.stringify(error, null, 2));

  return (
    <div className="p-4 mb-5">
      <div className='mealContainer mb-3'>
        <p className='col-12 mealType'>VEGETARIAN</p>
        <div className='mealList'>
          {allMeals?.map(element => {
            return (
              <>
                {element.mealType==='Vegetarian' ? (
                  <div key={element._id} onClick={() => mealDetailModal(element)} className='eachMeals flex-row justify-center'>
                    <img className='thumbnails' src={`/images/${element.image}`} alt={element.name}/>
                    <p className='mealName'>{element.name}</p>
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
                  <div key={element._id} onClick={() => mealDetailModal(element)} className='eachMeals flex-row justify-center'>
                    <img className='thumbnails' src={`/images/${element.image}`} alt={element.name}/>
                    <p className='mealName'>{element.name}</p>
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
                  <div key={element._id} onClick={() => mealDetailModal(element)} className='eachMeals flex-row justify-center'>
                    <img className='thumbnails' src={`/images/${element.image}`} alt={element.name}/>
                    <p className='mealName'>{element.name}</p>
                  </div>
                  ) : ('')}
              </>
            )
          })}
        </div>
      </div>
      <Modal currentMeal={selectedMeal} onClose={()=> setShowDetails(false)} show={showDetails} />
    </div>
  );
};

export default Shop;
