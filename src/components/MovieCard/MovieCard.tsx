import React from 'react';
import {BsDot} from 'react-icons/bs'
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

// type Props = {
//     startTimeInSeconds: number;
//     }
    
//     type State = {
//     timeRemainingInSeconds: number;
//     }
    
    
// export default class Child extends React.Component<Props, State>{
//         private timer: any;
    
//     constructor(props: Props) {
//       super(props);
//       this.state = {
//         timeRemainingInSeconds: props.startTimeInSeconds
//       };
//     }
    
//     decrementTimeRemaining = () => {
//       if (this.state.timeRemainingInSeconds > 0) {
//         this.setState({
//           timeRemainingInSeconds: this.state.timeRemainingInSeconds - 1
//         });
//       } else {
//         clearInterval(this.timer!);
//       }
//     };
    
//     componentDidMount() {
//       this.timer = setInterval(() => {
//         this.decrementTimeRemaining();
//       }, 1000);
//     }
    
//     render() {
//       return (
//         <div className="countdown-timer">
//           <div className="countdown-timer__circle">
//             <svg>
//               <circle
//                 r="24"
//                 cx="26"
//                 cy="26"
//                 style={{
//                   animation: `countdown-animation ${this.props
//                     .startTimeInSeconds}s linear`
//                 }}
//               />
//             </svg>
//           </div>
//           <div className="countdown-timer__text">
//             {this.state.timeRemainingInSeconds}s
//           </div>
//         </div>
//       );
//     }
//     }




// interface Item {
//     id: string
//     name: string
//     profile_image_url: string
//     published_at: string
//     thumbnail_url: string
//     title: string
//     view_count: string
//   }
  
//   interface ChildComponentProps {
//     items: Item[]
//   }

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
        <div className="link-style" >
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
      </div>
    )
  }
  

  export default MovieCard