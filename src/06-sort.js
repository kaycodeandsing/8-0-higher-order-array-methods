/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.
// Use sort to sort an array. Pass a callback that compares two elements and returns either less than 0,0, or greater than 0 to determine the order. sort returns the original array after it's been mutated.
/**
 * Reorders the array so that the song objects are organized by their runtime. The shortest song should come first.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByRuntimeAscending(songs) {
  songs.sort((a, b) => {
    return a.runtimeInSeconds - b.runtimeInSeconds
  })
  return songs
}

/**
 * Reorders the array so that the song objects are organized by their artist name. The artist that comes last in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByArtistNameDescending(songs) {
  songs.sort((a, b) => {
    const songA = a.artist.toLowerCase()
    const songB = b.artist.toLowerCase()
    if (songA > songB) {
      return -1;
    }
    if (songA < songB) {
      return 1;
    }
    return  0
})
  return songs
}
/**
 * Reorders the array so that the song objects are organized by their song title. The title that comes first in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortBySongTitleAscending(songs) {
  songs.sort((a,b) => {
    const songA = a.title.toLowerCase()
    const songB = b.title.toLowerCase()
    if (songA < songB) {
      return -1;
    }
    if (songA > songB) {
      return 1;
    }
    return  0
})
  return songs
}

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
