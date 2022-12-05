import React from "react";
import "./Widget.css";
import SearchIcon from '@mui/icons-material/Search';
import {
    TwitterTweetEmbed, TwitterTimelineEmbed, TwitterShareButton
} from "react-twitter-embed";


function Widget() {
    return (
    <div className="widget">
        <div className="widgetInput">
            <SearchIcon className="searchIcon" />
            <input type="text" placeholder="Search" />

        </div>
        <div className="widgetContainer">
            <h2>What's happening</h2>

            <TwitterTweetEmbed tweetId={"1282317986997637120"} />

            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="codingtemple"
                options={{ height: 400 }}
            />

            <TwitterShareButton
                url={"https://facebook.com/"}
                options={{ text: "@CodingTemple the place to to launch your career in tech", via:"limakonsult" }}
            />

        </div>

    </div>
    );
}

export default Widget