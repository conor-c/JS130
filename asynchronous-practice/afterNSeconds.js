// function afterNSeconds(callback, time) {
//   time *= 1000;
//   setTimeout(callback, time);
// }

function afterNSeconds(callback, seconds) {
  setTimeout(callback, seconds * 1000);
}