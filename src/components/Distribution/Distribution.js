import React, { useEffect, useState } from 'react';

const Distribution = () => {

    const [searchStudent, setSearchStudent] = useState('');
    const [searchRoll, setSearchRoll] = useState('');
    const [shift, setShift] = useState('Select Shift');
    const [foodList, setFoodList] = useState('');
    const [selectFoodList, setSelectFoodList] = useState('');
    const [servedData, setServedData] = useState('');

    const date = new Date();
    const dateFormat = date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear();

    const handleSearch = e =>{
        setSearchRoll(e.target.value);
    }

    const loadData = () =>{
        fetch(`https://gentle-cove-54714.herokuapp.com/student/${searchRoll}`)
        .then(res => res.json())
        .then(data => setSearchStudent(data));
    }
    
    const handleShift =(data)=>{
        setShift(data);
    }
    

    const selectItem = (foodName) =>{
        const list = [
            ...selectFoodList,
            foodName
        ];
        setSelectFoodList(list);
    }

    useEffect(()=>{
        fetch("https://gentle-cove-54714.herokuapp.com/foodlist")
        .then(res => res.json())
        .then(data => setFoodList(data))
    })

    const handleServe = () =>{
            const serveData = {
                studentId : searchStudent._id,
                date: dateFormat,
                shift: shift,
                status: "Served", 
                foodItemList : selectFoodList
            }

            fetch(`https://gentle-cove-54714.herokuapp.com/distribution/${dateFormat}/${searchStudent._id}/${shift}`)
            .then(res => res.json())
            .then(data => serveFoodData(data, serveData));

        };

        const serveFoodData = (data, serveData) => {
            console.log(data.length);
            if(data.length > 0) {
                alert("Already Served!")
                console.log("ok vaia");
            }
            else{
                const url = `https://gentle-cove-54714.herokuapp.com/add-distribution`;
    
                fetch(url, { 
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(serveData)
                })
                .then(res => alert('Added successfully!'));
            }
        }


    return (
        <div className="pb-5 mb-5 row">
            <h1 className="py-3 text-primary">Food Distribution Form</h1>
            <hr className="pb-2"/>

            <div className="col-md-3">
                <h5>Enter Student Roll no: </h5>
                <input className="form-control" onChange={handleSearch} type="text" name="roll" placeholder="Enter Roll no"/>
                <button onClick={loadData} type="submit" class="btn btn-primary mt-3">Search</button>
            </div>

            <div className="col-md-4">
                <h4 className='pb-2'>Student Information</h4>
                <hr/>
                <h5>Name: {searchStudent.fullName}</h5>
                <h5>Roll: {searchStudent.roll}</h5>
                <h5>Class: {searchStudent.class}</h5>
            </div>

            <div className="col-md-3">
                <div>
                    <h4 className="pb-3">Date: {dateFormat}</h4>
                    <h4 className="pt-3">Select Shift</h4>
                    <div className="btn-group mb-3">
                        <button type="button" className="btn btn-primary text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            {shift}
                        </button>
                        <ul  className="dropdown-menu">
                                <li><a onClick={()=>handleShift('Breakfast')} className="dropdown-item" >Breakfast</a></li>
                                <li><a onClick={()=>handleShift('Lanch')} className="dropdown-item">lanch</a></li>
                                <li><a onClick={()=>handleShift('Diner')} className="dropdown-item">Diner</a></li>
                        </ul>
                    </div>
                    

                    <h4 className="pt-3">Food List</h4>
                    <p className="text-secondary pb-3">(Select foods by click on food name)</p>
                    {
                        foodList && foodList.map(food => <li className="btn btn-outline-dark my-2 me-1" onClick={()=>selectItem(food.name)}>{food.name}</li>)
                    }
                    <br/>
                    <button className="btn btn-primary mt-5 form-control" onClick={handleServe} type="submit">Served</button>

                </div>
            </div>

            <div className="col-md-2">
                <h4 className="pb-2">Selected Food</h4>
                <hr/>
                {
                    selectFoodList && selectFoodList.map(food => <li>{food}</li>)
                }
            </div>
        </div>
    );
};

export default Distribution;