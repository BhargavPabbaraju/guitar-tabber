function loadSong(song_id) {
  return require(`./songs/${song_id}.json`);
}

export class Song {
  constructor(song_id) {
    this.song_id = song_id;
    this.data = loadSong(song_id);
  }
}

export const songs = [new Song("happy_birthday")];
