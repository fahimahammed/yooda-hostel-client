import React from 'react';
import { useForm } from "react-hook-form";

const AddFoodItem = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `https://gentle-cove-54714.herokuapp.com/add-food`;

        fetch(url, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => alert('Product added in database..'));
    };

    return (
        <div>
            <h1 className="py-3 text-primary">Add Food Item</h1>
            <hr className="pb-2"/>
            <form onSubmit={handleSubmit(onSubmit)} >
      
                <div className="row mt-5">
                    <div className="col">
                        <h5>Food Name</h5>
                        <input {...register("name", { required: true })} className="form-control"/>
                        {errors.name && <span>This field is required</span>}
                    </div>
            
                    <div className="col">
                        <h5>Price</h5>
                        <input {...register("price", { required: true })} className="form-control"/>
                        {errors.price && <span>This field is required</span>}
                    </div>
                </div>
        
                <input className="btn btn-primary my-5" type="submit" />
            </form>
        </div>
    );
};

export default AddFoodItem;