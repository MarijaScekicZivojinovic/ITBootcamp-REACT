import React, { useEffect, useState } from "react";
import API from '../config/api';
import { Link } from "react-router-dom";

const Launches = () => {

    const [launches, setLaunches] = useState([]);

    // prima dva parametra
    //  arrow f-ju i niz
    // prazan niz def onMounting
    // neki state u nizu, definise pozivanje arrow f-je kada se taj state promeni
    //   useEffect(() => {}, []);
    useEffect(() => {
        API.get('/launches')
            .then(res => {
                // console.log(res);
                setLaunches(res.data);
            })
    }, []);

    return (
        <div>
            <h2>Launches</h2>
            {state &&
                state.map((launch) => (
                    <Link to={`/launchdetails/${launch.flight_number}`} key={launch.id}>
                        {launch.mission_name}
                    </Link>
                ))}
            {/* <ul>
                {
                    launches && launches.map((launch) =>
                        <li key={launch.id}>

                            <h3>{launch.mission_name}</h3>
                            <p>Launch Year: {launch.launch_year}</p>
                            <p>Description: {launch.description}</p>
                            <p>Rocket: {launch.rocket.rocket_name}</p>
                        </li>)
                }
            </ul> */}
        </div>
    )
}

export default Launches;