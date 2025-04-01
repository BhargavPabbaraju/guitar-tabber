import "./styles.css";
import * as view from "./view";
import { songs } from "./model/songs";

const state = {
  songs: songs,
  currentSong: songs[0].song_id,
};

window.state = state;

view.initialRender();
