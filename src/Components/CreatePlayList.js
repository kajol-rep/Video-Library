import React, { useState } from "react";
import { useData } from "../Context/DataProvider";
import { checkIfVideoIsAddedToPlaylist } from "../utils";
export function CreatePlayList() {
  const [playlistName, setPlaylistName] = useState("");
  const [createPlaylist, setCreatePlaylist] = useState(false);
  const {
    state: { playlist, videoId },
    dispatch
  } = useData();
  function createPlayList() {
    setPlaylistName("");
    dispatch({ type: "CREATE_PLAYLIST", payload: playlistName });
    setCreatePlaylist(false);
  }
  function addToPlayList(playlistId) {
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
                    onChange={() => addToPlayList(playlistId)}
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
      {createPlaylist ? (
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
            onClick={() => createPlayList()}
            className="pointer bold-text flex-row"
          >
            CREATE
          </span>
        </div>
      ) : (
        <div
          className="padding-top pointer flex-row bold-text"
          onClick={() => setCreatePlaylist(true)}
        >
          <span style={{ fontSize: "1.5rem" }}>+</span> Create playlist
        </div>
      )}
    </div>
  );
}
