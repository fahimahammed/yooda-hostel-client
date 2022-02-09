import React, { useState } from 'react';

const StudentCard = ({student}) => {
    const {_id, fullName, roll, age,  hall, status} = student;

    const [itemData, setItemData] = useState('');

    const [editedName, setEditedName] = useState(fullName);
    const [editedRoll, setEditedRoll] = useState(roll);
    const [editedAge, setEditedAge] = useState(age);
    const [editedClass, setEditedClass] = useState(student.class);
    const [editedHall, setEditedHall] = useState(hall);
    const [editedStatus, setEditedStatus] = useState(status);


    const deleteProduct = id =>{
        fetch(`http://localhost:3001/delete-student/${id}`, {
            method: 'DELETE'
        })
        .then(res => alert("Successfully deleted.."))
    }

    const updateProduct = (id) =>{
        setItemData(id);
    }

    const saveUpdate = (id) =>{
        const updateStudent = {
            fullName: editedName,
            roll: editedRoll,
            age: editedAge,
            class: editedClass,
            hall: editedHall,
            status: editedStatus
            
        };
        fetch(`http://localhost:3001/update-student/${id}`,{
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateStudent)
        })
        .then(res => res.json())
        .then(data => alert("Updated Successfully!"))
        setItemData('');
    }
    //console.log(editedName+editedPrice);
    const handleStatus = (stat) =>{
       setEditedStatus(stat);
        
    }

    return (
        <>
            
            <td>{_id}</td>
            {
                itemData ? <td><input type="text" name="name" onChange={e => setEditedName(e.target.value)} defaultValue={editedName} id="name"/></td> : <td>{editedName}</td>
            }
            {
                itemData ? <td><input type="text" name="price" onChange={e => setEditedRoll(e.target.value)} defaultValue={editedRoll}  id="price"/></td> : <td>{editedRoll}</td>
            }
            {
                itemData ? <td><input type="text" name="price" onChange={e => setEditedAge(e.target.value)} defaultValue={editedAge}  id="price"/></td> : <td>{editedAge}</td>
            }
            {
                itemData ? <td><input type="text" name="price" onChange={e => setEditedClass(e.target.value)} defaultValue={editedClass}  id="price"/></td> : <td>{editedClass}</td>
            }
            {
                itemData ? <td><input type="text" name="price" onChange={e => setEditedHall(e.target.value)} defaultValue={editedHall}  id="price"/></td> : <td>{editedHall}</td>
            }
            {
                itemData ? <td className="btn-group">
                <button type="button" className="btn btn-primary text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    {editedStatus}
                </button>
                <ul  className="dropdown-menu">
                        <li><a onClick={()=>handleStatus('Active')} className="dropdown-item" >Active</a></li>
                        <li><a onClick={()=>handleStatus('inActive')} className="dropdown-item">inActive</a></li>
                </ul>
            </td> : <td>{editedStatus}</td>
            }
            <td>
                {
                    itemData ? <button onClick={()=>saveUpdate(_id)} className="btn btn-primary m-2 text-dark">Update</button> : <button onClick={()=>updateProduct(_id)} className="btn btn-primary m-2 text-dark">Edit</button>
                }
                
                <button onClick={()=>deleteProduct(_id)} className="btn btn-danger m-2 text-dark">Delete</button>
            </td>
        </>
        
    );
};
export default StudentCard;