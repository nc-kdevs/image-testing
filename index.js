const getPixels = require("get-pixels")

const img = "https://upload.wikimedia.org/wikipedia/commons/8/8a/LGBT_Rainbow_Flag.png"

getPixels(img, function(err, pixels) {
if(err) {
  console.log("Bad image path")
  return
}
const copyPixelArr = [...pixels.data]

const grid1 = copyPixelArr.slice(0, (copyPixelArr.length / 9));
const grid2 = copyPixelArr.slice((copyPixelArr.length / 9), ((copyPixelArr.length / 9) * 2));
const grid3 = copyPixelArr.slice(((copyPixelArr.length / 9) * 2), ((copyPixelArr.length / 9) * 3));
const grid4 = copyPixelArr.slice(((copyPixelArr.length / 9) * 3), ((copyPixelArr.length / 9) * 4));
const grid5 = copyPixelArr.slice(((copyPixelArr.length / 9) * 4), ((copyPixelArr.length / 9) * 5));
const grid6 = copyPixelArr.slice(((copyPixelArr.length / 9) * 5), ((copyPixelArr.length / 9) * 6));
const grid7 = copyPixelArr.slice(((copyPixelArr.length / 9) * 6), ((copyPixelArr.length / 9) * 7));
const grid8 = copyPixelArr.slice(((copyPixelArr.length / 9) * 7), ((copyPixelArr.length / 9) * 8));
const grid9 = copyPixelArr.slice(((copyPixelArr.length / 9) * 8), copyPixelArr.length);

const rgbExtraction = (grid) => {
    const allRed = [];
    const allGreen = [];
    const allBlue = [];
    const allWhite = [];

for (let i = 0; i < grid.length; i += 4) {
 allRed.push(grid[i])
}
for (let i = 1; i < grid.length; i += 4) {
 allGreen.push(grid[i])
}
for (let i = 2; i < grid.length; i += 4) {
 allBlue.push(grid[i])
}
for (let i = 3; i < grid.length; i += 4) {
 allWhite.push(grid[i])
}

const red = allRed.reduce((acc, val) => {
 acc += val;
 return acc;
}, 0) / allRed.length;
const green = allGreen.reduce((acc, val) => {
 acc += val;
 return acc;
}, 0) / allGreen.length;
const blue = allBlue.reduce((acc, val) => {
 acc += val;
 return acc;
}, 0) / allBlue.length;
const white = allWhite.reduce((acc, val) => {
 acc += val;
 return acc;
}, 0) / allWhite.length;

return {
    red, green, blue, white
    }
}

console.log(rgbExtraction(grid2))
console.log(img.width)

// console.log('red', red);
// console.log('green', green);
// console.log('blue', blue);
// console.log('white', white);
})