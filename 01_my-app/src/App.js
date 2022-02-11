import './App.css';
// prvi cas:
import Counter from './components/Counter';
import Counters from './components/Counters';
import Navbar from './components/Navbar';
// drugi cas:
// import Form from './components2/Form';
// import Inputs from './components2/Inputs';
// import Select from './components2/Select';
// import TextArea from './components2/TextArea';


//treci cas: 
//funkcionalne komponente ne mogu da imaju state i konstruktor:
import React, { Component } from 'react'
class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
    ]
  }

  render() {
    return (
      <div className='my-app'>
        {/* Iza viticastih zagrada 2+2 = {2 + 2}
      <Counter /> */}
        <Navbar totalCounters={this.state.counters.length} />
        <Counters />
      </div>
    );
  }
}

export default App;

// drugi deo drugog casa - lifecycle method: 
// import React, { Component } from 'react'
// import ChildComponent from './components3/ChildComponent';
// import ChildComponent1 from './components3/ChildComponent1';
// import ChildComponent2 from './components3/ChildComponent2';
// import ChildComponent3 from './components3/ChildComponent3';

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       name: 'This name will change in 3 seconds.',
//       show: true,
//     }
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ name: 'The name has changed.' })
//     }, 3000);

//     //usual purpose
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((json) => console.log(json))
//   }

//   render() {
//     return (<div>
{/* <p>{this.state.name}</p> */ }
{/* <ChildComponent />
      <ChildComponent1 /> */}
{/* <ChildComponent2 /> */ }
{/* {this.state.show ? <ChildComponent2 /> : null}
      <br />

      <button onClickCapture={() => this.setState({ show: !this.state.show })}>
        {this.state.show ? 'Unmount Component' : 'Mount Component'}
      </button> */}

{/* <ChildComponent3 /> */ }
{/* </div>)
  }
}

export default App; */}

//funkcionalne komponente ne mogu da imaju state i konstruktor:
// function App() {
//   return (
//     // Drugi cas:
//     // <div className='App'>
//     //   <Form />
//     //   <Inputs />
//     //   <br />
//     //   <TextArea />
//     //   <Select />
//     // </div>
//     // Prvi cas:
//     <div className='my-app'>
//       {/* Iza viticastih zagrada 2+2 = {2 + 2}
//       <Counter /> */}
//       <Counters />
//     </div>
//   );
// }

// export default App;
