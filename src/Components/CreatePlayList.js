import React, { useState } from "react";
import { useData } from "../Context/DataProvider";
import { checkIfVideoIsAddedToPlaylist } from "../utils";
export function CreatePlayList() {
  const [playlistName, setPlaylistName] = useState("");
  const [displayPlaylist, setDisplayPlaylist] = useState(false);
  const {
    state: { playlist, videoId },
    dispatch
  } = useData();
  function createPlaylist() {
    setPlaylistName("");
    dispatch({ type: "CREATE_PLAYLIST", payload: playlistName });
    setDisplayPlaylist(false);
  }
  function addToPlaylist(playlistId) {
    dispatch({ type: "TOGGLE_ADD_TO_PLAYLIST", payload: playlistId });
  }
  return (
    <div>
      <div className="padding-bottom">Save to..</div>
      <hr />
      <div className="padding-top padding-bottom">
        {playlist.length > 0 ? (
          <div>
            {playlist.map(({ playlistName, playlistId, playlistVideos }) => (
              <div key={playlistId}>
                <label>
                  <input
                    type="checkbox"
                    checked={checkIfVideoIsAddedToPlaylist(
                      playlistVideos,
                      videoId
                    )}
                    onChange={() => addToPlaylist(playlistId)}
                  ></input>
                  {playlistName}
                </label>
              </div>
            ))}
          </div>
        ) : (
          <div className="grey-text">no playlist found</div>
        )}
      </div>
      <hr />
      {displayPlaylist ? (
        <div className="padding-top flex-column">
          <input
            placeholder="name your playlist"
            value={playlistName}
            onChange={(event) => setPlaylistName(event.target.value)}
            className="input-box-container"
            type="text"
          />
          <br />
          <span
            onClick={() => createPlaylist()}
            className="pointer bold-text flex-row"
          >
            CREATE
          </span>
        </div>
      ) : (
        <div
          className="padding-top pointer flex-row bold-text"
          onClick={() => setDisplayPlaylist(true)}
        >
          <span className="medium-text">+</span> Create playlist
        </div>
      )}
    </div>
  );
}
