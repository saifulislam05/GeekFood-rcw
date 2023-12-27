import React from 'react'
import RestaurantCard from './RestaurantCard'
import Restaurants from '../../Data/Restaurants.json'

const RestaurantList = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 md:px-6 gap-6 my-8 ">
      
      {Restaurants.map(data => {
        // console.log(data);
        return <RestaurantCard key={data._id.$oid} data={data} />
      })}
        
      </div>

    
  );
}

export default RestaurantList