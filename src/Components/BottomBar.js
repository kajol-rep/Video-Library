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
export function BottomBar() {
  return (
    <div className="mobile-mode">
      <div className="bottom-bar flex space-even">
        <Link className="link-btn" to="/">
          <MdHome size={iconSize} />
        </Link>

        <Link className="link-btn" to="/history">
          <MdHistory size={iconSize} />
        </Link>
        <Link className="link-btn" to="/watchlater">
          <MdWatchLater size={iconSize} />
        </Link>
        <Link className="link-btn" to="/playList">
          <MdPlaylistPlay size={iconSize} />
        </Link>
        <Link className="link-btn" to="/likedVideos">
          <MdThumbUp size={iconSize} />
        </Link>
      </div>
    </div>
  );
}
