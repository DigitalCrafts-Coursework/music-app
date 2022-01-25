//const albumInfo = require("../../modules/album-info");

const title = document.querySelector(".title");

title.style.color = "red";
console.log("changed to red");

const albumInfo = [
  {
    albumName: "The Six Wives of Henry VIII",
    releaseDate: "1973",
    songTitles: [
      "Catherine of Aragon",
      "Anne of Cleves",
      "Catherine Howard",
      "Jane Seymour",
      "Anne Boleyn",
      "Catherine Parr",
    ],
  },
  {},
];

console.log(albumInfo[0].albumName);
title.innerHTML = `<div class="name">${albumInfo[0].albumName}</div>
    <div class="release-date">${albumInfo[0].releaseDate}</div>
<div class="tracklist">${albumInfo[0].songTitles}</div>`;
