import './App.css';
import { useState } from "react";
import Counter from './components/Counter.js';
import Counter1 from './components/Counter1.js';
import Select from './components/Select';
import SongList from './components/SongList';

function App() {
    const [show, setShow] = useState(true);
    return (
        <div>
            {/* <Counter /> */}
            {/* <Counter1 /> */}
            {/* {show ? <Counter1 /> : null} */}
            {/* <button onClick={() => setShow(!show)}>Toggle Show</button> */}
            {/* <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button> */}
            {/* <Select /> */}
            <SongList />
        </div>
    )
}

export default App;