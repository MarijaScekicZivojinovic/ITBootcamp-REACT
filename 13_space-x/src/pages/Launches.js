import React, { useEffect, useState } from "react";
import API from '../config/api';

const Launches = () => {

    const [launches, setLaunches] = useState([]);

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
            <ul>
                {
                    launches && launches.map((launch) =>
                        <li key={launch.id}>

                            <h3>{launch.mission_name}</h3>
                            <p>Launch Year: {launch.launch_year}</p>
                            <p>Description: {launch.description}</p>
                            <p>Rocket: {launch.rocket.rocket_name}</p>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default Launches;