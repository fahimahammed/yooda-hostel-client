import React, { useEffect, useState } from 'react';
import FoodItemCard from './FoodItemCard';

const ShowFoodItems = () => {
    const [foodData, setFoodData] = useState('');
    
    
    let nextPage = 2;
    let previousPage = 1;
    //let pageNo = 1; 
    const handlePage = (data) =>{
        loadFoodData(data); 
    }

    useEffect(() =>{
        loadFoodData(1);
    },[])

    const loadFoodData = (pageNum) =>{
        fetch(`http://localhost:3001/food-items?page=${pageNum}&limit=2`)
        .then(res => res.json())
        .then(data => setFoodData(data))
    }

    
    foodData.next && (nextPage = foodData.next.page);
    foodData.previous && (previousPage = foodData.previous.page);
    
    return (
        <div>
            <h1 className="py-3">Food Item(s)</h1>
            <hr className="py-3"/>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Food Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                     foodData && foodData.result.map(item => <FoodItemCard item={item} key={item._id}/>)
                }
                </tbody>
            </table>
            

            <div className="d-flex justify-content-between mt-5">
                {
                    foodData.previous && <button onClick = {() => handlePage(previousPage)} className="btn btn-primary">  Previous Page</button>
                }

                {
                    foodData.next && <button onClick = {() => handlePage(nextPage)} className="btn btn-primary">Next Page</button>
                }
            </div>
            
        </div>
    );
};

export default ShowFoodItems;