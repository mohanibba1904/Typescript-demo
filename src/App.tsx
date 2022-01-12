import React, { useState,Fragment } from 'react';
import Login from './components/Login/Login';
import Counter from './components/Counter/Counter';
import Home from './components/Home/Home';
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';


// function App() {
//   return (
//     <div className="App">
//       <Home/>
//       <Login />
//     </div>
//   );
// } 

const App: React.FC = () =>{

  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <Fragment>
      <Routes>
        <Route path='/login'
        element={<Login/> } 
        />
        <Route  path='/' element={<ProtectedRoute/>}>
            <Route  path='/' element={<Home/>} />
          </Route>
      </Routes>
      </Fragment>
    </Router>
  )
}

export default App;
