const getPixels = require("get-pixels");
const sizeOf = require('image-size');

const img = "https://upload.wikimedia.org/wikipedia/commons/8/8a/LGBT_Rainbow_Flag.png"

exports.getPixels(img, function (err, pixels) {
  if (err) {
    console.log("Bad image path")
    return
  }
  const copyPixelArr = [...pixels.data]
  const gridArray = {
    row1: [[], [], []],
    row2: [[], [], []],
    row3: [[], [], []]
  }

  // const dimensions = sizeOf('./ringworm2.png');
  // console.log(dimensions.width, dimensions.height)
  // const pixelArr = [];

  // for (let i = 0; i < copyPixelArr.length; i + 4) {
  //   pixelArr.push(copyPixelArr.slice(i, i + 4))
  // }
  // console.log(pixelArr);

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

    const avgRed = allRed.reduce((acc, val) => {
      acc += val;
      return acc;
    }, 0) / allRed.length;
    const avgGreen = allGreen.reduce((acc, val) => {
      acc += val;
      return acc;
    }, 0) / allGreen.length;
    const avgBlue = allBlue.reduce((acc, val) => {
      acc += val;
      return acc;
    }, 0) / allBlue.length;
    const avgWhite = allWhite.reduce((acc, val) => {
      acc += val;
      return acc;
    }, 0) / allWhite.length;

    return {
      r: avgRed, g: avgGreen, b: avgBlue, w: avgWhite
    }
  }

  console.log(rgbExtraction(grid2))
  console.log(img.width)

  // console.log('red', red);
  // console.log('green', green);
  // console.log('blue', blue);
  // console.log('white', white);

  const imgAnalysis = {
    overall: { r: red, g: green, b: blue, w: white },
    areas: [{
      r: area1.red, g: area1.green, b: area1.blue, w: area1.white
    },
    {
      r: area2.red, g: area2.green, b: area2.blue, w: area2.white
    },
    {
      r: area3.red, g: area3.green, b: area3.blue, w: area3.white
    },
    {
      r: area4.red, g: area4.green, b: area4.blue, w: area4.white
    },
    {
      r: area5.red, g: area5.green, b: area5.blue, w: area5.white
    },
    {
      r: area6.red, g: area6.green, b: area6.blue, w: area6.white
    },
    {
      r: area7.red, g: area7.green, b: area7.blue, w: area7.white
    },
    {
      r: area8.red, g: area8.green, b: area8.blue, w: area8.white
    },
    {
      r: area9.red, g: area9.green, b: area9.blue, w: area9.white
    },
    ]
  }
})