import React, { useState, useEffect } from 'react';
import API from '../config/api';
import DeleteUsers from './DeleteUsers';
//konvencija je da se API pise veliki slovima, radi sta god da se napise tu (moze i MOJAPIPOZIV) jer smo stavili expost default bez imena u fajlu api.js

const GetUsers = () => {

    const [users, setUsers] = useState([])

    // useEffect(() => {
    //   //uvek, i tokom prvog renderovanja i tokom svakog update-a
    // });

    // useEffect(() => {
    //   //samo tokom prvog renderovanja
    // }, []);

    // useEffect(() => {
    //   //kadgod se moj todos promeni
    // }, [todos]);

    useEffect(() => {
        //ovo je za prvo load-ovanje
        // get('users') ce dodati users na kraju ovog linka iz API: 'https://jsonplaceholder.typicode.com/' pa ce biti 'https://jsonplaceholder.typicode.com/users'
        //metode su GET, POST (prosledjivanje data), UPDATE (prosledjivanje data za update), DELETE
        //uz AXIOS ne mora FETCH i CATCH
        API.get('users').then(res => {
            // console.log(res);
            // const users = res.data;
            // setUsers(users)
            setUsers(res.data);
        })
    }, [])

    const removeUser = (id) => {
        const filteredUsers = users.filter((user) => user.id !== parseInt(id))
        //filter vraca sve sto ispunjava ovaj uslov
        // console.log(filteredUsers, id);
        // console.log(typeof id);
        // console.log(typeof parseInt(id));
        setUsers(filteredUsers);
        // setUsers(prevState) ... //proveri na videu posle
    }

    return <div>
        <ul>
            {users.map((user) => (
                // ovde posle => mora () a ne {}
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
        <DeleteUsers users={users} removeUser={removeUser} />
    </div>
}

export default GetUsers;