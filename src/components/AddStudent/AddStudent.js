import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddStudent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [status, setStatus] = useState('Select');

    const handleStatus = (statusData) => {
        setStatus(statusData);
    }

    const onSubmit = data => {
        const newStudent = {
            ...data,
            status: status
        }
        //console.log(newStudent)

        const url = `http://localhost:3001/add-student`;

        fetch(url, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newStudent)
        })
        .then(res => alert('Student added successfully!'));
    };

    return (
        <div>
            <h1>Add New Student</h1>
            <hr/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row py-3">
                    <div className="col-md-8">
                        <h5>Full Name</h5>
                        <input {...register("fullName", { required: true })} className="form-control" />
                        {errors.fullName && <span>This field is required</span>}
                    </div>
            
                    <div className="col-md-4">
                        <h5>Roll</h5>
                        <input {...register("roll", { required: true })} className="form-control" />
                        {errors.roll && <span>This field is required</span>}
                    </div>
                </div>

                <div className="row py-3">
                    <div className="col">
                        <h5>Age</h5>
                        <input {...register("age", { required: true })} className="form-control" />
                        {errors.age && <span>This field is required</span>}
                    </div>

                    <div className="col">
                        <h5>Class</h5>
                        <input {...register("class", { required: true })} className="form-control" />
                        {errors.class && <span>This field is required</span>}
                    </div>
                </div>

                <div className="row py-3">
                    <div className="col">
                        <h5>Hall</h5>
                        <input {...register("hall", { required: true })} className="form-control" />
                        {errors.hall && <span>This field is required</span>}
                    </div>

                    <div className="col">
                        <h5>Status</h5>
                        <div className="btn-group">
                            <button type="button" className="btn btn-primary text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                {status}
                            </button>
                            <ul  className="dropdown-menu">
                                    <li><a onClick={()=>handleStatus('Active')} className="dropdown-item" >Active</a></li>
                                    <li><a onClick={()=>handleStatus('inActive')} className="dropdown-item">inActive</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        
                <input className="btn btn-success my-4" type="submit" />
            </form>
        </div>
    );
};


export default AddStudent;