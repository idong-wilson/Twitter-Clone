import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import SidebarOptions from './SidebarOptions';
import { Button } from '@mui/material';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon className="sidebar-twitterIcon" />

            <SidebarOptions active Icon={HomeIcon} text="Home" />

            <SidebarOptions Icon={TagIcon} text="Explore" />

            <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications" />

            <SidebarOptions Icon={MailOutlineIcon} text="Messages" />

            <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmark" />

            <SidebarOptions Icon={ListAltIcon} text="Lists" />

            <SidebarOptions Icon={PermIdentityIcon} text="Profile" />

            <SidebarOptions Icon={PendingOutlinedIcon} text="More" />

            <Button className="sidebar-button" variant="outlined" fullWidth>Tweet</Button>

        </div>
    );
}

export default Sidebar;