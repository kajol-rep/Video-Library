import React from "react";
import {
  MdThumbUp,
  MdHistory,
  MdWatchLater,
  MdHome,
  MdPlaylistPlay
} from "react-icons/md";
import { Link } from "react-router-dom";
export function BottomBar() {
  return (
    <div className="mobile-mode">
      <div
        style={{ justifyContent: "space-evenly" }}
        className="bottom-bar flex"
      >
        <Link className="link-btn" to="/">
          <MdHome size="1.5rem" />
        </Link>

        <Link className="link-btn" to="/history">
          <MdHistory size="1.5rem" />
        </Link>
        <Link className="link-btn" to="/watchlater">
          <MdWatchLater size="1.5rem" />
        </Link>
        <Link className="link-btn" to="/playList">
          <MdPlaylistPlay size="1.5rem" />
        </Link>
        <Link className="link-btn" to="/likedVideos">
          <MdThumbUp size="1.5rem" />
        </Link>
      </div>
    </div>
  );
}
