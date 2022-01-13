import React, { useReducer, useEffect } from 'react';
import ReactPlayer from 'react-player'

import {
    VideoItemDetailsContainer,
    VideoItemDetailsRowContainer,
    VideoItemContainer,
    FailureViewContainer,
    FailureViewImage,
    FailureHeading,
    FailureText,
    FailureRetryButton,
    VideoItemDescription,
    ParametersAndLikesContainer,
    ParametersAndLikesInnerContainer,
    VideoItemDetailsText,
    VideoItemDetailsSmallButton,
    VideoItemLine,
    VideoItemProfileContainer,
    VideoItemProfileImage,
    VideoItemProfileDescriptionContainer,
    VideoProfileChannelName,
    VideoProfileChannelSubscribers,
    VideoProfileDescriptionLargeText,
    VideoProfileDescriptionSmallText,
  } from './styledComponents'
  

  
type State = {
    MovieItem: any
  };
  
  const initialState:State = {
    MovieItem: ''
  };
// export default function Login() {
const MovieItemDetails = () => {   
    
    type Action = { type: 'movieList', payload: any }
  
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'movieList': 
        return {
            MovieItem: action.payload
        };
   
    }
  }
  

const [state, dispatch] = useReducer(reducer, initialState);

            
        useEffect(() => {
            getMovieIdDetails()
          
          }, []);
                 
          async function getMovieIdDetails() {
  
            const id = 1
              const response = await window.fetch(`http://127.0.0.1:8000/movies/movieid/${id}`, {
                  method: 'GET',
                  headers: {"Content-Type": "application/json"},
                  })    
                  const responseData = await response.json()
                  console.log(responseData)
                if (response.ok) {              
                  // const navigate = useNavigate();
                  // navigate('/');
                  const videoDetailsData = await response.json()
                  console.log(videoDetailsData)
                  const formattedVideoDetailsData = {
                    
                      name: videoDetailsData.name,
                      profileImageUrl:
                        videoDetailsData.profile_image_url,
                      subscriberCount:
                        videoDetailsData.subscriber_count,
                  
                    id: videoDetailsData.id,
                    description: videoDetailsData.description,
                    publishedAt: videoDetailsData.published_at,
                    thumbnailUrl: videoDetailsData.thumbnail_url,
                    title: videoDetailsData.title,
                    viewCount: videoDetailsData.view_count,
                    videoUrl: videoDetailsData.video_url,
                
                    
                  } 
                }else {
                 
                console.log('error')
              }
            
            }
      
        return (
            <VideoItemContainer
            data-testid="videoItemDetails"
          >
            <ReactPlayer controls width="90%" url={state.MovieItem.videoUrl} />
            <VideoItemDescription >
              {state.MovieItem.title}
            </VideoItemDescription>
            <ParametersAndLikesContainer>
              <ParametersAndLikesInnerContainer>
                <VideoItemDetailsText
               
                >{`${state.MovieItem.viewCount} views`}</VideoItemDetailsText>
                <BsDot size="22"  />
                <VideoItemDetailsText >
                  {publishedTimeAgo}
                </VideoItemDetailsText>
              </ParametersAndLikesInnerContainer>
              <ParametersAndLikesInnerContainer>
                <VideoItemDetailsSmallButton
                  type="button"
                >
                  <AiOutlineLike />
                  Like
                </VideoItemDetailsSmallButton>
                <VideoItemDetailsSmallButton
                  type="button"
                  
                >
                  <AiOutlineDislike />
                  Dislike
                </VideoItemDetailsSmallButton>
                <VideoItemDetailsSmallButton
                  type="button"
                
                >
                </VideoItemDetailsSmallButton>
              </ParametersAndLikesInnerContainer>
            </ParametersAndLikesContainer>
            <VideoItemLine  />
            <VideoItemProfileContainer>
              <VideoItemProfileImage
                src={state.MovieItem.profileImageUrl}
                alt="channel logo"
              />
              <VideoItemProfileDescriptionContainer>
                <VideoProfileChannelName >
                  {state.MovieItem.name}
                </VideoProfileChannelName>
                <VideoProfileChannelSubscribers >
                  {state.MovieItem.subscriberCount}
                </VideoProfileChannelSubscribers>
                <VideoProfileDescriptionLargeText >
                  {state.MovieItem.description}
                </VideoProfileDescriptionLargeText>
              </VideoItemProfileDescriptionContainer>
            </VideoItemProfileContainer>
          </VideoItemContainer>
        );
      
    }
      
      
export default MovieItemDetails;