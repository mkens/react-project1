import './App.css';
import DefaultForm from './components/DefaultForm';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <div className="App">
     <Navbar mytitle="My App" ></Navbar>
     <div className="container">
       <DefaultForm></DefaultForm>
     </div> 
    </div>
  );
}

export default App;
