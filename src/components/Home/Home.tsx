import React, { useReducer, useEffect } from 'react';
import Navbar from '../Navbar/Navbar'
import MovieCard from '../MovieCard/MovieCard'
import "./home.scss";
import {
    PlayArrow,
    Add,
    ThumbUpAltOutlined,
    ThumbDownOutlined,
  } from "@material-ui/icons";

type State = {
  MovieList: any,
  isError: string

};

const initialState:State = {
  MovieList: [],
  isError: ''
};


export default function Home() {
 
      type Action = { type: 'moviesList', payload: any }
      | { type: 'setIsError', payload: string };
      
      const reducer = (state: State, action: Action): State => {
        switch (action.type) {
          case 'moviesList': 
            return {
              ...state,
              MovieList: action.payload
            };
          case 'setIsError': 
            return {
              ...state,
              isError: action.payload
            };
        }
      }
      

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
                console.log(responseData)
                dispatch({
                    type: 'moviesList',
                    payload: responseData
                  });
                
              } else {
                dispatch({
                    type: 'setIsError',
                    payload: 'Error'
                  });
              }
              
          }


    // Moviescard = () =>(
    //     return (
    //     <div>mohan</div>)
    // )

    
  return (
      
    <div className="home">
    <Navbar />
    {state.MovieList.map((item: any) => (
           <MovieCard {...item} />
         ))}
    
    </div>
  );
}