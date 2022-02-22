import React from "react";

const PricesWithoutContext = ({ moviescopy }) => {
    return <div>
        Prices without context:
        {moviescopy.map((movie) =>
            <div key={movie.id}>{movie.price}</div>)}
    </div>
}

export default PricesWithoutContext;