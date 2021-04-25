import React from "react";
import { useData } from "../Context/DataProvider";
import {
  CheckIfVideoExistsInList,
  formatDate,
  formatNumber,
  formatString
} from "../utils";
import { Link } from "react-router-dom";
import { HiDotsVertical } from "react-icons/hi";
import { MdPlaylistAdd, MdWatchLater, MdRemoveCircle } from "react-icons/md";
export function LikedVideos() {
  const {
    state: { likedVideos, watchLater },
    addToHistory,
    addToWatchLater,
    handlePlaylist,
    dispatch
  } = useData();
  return (
    <div>
      {likedVideos.length > 0 ? (
        <div>
          <div className="flex space-between bold-text padding-half">
            <span>Liked videos</span>
          </div>
          <br />
          {likedVideos
            .slice(0)
            .reverse()
            .map((video) => (
              <div
                key={video.id}
                className=" horizontal-card width-full video-container-width  link-btn"
              >
                <Link
                  to={`/video/${video.id}`}
                  className="link-btn"
                  onClick={() => addToHistory(video)}
                >
                  <img
                    className="small-video-card"
                    alt="thumbnail"
                    src={video.thumbnail}
                  />
                </Link>

                <div className="width-full">
                  <div style={{ paddingLeft: "10px" }}>
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
                          {!CheckIfVideoExistsInList(watchLater, video.id) ? (
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
                            onClick={() => handlePlaylist(video.id)}
                          >
                            <MdPlaylistAdd size="1.2rem" />

                            <span className="padding-left">
                              Save to Playlist
                            </span>
                          </div>
                          <div
                            className="flex padding-bottom link-btn list-item-padding list-item"
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_FROM_LIKED_VIDEO",
                                payload: video
                              })
                            }
                          >
                            <MdRemoveCircle size="1.2rem" />

                            <span className="padding-left">
                              Remove from liked videos
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
                      {formatNumber(video.views)} views •{" "}
                      {formatDate(video.date)}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="medium-text grey-text">
          You have not liked any videos yet
        </div>
      )}
    </div>
  );
}
