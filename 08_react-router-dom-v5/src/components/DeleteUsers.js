import axios from "axios";
import React, { useState, useEffect } from "react";
import API from "../config/api";

const DeleteUsers = ({ users, removeUser }) => {
    //iz Child-a ne mozemo da menjamo state parent-u, zato removeUser pozivamo iz GetUsers

    const [id, setId] = useState('');
    // console.log(users);
    const handleChange = (e) => {
        setId(e.target.value)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log("handleSubmit function");
        const userID = id;
        const response = await API.delete(`users/${userID}`);
        if (response.status === 200) {
            console.log('response status', response.status);
            removeUser(id);
            // alert("You successfully deleted the users");
        }
        //drugi nacin
        // const response = await API.delete(`users/${userID}`).then(() => response.status === 200 ? ...) //proveri video // ovo ne bi valjalo, jer ne znamo koje je zagusenje veze, bolje je asinhroni poziv da bude
        //ako nije status 200, nece uci u if, pa mozemo da dodamo posle i alert:
        // alert(error)
        // console.log(response);
        // console.log(response.data);
    };

    return <div>
        <h4>Delete Users: </h4>
        <form onSubmit={handleSubmit}>
            <label>
                User ID: <input type="text" onChange={handleChange} />
            </label>
            <button type="submit">Delete</button>
        </form>
    </div>
}

export default DeleteUsers;