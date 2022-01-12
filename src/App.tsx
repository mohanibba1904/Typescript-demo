import React, { useState,Fragment } from 'react';
import Login from './components/Login/Login';
import Counter from './components/Counter/Counter';
import Home from './components/Home/Home';
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Cookies from 'js-cookie'
import { useAppSelector, useAppDispatch } from './hooks'
import { authentication } from './components/Counter/counterSlice'


// function App() {
//   return (
//     <div className="App">
//       <Home/>
//       <Login />
//     </div>
//   );
// } 

const App: React.FC = () =>{

  // const [isAuth, setIsAuth] = useState(false);
  const count = useAppSelector((state) => state.counter.auth)
  const dispatch = useAppDispatch()

  console.log(count)

  const auth = Cookies.get('jwt_token')
  if(auth !== undefined){
    dispatch(authentication())
  }
  console.log(auth)
  return (
    <Router>
      <Fragment>
      <Routes>
      <Route path='/login'
        element={ <Login /> } 
        />
        {/* <Route  path='/' element={<Home/>} /> */}
        <Route element={<ProtectedRoute isAuth={count}/>}>
            <Route  path='/' element={<Home/>} />
          </Route>
      </Routes>
      </Fragment>
    </Router>
  )
}

export default App;
