import React from 'react';
import { useForm } from "react-hook-form";

const AddFoodItem = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:3001/add-food`;

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
            <h1 className="py-3">Add Food Item</h1>
            <hr className="py-3"/>
            <form onSubmit={handleSubmit(onSubmit)}>
      
                <div className="row">
                    <div className="col">
                        <h6>Food Name</h6>
                        <input {...register("name", { required: true })} className="form-control"/>
                        {errors.name && <span>This field is required</span>}
                    </div>
            
                    <div className="col">
                        <h6>Price</h6>
                        <input {...register("price", { required: true })} className="form-control"/>
                        {errors.price && <span>This field is required</span>}
                    </div>
                </div>
        
                <input className="btn btn-success my-4" type="submit" />
            </form>
        </div>
    );
};

export default AddFoodItem;