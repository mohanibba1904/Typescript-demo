// import React, { useReducer, useEffect } from 'react';
// import "./login.scss";
// import Cookies from 'js-cookie'
// import { useNavigate } from "react-router-dom";
// import {Navigate, useRoutes} from 'react-router-dom';
// import { useLocation } from "react-router";
// import Home from '../Home/Home'
// import { Satellite } from '@material-ui/icons';

// // import { useHistory } from "react-router-dom";

// type State = {
//   username: string
//   password:  string
//   isButtonDisabled: boolean
//   helperText: string
//   isError: boolean
// };

// const initialState:State = {
//   username: '',
//   password: '',
//   isButtonDisabled: true,
//   helperText: '',
//   isError: false
// };
// // interface ChildProps {
// //   history : History
// //   /* other props for ChildComponent */
// // }

// // interface EditPlaystProps {
// //   history: History
// //   match: any
// // }


// // export default function Login() {
// const Login: React.FC<{}> = () => {
//   // const navigate = useNavigate();
//   // const location = useLocation();


//       type Action = { type: 'setUsername', payload: string }
//         | { type: 'setPassword', payload: string }
//         | { type: 'setIsButtonDisabled', payload: boolean }
//         | { type: 'loginSuccess', payload: string }
//         | { type: 'loginFailed', payload: string }
//         | { type: 'setIsError', payload: boolean };
      
//       const reducer = (state: State, action: Action): State => {
//         switch (action.type) {
//           case 'setUsername': 
//             return {
//               ...state,
//               username: action.payload
//             };
//           case 'setPassword': 
//             return {
//               ...state,
//               password: action.payload
//             };
//           case 'setIsButtonDisabled': 
//             return {
//               ...state,
//               isButtonDisabled: action.payload
//             };
//           case 'loginSuccess': 
//             return {
//               ...state,
//               helperText: action.payload,
//               isError: false
//             };
//           case 'loginFailed': 
//             return {
//               ...state,
//               helperText: action.payload,
//               isError: true
//             };
//           case 'setIsError': 
//             return {
//               ...state,
//               isError: action.payload
//             };
//         }
//       }
      

//     const [state, dispatch] = useReducer(reducer, initialState);
  
//     useEffect(() => {
//         console.log(state.username)
//       if (state.username.trim() && state.password.trim()) {
//        dispatch({
//          type: 'setIsButtonDisabled',
//          payload: false
//        });
//       } else {
//         dispatch({
//           type: 'setIsButtonDisabled',
//           payload: true
//         });
//       }
    
    
//     }, [state.username, state.password]);


//     const onSuccessfulLogin = (jwtToken: string) => {
//       console.log(jwtToken)
//         Cookies.set('jwt_token', jwtToken, {
//           expires: 30,
//           path: '/home',
//         }) 
//         return  <Home/>
           
//         // <Navigate replace to='/'/>
//         // navigate('/');
//         // navigate('/path', { replace: true })

//       }

      
    
//       const handleKeyPress = (event: React.KeyboardEvent) => {
//         if (event.keyCode === 13 || event.which === 13) {
//           state.isButtonDisabled || handleLogin();
//         }
//       };
      
//       const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
//         (event) => {
//             console.log(event.target.value)
//           dispatch({
//             type: 'setUsername',
//             payload: event.target.value
//           });
//         };
    
//       const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
//         (event) => {
//             console.log(event.target.value)

//           dispatch({
//             type: 'setPassword',
//             payload: event.target.value
//           });
//         }


//     async function fetchPokemon() {
    
//         const user_name = state.username
//         const password = state.password
//         const userDetails = {user_name, password}

//         const response = await window.fetch('http://127.0.0.1:8000/login', {
//             method: 'POST',
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(userDetails),
//             })    
//             const responseData = await response.json()
//             console.log(responseData)
//             if (response.ok) {
//               dispatch({
//             type: 'loginSuccess',
//             payload: 'Login Successfully'
//           });
//           onSuccessfulLogin(responseData.access_token)
         
//             // const navigate = useNavigate();
//             // navigate('/');
          
              
//             } else {
//             dispatch({
//             type: 'loginFailed',
//             payload: 'Incorrect username or password'
//           });
//             }
            
//         }
            




//     const handleLogin = () => {
//       fetchPokemon().then()

//       // if(state.isError){
//       //   let navigate = useNavigate();
//       //   navigate('/');
//       // }
//         // if (state.username === 'abc@email.com' && state.password === 'password') {
//         //   dispatch({
//         //     type: 'loginSuccess',
//         //     payload: 'Login Successfully'
//         //   });
       
//         // } else {
//         //   dispatch({
//         //     type: 'loginFailed',
//         //     payload: 'Incorrect username or password'
//         //   });
         
//         // }
//       };




//   return (
//     <div className="login">
//       <div className="top">
//         <div className="wrapper">
//           <img
//             className="logo"
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
//             alt=""
//           />
//         </div>
//       </div>
//       <div className="container">
//         <form noValidate autoComplete="off">
//           <h1>Sign In</h1>
//           <input type="email" placeholder="Email or phone number"
//            onChange={handleUsernameChange} onKeyPress={handleKeyPress}/>
//           <input type="password" placeholder="Password" 
//           onChange={handlePasswordChange}  onKeyPress={handleKeyPress}/>
//           <p>{state.helperText}</p>
//           <button className="loginButton"
//            onClick={handleLogin} disabled={state.isButtonDisabled}>Sign In</button>
//           <span>
//             New to Netflix? <b>Sign up now.</b>
//           </span>
//           <small>
//             This page is protected by Google reCAPTCHA to ensure you're not a
//             bot. <b>Learn more</b>.
//           </small>
//         </form>
//       </div>
//     </div>
//   );
// }


// export default Login;

import {Component} from 'react'
import React from 'react'
import {Navigate, useRoutes} from 'react-router-dom';

// import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import { createBrowserHistory } from 'history'
import {
  LoginContainer,
  LoginForm,
  LoginFormLogo,
  LoginFormLabel,
  CheckboxLabel,
  LoginFormInput,
  LoginFormCheckboxInput,
  CheckboxContainer,
  FormSubmitButton,
  ErrorTextPara,
} from './styledComponents'
import Home from '../Home/Home';

class Login extends React.Component<{}, {}> {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    displayErrorMsg: false,
    displayPassword: false,
  }

  getUsername: React.ChangeEventHandler<HTMLInputElement> = event => {
    this.setState({
      username: event.target.value,
    })
  }

  getPassword:React.ChangeEventHandler<HTMLInputElement> = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSuccessfulLogin = (jwtToken: any) => {
    // const {history} = this.props
    const history = createBrowserHistory(); 

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    });
    history.replace('/')
    history.go(0)
  }

  // onLoginFailure = errorMessage => {
  //   this.setState({displayErrorMsg: true, errorMessage})
  // }

  attemptLogin = async (event: any)=> {
    event.preventDefault()
    const {username, password} = this.state
    const user_name =username
    const userDetails = {user_name, password}
    const loginUrl = 'http://127.0.0.1:8000/login'
    const loginOptions = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, loginOptions)
    const responseData = await response.json()
    if (response.ok) {
      console.log(responseData.access_token)
      this.onSuccessfulLogin(responseData.access_token)
      
    } else {
      // this.onLoginFailure(responseData.error_msg)
    }
  }

  // showPassword = event => {
  //   this.setState({displayPassword: event.target.checked})
  // }

  render() {
    // const navigate = useNavigate();

    const token = Cookies.get('jwt_token')
    console.log(token,'successs')
    if (token !== undefined) {
      return <Navigate to ='/home'/>
    }   
          return (
            <LoginContainer >
              <LoginForm
                onSubmit={this.attemptLogin}
              >
                <LoginFormLogo  alt="website logo" />
                <LoginFormLabel  htmlFor="username">
                  USERNAME
                </LoginFormLabel>
                <LoginFormInput
                  id="username"
                  placeholder="Username"
                  type="text"
                  onChange={this.getUsername}
                />
                <LoginFormLabel  htmlFor="password">
                  PASSWORD
                </LoginFormLabel>
                <LoginFormInput
                  id="password"
                  placeholder="Password"
                  onChange={this.getPassword}
                />
                {/* <CheckboxContainer>
                  <LoginFormCheckboxInput
                    id="showPassword"
                    type="checkbox"
                    onChange={this.showPassword}
                  />
                  <CheckboxLabel
                    htmlFor="showPassword"
                  >
                    Show Password
                  </CheckboxLabel>
                </CheckboxContainer> */}
                <FormSubmitButton>Login</FormSubmitButton>
               
              </LoginForm>
            </LoginContainer>
          )
    
  }
}

export default Login
