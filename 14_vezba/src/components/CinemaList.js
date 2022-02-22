import React, { useContext } from "react";
import { CinemaContext } from "../context/CinemaProvider";

const CinemaList = () => {
    const { cinema } = useContext(CinemaContext)
    return <div>Cinema MovieList<br />
        {cinema.map((c) => <p key={c.id}>{c.name}</p>)}
    </div>
}

export default CinemaList;