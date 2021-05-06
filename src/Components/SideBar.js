import React from "react";
import {
  MdThumbUp,
  MdHistory,
  MdWatchLater,
  MdHome,
  MdPlaylistPlay
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { iconSize } from "../utils";
export function SideBar() {
  return (
    <div className="position-absolute grey basic-width">
      <div className="flex-column sideBar-font">
        <NavLink
          activeClassName="selected black"
          className="flex link-btn list-item-padding list-item"
          to="/"
          end
        >
          <MdHome size={iconSize} />
          <div className="padding-one"></div>
          <span>Home</span>
        </NavLink>
        <NavLink
          activeClassName="selected black"
          to="/history"
          className="link-btn flex list-item-padding list-item"
        >
          <MdHistory size={iconSize} />
          <div className="padding-one"></div>
          <span>History</span>
        </NavLink>
        <NavLink
          activeClassName="selected black"
          to="/watchlater"
          className="link-btn flex list-item-padding list-item"
        >
          <MdWatchLater size={iconSize} />
          <div className="padding-one"></div>
          <span>Watch Later</span>
        </NavLink>
        <NavLink
          activeClassName="selected black"
          to="/playList"
          className="link-btn flex list-item-padding list-item"
        >
          <MdPlaylistPlay size={iconSize} />
          <div className="padding-one"></div>
          <span>Play Lists</span>
        </NavLink>
        <NavLink
          activeClassName="selected black"
          to="/likedVideos"
          className="link-btn flex list-item-padding list-item"
        >
          <MdThumbUp size={iconSize} />
          <div className="padding-one"></div>
          <span>Liked Videos</span>
        </NavLink>
      </div>
    </div>
  );
}
