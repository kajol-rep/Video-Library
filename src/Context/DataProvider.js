import React, { createContext, useContext, useReducer, useState } from "react";
import { dataReducer } from "../Reducer/dataReducer";
import { CheckIfVideoExistsInList } from "../utils";
export const DataContext = createContext();
export function DataProvider({ children }) {
  const [openModal, setOpenModal] = useState();
  const [state, dispatch] = useReducer(dataReducer, {
    videos: [],
    history: [],
    likedVideos: [],
    watchLater: [],
    searchedItems: [],
    playlist: [],
    snackbarText: null,
    videoId: null
  });
  function addToHistory(video) {
    dispatch({ type: "ADD_TO_HISTORY", payload: video });
  }
  function addToWatchLater(video) {
    if (!CheckIfVideoExistsInList(state.watchLater, video.id)) {
      dispatch({ type: "OPEN_SNACKBAR", payload: "Added to watch later !" });
      dispatch({ type: "ADD_TO_WATCH_LATER", payload: video });
    } else {
      dispatch({
        type: "OPEN_SNACKBAR",
        payload: "Removed from watch later !"
      });
      dispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: video });
    }
  }
  function addToLikedVideos(video) {
    dispatch({ type: "ADD_TO_LIKED_VIDEOS", payload: video });
  }
  function handlePlaylist(videoId) {
    dispatch({
      type: "SET_VIDEO_ID_TO_BE_ADDED_TO_PLAYLIST",
      payload: videoId
    });
    setOpenModal("create-playList");
  }
  function handleClose() {
    setOpenModal(null);
  }
  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        addToHistory,
        addToWatchLater,
        addToLikedVideos,
        handlePlaylist,
        openModal,
        setOpenModal,
        handleClose
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export function useData() {
  return useContext(DataContext);
}
