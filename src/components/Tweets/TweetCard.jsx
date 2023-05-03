import React, { useState } from 'react'
import { Card,Button } from 'react-bootstrap'
const TweetCard = (props) => {
  const {tweet,key}= props

  const [likeCount, setLikeCount]=useState(tweet.likecount);

  const [retweetCount,setRetweetCount]=useState(tweet.retweetcount);
  
  
  
  
  return (
    <div className='twest-card' key={key}>
      <Card.Body>
        <Card.Title>{tweet.author}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>{tweet.twitteruser}.{tweet.posttime}</Card.Subtitle>
        <Card.Text>{tweet.content}</Card.Text>


        <Button className='button' variant='primary' >{tweet.commentscount} comments</Button>


        <Button className='button' variant='primary'
        onClick={()=>setRetweetCount(retweetCount + 1)}>{retweetCount}Retweet</Button>


        <Button className='button' variant='primary'
        onClick={()=>setLikeCount(likeCount + 1)}>{likeCount}Likes</Button>
      </Card.Body>
    </div>
  )
}

export default TweetCard