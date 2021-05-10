import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'
import db from './firebase'


function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    
    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName:"küsürat_küsüratoğlu",
            username:"mr_laba_laba",
            verified: false,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pbs.twimg.com/profile_images/486558906349400064/p13qGXG9_400x400.png"
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/486558906349400064/p13qGXG9_400x400.png" />
                    <input 
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input className="tweetBox__imageInput"
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    placeholder="Optional: Enter image URL"
                    type="text"
                />
                <Button onClick={sendTweet} className="tweetBox__tweetButton" type="submit">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
