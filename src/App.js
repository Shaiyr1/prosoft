import { Route, Routes } from 'react-router-dom';
import './App.css';
import SideBar from './components/sideBar/SideBar';
import SignIn from './components/signIn/SignIn';
import DataCollection from './pages/dataCollection/DataCollection';
import Newsletter from './pages/newsletter/Newsletter';
import Orders from './pages/orders/Orders';
import Prototype from './pages/prototype/Prototype';
import Tracking from './pages/tracking/Tracking';

function App() {
  return (
    <div className="app">
      <SideBar/>
      <div className='app__content'>
        <Routes>
          {/* <Route path='/' element={<SignIn/>}/> */}
          <Route path='/collection' element={<DataCollection/>}/>
          <Route path='/tracking' element={<Tracking/>}/>
          <Route path='/newsletter' element={<Newsletter/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/prototype' element={<Prototype/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
