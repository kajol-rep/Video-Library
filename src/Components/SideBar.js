import React from "react";
import {
  MdThumbUp,
  MdHistory,
  MdWatchLater,
  MdHome,
  MdPlaylistPlay
} from "react-icons/md";
import { Link } from "react-router-dom";
import { iconSize } from "../utils";
export function SideBar() {
  return (
    <div style={{ width: "250px" }} className="position-absolute">
      <div style={{ fontSize: "1.4rem" }} className="flex-column">
        <div className="">
          <Link className="flex link-btn list-item-padding list-item" to="/">
            <MdHome size={iconSize} />
            <div className="padding-one"></div>
            <span>Home</span>
          </Link>
        </div>
        <div></div>
        <div className="">
          <Link
            to="/history"
            className="link-btn flex list-item-padding list-item"
          >
            <MdHistory size={iconSize} />
            <div className="padding-one"></div>
            <span>History</span>
          </Link>
          <Link
            to="/watchlater"
            className="link-btn flex list-item-padding list-item"
          >
            <MdWatchLater size={iconSize} />
            <div className="padding-one"></div>
            <span>Watch Later</span>
          </Link>
          <Link
            to="/playList"
            className="link-btn flex list-item-padding list-item"
          >
            <MdPlaylistPlay size={iconSize} />
            <div className="padding-one"></div>
            <span>Play Lists</span>
          </Link>
          <Link
            to="/likedVideos"
            className="link-btn flex list-item-padding list-item"
          >
            <MdThumbUp size={iconSize} />
            <div className="padding-one"></div>
            <span>Liked Videos</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
