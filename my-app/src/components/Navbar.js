import React, { Component } from 'react'

// export default class Navbar extends Component {

//     render() {
//         return (
//             <div>
//                 <h2>Navbar</h2>
//                 <p>Ukupan broj naseg niza je: {this.props.totalCounters}</p>
//             </div>
//         )
//     }
// }

// Stateless Functional Component
// destructuring props -> da se izvuce iz propsa samo ono sto nam treba, izvlacimo totalCounters
const Navbar = ({ totalCounters }) => {

    return (
        <div>
            <h2>Navbar</h2>
            <p>Ukupan broj naseg niza je: {totalCounters}</p>
        </div>
    )

}

export default Navbar;