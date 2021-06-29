import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import {Link} from "react-router-dom"
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/">
          <span className="logo">Admin Siddhu</span>
          </Link>

          
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://lh3.googleusercontent.com/ogw/ADea4I4EIVClkJKXZ0_rCjELyuVfohSuZi-im234sE85=s64-c-mo" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}