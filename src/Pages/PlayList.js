import React from "react";
import { PlaylistCard } from "../Components/PlaylistCard";
import { useData } from "../Context/DataProvider";

export function PlayList() {
  const {
    state: { playlist },
    dispatch
  } = useData();

  return (
    <div>
      <div>
        {playlist.length > 0 ? (
          <div>
            <div className="bold-text padding-one">Your Playlist</div>
            {playlist.map(({ playlistVideos, playlistName, playlistId }) => (
              <div>
                <div>
                  <div className="padding-one">
                    <div className="bold-text flex space-between">
                      <div className="pointer">{playlistName}</div>
                      <div
                        className="bold-text red pointer"
                        onClick={() =>
                          dispatch({
                            type: "DELETE_PLAYLIST",
                            payload: playlistId
                          })
                        }
                      >
                        Delete
                      </div>
                    </div>
                  </div>

                  {playlistVideos.length > 0 ? (
                    <div className="flex flex-center flex-gap flex-wrap">
                      {playlistVideos.map((id) => (
                        <div>
                          <PlaylistCard videoId={id} playlistId={playlistId} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bold-text grey-text padding-one">
                      No videos yet
                    </div>
                  )}
                </div>

                <br />
                <hr />
              </div>
            ))}
          </div>
        ) : (
          <div className="medium-text grey-text">
            You have not created any playlist yet{" "}
          </div>
        )}
      </div>
    </div>
  );
}
