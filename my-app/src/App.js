// import logo from './logo.svg';
import './App.css';
// prvi cas:
// import Counter from './components/Counter';
// import Counters from './components/Counters';
// drugi cas:
// import Form from './components2/Form';
// import Inputs from './components2/Inputs';
// import Select from './components2/Select';
// import TextArea from './components2/TextArea';


// drugi deo drugog casa: 
import React, { Component } from 'react'
import ChildComponent from './components3/ChildComponent';
import ChildComponent1 from './components3/ChildComponent1';
import ChildComponent2 from './components3/ChildComponent2';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'This name will change in 3 seconds.',
      show: true,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: 'The name has changed.' })
    }, 3000);

    //usual purpose
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => console.log(json))
  }

  render() {
    return (<div>
      {/* <p>{this.state.name}</p> */}
      {/* <ChildComponent />
      <ChildComponent1 /> */}
      {/* <ChildComponent2 /> */}
      {this.state.show ? <ChildComponent2 /> : null}
      <br />

      <button onClickCapture={() => this.setState({ show: !this.state.show })}>
        {this.state.show ? 'Unmount Component' : 'Mount Component'}
      </button>
    </div>)
  }
}

export default App;

//funkcionalne komponente:
// function App() {
//   return (
    // Drugi cas:
    // <div className='App'>
    //   <Form />
    //   <Inputs />
    //   <br />
    //   <TextArea />
    //   <Select />
    // </div>
    // Prvi cas:
    // <div className='my-app'>
    //   {/* Iza viticastih zagrada 2+2 = {2 + 2}
    //   <Counter /> */}
    //   <Counters />
    // </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
//   );
// }

// export default App;
