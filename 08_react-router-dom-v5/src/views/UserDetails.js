import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const UserDetails = () => {

    const { id } = useParams(); //moglo je nesto drugo umesto id, nebitno je ime
    // console.log(id);
    const { users } = useContext(UserContext);
    const [user, setUser] = useState("");

    const history = useHistory();

    useEffect(() => {
        //pri ocitavanju stranice
        //ovo vraca niz:
        // const user = users.filter(user => user.id === parseInt(id))[0];
        // console.log(user);
        // ovo vraca objekat:
        const user1 = users.find((user) => user.id === parseInt(id));
        // console.log(user1);
        setUser(user1);
    }, []);

    const handleHomeButton = () => {
        history.push('/');
    };
    const handleBackButton = () => {
        history.goBack();
    };

    return (
        <div>
            {/* User Details with ID: {id} */}
            <button onClick={handleHomeButton}>Home</button>
            <button onClick={handleBackButton}>Back</button>
            {user ? (
                <div>
                    <p>name: {user.name}</p>
                    <p>email: {user.email}</p>
                    <p>website: {user.website}</p>
                </div>
            ) : (
                <div>We can't find this user.</div>
            )}
        </div>
    )
}

export default UserDetails;