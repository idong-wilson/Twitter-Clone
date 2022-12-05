import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from '@mui/material';

function TweetBox() {
    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox-input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1266938830608875520/f-eajIjB_400x400.jpg" />
                    <input type="text" placeholder="What's happening?" />
                        
                </div>
                <input type="" className="tweetbox-imageInput" placeholder="Enter your image URL (Optional)" />
                <Button className="tweetbox-button">Tweet</Button>

            </form>

        </div>
    );
}

export default TweetBox;