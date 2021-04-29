import {
  checkIfVideoExistsInList,
  checkIfVideoIsAddedToPlaylist
} from "../utils";

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_VIDEOS":
      return {
        ...state,
        videos: action.payload
      };
    case "ADD_TO_HISTORY":
      return {
        ...state,
        history: state.history.some(({ id }) => id === action.payload.id)
          ? state.history
              .filter(({ id }) => id !== action.payload.id)
              .concat(action.payload)
          : state.history.concat(action.payload)
      };
    case "CLEAR_HISTORY":
      state.history = [];
      return {
        ...state,
        history: state.history
      };
    case "REMOVE_FROM_HISTORY":
      return {
        ...state,
        history: state.history.filter(({ id }) => id !== action.payload.id)
      };
    case "ADD_TO_LIKED_VIDEOS":
      return {
        ...state,
        likedVideos: checkIfVideoExistsInList(
          state.likedVideos,
          action.payload.id
        )
          ? state.likedVideos.filter(({ id }) => id !== action.payload.id)
          : state.likedVideos.concat(action.payload)
      };
    case "REMOVE_FROM_LIKED_VIDEO":
      return {
        ...state,
        likedVideos: state.likedVideos.filter(
          ({ id }) => id !== action.payload.id
        )
      };
    case "ADD_TO_WATCH_LATER":
      return {
        ...state,
        watchLater: state.watchLater.concat(action.payload)
      };
    case "REMOVE_FROM_WATCH_LATER":
      return {
        ...state,
        watchLater: state.watchLater.filter(
          ({ id }) => id !== action.payload.id
        )
      };
    case "CLEAR_WATCH_LATER":
      state.watchLater = [];
      return {
        ...state,
        history: state.watchLater
      };
    case "CREATE_PLAYLIST":
      console.log("insideplaylist", action.payload);

      return {
        ...state,

        playlist: state.playlist.concat({
          playlistId: state.playlist.length + 1,
          playlistName: action.payload,
          playlistVideos: []
        })
      };
    case "TOGGLE_CHECKBOX":
      return (state = {
        ...state,
        isAddedToPlaylist: !state.isAddedToPlaylist
      });
    case "SET_VIDEO_ID_TO_BE_ADDED_TO_PLAYLIST":
      return {
        ...state,
        videoId: action.payload
      };
    case "TOGGLE_ADD_TO_PLAYLIST":
      const currentPlaylist = state.playlist.find(
        (item) => item.playlistId === action.payload
      );

      return {
        ...state,
        snackbarText: checkIfVideoIsAddedToPlaylist(
          currentPlaylist.playlistVideos,
          state.videoId
        )
          ? `Removed from ${currentPlaylist.playlistName}`
          : `Added to ${currentPlaylist.playlistName}`,
        playlist: state.playlist.map((item) =>
          item.playlistId === currentPlaylist.playlistId
            ? {
                ...item,
                playlistVideos: checkIfVideoIsAddedToPlaylist(
                  currentPlaylist.playlistVideos,
                  state.videoId
                )
                  ? item.playlistVideos.filter((id) => id !== state.videoId)
                  : item.playlistVideos.concat(state.videoId)
              }
            : item
        )
      };

    case "DELETE_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.filter(
          (playlist) => playlist.playlistId !== action.payload
        )
      };

    case "RENAME_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.map((playlist) =>
          playlist.playlistId === action.payload.playlistId
            ? { ...playlist, playlistName: action.payload.playlistName }
            : playlist
        )
      };
    case "OPEN_SNACKBAR":
      return {
        ...state,
        snackbarText: action.payload
      };
    case "CLOSE_SNACKBAR":
      return {
        ...state,
        snackbarText: action.payload
      };
    case "SEARCH_ITEM":
      const searchResult = getSearchedItems(action.payload, state.videos);
      state.searchedItems = [];

      return {
        ...state,
        searchedItems: state.searchedItems.concat(searchResult),
        itemToSearch: action.payload
      };
    default:
      break;
  }
};
function getSearchedItems(itemToSearch, videos) {
  const videoList = videos.filter(
    (video) =>
      (itemToSearch !== null &&
        video.title.toLowerCase().includes(itemToSearch.toLowerCase())) ||
      video.author.toLowerCase().includes(itemToSearch.toLowerCase())
  );
  return videoList;
}
