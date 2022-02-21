import React, { useEffect, useState } from "react";
import API from '../config/api';

const Home = () => {

    const [info, setInfo] = useState({});

    useEffect(() => {
        API.get('/info')
            .then(res => {
                // console.log(res);
                setInfo(res.data);
            })
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <p>CEO: <strong>{info.ceo}</strong></p>
            <h3>{info.summary}</h3>
        </div>
    )
}

export default Home;