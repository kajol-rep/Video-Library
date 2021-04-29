import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Pages/Home";
import { VideoPlayer } from "./Pages/VideoPlayer";
import { SideBar } from "./Components/SideBar";
import { useData } from "./Context/DataProvider";
import { useEffect } from "react";
import axios from "axios";
import { BottomBar } from "./Components/BottomBar";
import { History } from "./Pages/History";
import { Snackbar } from "./Components/SnackBar";
import { WatchLater } from "./Pages/WatchLater";
import { LikedVideos } from "./Pages/LikedVideos";
import { PlayList } from "./Pages/PlayList";
import Modal from "./Components/Modal";
import { CreatePlayList } from "./Components/CreatePlayList";
export default function App() {
  const {
    state: { snackbarText },
    openModal,
    handleClose,
    dispatch
  } = useData();
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get("/api/videos");
        localStorage.setItem("data", JSON.stringify(response.data.videos));
        const data = JSON.parse(localStorage?.getItem("data"));
        if (response.status === 200) {
          dispatch({ type: "FETCH_VIDEOS", payload: data });
        }
      } catch (error) {}
    })();
  }, [dispatch]);
  return (
    <div className="App">
      <NavBar />
      <div className="margin-top padding-top">
        <div className="grid grid-column-2">
          <div className="seperator desktop-mode basic-width">
            <SideBar />
          </div>
          <div className="padding-one-desktop-mode">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/video/:videoId" element={<VideoPlayer />} />
              <Route path="/history" element={<History />} />
              <Route path="/watchlater" element={<WatchLater />} />
              <Route path="/likedVideos" element={<LikedVideos />} />
              <Route path="/playList" element={<PlayList />} />
            </Routes>
            <div className="bottom-spacing mobile-mode grey text-center"></div>
          </div>
        </div>
        {openModal === "create-playList" && (
          <Modal open={openModal} onclose={handleClose} dismissable>
            <CreatePlayList />
          </Modal>
        )}
        {snackbarText && <Snackbar />}
        <BottomBar />
      </div>
    </div>
  );
}
