import React from "react";
import { useData } from "../Context/DataProvider";
import {
  checkIfVideoExistsInList,
  formatDate,
  formatNumber,
  formatString
} from "../utils";
import { Link } from "react-router-dom";
import { HiDotsVertical } from "react-icons/hi";
import { MdWatchLater, MdRemoveCircle } from "react-icons/md";
export function PlaylistCard({ videoId, playlistId }) {
  const {
    state: { videos, watchLater },
    addToHistory,
    addToWatchLater,
    dispatch
  } = useData();
  function getPlaylist() {
    return videos.find((video) => video.id === videoId);
  }
  const video = getPlaylist();
  function removeFromPlaylist() {
    dispatch({
      type: "SET_VIDEO_ID_TO_BE_ADDED_TO_PLAYLIST",
      payload: videoId
    });
    dispatch({
      type: "TOGGLE_ADD_TO_PLAYLIST",
      payload: playlistId
    });
  }
  return (
    <div>
      {!video.length > 0 ? (
        <div>
          <div key={video.id} className="playlist-card vertical-card link-btn">
            <Link
              to={`/video/${video.id}`}
              className="link-btn"
              onClick={() => addToHistory(video)}
            >
              <img
                className="playlist-card"
                alt="thumbnail"
                src={video.thumbnail}
              />
            </Link>

            <div className="smallest-text">
              <div>
                <div className="flex space-between">
                  <Link
                    className="bold-text link-btn"
                    to={`/video/${video.id}`}
                    onClick={() => addToHistory(video)}
                  >
                    {formatString(video.title)}
                  </Link>
                  <div className="tooltip pointer">
                    <HiDotsVertical size="1rem" color="grey" />
                    <div
                      style={{ color: "grey" }}
                      className="tooltiptext card-shadow light-border"
                    >
                      {!checkIfVideoExistsInList(watchLater, video.id) ? (
                        <div
                          className="flex padding-bottom link-btn list-item-padding list-item"
                          onClick={() => addToWatchLater(video)}
                        >
                          <MdWatchLater size="1.2rem" />

                          <span className="padding-left">
                            Save to Watch Later
                          </span>
                        </div>
                      ) : (
                        <div
                          className="flex padding-bottom link-btn list-item-padding list-item"
                          onClick={() => addToWatchLater(video)}
                        >
                          <MdRemoveCircle size="1.2rem" />

                          <span className="padding-left">
                            Remove from watch later
                          </span>
                        </div>
                      )}

                      <div
                        className="flex padding-bottom link-btn list-item-padding list-item"
                        onClick={() => removeFromPlaylist()}
                      >
                        <MdRemoveCircle size="1.2rem" />

                        <span className="padding-left">
                          Remove from playlist
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  className="grey link-btn"
                  to={`/video/${video.id}`}
                  onClick={() => addToHistory(video)}
                >
                  {video.author}
                </Link>
                <br />
                <Link
                  className="grey link-btn"
                  to={`/video/${video.id}`}
                  onClick={() => addToHistory(video)}
                >
                  {formatNumber(video.views)} views • {formatDate(video.date)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="medium-text grey-text">No Playlist found</div>
      )}
    </div>
  );
}
