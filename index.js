const getPixels = require("get-pixels")

getPixels("ringworm2.png", function(err, pixels) {
if(err) {
  console.log("Bad image path")
  return
}
const copyPixelArr = [...pixels.data]
const allRed = [];
const allGreen = [];
const allBlue = [];
const allWhite = [];

for (let i = 0; i < copyPixelArr.length; i += 4) {
 allRed.push(copyPixelArr[i])
}
for (let i = 1; i < copyPixelArr.length; i += 4) {
 allGreen.push(copyPixelArr[i])
}
for (let i = 2; i < copyPixelArr.length; i += 4) {
 allBlue.push(copyPixelArr[i])
}
for (let i = 3; i < copyPixelArr.length; i += 4) {
 allWhite.push(copyPixelArr[i])
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

console.log('red', red);
console.log('green', green);
console.log('blue', blue);
console.log('white', white);
})