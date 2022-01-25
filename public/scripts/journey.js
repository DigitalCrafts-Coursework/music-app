const title = document.querySelector(".title");

const albumInfo = {
  albumName: "Journey to the Centre of the Earth",
  releaseDate: "1974",
  songTitles: ["The Journey/Recollection", "The Battle/The Forest"],
};

console.log(albumInfo.albumName);
title.innerHTML = `<div class="name">${albumInfo.albumName}</div>
    <div class="release-date">${albumInfo.releaseDate}</div>
<div class="tracklist">${albumInfo.songTitles}</div>`;
