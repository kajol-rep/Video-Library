import React from "react";
import { useData } from "../Context/DataProvider";
import {
  CheckIfVideoExistsInList,
  formatDate,
  formatNumber,
  formatString
} from "../utils";
import { Avatar } from "../Components/Avatar";
import { Link } from "react-router-dom";
import { HiDotsVertical } from "react-icons/hi";
import { MdWatchLater, MdPlaylistAdd, MdRemoveCircle } from "react-icons/md";
export function Home() {
  const {
    state: { videos, watchLater, searchedItems },
    addToHistory,
    addToWatchLater,
    handlePlaylist
  } = useData();
  function getfilteredData() {
    if (searchedItems.length === 0) {
      return videos;
    }
    return searchedItems;
  }

  const filteredVideos = getfilteredData();
  return (
    <div>
      <div className="flex flex-gap flex-justify-center flex-wrap">
        {filteredVideos.map((video) => (
          <div key={video.id} className="vertical-card video-card ">
            <Link
              to={`/video/${video.id}`}
              className="basic-height link-btn light-background"
              onClick={() => addToHistory(video)}
            >
              <img
                className="video-card"
                alt="thumbnail"
                src={video.thumbnail}
              />
            </Link>

            <div className="video-card-content">
              <Link
                to={`/video/${video.id}`}
                className="link-btn"
                onClick={() => addToHistory(video)}
              >
                <Avatar alt="avatar" src={video.image} size="40px" />
              </Link>

              <div className="padding-left">
                <div className="flex">
                  <Link
                    to={`/video/${video.id}`}
                    className="playlist-card bold-text link-btn"
                    onClick={() => addToHistory(video)}
                  >
                    {formatString(video.title)}
                  </Link>
                  <div className="tooltip pointer">
                    <HiDotsVertical size="1.5rem" color="grey" />
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

                        <span className="padding-left">Save to Playlist</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to={`/video/${video.id}`}
                  style={{ color: "grey" }}
                  className="link-btn"
                  onClick={() => addToHistory(video)}
                >
                  {video.author}
                </Link>
                <br />
                <Link
                  to={`/video/${video.id}`}
                  style={{ color: "grey" }}
                  className="link-btn"
                  onClick={() => addToHistory(video)}
                >
                  {formatNumber(video.views)} views • {formatDate(video.date)}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
