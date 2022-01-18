import React from 'react';
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import "./movieCard.scss";
// import {Link} from 'react-router-dom'


import {
    VideoListItem,
    VideoListItemContainer,
    VideoListItemThumbnailContainer,
    VideoListItemThumbnailImage,
    VideoListItemContentContainer,
    VideoListItemContentProfileContainer,
    VideoListItemContentProfileImage,
    VideoListItemContentItemsContainer,
    VideoListItemContentItemsHeading,
    VideoListItemChannelName,
    VideoListItemViewsTimeContainerSmall,
    VideoListItemViewsTimeContainerLarge,
    VideoListItemContainerItemText,
  } from './styledComponents'


  interface ChildComponentProps {
    id: string
    name: string
    profile_image_url: string
    published_at: string
    thumbnail_url: string
    title: string
    view_count: string
  }
  
  
  const MovieCard: React.FC<ChildComponentProps> = (props) => {
    const {title,name,id,profile_image_url,published_at,view_count,thumbnail_url} = props
    return (
        <Link className="link-style" to={`movie/${id}`}>
        <VideoListItem>
          <VideoListItemContainer>
            <VideoListItemThumbnailContainer>
              <VideoListItemThumbnailImage
                src={thumbnail_url}
                alt="video thumbnail"
              />
            </VideoListItemThumbnailContainer>
            <VideoListItemContentContainer>
              <VideoListItemContentProfileContainer>
                <VideoListItemContentProfileImage
                  src={profile_image_url}
                  alt="channel logo"
                />
              </VideoListItemContentProfileContainer>
              <VideoListItemContentItemsContainer>
                <VideoListItemContentItemsHeading >
                  {title}
                </VideoListItemContentItemsHeading>
                <VideoListItemChannelName>
                  {name}
                </VideoListItemChannelName>
                <VideoListItemViewsTimeContainerLarge>
                  <VideoListItemContainerItemText
                   
                  >{`${view_count} views`}</VideoListItemContainerItemText>
                  <BsDot size="22"  />
                  <VideoListItemContainerItemText >
                    {published_at}
                  </VideoListItemContainerItemText>
                </VideoListItemViewsTimeContainerLarge>
              </VideoListItemContentItemsContainer>
            </VideoListItemContentContainer>
          </VideoListItemContainer>
        </VideoListItem>
      </Link>
    )
  }
  

  export default MovieCard