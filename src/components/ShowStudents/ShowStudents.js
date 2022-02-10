import React, { useEffect, useState } from 'react';
import StudentCard from './StudentCard';

const ShowStudents = () => {
    const [studentData, setStudentData] = useState('');
    const [selectedId, setSelectedId] = useState([]);

    const [editedStudentData, setEditedStudentData] = useState([]);
    
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
        fetch(`https://gentle-cove-54714.herokuapp.com/students?page=${pageNum}&limit=5`)
        .then(res => res.json())
        .then(data => setStudentData(data))
    }

    
    studentData.next && (nextPage = studentData.next.page);
    studentData.previous && (previousPage = studentData.previous.page);

    const handleIdS = (id) => {
        const nextObj = Object.assign([], studentData.result)
        const activeObj = nextObj.find(item => item._id == id);
        activeObj.status = activeObj.status == "Active" ? "inActive" : "Active"; 
        setEditedStudentData([...editedStudentData, activeObj]);
    }
    //console.log(editedStudentData);

    const handleUpdate = () => {
        //console.log(editedStudentData);
        editedStudentData.map(item => {
            fetch(`https://gentle-cove-54714.herokuapp.com/update-status/${item._id}`,{
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        })
        alert("Data Updated Successfully! Please reload this page.");
    }
    
    return (
        <div>
            <h1 className="pt-3 text-primary">Student List</h1>
            <hr className="pb-2"/>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Roll</th>
                        <th scope="col">Age</th>
                        <th scope="col">Class</th>
                        <th scope="col">Hall</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                     studentData && studentData.result.map(item => 
                        <tr>
                            <td><input onClick={()=>handleIdS(item._id)} type="checkbox"  /></td>
                            <StudentCard student={item} key={item._id}/>
                        </tr>
                        )
                }
                </tbody>
            </table>

            {
                studentData && <button  onClick={handleUpdate} className="btn btn-outline-dark mt-3 mb-5"type="submit">Marked Status Change</button>
            }
            

            <div className="d-flex justify-content-between">
                {
                    studentData.previous && <button onClick = {() => handlePage(previousPage)} className="btn btn-primary">  Previous Page </button>
                }

                {
                    studentData.next && <button onClick = {() => handlePage(nextPage)} className="btn btn-primary">Next Page</button>
                }
            </div>

            
            
        </div>
    );
};

export default ShowStudents;