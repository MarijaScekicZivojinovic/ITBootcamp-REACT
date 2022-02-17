import './App.css';
import DeleteUsers from './components/DeleteUsers';
import GetUsers from './components/GetUsers';
import PostUsers from './components/PostUsers';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { Home, About, Users, UserDetails } from "./views"
import UserContextProvider from "./context/UserContext"

function App() {
    return (
        <div className="App">
            <UserContextProvider>
                {/* <GetUsers /> */}
                {/* <DeleteUsers />  //ne treba nam vise, u GetUsers je*/}
                {/* <PostUsers /> */}

                <Router>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/" >Home</Link>
                                {/* umesto a i href */}
                            </li>
                            <li>
                                <Link to="/about" >About</Link>
                                {/* umesto a i href */}
                            </li>
                            <li>
                                <Link to="/users" >Users</Link>
                                {/* umesto a i href */}
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        {/* switch proverava path, route mu dodje kao case -> ako se poklapa path, on renderuje dalje */}
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/users/:id">
                            <UserDetails />
                        </Route>
                        <Route exact path="/users">
                            <Users />
                        </Route>
                        {/* DRUGI NACIN: */}
                        {/* Home mora na kraju ILI da se doda exact ispred path */}
                        {/* <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route> */}
                        {/* <Route path="/">
                        <Home />
                    </Route> */}
                        {/* nasa se stranica nece refreshovati kada budemo kliktali na Users, Home, About => single page applications */}
                    </Switch>
                </Router>
            </UserContextProvider>
        </div>
    );
}

export default App;