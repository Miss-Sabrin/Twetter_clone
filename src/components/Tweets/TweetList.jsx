import React from 'react'
import TweetCard from './TweetCard'
const TweetList = (props) => {
   const { tweets} = props;

   
  return (
    <div className='middle'>
      {tweets.map((tweet)=>(
        <TweetCard key={tweet.id} tweet={tweet}/>
      ))}

    </div>
  )
}

export default TweetList