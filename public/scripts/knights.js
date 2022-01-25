const title = document.querySelector(".title");

const albumInfo = {
  albumName:
    "The Myths and Legends of King Arthur and the Knights of the Round Table",
  releaseDate: "1975",
  songTitles: [
    "Arthur",
    "Lady of the Lake",
    "Guinevere",
    "Sir Lancelot and the Black Knight",
    "Merlin the Magician",
    "Sir Galahad",
    "The Last Battle",
  ],
};

console.log(albumInfo.albumName);
title.innerHTML = `<div class="name">${albumInfo.albumName}</div>
    <div class="release-date">${albumInfo.releaseDate}</div>
<div class="tracklist">${albumInfo.songTitles}</div>`;
