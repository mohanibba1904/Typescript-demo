import React, { useReducer, useEffect } from 'react';
import Navbar from '../Navbar/Navbar'
import MovieCard from '../MovieCard/MovieCard'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router-dom';
import "./home.scss";
import {
  HomeContainer,
  HomeBarsContainer,
  MainContainer,
  BannerContainer,
  BannerContentContainer,
  BannerCloseButton,
  BannerHeading,
  BannerImage,
  BannerButton,
  VideosListHome,
  FailureViewContainer,
  FailureViewImage,
  FailureHeading,
  FailureText,
  FailureRetryButton,
  SearchForm,
  SearchInput,
  SearchButton,
  NoVideosViewContainer,
  NoVideosViewImage,
  NoVideosHeading,
  NoVideosText,
  NoVideosViewRetryButton,
} from './styledComponents'

type State = {
  MovieList: any,
  apiStatus: boolean

};

// const apiConstants = {
//   initial: 'INITIAL',
//   success: 'SUCCESS',
//   failure: 'FAILURE',
//   inProgress: 'IN_PROGRESS',
// }


const initialState:State = {
  MovieList: [],
  apiStatus: false
};

type Action = { type: 'moviesList', payload: any }
| { type: 'setIsStatus', payload: boolean };


 
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'moviesList': 
      return {
        ...state,
        MovieList: action.payload
      };
    case 'setIsStatus': 
      return {
        ...state,
        apiStatus: action.payload
      };
  }
}

export default function Home() {  


    const [state, dispatch] = useReducer(reducer, initialState);
  
    useEffect(() => {
       
        fetchMovieList()
    }, []);
       
   
    async function fetchMovieList() {
      const searchParameter = ''
        const response = await window.fetch(`http://127.0.0.1:8000/movies?search=${searchParameter}`)
      //    {
      //       method: 'POST',
      //       headers: {"Content-Type": "application/json"},
      //       body: JSON.stringify(userDetails),
      //       })    
            if (response.ok) {
              const responseData = await response.json()
              // console.log(responseData)
              dispatch({
                  type: 'moviesList',
                  payload: responseData
                });
                dispatch({
                  type: 'setIsStatus',
                  payload: true
                });
              
            } else {
              dispatch({
                  type: 'setIsStatus',
                  payload: false
                });
            }
            
        }


 const  videosList = () => {   
    return (
      <>
        {state.MovieList.map((item: any) => (
           <MovieCard key={item.id} {...item} />
         ))}
      </>
    )
  }

    const renderFailureView = () => (  
          
                  <FailureViewContainer>
                    <FailureViewImage src='https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png' alt="failure view" />
                    <FailureHeading color='#ebebeb'>
                      Oops! Something Went Wrong
                    </FailureHeading>
                    <FailureText color='#d7dfe9'>
                      We are having some trouble to complete you request. Please try
                      again.
                    </FailureText>
                    <FailureRetryButton
                      type="button"
                      // onClick={this.onClickFailureRetry}
                    >
                      Retry
                    </FailureRetryButton>
                  </FailureViewContainer>
              
          )
              



    
  // const renderAllVideosList = () => {
  //   console.log('success')
  //   switch (state.apiStatus) {
  //     case apiConstants.failure:
  //       return {renderFailureView}
  //     case apiConstants.success:
  //       return {videosList}
  //     default:
  //       return null
  //   }
  // }
  const auth = Cookies.get('jwt_token')
  if(auth === undefined){
    return <Navigate to='/login'/>
  }


    // Moviescard = () =>(
    //     return (
    //     <div>mohan</div>)
    // )
 
  return (
     
    <div className="home">
    <div className='movieslistcontainer'>
    {/* {state.MovieList.map((item: any) => (
           <MovieCard {...item} />
         ))} */}
      {state.apiStatus ? videosList() : renderFailureView()}


    </div>
    </div>
  );
}