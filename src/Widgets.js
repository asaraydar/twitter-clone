import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
import './Widgets.css';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening?</h2>
                
                <TwitterTweetEmbed tweetId={"1388925359677222915"} />
                <TwitterTweetEmbed tweetId={"1385956641997209601"} />
                <TwitterTweetEmbed tweetId={"1371850194283851781"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="alisaraydar"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={"https://www.linkedin.com/in/ali-saraydar-a133a488/"}
          options={{ text: "#reactjs is awesome! / #reactjs mükemmel lan!", via: "alisaraydar" }}
                />
            </div>
        </div>
    )
}

export default Widgets;
