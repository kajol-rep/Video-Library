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
export function BottomBar() {
  return (
    <div className="mobile-mode">
      <div className="bottom-bar flex space-even">
        <NavLink activeClassName="selected red" className="link-btn" to="/" end>
          <MdHome size={iconSize} />
        </NavLink>

        <NavLink
          activeClassName="selected red"
          className="link-btn"
          to="/history"
        >
          <MdHistory size={iconSize} />
        </NavLink>
        <NavLink
          activeClassName="selected red"
          className="link-btn"
          to="/watchlater"
        >
          <MdWatchLater size={iconSize} />
        </NavLink>
        <NavLink
          activeClassName="selected red"
          className="link-btn"
          to="/playList"
        >
          <MdPlaylistPlay size={iconSize} />
        </NavLink>
        <NavLink
          activeClassName="selected red"
          className="link-btn"
          to="/likedVideos"
        >
          <MdThumbUp size={iconSize} />
        </NavLink>
      </div>
    </div>
  );
}
