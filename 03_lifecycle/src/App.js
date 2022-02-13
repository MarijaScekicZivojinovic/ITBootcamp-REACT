// drugi deo drugog casa - lifecycle method: 
import React, { Component } from 'react'
import ChildComponent from './components/ChildComponent';
import ChildComponent1 from './components/ChildComponent1';
import ChildComponent2 from './components/ChildComponent2';
import ChildComponent3 from './components/ChildComponent3';

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

    //     //usual purpose
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => console.log(json))
  }

  render() {
    return (<div>
      <p>{this.state.name}</p>
      <ChildComponent />
      <ChildComponent1 />
      <ChildComponent2 />
      {this.state.show ? <ChildComponent2 /> : null}
      <br />

      <button onClickCapture={() => this.setState({ show: !this.state.show })}>
        {this.state.show ? 'Unmount Component' : 'Mount Component'}
      </button>

      <ChildComponent3 />
    </div>)
  }
}

export default App;
