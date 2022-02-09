import React, { useState } from 'react';

const FoodItemCard = ({item}) => {
    const {_id, name, price} = item;
    const [itemData, setItemData] = useState('');
    const [editedName, setEditedName] = useState(name);
    const [editedPrice, setEditedPrice] = useState(price);

    const deleteProduct = id =>{
        fetch(`https://gentle-cove-54714.herokuapp.com/delete-item/${id}`, {
            method: 'DELETE'
        })
        .then(res => alert("Successfully deleted! Please reload this page."))
    }

    const updateProduct = (id) =>{
        setItemData(id);
    }

    const saveUpdate = (id) =>{
        const updateItem = {
            name: editedName,
            price: editedPrice
        };
        fetch(`https://gentle-cove-54714.herokuapp.com/update/${id}`,{
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateItem)
        })
        .then(res => res.json())
        .then(data => alert("Updated Successfully!"))
        setItemData('');
    }
    //console.log(editedName+editedPrice);
    return (
        <tr>
            <td>{_id}</td>
            {
                itemData ? <td><input type="text" name="name" onChange={e => setEditedName(e.target.value)} defaultValue={editedName} id="name"/></td> : <td>{editedName}</td>
            }
            {
                itemData ? <td><input type="text" name="price" onChange={e => setEditedPrice(e.target.value)} defaultValue={editedPrice}  id="price"/></td> : <td>{editedPrice}</td>
            }
            {
                itemData ? <button onClick={()=>saveUpdate(_id)} className="btn btn-primary m-2 text-dark">Update</button> : <button onClick={()=>updateProduct(_id)} className="btn btn-primary m-2 text-dark">Edit</button>
            }
            
            <button onClick={()=>deleteProduct(_id)} className="btn btn-danger m-2 text-dark">Delete</button>
        </tr>
        
    );
};

export default FoodItemCard;