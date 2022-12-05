import React from 'react'
import "./Post.css";
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';

function Post({displayName, username, verified, text, image, avatar, likes, comments}) {
    return (
        <div className="post">
            <div className="post-avatar">
                <Avatar src="https://i.pinimg.com/originals/4c/41/ef/4c41eff22888e5e5d8277cf5121691db.png" />
                
            </div>
            <div className="post-container">
                <div className="post-header">
                    <div className="post-headerText">
                        <h3>
                            Idong Wilson{""}
                            <span className="post-headerDistinct">
                                <VerifiedIcon className="badge" /> @idongwilson
                            </span>
                        </h3>

                    </div>
                    <div className="post-headerDescription">
                        <p>We've com thus far. Indeed, Coding Temple is the place to be</p>
                    </div>
                </div>
                <img src="https://media.giphy.com/media/RbDKaczqWovIugyJmW/giphy.gif" alt="" />

                <div className="post-footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <IosShareIcon fontSize="small" />
                    
                </div>

            </div>
        </div>
    )
}

export default Post