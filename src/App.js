import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Pages from './Components/Pages'
import Navbar from './Components/Navbar'
import {DataProvider} from './GlobalState'
import {ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <DataProvider>
    <div className="App">
        <Router>
        <Navbar/>
        <div className="container">
          <Pages/>
        </div>
        <ToastContainer/>
        </Router>
    </div>
    </DataProvider>
  );
}

export default App;
