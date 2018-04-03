document.getElementById(
  'app',
).innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

const rootElement = document.getElementById(
  'app',
);
console.log(rootElement);
// Create a 3 x 3 board.
// Add in click handler to every tile.
// First click should make a X on the tile.
// Second click sohuld make an O on the tile.
// Repeat until all tiles are filled...
// Display game over on fill.
// Display button to start over.
