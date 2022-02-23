import React, { useEffect, useState } from "react";
import API from '../config/api';
import MissionDetail from "../components/MissionDetails";

const Missions = () => {

    const [missions, setMissions] = useState([]);

    useEffect(() => {
        API.get('/missions')
            .then(res => {
                // console.log(res);
                setMissions(res.data);
            })
    }, []);

    return (
        <div>
            <h2>
                Missions
            </h2>
            {state.map((mission) => (
                <MissionDetail key={mission.mission_id} mission={mission} />
            ))}
            {/* <ul>
                {
                    missions && missions.map((mission) =>
                        <li key={mission.mission_id}>

                            <h3>{mission.mission_name}</h3>
                        </li>)
                }
            </ul> */}
        </div>
    )
}

export default Missions;