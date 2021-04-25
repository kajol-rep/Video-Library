import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useData } from "../Context/DataProvider";
import {
  CheckIfVideoExistsInList,
  formatDate,
  formatNumber,
  formatString,
  videoURL
} from "../utils";
import {
  MdThumbUp,
  MdPlaylistAdd,
  MdWatchLater,
  MdRemoveCircle
} from "react-icons/md";
import { Avatar } from "../Components/Avatar";
import { Link } from "react-router-dom";
import { HiDotsVertical } from "react-icons/hi";
export function VideoPlayer() {
  const { videoId } = useParams();
  const {
    state: { videos, watchLater, likedVideos },
    addToHistory,
    addToWatchLater,
    handlePlaylist,
    dispatch
  } = useData();

  const videoInfo = videos.find((video) => video.id === videoId);
  const filteredVideo = videos.filter((video) => video.id !== videoId);
  return (
    <div className="grid grid-column-videoPlayer grid-justify-start">
      <div className="vertical-card video-player-container">
        <ReactPlayer
          className="video-player"
          url={videoURL(videoId)}
          playing={true}
          controls
          volume={1}
        />
        <div className="padding-half">
          <div className="bold-text">{videoInfo?.title}</div>
          <div
            style={{ justifyContent: "space-between" }}
            className="flex-row padding-top"
          >
            <div className="grey-text">
              {formatNumber(videoInfo?.views)} views •{" "}
              {formatDate(videoInfo?.date)}
            </div>
            <div className="flex">
              <MdThumbUp
                color={
                  CheckIfVideoExistsInList(likedVideos, videoInfo?.id)
                    ? "#2563eb"
                    : "grey"
                }
                size="1.5rem"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_LIKED_VIDEOS",
                    payload: videoInfo
                  })
                }
              />
              <div className="padding-half"></div>
              <MdWatchLater
                color={
                  CheckIfVideoExistsInList(watchLater, videoInfo?.id)
                    ? "#2563eb"
                    : "grey"
                }
                size="1.5rem"
                onClick={() => addToWatchLater(videoInfo)}
              />

              <div className="padding-half"></div>
              <MdPlaylistAdd
                color="grey"
                size="1.5rem"
                onClick={() => handlePlaylist(videoInfo?.id)}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="video-card-content padding-half grid-justify-start">
          <Avatar alt="avatar" src={videoInfo?.image} />
          <div style={{ paddingLeft: "10px" }} className="padding-top">
            <div>{videoInfo?.author}</div>
            <div className="grey-text">
              {formatNumber(videoInfo?.subscribers)} subscribers
            </div>
            <p>{videoInfo?.description}</p>
          </div>
        </div>
        <hr />
      </div>

      <div className="padding-left-d">
        <div className="padding-half mobile-mode"></div>
        {filteredVideo.map((video) => (
          <div
            key={video.id}
            className=" horizontal-card width-full link-btn"
            onClick={() => addToHistory(video)}
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

            <div className="video-card-content">
              <div style={{ paddingLeft: "10px" }}>
                <div className="flex">
                  <Link
                    to={`/video/${video.id}`}
                    className="link-btn bold-text"
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

                        <span className="padding-left">Save to Playlist</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  to={`/video/${video.id}`}
                  className="grey link-btn"
                  onClick={() => addToHistory(video)}
                >
                  {video.author}
                </Link>
                <br />
                <Link
                  to={`/video/${video.id}`}
                  className="grey link-btn"
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
