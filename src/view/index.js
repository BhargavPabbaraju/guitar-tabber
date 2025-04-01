import { songs } from "../model/songs";
import { MenuIcon } from "./menu-icon";

export function renderSongs() {
  const songsList = document.getElementById("songs-list");
  songsList.replaceChildren();
  window.state.songs.forEach((song) => {
    const div = document.createElement("div");
    div.classList.add("song");
    div.textContent = song.data.title || song.song_id || "Unknown song";
    songsList.appendChild(div);
  });
}

export function initialRender() {
  const _ = new MenuIcon("menu-icon");

  renderSongs();
}
