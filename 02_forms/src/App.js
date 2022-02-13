// import logo from './logo.svg';
import './App.css';
// drugi cas:
import Form from './components/Form';
import Inputs from './components/Inputs';
import Select from './components/Select';
import TextArea from './components/TextArea';

//funkcionalne komponente ne mogu da imaju state i konstruktor:
function App() {
  return (
    // Drugi cas:
    <div className='App'>
      <Form />
      <Inputs />
      <br />
      <TextArea />
      <Select />
    </div>
  );
}

export default App;

