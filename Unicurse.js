let boxArray = []

let bugScaleDown = 1

//explosion
let explodeCircles = []
let numExplodeCircles
let explodeCenterX, explodeCenterY

let currentCoordinateIndex = 0
let circlePosition

let currentGhostIndex = 0
let ghostPosition

//candle positions
let gridCount = 12 // Number of grids
let candleCoordinates01 = [] // Array to hold coordinate objects
let candleCoordinates02 = [] // Array to hold coordinate objects
let candleCoordinates03 = [] // Array to hold coordinate objects
let candleCoordinates04 = [] // Array to hold coordinate objects
let candleCoordinates05 = [] // Array to hold coordinate objects
let candleCoordinates06 = [] // Array to hold coordinate objects
let candleCoordinates07 = [] // Array to hold coordinate objects
let candleCoordinates08 = [] // Array to hold coordinate objects
let candleCoordinates09 = [] // Array to hold coordinate objects
let candleCoordinates10 = [] // Array to hold coordinate objects
let candleCoordinates11 = [] // Array to hold coordinate objects
let candleCoordinates12 = [] // Array to hold coordinate objects

const colorPalette = [
  [
    //00 oysterCove
    [217, 48, 21, 255], //background
    [248, 13, 64, 255], //main tone dark
    [2, 74, 54, 255], //main tone mid
    [49, 68, 73, 255], //main tone light
    [314, 36, 33, 255], //main tone shadow
    [45, 7, 96, 255], //contrast highlight
    [222, 63, 13, 255], //contrast lowlight
    [0, 20, 86, 255], //line dark 45, 7, 96, 255
    [217, 48, 21, 255], //line light
    [0, 56, 64, 255], //water
    [181, 32, 67, 255], //main tone light2
    [0, 56, 64, 255], //main tone light3
    [314, 36, 33, 255], //main tone light4
    [176, 49, 19, 15], //backgroundColorTrans
  ],
  [
    //01 KANDINSKY
    [30, 97, 14, 255], //background
    [6, 88, 52, 255], //main tone dark
    [350, 45, 74, 255], //main tone mid
    [39, 35, 67, 255], //main tone light
    [220, 45, 24, 255], //main tone shadow
    [208, 54, 56, 255], //contrast highlight
    [12, 85, 81, 255], //contrast lowlight
    [185, 35, 18, 255], //line dark
    [3, 100, 81, 100], //line light
    [176, 41, 42, 255], //water
    [5, 17, 83, 255], //main tone light2
    [0, 18, 54, 255], //main tone light3
    [13, 35, 57, 255], //main tone light4
    [30, 97, 14, 15], //backgroundColorTrans
  ],
  [
    //02 PORCELAIN
    [220, 100, 15, 255], //background 43, 4, 85, 255
    [228, 62, 45, 255], //main tone dark
    [225, 56, 55, 255], //main tone mid
    [215, 24, 84, 255], //main tone light
    [222, 89, 25, 255], //main tone shadow
    [210, 19, 85, 255], //contrast highlight
    [216, 84, 55, 255], //contrast lowlight
    [213, 100, 45, 255], //line DARK
    [213, 30, 55, 155], //line LIGHT
    [222, 60, 70, 255], //water
    [205, 30, 85, 255], //main tone light2
    [210, 30, 90, 255], //main tone light3
    [220, 30, 80, 255], //main tone light4
    [43, 4, 85, 15], //backgroundColorTrans
  ],
  [
    //03 INFINITE
    [264, 73, 20, 255], //background
    [243, 57, 53, 255], //main tone dark
    [250, 87, 42, 255], //main tone mid
    [34, 0, 80, 255], //main tone light
    [0, 0, 7, 255], //main tone shadow
    [42, 62, 100, 255], //contrast highlight
    [0, 56, 93, 255], //contrast lowlight
    [0, 0, 70, 255], //line dark
    [12, 0, 100, 55], //line light
    [186, 74, 71, 255], //water
    [10, 100, 80, 255], //main tone light2
    [34, 0, 60, 255], //main tone light3
    [34, 0, 0, 255], //main tone light4
    [90, 0, 55, 15], //backgroundColorTrans
  ],
  [
    //04 KRASNOW
    [350, 45, 67, 255], //background
    [350, 67, 56, 255], //main tone dark
    [8, 74, 75, 255], //main tone mid
    [13, 39, 86, 255], //main tone light
    [10, 67, 36, 255], //main tone shadow
    [103, 46, 66, 255], //contrast highlight
    [212, 53, 53, 255], //contrast lowlight
    [212, 21, 27, 255], //line dark
    [212, 21, 27, 155], //line light
    [182, 48, 57, 255], //water 182, 48, 57, 255
    [44, 50, 79, 255], //main tone light
    [39, 70, 58, 255], //main tone light
    [13, 39, 85, 255], //main tone light
    [0, 0, 10, 15], //backgroundColorTrans
  ],
  [
    //05 TRACE
    [0, 0, 80, 255], //background
    [264, 0, 90, 255], //main tone dark
    [34, 0, 0, 255], //main tone mid
    [6, 0, 90, 255], //main tone light
    [220, 0, 75, 255], //main tone shadow
    [0, 0, 100, 255], //contrast highlight
    [0, 0, 0, 255], //contrast lowlight
    [0, 0, 80, 255], //line dark
    [0, 0, 80, 255], //line light
    [220, 10, 0, 255], //water
    [0, 0, 85, 255], //main tone dark2
    [0, 0, 0, 255], //main tone mid2
    [0, 0, 85, 255], //main tone light2
    [0, 0, 80, 15], //backgroundColorTrans
  ],
  [
    //06 KANDINSKY AGAIN
    [136, 30, 20, 255], //background
    [69, 25, 42, 255], //main tone dark
    [29, 23, 71, 255], //main tone mid
    [279, 15, 69, 255], //main tone light
    [84, 12, 16, 255], //main tone shadow
    [28, 69, 71, 255], //contrast highlight
    [20, 76, 68, 255], //contrast lowlight
    [30, 13, 13, 255], //line dark
    [32, 68, 53, 100], //line light
    [211, 49, 63, 255], //water
    [57, 12, 59, 255], //main tone light2
    [39, 53, 74, 255], //main tone light3
    [23, 38, 81, 255], //main tone light4
    [136, 16, 27, 15], //backgroundColorTrans
  ],
  [
    //07 apricot
    [29, 22, 90, 255], //background
    [30, 38, 89, 255], //main tone dark
    [29, 22, 90, 255], //main tone mid
    [27, 90, 90, 255], //main tone light
    [19, 67, 90, 255], //main tone shadow
    [39, 12, 90, 255], //contrast highlight
    [13, 59, 95, 255], //contrast lowlight
    [25, 90, 100, 255], //line dark
    [10, 80, 100, 155], //line light
    [39, 12, 90, 255], //water  //[30, 66, 81, 255], //water 13, 79, 95, 255
    [29, 71, 91, 255], //main tone light2
    [29, 55, 86, 255], //main tone light3
    [36, 58, 99, 255], //main tone light4
    [39, 12, 22, 15], //backgroundColorTrans
  ],
  [
    //08 HOCKNEY
    [45, 18, 89, 255], //background
    [222, 29, 89, 255], //main tone dark
    [48, 54, 90, 255], //main tone mid
    [30, 78, 78, 255], //main tone light
    [225, 46, 84, 255], //main tone shadow
    [41, 71, 80, 255], //contrast highlight [30, 78, 78, 255]
    [9, 85, 74, 255], //contrast lowlight
    [224, 49, 39, 255], //line dark
    [81, 66, 64, 100], //line light
    [228, 66, 85, 255], //water  //[30, 66, 81, 255], //water
    [52, 49, 78, 255], //main tone light2
    [58, 69, 69, 255], //main tone light3
    [62, 27, 77, 255], //main tone light4
    [45, 18, 89, 15], //backgroundColorTrans
  ],
  [
    //09 DANCERS
    [244, 60, 22, 255], //background
    [244, 30, 20, 255], //main tone dark
    [4, 77, 91, 255], //main tone mid
    [124, 31, 42, 255], //main tone light
    [260, 22, 15, 255], //main tone shadow
    [2, 71, 34, 255], //contrast highlight [30, 78, 78, 255]
    [247, 65, 32, 255], //contrast lowlight
    [0, 0, 0, 255], //line dark
    [0, 0, 0, 100], //line light
    [3, 76, 54, 255], //water  //[247, 65, 32, 255], //water
    [124, 25, 52, 255], //main tone light2
    [124, 31, 32, 255], //main tone light3
    [124, 25, 42, 255], //main tone light4
    [244, 60, 22, 15], //backgroundColorTrans
  ],
  [
    //10 MIRO
    [42, 26, 28, 255], //background
    [42, 39, 33, 255], //main tone dark
    [50, 36, 10, 255], //main tone mid
    [28, 60, 73, 255], //main tone light
    [48, 36, 22, 255], //main tone shadow
    [124, 50, 53, 255], //contrast highlight [30, 78, 78, 255]
    [54, 58, 80, 255], //contrast lowlight
    [50, 36, 10, 255], //line dark
    [42, 39, 33, 100], //line light
    [8, 78, 92, 255], //water  //[247, 65, 32, 255], //water
    [42, 35, 64, 255], //main tone light2
    [41, 36, 74, 255], //main tone light3
    [43, 47, 57, 255], //main tone light4
    [42, 26, 28, 15], //backgroundColorTrans
  ],
  [
    //11 GEN WEAVING 01
    [217, 75, 48, 255], //background
    [215, 70, 61, 255], //main tone dark
    [198, 30, 87, 255], //main tone mid
    [80, 49, 66, 255], //main tone light
    [219, 75, 25, 255], //main tone shadow
    [198, 30, 87, 255], //contrast highlight 2, 71, 34, 255
    [219, 74, 24, 255], //contrast lowlight
    [219, 74, 24, 255], //line dark
    [67, 32, 21, 100], //line light
    [352, 80, 80, 255], //water  //[247, 65, 32, 255], //water
    [80, 56, 56, 255], //main tone light2
    [67, 31, 34, 255], //main tone light3
    [80, 61, 40, 255], //main tone light4
    [217, 75, 48, 15], //backgroundColorTrans
  ],
  [
    //12 GEN WEAVING 02
    [200, 100, 29, 255], //background
    [175, 39, 38, 255], //main tone dark
    [170, 36, 56, 255], //main tone mid
    [4, 23, 85, 255], //main tone light
    [157, 12, 26, 255], //main tone shadow
    [20, 5, 96, 255], //contrast highlight 2, 71, 34, 255
    [355, 55, 49, 255], //contrast lowlight
    [20, 4, 95, 255], //line dark
    [355, 55, 49, 100], //line light
    [210, 63, 58, 255], //water  //[247, 65, 32, 255], //water
    [6, 45, 65, 255], //main tone light2
    [25, 21, 85, 255], //main tone light3
    [356, 56, 59, 255], //main tone light4
    [147, 12, 35, 15], //backgroundColorTrans
  ],
  [
    //13 GAUGAIN
    [203, 67, 17, 255], //background
    [182, 100, 23, 255], //main tone dark
    [44, 100, 74, 255], //main tone mid
    [170, 100, 43, 255], //main tone light
    [200, 91, 38, 255], //main tone shadow
    [54, 81, 78, 255], //contrast highlight 2, 71, 34, 255
    [222, 63, 13, 255], //contrast lowlight
    [222, 63, 13, 255], //line dark
    [35, 97, 62, 150], //line light
    [16, 65, 44, 255], //water  //[247, 65, 32, 255], //water
    [173, 93, 34, 255], //main tone light2
    [192, 90, 64, 255], //main tone light3
    [226, 20, 25, 255], //main tone light4
    [147, 12, 35, 15], //backgroundColorTrans
  ],
  [
    //14 HOKUSAI
    [41, 19, 91, 255], //background
    [158, 8, 38, 255], //main tone dark
    [53, 8, 92, 255], //main tone mid
    [204, 66, 63, 255], //main tone light
    [207, 83, 36, 255], //main tone shadow
    [26, 34, 86, 255], //contrast highlight 2, 71, 34, 255
    [0, 0, 13, 255], //contrast lowlight
    [222, 63, 13, 255], //line dark
    [35, 0, 100, 100], //line light
    [4, 75, 86, 255], //water  //[247, 65, 32, 255], //water
    [210, 60, 71, 255], //main tone light2
    [211, 85, 34, 255], //main tone light3
    [26, 34, 86, 255], //main tone light4
    [147, 0, 35, 15], //backgroundColorTrans
  ],
  [
    //15 DIGITAL RED
    [0, 0, 0, 255], //background
    [0, 100, 100, 55], //main tone dark
    [0, 0, 0, 255], //main tone mid
    [10, 100, 100, 155], //main tone light
    [0, 100, 100, 55], //main tone shadow
    [26, 34, 86, 255], //contrast highlight 2, 71, 34, 255
    [0, 0, 0, 255], //contrast lowlight
    [0, 100, 100, 155], //line dark
    [0, 0, 0, 100], //line light
    [0, 0, 0, 255], //water  //[247, 65, 32, 255], //water
    [25, 100, 100, 55], //main tone light2
    [20, 100, 90, 55], //main tone light3
    [15, 100, 100, 55], //main tone light4
    [0, 100, 100, 15], //backgroundColorTrans
  ],
  [
    //16 DIGITAL RED AND BLUE
    [0, 0, 0, 255], //background
    [0, 100, 100, 5], //main tone dark
    [0, 0, 0, 255], //main tone mid
    [10, 100, 100, 155], //main tone light
    [0, 100, 100, 55], //main tone shadow
    [240, 100, 100, 255], //contrast highlight 2, 71, 34, 255
    [0, 0, 0, 255], //contrast lowlight
    [0, 0, 0, 255], //line dark
    [280, 0, 0, 100], //line light
    [0, 0, 0, 255], //water  //[247, 65, 32, 255], //water
    [220, 100, 100, 55], //main tone light2
    [350, 100, 90, 55], //main tone light3
    [210, 100, 100, 55], //main tone light4
    [0, 100, 100, 15], //backgroundColorTrans
  ],
  [
    //17 KANDINSKY GELATO
    [234, 38, 55, 255], //background 234, 38, 55, 255
    [231, 20, 68, 255], //main tone dark
    [8, 60, 80, 255], //main tone mid
    [354, 43, 88, 255], //main tone light 320, 4, 63, 255
    [228, 48, 47, 255], //main tone shadow
    [72, 18, 75, 255], //contrast highlight 2, 71, 34, 255
    [349, 85, 67, 255], //contrast lowlight
    [231, 50, 20, 255], //line dark
    [60, 4, 80, 155], //line light
    [216, 93, 65, 255], //water  //[247, 65, 32, 255], //water
    [29, 32, 91, 255], //main tone light2
    [33, 43, 89, 255], //main tone light3
    [6, 31, 89, 255], //main tone light4
    [0, 0, 100, 0], //backgroundColorTrans
  ],
  [
    //18 113 STARS
    [220, 55, 15, 255], //background
    [226, 18, 28, 255], //main tone dark
    [28, 61, 79, 255], //main tone mid
    [320, 4, 63, 255], //main tone light 320, 4, 63, 255
    [226, 34, 29, 255], //main tone shadow
    [10, 60, 100, 255], //contrast highlight 2, 71, 34, 255
    [226, 34, 34, 255], //contrast lowlight
    [226, 100, 20, 255], //line dark
    [50, 11, 43, 155], //line light
    [237, 28, 62, 255], //water  //[247, 65, 32, 255], //water
    [33, 22, 76, 255], //main tone light2
    [49, 9, 71, 255], //main tone light3
    [32, 25, 88, 255], //main tone light4
    [0, 100, 100, 255], //backgroundColorTrans
  ],
  [
    //19 JENNA GRIBBON
    [169, 50, 15, 255], //background
    [159, 50, 20, 255], //main tone dark
    [230, 60, 70, 255], //main tone mid
    [74, 36, 38, 155], //main tone light 320, 4, 63, 255
    [159, 50, 15, 255], //main tone shadow
    [26, 64, 86, 255], //contrast highlight 2, 71, 34, 255
    [10, 10, 100, 255], //contrast lowlight
    [52, 70, 20, 255], //line dark 230, 60, 70, 255
    [70, 38, 80, 55], //line light
    [96, 100, 18, 155], //water  //[247, 65, 32, 255], //water
    [124, 49, 34, 155], //main tone light2 10, 60, 100, 255
    [95, 90, 30, 255], //main tone light3
    [10, 60, 100, 255], //main tone light4
    [0, 100, 100, 255], //backgroundColorTrans
  ],
  [
    //20 MIRO YELLOW
    [50, 99, 94, 255], //background
    [52, 85, 99, 255], //main tone dark
    [328, 95, 8, 255], //main tone mid
    [228, 54, 66, 255], //main tone light 320, 4, 63, 255
    [50, 99, 85, 255], //main tone shadow
    [106, 98, 56, 255], //contrast highlight 2, 71, 34, 255
    [46, 8, 82, 255], //contrast lowlight
    [0, 0, 0, 255], //line dark 230, 60, 70, 255
    [0, 0, 0, 55], //line light
    [3, 76, 79, 255], //water  //[247, 65, 32, 255], //water
    [228, 54, 76, 255], //main tone light2 10, 60, 100, 255
    [228, 74, 66, 255], //main tone light3
    [228, 34, 96, 255], //main tone light4
    [0, 100, 100, 255], //backgroundColorTrans
  ],
  [
    //21 MIRO MULTI
    [41, 25, 98, 255], //background
    [41, 30, 92, 255], //main tone dark
    [18, 98, 100, 255], //main tone mid
    [41, 55, 98, 255], //main tone light 320, 4, 63, 255
    [41, 35, 78, 255], //main tone shadow
    [133, 93, 76, 255], //contrast highlight 133, 93, 76, 255
    [194, 99, 59, 255], //contrast lowlight
    [0, 0, 0, 255], //line dark 230, 60, 70, 255
    [18, 98, 100, 255], //line light
    [0, 0, 0, 255], //water  //[247, 65, 32, 255], //water
    [41, 45, 98, 255], //main tone light2 10, 60, 100, 255
    [41, 50, 98, 255], //main tone light3
    [41, 40, 98, 255], //main tone light4
    [0, 100, 100, 255], //backgroundColorTrans
  ],
  [
    //22 okeefe
    [5, 68, 60, 255], //background
    [13, 59, 73, 255], //main tone dark
    [214, 93, 64, 255], //main tone mid
    [211, 96, 37, 255], //main tone light 320, 4, 63, 255
    [8, 80, 53, 255], //main tone shadow
    [6, 78, 53, 255], //contrast highlight 133, 93, 76, 255
    [140, 1, 91, 255], //contrast lowlight
    [0, 0, 0, 255], //line dark 230, 60, 70, 255
    [199, 40, 79, 155], //line light
    [127, 47, 34, 255], //water  //[247, 65, 32, 255], //water
    [220, 96, 47, 255], //main tone light2 10, 60, 100, 255
    [211, 86, 67, 255], //main tone light3
    [211, 96, 55, 255], //main tone light4
    [0, 100, 100, 255], //backgroundColorTrans
  ],
  [
    //23 sunrise
    [33, 9, 88, 255], //background
    [33, 9, 98, 255], //main tone dark
    [33, 9, 88, 255], //main tone mid
    [35, 0, 100, 255], //main tone light 320, 4, 63, 255
    [33, 9, 85, 255], //main tone shadow
    [60, 100, 100, 255], //contrast highlight 2, 37, 83, 255
    [0, 30, 80, 255], //contrast lowlight 201, 100, 96, 255
    [211, 100, 0, 255], //line dark 230, 60, 70, 255
    [0, 50, 50, 205], //line light
    [0, 99, 100, 255], //water  //[247, 65, 32, 255], //water
    [50, 55, 90, 255], //main tone light2 10, 60, 100, 255
    [215, 15, 100, 255], //main tone light3
    [15, 5, 100, 255], //main tone light4
    [0, 100, 100, 255], //backgroundColorTrans
  ],
  [
    //24 NUX
    [223, 90, 25, 255], //background
    [223, 100, 30, 255], //main tone dark
    [65, 70, 90, 255], //main tone mid
    [10, 20, 80, 255], //main tone light
    [220, 50, 50, 255], //main tone shadow
    [240, 100, 50, 255], //contrast highlight 2, 71, 34, 255
    [10, 20, 100, 255], //contrast lowlight
    [70, 90, 45, 255], //line dark
    [0, 50, 100, 155], //line light
    [240, 100, 50, 255], //water  //[247, 65, 32, 255], //water
    [20, 40, 90, 255], //main tone light2
    [10, 100, 100, 255], //main tone light3 240, 100, 50, 255
    [20, 50, 80, 255], //main tone light4
    [0, 100, 100, 15], //backgroundColorTrans
  ],
  [
    //25 night
    [250, 40, 10, 255], //background
    [264, 0, 0, 255], //main tone dark
    [34, 0, 45, 255], //main tone mid
    [6, 0, 22, 255], //main tone light
    [220, 50, 15, 255], //main tone shadow
    [0, 0, 96, 255], //contrast highlight 2, 71, 34, 255
    [0, 40, 53, 255], //contrast lowlight
    [0, 0, 0, 255], //line dark
    [12, 0, 14, 255], //line light
    [230, 100, 15, 255], //water  //[247, 65, 32, 255], //water
    [6, 0, 28, 255], //main tone light2
    [6, 0, 15, 255], //main tone light3
    [6, 0, 25, 255], //main tone light4
    [0, 0, 100, 15], //backgroundColorTrans
  ],
  [
    //26 mono
    [50, 100, 5, 255], //background
    [242, 29, 0, 255], //main tone dark
    [40, 15, 90, 255], //main tone mid
    [40, 15, 100, 255], //main tone light
    [256, 18, 15, 255], //main tone shadow
    [15, 100, 100, 255], //contrast highlight 2, 71, 34, 255
    [320, 10, 0, 255], //contrast lowlight
    [335, 84, 5, 255], //line dark
    [337, 0, 100, 50], //line light
    [263, 50, 0, 255], //water  //[247, 65, 32, 255], //water
    [10, 15, 0, 255], //main tone light2
    [10, 15, 0, 255], //main tone light3
    [10, 15, 0, 255], //main tone light4
    [0, 0, 100, 15], //backgroundColorTrans
  ],
  [
    //27 Femme et Oiseaux
    [220, 68, 44, 255], //background
    [217, 42, 39, 255], //main tone dark
    [0, 89, 80, 255], //main tone mid
    [22, 39, 53, 255], //main tone light
    [225, 52, 40, 255], //main tone shadow
    [52, 70, 93, 255], //contrast highlight 2, 71, 34, 255
    [0, 0, 0, 255], //contrast lowlight
    [0, 0, 0, 255], //line dark 177, 26, 54, 255
    [170, 25, 39, 155], //line light
    [232, 74, 62, 255], //water  //[247, 65, 32, 255], //water
    [45, 49, 35, 255], //main tone light2
    [43, 11, 52, 255], //main tone light3
    [45, 36, 66, 255], //main tone light4
    [0, 0, 100, 15], //backgroundColorTrans
  ],
  [
    //28 Group of characters in the forest
    [356, 64, 46, 255], //background
    [11, 73, 68, 255], //main tone dark
    [0, 89, 80, 255], //main tone mid
    [31, 90, 84, 255], //main tone light
    [0, 56, 33, 255], //main tone shadow
    [52, 70, 93, 255], //contrast highlight 2, 71, 34, 255
    [0, 0, 0, 255], //contrast lowlight
    [0, 0, 0, 255], //line dark 177, 26, 54, 255
    [228, 45, 21, 155], //line light
    [206, 3, 96, 255], //water  //[247, 65, 32, 255], //water
    [92, 36, 45, 255], //main tone light2
    [230, 39, 80, 255], //main tone light3
    [28, 91, 65, 255], //main tone light4
    [0, 0, 100, 15], //backgroundColorTrans
  ],
  [
    //29 Disquieting Muses
    [168, 81, 31, 255], //background
    [13, 74, 58, 255], //main tone dark
    [13, 79, 95, 255], //main tone mid
    [26, 48, 76, 255], //main tone light
    [168, 92, 21, 255], //main tone shadow
    [76, 58, 82, 255], //contrast highlight 2, 71, 34, 255
    [150, 25, 20, 255], //contrast lowlight
    [150, 25, 10, 255], //line dark 177, 26, 54, 255
    [228, 45, 21, 155], //line light
    [192, 99, 49, 255], //water  //[247, 65, 32, 255], //water
    [26, 65, 48, 255], //main tone light2
    [164, 98, 52, 255], //main tone light3
    [42, 85, 94, 255], //main tone light4
    [0, 0, 100, 15], //backgroundColorTrans
  ],
  [
    //30 Fish Magic
    [128, 33, 19, 255], //background
    [88, 30, 44, 255], //main tone dark
    [29, 76, 82, 255], //main tone mid
    [331, 29, 73, 255], //main tone light
    [101, 56, 33, 255], //main tone shadow
    [8, 83, 82, 255], //contrast highlight 2, 71, 34, 255
    [150, 25, 20, 255], //contrast lowlight
    [142, 42, 15, 255], //line dark 177, 26, 54, 255
    [165, 9, 0, 155], //line light
    [22, 96, 72, 255], //water  //[247, 65, 32, 255], //water
    [43, 70, 83, 255], //main tone light2
    [49, 66, 44, 255], //main tone light3
    [220, 66, 49, 255], //main tone light4
    [0, 0, 100, 15], //backgroundColorTrans
  ],
  [
    //31 Rotring
    [43, 10, 85, 255], //background 42, 100, 91, 255
    [43, 10, 85, 255], //main tone dark
    [43, 10, 85, 255], //main tone mid
    [43, 15, 0, 255], //main tone light
    [33, 19, 70, 255], //main tone shadow
    [35, 83, 100, 255], //contrast highlight 150, 25, 20, 255
    [220, 0, 0, 255], //contrast lowlight
    [43, 10, 0, 255], //line dark 177, 26, 54, 255
    [43, 10, 55, 0], //line light
    [43, 10, 85, 255], //water  //[108, 50, 5, 255], //water
    [43, 10, 85, 255], //main tone light2
    [43, 10, 85, 255], //main tone light3
    [43, 10, 85, 255], //main tone light4
    [0, 0, 100, 15], //backgroundColorTrans
  ],
  [
    //32 blackLight green VIAL
    [0, 0, 0, 255], //background
    [190, 100, 50, 55], //main tone dark
    [100, 100, 100, 55], //main tone mid
    [120, 100, 20, 195], //main tone light
    [80, 100, 50, 55], //main tone shadow
    [120, 100, 100, 255], //contrast highlight 2, 71, 34, 255
    [0, 0, 0, 255], //contrast lowlight
    [100, 100, 80, 155], //line dark
    [0, 0, 0, 100], //line light
    [140, 100, 0, 255], //water  //[247, 65, 32, 255], //water
    [85, 100, 100, 55], //main tone light2
    [80, 100, 90, 55], //main tone light3
    [75, 100, 100, 55], //main tone light4
    [60, 100, 100, 15], //backgroundColorTrans
  ],
  [
    //33 blackLight moon
    [0, 0, 0, 255], //background
    [20, 20, 20, 55], //main tone dark
    [85, 10, 100, 55], //main tone mid 220, 10, 100, 55
    [40, 10, 100, 155], //main tone light
    [220, 10, 10, 255], //main tone shadow
    [220, 30, 100, 255], //contrast highlight 2, 71, 34, 255
    [0, 0, 0, 55], //contrast lowlight
    [220, 10, 100, 155], //line dark
    [0, 0, 100, 50], //line light
    [220, 10, 100, 255], //water  //[247, 65, 32, 255], //water
    [220, 10, 100, 55], //main tone light2
    [80, 10, 90, 55], //main tone light3
    [75, 10, 100, 55], //main tone light4
    [60, 100, 100, 15], //backgroundColorTrans
  ],
  [
    //34 blackLight web
    [220, 100, 10, 255], //background
    [240, 100, 100, 55], //main tone dark
    [240, 100, 100, 255], //main tone mid 220, 10, 100, 55
    [240, 100, 100, 155], //main tone light
    [240, 100, 100, 55], //main tone shadow
    [220, 100, 100, 255], //contrast highlight 2, 71, 34, 255
    [0, 0, 0, 55], //contrast lowlight
    [240, 100, 10, 255], //line dark
    [240, 100, 100, 255], //line light
    [240, 100, 100, 255], //water  //[247, 65, 32, 255], //water
    [260, 100, 100, 55], //main tone light2
    [240, 100, 100, 55], //main tone light3
    [240, 100, 100, 55], //main tone light4
    [60, 100, 100, 15], //backgroundColorTrans
  ],
  [
    //35 backlight highlighter
    [0, 0, 0, 255], //background
    [50, 100, 100, 10], //main tone dark
    [0, 0, 0, 255], //main tone mid
    [40, 100, 100, 100], //main tone light
    [355, 100, 100, 100], //main tone shadow
    [60, 100, 86, 255], //contrast highlight 2, 71, 34, 255
    [0, 0, 0, 255], //contrast lowlight
    [40, 100, 100, 205], //line dark
    [40, 100, 100, 55], //line light
    [350, 100, 100, 255], //water  //[247, 65, 32, 255], //water
    [40, 100, 100, 55], //main tone light2
    [40, 100, 90, 50], //main tone light3
    [40, 100, 100, 50], //main tone light4
    [0, 100, 100, 15], //backgroundColorTrans
  ],
]

let colorPaletteNum
let colorPalleteName
let materialType

//ascii
//CARD TEXT

let tileText01 =
  'L | + + = L L L = + = | L L + L | + + = L L L = + = | L L + L | + + = L L L = + = | L L + L L L | + + = L L L = + = | L L + L L + | L L L | + + = L L L = + = | L L + L L + | L L + | L L L - + L L L L L L L | + + = L L L = + = | L L + L L + | L L L - + L L L L L L L | + + = L L L = + = | L L + L L + | L L L - + L L L L L L L | + + = L L L = + = | L L + | L L L - + L L L L L L L | + + = L L L = + = | L L + | L L L - + L L L L L L L | + + = L L L = + = | L L + | L L L - + L L L L L L L | + + = L L L = + = |  + = L L L = + = | L L + | L L L - + L L L = + = | L L + | L L L - + L L = + = | L L + | L L L - + L L L | + + = L L L = + = | L L + L | + + = L L L = + = | L L + L | + + = L L L = + = | L L + L L L | + + = L L L = + = | L L + L L + | L L L | + + = L L L = + = | L L + L L + | L L + | L L L - + L L L L L L L | + + = L L L = + = | L L + L L + | L L L - + L L L L L L L | + + = L L L = + = | L L + L L + | L L L - + L L L L L L L | + + = L L L = + = | L L + | L L L - + L L L L L L L | + + = L L L = + = | L L + | L L L - + L L L L L L L | + + = L L L = + = | L L + | L L L - + L L L L L L L | + + = L L L = + = |  + = L L L = + = | L L + | L L L - + L L L = + = | L L + | L L L - + L L = + = | L L + | L L L - + L L + | L L L - + L L = + = | L L + | L L L - + L L'
let tileText02 =
  'o o o o o o o o o o o o o 8 o o o - o + o o o o o o + o o o o o 8 - + o + o o o o o + = o o 8 o + o + = o o o 8 o 8 o o o - o + o o o o o o + o o o o o 8 - + o + o o + o o + = o o 8 o + o + = o o o 8 o - o + o o o o o o + o o o o o 8 - + o + o o o o o + = o o 8 o + o + = o o o 8 o 8 o o o - o + o o o o o o + o o o o o 8 - + o + o o + o o + = o o 8 o + o + = - o + o o o o o o + o o o o o 8 - + o + o o o o o + = o o 8 o + o + = o o o 8 o 8 o o o - o + o o o o o o + o o o o o 8 - + o + o o + o o + = o o 8 o + o + = - o + o o o o o o + o o o o o 8 - + o o o + o o o o o 8 - + o o o + o o o o o 8 - + o o o o o o o o o o o o o o o o o o o 8 o o o - o + o o o o o o + o o o o o 8 - + o + o o o o o + = o o 8 o + o + = o o o 8 o 8 o o o - o + o o o o o o + o o o o o 8 - + o + o o + o o + = o o 8 o + o + = o o o 8 o - o + o o o o o o + o o o o o 8 - + o + o o o o o + = o o 8 o + o + = o o o 8 o 8 o o o - o + o o o o o o + o o o o o 8 - + o + o o + o o + = o o 8 o + o + = - o + o o o o o o + o o o o o 8 - + o + o o o o o + = o o 8 o + o + = o o o 8 o 8 o o o - o + o o o o o o + o o o o o 8 - + o + o o + o o + = o o 8 o + o + = - o + o o o o o o + o o o o o 8 - + o o o + o o o o o 8 - + o o o + o o o o o 8 - + o o o o o o'
//let tileText03 = '/ / / / | / / / / / /  / / - / / / / o /  / / //  - / / / / / | / / / / / /  / / - / / / / o /  / / //  - / / / / / | / / / / / /  / / - / / / / o /  / / //  - / / / / / | / / / / / /  / / - / / / / o /  / / //  - / / o / / / / // / o / / / / // / / //  / / / / /// / / / / / / /  / /  / /  //  /  / / / / / /  / / / / / / / /  /// / / / / / / / / / / / /  / / //  / / / / / / / / / /  / / / / /  / / / / / / /  // / / / / / / / / /   // / / // / / / / / / / / / / / /  / / / / / / /  / / //  / / / / / / // /  / / o / / // / / //  / / / / /// / / / o / / / /  / /  / /  //  /  / / / / / /  / / / / / / / /  /// / / / / / / / / / / / /  / / //  / / / / / / / / / /  / / / / /  / o / / / / / /  // / / o / / / / / / /   // / o / // / / / / / / / / / / / /  / / / / / / /  / / o  //  / / / / /  o / // / /'
let tileText03 =
  'H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H'

let roomArray = [
  room01_A,
  room01_B,
  room01_C,
  room01_D,
  room01_E,
  room01_F,
  room01_G,
  room01_H,
  room02_A,
  room02_B,
  room02_C,
  room02_D,
  room02_E,
  room02_F,
  room02_G,
  room02_H,
  room03_A,
  room03_B,
  room03_C,
  room03_D,
  room03_E,
  room03_F,
  room03_G,
  room03_H,
  room04_A,
  room04_B,
  room04_C,
  room04_D,
  room04_E,
  room04_F,
  room04_G,
  room04_H,
  room05_A,
  room05_B,
  room05_C,
  room05_D,
  room05_E,
  room06_A,
  room06_B,
  room06_C,
  room07_A,
  room07_B,
  room07_C,
  room07_D,
  room08_A,
  room08_B,
  room01_A,
]
let shuffledRoomArray

let textColor = [0, 0, 100, 150]
//let backgroundColor = [0, 0, 20, 255]

let angle = 0

//naming testing made the below visible
// function calculateFeatures(tokenData) {
//   const hash = tokenData.hash
//   const invocation = Number(tokenData.tokenId) % 1_000_000
// }
let grave

function setup() {
  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER)
  imageMode(CENTER)
  colorMode(HSB, 360, 100, 100, 255)
  textAlign(CENTER, CENTER)
  textAlign(CENTER, CENTER)
  //noLoop()

  //explode circles
  // for (let i = 0; i < numExplodeCircles; i++) {
  //   let angle = random(TWO_PI); // Random angle in radians
  //   let speed = random(6,6); // Random speed
  //   explodeCircles.push(new explode(0, 0, angle, speed));
  // }

  ghostPosition = { x: 0, y: height }

  ghostEasing = random(0.01, 0.1)
  ghostEasing = 0.01
  if (ghostEasing > 0.05) {
    ghostSpeedTrait = 'rapido'
  } else ghostSpeedTrait = 'largo'

  ghostAlpha = 100
  ghostSaturation = 100

  //explosion Size
  Maximosto = 12
  //Moderato = 5
  Modesto = 1
  explosionSizeGenerator = random(1)
  explosionSizeGenerator = 8
  if (explosionSizeGenerator > 0.5) {
    numExplodeCircles = Maximosto
    explosionSize = 'maximosto'
  } else if (explosionSizeGenerator <= 0.5) {
    numExplodeCircles = Modesto
    explosionSize = 'modesto'
  }

  //room scaling
multiScale = random() < 0.8

  if (multiScale) {
    lowerScale = 0.6
    upperScale = 1
  } else lowerScale = 0.8
  upperScale = 1

  room01Scale = random(lowerScale, upperScale)
  room02Scale = random(lowerScale, upperScale)
  room03Scale = random(lowerScale, upperScale)
  room04Scale = random(lowerScale, upperScale)
  room05Scale = random(lowerScale, upperScale)
  room06Scale = random(lowerScale, upperScale)
  room07Scale = random(lowerScale, upperScale)
  room08Scale = random(lowerScale, upperScale)
  room09Scale = random(lowerScale, upperScale)
  room10Scale = random(lowerScale, upperScale)
  room11Scale = random(lowerScale, upperScale)
  room12Scale = random(lowerScale, upperScale)

  randomExtras = random(0, 1) //for optional extras in each room
  randomConnectorA = random(0, 12)
  randomConnectorB = random(0, 12)

  grave = random() < 0.5

  if (grave === true) {
    cryptPresence = 'crypt'
  } else cryptPresence = 'no crypt'

  //random at mint check
  //randomSeed(73)

  //choose material
  materialTypeGenerator = random(0, 1)
  materialRarity = 0.92
  if (materialTypeGenerator > materialRarity) {
    materialType = 'backLight'
  } else materialType = 'solid'



  //choose palette
  if (materialType === 'solid') {
    colorPalleteName = random([
      'oysterCove',
      'greatGateOfKiev',
      'porcelain',
      'feelInfinite',
      'K-3',
      'trace',
      'gravity',
      'apricot',
      'mountainsAtCollioure',
      'dance',
      'sunriseConstellations',
      'tasmanSea',
      'hillStreet',
      'whereDoWeComeFrom...',
      'theGreatWave',
      'leaningSemicircle',
      'antenna',
      'hey!UpHere!',
      'goldOfTheAzure',
      'ciphersAndConstellations',
      'blackMesaLandscape',
      'sunrise',
      'NUX',
      'night',
      'mono',
      'femmeEtOiseaux',
      'groupOfCharactersInTheForest',
      'disquietingMuses',
      'fishMagic',
      'GS_Rotring',
    ])
  } else if (materialType === 'backLight') {
    colorPalleteName = random([
      'purgatory',
      'heat',
      'vial',
      'lunar',
      'web',
      'highLighter',
    ])
  }

  colorPalleteName = 'web'

  if (colorPalleteName === 'oysterCove') {
    colorPaletteNum = 0
  } else if (colorPalleteName === 'greatGateOfKiev') {
    colorPaletteNum = 1
  } else if (colorPalleteName === 'porcelain') {
    colorPaletteNum = 2
  } else if (colorPalleteName === 'feelInfinite') {
    colorPaletteNum = 3
  } else if (colorPalleteName === 'K-3') {
    colorPaletteNum = 4
  } else if (colorPalleteName === 'trace') {
    colorPaletteNum = 5
  } else if (colorPalleteName === 'gravity') {
    colorPaletteNum = 6
  } else if (colorPalleteName === 'apricot') {
    colorPaletteNum = 7
  } else if (colorPalleteName === 'mountainsAtCollioure') {
    colorPaletteNum = 8
  } else if (colorPalleteName === 'dance') {
    colorPaletteNum = 9
  } else if (colorPalleteName === 'sunriseConstellations') {
    colorPaletteNum = 10
  } else if (colorPalleteName === 'tasmanSea') {
    colorPaletteNum = 11
  } else if (colorPalleteName === 'hillStreet') {
    colorPaletteNum = 12
  } else if (colorPalleteName === 'whereDoWeComeFrom...') {
    colorPaletteNum = 13
  } else if (colorPalleteName === 'theGreatWave') {
    colorPaletteNum = 14
  } else if (colorPalleteName === 'purgatory') {
    colorPaletteNum = 15
  } else if (colorPalleteName === 'heat') {
    colorPaletteNum = 16
  } else if (colorPalleteName === 'leaningSemicircle') {
    colorPaletteNum = 17
  } else if (colorPalleteName === 'antenna') {
    colorPaletteNum = 18
  } else if (colorPalleteName === 'hey!UpHere!') {
    colorPaletteNum = 19
  } else if (colorPalleteName === 'goldOfTheAzure') {
    colorPaletteNum = 20
  } else if (colorPalleteName === 'ciphersAndConstellations') {
    colorPaletteNum = 21
  } else if (colorPalleteName === 'blackMesaLandscape') {
    colorPaletteNum = 22
  } else if (colorPalleteName === 'sunrise') {
    colorPaletteNum = 23
  } else if (colorPalleteName === 'NUX') {
    colorPaletteNum = 24
  } else if (colorPalleteName === 'night') {
    colorPaletteNum = 25
  } else if (colorPalleteName === 'mono') {
    colorPaletteNum = 26
  } else if (colorPalleteName === 'femmeEtOiseaux') {
    colorPaletteNum = 27
  } else if (colorPalleteName === 'groupOfCharactersInTheForest') {
    colorPaletteNum = 28
  } else if (colorPalleteName === 'disquietingMuses') {
    colorPaletteNum = 29
  } else if (colorPalleteName === 'fishMagic') {
    colorPaletteNum = 30
  } else if (colorPalleteName === 'GS_Rotring') {
    colorPaletteNum = 31
  } else if (colorPalleteName === 'vial') {
    colorPaletteNum = 32
  } else if (colorPalleteName === 'lunar') {
    colorPaletteNum = 33
  } else if (colorPalleteName === 'web') {
    colorPaletteNum = 34
  } else if (colorPalleteName === 'highLighter') {
    colorPaletteNum = 35
  } else {
    colorPaletteNum = 0
  }

  //colorPaletteNum = Math.floor(random() * colorPalette.length)
  //test color
  //colorPaletteNum = 35
  //materialType = 'backLight'

  //colorPalleteName = 'night'

  backgroundColor = colorPalette[colorPaletteNum][0]
  fillDark = colorPalette[colorPaletteNum][1]
  fillMid = colorPalette[colorPaletteNum][2]
  fillLight = colorPalette[colorPaletteNum][3]
  fillShadow = colorPalette[colorPaletteNum][4]
  contrastHighlight = colorPalette[colorPaletteNum][5]
  contrastLowlight = colorPalette[colorPaletteNum][6]
  lineDark = colorPalette[colorPaletteNum][7]
  lineLight = colorPalette[colorPaletteNum][8]
  fillWater = colorPalette[colorPaletteNum][9]
  fillLight2 = colorPalette[colorPaletteNum][10]
  fillLight3 = colorPalette[colorPaletteNum][11]
  fillLight4 = colorPalette[colorPaletteNum][12]
  backgroundColorTrans = colorPalette[colorPaletteNum][13]

  // if (night) {
  //   //colorPaletteNum = 4
  //   backgroundColor = [0, 0, 10, 255]
  //   fillDark = [264, 0, 0, 255]
  //   fillMid = [34, 0, 45, 255]
  //   fillLight = [6, 0, 22, 255]
  //   fillShadow = [220, 50, 15, 255]
  //   contrastHighlight = [0, 0, 96, 255]
  //   contrastLowlight = [0, 20, 43, 255]
  //   lineDark = [0, 0, 0, 255]
  //   lineLight = [12, 0, 14, 255]
  //   fillWater = [230, 100, 15, 255]
  //   fillLight2 = [6, 0, 22, 255]
  //   fillLight3 = [6, 0, 22, 255]
  //   fillLight4 = [6, 0, 22, 255]
  //   backgroundColorTrans = [0, 0, 10, 15]
  // }

  background(backgroundColor)

  //color by features script
  // if (palette === "arctic"){
  //   mainToneDark = (160, 70, 42, 255) //main tone dark
  //   mainToneMid = (70, 50, 47, 255) //main tone mid
  //   mainToneMid50 = (70, 50, 57, 255) //main tone mid 50%
  //   mainToneLight = (27, 17, 65, 255) //main tone light
  //   mainToneShadow = (192, 96, 51, 255) //main tone shadow
  //   contrastHighlight = (64, 100, 100, 255) //contrast highlight
  //   contrastLowlight = (230, 83, 57, 255) //contrast lowlight
  //   fillLowlight01 = (230, 83, 77, 255) //fill lowlight1
  //   fillLowlight02 = (220, 83, 77, 255) //fill lowlight2
  // }

  //color data for each box
  //colorPaletteBox01 = Math.floor(random() * (colorPalette.length - 1))

  //random rooms /////TURN OFF FOR MINT
  //shuffledRoomArray = shuffleArray(roomArray)

  //bugs
  grid01BugX = random(-8, 8)
  grid02BugX = random(-8, 8)
  grid03BugX = random(-8, 8)
  grid04BugX = random(-8, 8)
  grid05BugX = random(-8, 8)
  grid06BugX = random(-8, 8)
  grid07BugX = random(-8, 8)
  grid08BugX = random(-8, 8)
  grid09BugX = random(-8, 8)
  grid10BugX = random(-8, 8)
  grid11BugX = random(-8, 8)
  grid12BugX = random(-8, 8)
  grid01BugY = random(-8, 8)
  grid02BugY = random(-8, 8)
  grid03BugY = random(-8, 8)
  grid04BugY = random(-8, 8)
  grid05BugY = random(-8, 8)
  grid06BugY = random(-8, 8)
  grid07BugY = random(-8, 8)
  grid08BugY = random(-8, 8)
  grid09BugY = random(-8, 8)
  grid10BugY = random(-8, 8)
  grid11BugY = random(-8, 8)
  grid12BugY = random(-8, 8)

  //random boxes
  //hl.randomElement randomInt
  grid01Room = roomArray[Math.floor(random() * (roomArray.length - 1))]
  grid02Room = roomArray[Math.floor(random() * (roomArray.length - 1))]
  grid03Room = roomArray[Math.floor(random() * (roomArray.length - 1))]
  grid04Room = roomArray[Math.floor(random() * (roomArray.length - 1))]
  grid05Room = roomArray[Math.floor(random() * (roomArray.length - 1))]
  grid06Room = roomArray[Math.floor(random() * (roomArray.length - 1))]
  grid07Room = roomArray[Math.floor(random() * (roomArray.length - 1))]
  grid08Room = roomArray[Math.floor(random() * (roomArray.length - 1))]
  grid09Room = roomArray[Math.floor(random() * (roomArray.length - 1))]
  grid10Room = roomArray[Math.floor(random() * (roomArray.length - 1))]
  grid11Room = roomArray[Math.floor(random() * (roomArray.length - 1))]
  grid12Room = roomArray[Math.floor(random() * (roomArray.length - 1))]

  circlePosition = {
    x: 0,
    y: 0,
  }

  numberCandles = random(3, 12)

  //graphics lineweights etc
  thick = 0.5
  thin = 0.2
  micro = 0.1
  tileSize = 1.1

  squareConnectorSize = 4
  projectName = 'UNICURSE'

  // Set traits ///the names can't be variables!!
  let traits = {
    'Material Type': materialType,
    'Color Palette': colorPalleteName,
    'Ghost Speed': ghostSpeedTrait,
    'Basement Crypt': cryptPresence,
    'Bug Collision': explosionSize,
  }


  /////iteration
  //hl.tx.mintSize
  //mintSize: String, // The number of tokens currently being minted (1 if not batch mint)
  //mintIteration: String, // The iteration of token being rendered within the current mint

  //noLoop()
} ///end of setup

//////////////////////////////////////////////////////////

function draw() {
  /////////////////////////////////////////////////////////

  // Translate the view to center point 01
  // Scale the view based on zoom level

  //randomSeed(73)

  //////////////////////units
  if (height <= width) {
    unit = height / 100
  } else unit = width / 100
  //////////////////////canvasSetups
  //canvas space
  canvasLeft = unit * 10
  canvasTop = unit * 10
  canvasRight = width - unit * 10
  canvasBottom = height - unit * 10
  canvasWidth = canvasRight - canvasLeft
  canvasHeight = canvasBottom - canvasTop

  background(backgroundColor)

  //setup 12 grids
  if (width >= height * 0.1 && width < height * 0.9) {
    gridWidth = canvasWidth / 3
    gridHeight = canvasHeight / 4
    grid01 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid02 = {
      x: canvasLeft + gridWidth * 1.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid03 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid04 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 1.5,
    }
    grid05 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid06 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 3.5,
    }
    grid07 = {
      x: canvasLeft + gridWidth * 1.5,
      y: canvasTop + gridHeight * 3.5,
    }
    grid08 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 3.5,
    }
    grid09 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid10 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 1.5,
    }
    grid11 = {
      x: canvasLeft + gridWidth * 1.5,
      y: canvasTop + gridHeight * 1.5,
    }
    grid12 = {
      x: canvasLeft + gridWidth * 1.5,
      y: canvasTop + gridHeight * 2.5,
    }
  }
  if (width >= height * 0.9 && width < height * 1.2) {
    gridWidth = canvasWidth / 4
    gridHeight = canvasHeight / 3
    grid01 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid02 = {
      x: canvasLeft + gridWidth * 1.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid03 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid04 = {
      x: canvasLeft + gridWidth * 3.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid05 = {
      x: canvasLeft + gridWidth * 3.5,
      y: canvasTop + gridHeight * 1.5,
    }
    grid06 = {
      x: canvasLeft + gridWidth * 3.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid07 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid08 = {
      x: canvasLeft + gridWidth * 1.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid09 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid10 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 1.5,
    }
    grid11 = {
      x: canvasLeft + gridWidth * 1.5,
      y: canvasTop + gridHeight * 1.5,
    }
    grid12 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 1.5,
    }
  }
  if (width >= height * 1.2 && width < height * 1.3) {
    gridWidth = canvasWidth / 5
    gridHeight = canvasHeight / 3
    grid01 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid02 = {
      x: canvasLeft + gridWidth * 1.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid03 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid04 = {
      x: canvasLeft + gridWidth * 3.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid05 = {
      x: canvasLeft + gridWidth * 4.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid06 = {
      x: canvasLeft + gridWidth * 4.5,
      y: canvasTop + gridHeight * 1.5,
    }
    grid07 = {
      x: canvasLeft + gridWidth * 4.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid08 = {
      x: canvasLeft + gridWidth * 3.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid09 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid10 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid11 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 1.5,
    }
    grid12 = {
      x: canvasLeft + gridWidth * 1.5,
      y: canvasTop + gridHeight * 1.5,
    }
  }
  if (width >= height * 1.3 && width < height * 1.4) {
    gridWidth = canvasWidth / 5
    gridHeight = canvasHeight / 3
    grid01 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid02 = {
      x: canvasLeft + gridWidth * 1.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid03 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid04 = {
      x: canvasLeft + gridWidth * 3.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid05 = {
      x: canvasLeft + gridWidth * 4.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid06 = {
      x: canvasLeft + gridWidth * 4.5,
      y: canvasTop + gridHeight * 1.5,
    }
    grid07 = {
      x: canvasLeft + gridWidth * 4.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid08 = {
      x: canvasLeft + gridWidth * 3.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid09 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid10 = {
      x: canvasLeft + gridWidth * 1.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid11 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid12 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 1.5,
    }
  }
  if (width >= height * 1.4 && width < height * 1.5) {
    gridWidth = canvasWidth / 6
    gridHeight = canvasHeight / 3
    grid01 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid02 = {
      x: canvasLeft + gridWidth * 1.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid03 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid04 = {
      x: canvasLeft + gridWidth * 3.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid05 = {
      x: canvasLeft + gridWidth * 4.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid06 = {
      x: canvasLeft + gridWidth * 5.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid07 = {
      x: canvasLeft + gridWidth * 5.5,
      y: canvasTop + gridHeight * 1.5,
    }
    grid08 = {
      x: canvasLeft + gridWidth * 5.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid09 = {
      x: canvasLeft + gridWidth * 4.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid10 = {
      x: canvasLeft + gridWidth * 3.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid11 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid12 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 2.5,
    }
  }
  if (width >= height * 1.5 && width < height * 1.6) {
    gridWidth = canvasWidth / 6
    gridHeight = canvasHeight / 3
    grid01 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid02 = {
      x: canvasLeft + gridWidth * 1.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid03 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid04 = {
      x: canvasLeft + gridWidth * 3.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid05 = {
      x: canvasLeft + gridWidth * 4.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid06 = {
      x: canvasLeft + gridWidth * 5.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid07 = {
      x: canvasLeft + gridWidth * 5.5,
      y: canvasTop + gridHeight * 1.5,
    }
    grid08 = {
      x: canvasLeft + gridWidth * 5.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid09 = {
      x: canvasLeft + gridWidth * 4.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid10 = {
      x: canvasLeft + gridWidth * 3.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid11 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid12 = {
      x: canvasLeft + gridWidth * 1.5,
      y: canvasTop + gridHeight * 2.5,
    }
  }
  if (width >= height * 1.6 && width < height * 1.7) {
    gridWidth = canvasWidth / 7
    gridHeight = canvasHeight / 3
    grid01 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid02 = {
      x: canvasLeft + gridWidth * 1.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid03 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid04 = {
      x: canvasLeft + gridWidth * 3.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid05 = {
      x: canvasLeft + gridWidth * 4.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid06 = {
      x: canvasLeft + gridWidth * 5.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid07 = {
      x: canvasLeft + gridWidth * 6.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid08 = {
      x: canvasLeft + gridWidth * 6.5,
      y: canvasTop + gridHeight * 1.5,
    }
    grid09 = {
      x: canvasLeft + gridWidth * 6.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid10 = {
      x: canvasLeft + gridWidth * 5.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid11 = {
      x: canvasLeft + gridWidth * 4.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid12 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 2.5,
    }
  }
  if (width >= height * 1.7 && width < height * 1.9) {
    gridWidth = canvasWidth / 7
    gridHeight = canvasHeight / 3
    grid01 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid02 = {
      x: canvasLeft + gridWidth * 1.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid03 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid04 = {
      x: canvasLeft + gridWidth * 3.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid05 = {
      x: canvasLeft + gridWidth * 4.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid06 = {
      x: canvasLeft + gridWidth * 5.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid07 = {
      x: canvasLeft + gridWidth * 6.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid08 = {
      x: canvasLeft + gridWidth * 6.5,
      y: canvasTop + gridHeight * 1.5,
    }
    grid09 = {
      x: canvasLeft + gridWidth * 6.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid10 = {
      x: canvasLeft + gridWidth * 5.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid11 = {
      x: canvasLeft + gridWidth * 4.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid12 = {
      x: canvasLeft + gridWidth * 3.5,
      y: canvasTop + gridHeight * 2.5,
    }
  }
  if (width >= height * 1.9 && width < height * 2) {
    gridWidth = canvasWidth / 8
    gridHeight = canvasHeight / 3
    grid01 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid02 = {
      x: canvasLeft + gridWidth * 1.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid03 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid04 = {
      x: canvasLeft + gridWidth * 3.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid05 = {
      x: canvasLeft + gridWidth * 4.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid06 = {
      x: canvasLeft + gridWidth * 5.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid07 = {
      x: canvasLeft + gridWidth * 6.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid08 = {
      x: canvasLeft + gridWidth * 7.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid09 = {
      x: canvasLeft + gridWidth * 7.5,
      y: canvasTop + gridHeight * 1.5,
    }
    grid10 = {
      x: canvasLeft + gridWidth * 7.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid11 = {
      x: canvasLeft + gridWidth * 6.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid12 = {
      x: canvasLeft + gridWidth * 4.5,
      y: canvasTop + gridHeight * 2.5,
    }
  }
  if (width >= height * 2 && width < height * 2.2) {
    gridWidth = canvasWidth / 8
    gridHeight = canvasHeight / 3
    grid01 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid02 = {
      x: canvasLeft + gridWidth * 1.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid03 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid04 = {
      x: canvasLeft + gridWidth * 3.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid05 = {
      x: canvasLeft + gridWidth * 4.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid06 = {
      x: canvasLeft + gridWidth * 5.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid07 = {
      x: canvasLeft + gridWidth * 6.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid08 = {
      x: canvasLeft + gridWidth * 7.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid09 = {
      x: canvasLeft + gridWidth * 7.5,
      y: canvasTop + gridHeight * 1.5,
    }
    grid10 = {
      x: canvasLeft + gridWidth * 7.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid11 = {
      x: canvasLeft + gridWidth * 6.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid12 = {
      x: canvasLeft + gridWidth * 5.5,
      y: canvasTop + gridHeight * 2.5,
    }
  }
  if (width >= height * 2.2 && width < height * 2.4) {
    gridWidth = canvasWidth / 9
    gridHeight = canvasHeight / 3
    grid01 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid02 = {
      x: canvasLeft + gridWidth * 1.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid03 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid04 = {
      x: canvasLeft + gridWidth * 3.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid05 = {
      x: canvasLeft + gridWidth * 4.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid06 = {
      x: canvasLeft + gridWidth * 5.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid07 = {
      x: canvasLeft + gridWidth * 6.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid08 = {
      x: canvasLeft + gridWidth * 7.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid09 = {
      x: canvasLeft + gridWidth * 8.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid10 = {
      x: canvasLeft + gridWidth * 8.5,
      y: canvasTop + gridHeight * 1.5,
    }
    grid11 = {
      x: canvasLeft + gridWidth * 8.5,
      y: canvasTop + gridHeight * 2.5,
    }
    grid12 = {
      x: canvasLeft + gridWidth * 7.5,
      y: canvasTop + gridHeight * 2.5,
    }
  }
  if (width >= height * 2.4 && width < height * 2.6) {
    gridWidth = canvasWidth / 10
    gridHeight = canvasHeight / 3
    grid01 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid02 = {
      x: canvasLeft + gridWidth * 1.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid03 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid04 = {
      x: canvasLeft + gridWidth * 3.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid05 = {
      x: canvasLeft + gridWidth * 4.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid06 = {
      x: canvasLeft + gridWidth * 5.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid07 = {
      x: canvasLeft + gridWidth * 6.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid08 = {
      x: canvasLeft + gridWidth * 7.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid09 = {
      x: canvasLeft + gridWidth * 8.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid10 = {
      x: canvasLeft + gridWidth * 9.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid11 = {
      x: canvasLeft + gridWidth * 9.5,
      y: canvasTop + gridHeight * 1.5,
    }
    grid12 = {
      x: canvasLeft + gridWidth * 9.5,
      y: canvasTop + gridHeight * 2.5,
    }
  }
  if (width >= height * 2.6 && width < height * 2.8) {
    gridWidth = canvasWidth / 11
    gridHeight = canvasHeight / 3
    grid01 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid02 = {
      x: canvasLeft + gridWidth * 1.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid03 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid04 = {
      x: canvasLeft + gridWidth * 3.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid05 = {
      x: canvasLeft + gridWidth * 4.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid06 = {
      x: canvasLeft + gridWidth * 5.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid07 = {
      x: canvasLeft + gridWidth * 6.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid08 = {
      x: canvasLeft + gridWidth * 7.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid09 = {
      x: canvasLeft + gridWidth * 8.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid10 = {
      x: canvasLeft + gridWidth * 9.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid11 = {
      x: canvasLeft + gridWidth * 10.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid12 = {
      x: canvasLeft + gridWidth * 10.5,
      y: canvasTop + gridHeight * 1.5,
    }
  }
  if (width >= height * 2.8) {
    gridWidth = canvasWidth / 12
    gridHeight = canvasHeight / 3
    grid01 = {
      x: canvasLeft + gridWidth * 0.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid02 = {
      x: canvasLeft + gridWidth * 1.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid03 = {
      x: canvasLeft + gridWidth * 2.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid04 = {
      x: canvasLeft + gridWidth * 3.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid05 = {
      x: canvasLeft + gridWidth * 4.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid06 = {
      x: canvasLeft + gridWidth * 5.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid07 = {
      x: canvasLeft + gridWidth * 6.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid08 = {
      x: canvasLeft + gridWidth * 7.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid09 = {
      x: canvasLeft + gridWidth * 8.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid10 = {
      x: canvasLeft + gridWidth * 9.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid11 = {
      x: canvasLeft + gridWidth * 10.5,
      y: canvasTop + gridHeight * 0.5,
    }
    grid12 = {
      x: canvasLeft + gridWidth * 11.5,
      y: canvasTop + gridHeight * 0.5,
    }
  }

  //testing squares

  //testing connectors
  fullConnectorSize = gridWidth / 80
  fill(fillLight)
  noStroke()
  rect(
    grid01.x,
    grid01.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize,
    unit
  )
  rect(
    grid01.x,
    grid01.y,
    unit * fullConnectorSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )
  rect(
    grid02.x,
    grid02.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize,
    unit
  )
  rect(
    grid02.x,
    grid02.y,
    unit * fullConnectorSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )
  rect(
    grid03.x,
    grid03.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize,
    unit
  )
  rect(
    grid03.x,
    grid03.y,
    unit * fullConnectorSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )
  rect(
    grid04.x,
    grid04.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize,
    unit
  )
  rect(
    grid04.x,
    grid04.y,
    unit * fullConnectorSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )
  rect(
    grid05.x,
    grid05.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize,
    unit
  )
  rect(
    grid05.x,
    grid05.y,
    unit * fullConnectorSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )
  rect(
    grid06.x,
    grid06.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize,
    unit
  )
  rect(
    grid06.x,
    grid06.y,
    unit * fullConnectorSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )
  rect(
    grid07.x,
    grid07.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize,
    unit
  )
  rect(
    grid07.x,
    grid07.y,
    unit * fullConnectorSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )
  rect(
    grid08.x,
    grid08.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize,
    unit
  )
  rect(
    grid08.x,
    grid08.y,
    unit * fullConnectorSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )
  rect(
    grid09.x,
    grid09.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize,
    unit
  )
  rect(
    grid09.x,
    grid09.y,
    unit * fullConnectorSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )
  rect(
    grid10.x,
    grid10.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize,
    unit
  )
  rect(
    grid10.x,
    grid10.y,
    unit * fullConnectorSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )
  rect(
    grid11.x,
    grid11.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize,
    unit
  )
  rect(
    grid11.x,
    grid11.y,
    unit * fullConnectorSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )
  rect(
    grid12.x,
    grid12.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize,
    unit
  )
  rect(
    grid12.x,
    grid12.y,
    unit * fullConnectorSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )

  insetSize = 0.6
  fill(backgroundColor)
  noStroke()
  rect(
    grid01.x,
    grid01.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize * insetSize,
    unit
  )
  rect(
    grid01.x,
    grid01.y,
    unit * fullConnectorSize * insetSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )
  rect(
    grid02.x,
    grid02.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize * insetSize,
    unit
  )
  rect(
    grid02.x,
    grid02.y,
    unit * fullConnectorSize * insetSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )
  rect(
    grid03.x,
    grid03.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize * insetSize,
    unit
  )
  rect(
    grid03.x,
    grid03.y,
    unit * fullConnectorSize * insetSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )
  rect(
    grid04.x,
    grid04.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize * insetSize,
    unit
  )
  rect(
    grid04.x,
    grid04.y,
    unit * fullConnectorSize * insetSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )
  rect(
    grid05.x,
    grid05.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize * insetSize,
    unit
  )
  rect(
    grid05.x,
    grid05.y,
    unit * fullConnectorSize * insetSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )
  rect(
    grid06.x,
    grid06.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize * insetSize,
    unit
  )
  rect(
    grid06.x,
    grid06.y,
    unit * fullConnectorSize * insetSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )
  rect(
    grid07.x,
    grid07.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize * insetSize,
    unit
  )
  rect(
    grid07.x,
    grid07.y,
    unit * fullConnectorSize * insetSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )
  rect(
    grid08.x,
    grid08.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize * insetSize,
    unit
  )
  rect(
    grid08.x,
    grid08.y,
    unit * fullConnectorSize * insetSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )
  rect(
    grid09.x,
    grid09.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize * insetSize,
    unit
  )
  rect(
    grid09.x,
    grid09.y,
    unit * fullConnectorSize * insetSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )
  rect(
    grid10.x,
    grid10.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize * insetSize,
    unit
  )
  rect(
    grid10.x,
    grid10.y,
    unit * fullConnectorSize * insetSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )
  rect(
    grid11.x,
    grid11.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize * insetSize,
    unit
  )
  rect(
    grid11.x,
    grid11.y,
    unit * fullConnectorSize * insetSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )
  rect(
    grid12.x,
    grid12.y,
    gridWidth - unit * squareConnectorSize,
    unit * fullConnectorSize * insetSize,
    unit
  )
  rect(
    grid12.x,
    grid12.y,
    unit * fullConnectorSize * insetSize,
    gridHeight - unit * squareConnectorSize,
    unit
  )

  //this option is for all 12 rooms to be arranged randomly
  push()
  translate(grid01.x, grid01.y)
  scale(room01Scale)
  grid01Room(grid01.x, grid01.y, gridWidth * 0.95, gridHeight * 0.95)
  pop()
  push()
  translate(grid02.x, grid02.y)
  scale(room02Scale)
  grid02Room(grid02.x, grid02.y, gridWidth * 0.95, gridHeight * 0.95)
  pop()
  push()
  translate(grid03.x, grid03.y)
  scale(room03Scale)
  grid03Room(grid03.x, grid03.y, gridWidth * 0.95, gridHeight * 0.95)
  pop()
  push()
  translate(grid04.x, grid04.y)
  scale(room04Scale)
  grid04Room(grid04.x, grid04.y, gridWidth * 0.95, gridHeight * 0.95)
  pop()
  push()
  translate(grid05.x, grid05.y)
  scale(room05Scale)
  grid05Room(grid05.x, grid05.y, gridWidth * 0.95, gridHeight * 0.95)
  pop()
  push()
  translate(grid06.x, grid06.y)
  scale(room06Scale)
  grid06Room(grid06.x, grid06.y, gridWidth * 0.95, gridHeight * 0.95)
  pop()
  push()
  translate(grid07.x, grid07.y)
  scale(room07Scale)
  grid07Room(grid07.x, grid07.y, gridWidth * 0.95, gridHeight * 0.95)
  pop()
  push()
  translate(grid08.x, grid08.y)
  scale(room08Scale)
  grid08Room(grid08.x, grid08.y, gridWidth * 0.95, gridHeight * 0.95)
  pop()
  push()
  translate(grid09.x, grid09.y)
  scale(room09Scale)
  grid09Room(grid09.x, grid09.y, gridWidth * 0.95, gridHeight * 0.95)
  pop()
  push()
  translate(grid10.x, grid10.y)
  scale(room10Scale)
  grid10Room(grid10.x, grid10.y, gridWidth * 0.95, gridHeight * 0.95)
  pop()
  push()
  translate(grid11.x, grid11.y)
  scale(room11Scale)
  grid11Room(grid11.x, grid11.y, gridWidth * 0.95, gridHeight * 0.95)
  pop()
  push()
  translate(grid12.x, grid12.y)
  scale(room12Scale)
  grid12Room(grid12.x, grid12.y, gridWidth * 0.95, gridHeight * 0.95)
  pop()

  //materialType = 'backLight'

  //overlays - candles etc
  if (colorPalleteName === 'night') {
    overlayGrid01(grid01.x, grid01.y, gridWidth * 0.6, gridHeight * 0.6)
    overlayGrid02(grid02.x, grid02.y, gridWidth * 0.6, gridHeight * 0.6)
    overlayGrid03(grid03.x, grid03.y, gridWidth * 0.6, gridHeight * 0.6)
    overlayGrid04(grid04.x, grid04.y, gridWidth * 0.6, gridHeight * 0.6)
    overlayGrid05(grid05.x, grid05.y, gridWidth * 0.6, gridHeight * 0.6)
    overlayGrid06(grid06.x, grid06.y, gridWidth * 0.6, gridHeight * 0.6)
    overlayGrid07(grid07.x, grid07.y, gridWidth * 0.6, gridHeight * 0.6)
    overlayGrid08(grid08.x, grid08.y, gridWidth * 0.6, gridHeight * 0.6)
    overlayGrid09(grid09.x, grid09.y, gridWidth * 0.6, gridHeight * 0.6)
    overlayGrid10(grid10.x, grid10.y, gridWidth * 0.6, gridHeight * 0.6)
    overlayGrid11(grid11.x, grid11.y, gridWidth * 0.6, gridHeight * 0.6)
    overlayGrid12(grid12.x, grid12.y, gridWidth * 0.6, gridHeight * 0.6)
  }
  if (materialType === 'backLight') {
    overlayGrid01(grid01.x, grid01.y, gridWidth * 0.6, gridHeight * 0.6)
    overlayGrid02(grid02.x, grid02.y, gridWidth * 0.6, gridHeight * 0.6)
    overlayGrid03(grid03.x, grid03.y, gridWidth * 0.6, gridHeight * 0.6)
    overlayGrid04(grid04.x, grid04.y, gridWidth * 0.6, gridHeight * 0.6)
    overlayGrid05(grid05.x, grid05.y, gridWidth * 0.6, gridHeight * 0.6)
    overlayGrid06(grid06.x, grid06.y, gridWidth * 0.6, gridHeight * 0.6)
    overlayGrid07(grid07.x, grid07.y, gridWidth * 0.6, gridHeight * 0.6)
    overlayGrid08(grid08.x, grid08.y, gridWidth * 0.6, gridHeight * 0.6)
    overlayGrid09(grid09.x, grid09.y, gridWidth * 0.6, gridHeight * 0.6)
    overlayGrid10(grid10.x, grid10.y, gridWidth * 0.6, gridHeight * 0.6)
    overlayGrid11(grid11.x, grid11.y, gridWidth * 0.6, gridHeight * 0.6)
    overlayGrid12(grid12.x, grid12.y, gridWidth * 0.6, gridHeight * 0.6)
  }

  //Underground grids
  if (width >= height * 1.2 && width < height * 1.3) {
    gridWidth = canvasWidth / 5
    gridHeight = canvasHeight / 3
    //gravespits
    gravePit(
      canvasLeft + gridWidth * 1.5,
      canvasTop + gridHeight * 2.5,
      gridWidth,
      gridHeight
    )
    gravePit(
      canvasLeft + gridWidth * 2.5,
      canvasTop + gridHeight * 1.5,
      gridWidth,
      gridHeight
    )
    gravePit(
      canvasLeft + gridWidth * 3.5,
      canvasTop + gridHeight * 1.5,
      gridWidth,
      gridHeight
    )

    if (grave === true) {
      graveDrawing(
        canvasLeft + gridWidth * 3.5,
        canvasTop + gridHeight * 1.5,
        gridWidth * 0.95,
        gridHeight * 0.95
      )
    }
  }
  if (width >= height * 1.3 && width < height * 1.4) {
    gridWidth = canvasWidth / 5
    gridHeight = canvasHeight / 3
    //gravePits
    gravePit(
      canvasLeft + gridWidth * 1.5,
      canvasTop + gridHeight * 1.5,
      gridWidth,
      gridHeight
    )
    gravePit(
      canvasLeft + gridWidth * 2.5,
      canvasTop + gridHeight * 1.5,
      gridWidth,
      gridHeight
    )
    gravePit(
      canvasLeft + gridWidth * 3.5,
      canvasTop + gridHeight * 1.5,
      gridWidth,
      gridHeight
    )

    if (grave === true) {
      graveDrawing(
        canvasLeft + gridWidth * 3.5,
        canvasTop + gridHeight * 1.5,
        gridWidth * 0.95,
        gridHeight * 0.95
      )
    }
  }
  if (width >= height * 1.4 && width < height * 1.5) {
    gridWidth = canvasWidth / 6
    gridHeight = canvasHeight / 3
    //gravePits
    gravePit(
      canvasLeft + gridWidth * 0.5,
      canvasTop + gridHeight * 1.5,
      gridWidth,
      gridHeight
    )
    gravePit(
      canvasLeft + gridWidth * 1.5,
      canvasTop + gridHeight * 1.5,
      gridWidth,
      gridHeight
    )
    gravePit(
      canvasLeft + gridWidth * 2.5,
      canvasTop + gridHeight * 1.5,
      gridWidth,
      gridHeight
    )
    gravePit(
      canvasLeft + gridWidth * 3.5,
      canvasTop + gridHeight * 1.5,
      gridWidth,
      gridHeight
    )
    gravePit(
      canvasLeft + gridWidth * 1.5,
      canvasTop + gridHeight * 2.5,
      gridWidth,
      gridHeight
    )
    gravePit(
      canvasLeft + gridWidth * 4.5,
      canvasTop + gridHeight * 1.5,
      gridWidth,
      gridHeight
    )

    if (grave === true) {
      graveDrawing(
        canvasLeft + gridWidth * 3.5,
        canvasTop + gridHeight * 1.5,
        gridWidth * 0.95,
        gridHeight * 0.95
      )
    }
  }
  if (width >= height * 1.5 && width < height * 1.6) {
    gridWidth = canvasWidth / 6
    gridHeight = canvasHeight / 3
    //gravePits
    gravePit(
      canvasLeft + gridWidth * 0.5,
      canvasTop + gridHeight * 1.5,
      gridWidth,
      gridHeight
    )
    gravePit(
      canvasLeft + gridWidth * 1.5,
      canvasTop + gridHeight * 1.5,
      gridWidth,
      gridHeight
    )
    gravePit(
      canvasLeft + gridWidth * 2.5,
      canvasTop + gridHeight * 1.5,
      gridWidth,
      gridHeight
    )
    gravePit(
      canvasLeft + gridWidth * 3.5,
      canvasTop + gridHeight * 1.5,
      gridWidth,
      gridHeight
    )
    gravePit(
      canvasLeft + gridWidth * 0.5,
      canvasTop + gridHeight * 2.5,
      gridWidth,
      gridHeight
    )
    gravePit(
      canvasLeft + gridWidth * 4.5,
      canvasTop + gridHeight * 1.5,
      gridWidth,
      gridHeight
    )

    if (grave === true) {
      graveDrawing(
        canvasLeft + gridWidth * 3.5,
        canvasTop + gridHeight * 1.5,
        gridWidth * 0.95,
        gridHeight * 0.95
      )
    }
  }
  if (width >= height * 1.6 && width < height * 1.7) {
    gridWidth = canvasWidth / 7
    gridHeight = canvasHeight / 3
    //gravePits
    gravePit(
      canvasLeft + gridWidth * 0.5,
      canvasTop + gridHeight * 1.5,
      gridWidth,
      gridHeight
    )
    gravePit(
      canvasLeft + gridWidth * 1.5,
      canvasTop + gridHeight * 1.5,
      gridWidth,
      gridHeight
    )
    gravePit(
      canvasLeft + gridWidth * 2.5,
      canvasTop + gridHeight * 1.5,
      gridWidth,
      gridHeight
    )
    gravePit(
      canvasLeft + gridWidth * 3.5,
      canvasTop + gridHeight * 1.5,
      gridWidth,
      gridHeight
    )
    gravePit(
      canvasLeft + gridWidth * 1.5,
      canvasTop + gridHeight * 2.5,
      gridWidth,
      gridHeight
    )
    gravePit(
      canvasLeft + gridWidth * 4.5,
      canvasTop + gridHeight * 1.5,
      gridWidth,
      gridHeight
    )
    gravePit(
      canvasLeft + gridWidth * 5.5,
      canvasTop + gridHeight * 1.5,
      gridWidth,
      gridHeight
    )
    gravePit(
      canvasLeft + gridWidth * 0.5,
      canvasTop + gridHeight * 2.5,
      gridWidth,
      gridHeight
    )
    gravePit(
      canvasLeft + gridWidth * 3.5,
      canvasTop + gridHeight * 2.5,
      gridWidth,
      gridHeight
    )
    if (grave === true) {
      graveDrawing(
        canvasLeft + gridWidth * 3.5,
        canvasTop + gridHeight * 1.5,
        gridWidth * 0.95,
        gridHeight * 0.95
      )
    }
  }
  if (width >= height * 1.7 && width < height * 1.9) {
    gridWidth = canvasWidth / 7
    gridHeight = canvasHeight / 3
    //extra grids drawn
    gravePit(
      canvasLeft + gridWidth * 0.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 1.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 2.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 3.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 1.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 4.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 5.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 0.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 2.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    if (grave === true) {
      graveDrawing(
        canvasLeft + gridWidth * 3.5,
        canvasTop + gridHeight * 1.5,
        gridWidth * 0.95,
        gridHeight * 0.95
      )
    }
  }
  if (width >= height * 1.9 && width < height * 2) {
    gridWidth = canvasWidth / 8
    gridHeight = canvasHeight / 3
    //extra grids drawn
    gravePit(
      canvasLeft + gridWidth * 0.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 1.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 2.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 3.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 1.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 4.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 5.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 6.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 0.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 2.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 3.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 5.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    graveDrawing(
      canvasLeft + gridWidth * 5.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    if (grave === true) {
      graveDrawing(
        canvasLeft + gridWidth * 3.5,
        canvasTop + gridHeight * 1.5,
        gridWidth * 0.95,
        gridHeight * 0.95
      )
    }
  }
  if (width >= height * 2 && width < height * 2.2) {
    gridWidth = canvasWidth / 8
    gridHeight = canvasHeight / 3
    //extra grids drawn
    gravePit(
      canvasLeft + gridWidth * 0.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 1.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 2.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 3.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 1.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 4.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 5.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 6.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 0.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 3.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 2.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 4.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    if (grave === true) {
      graveDrawing(
        canvasLeft + gridWidth * 3.5,
        canvasTop + gridHeight * 1.5,
        gridWidth * 0.95,
        gridHeight * 0.95
      )
    }
  }
  if (width >= height * 2.2 && width < height * 2.4) {
    gridWidth = canvasWidth / 9
    gridHeight = canvasHeight / 3
    //graves
    gravePit(
      canvasLeft + gridWidth * 0.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 1.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 2.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 3.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 1.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 4.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 5.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 6.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 7.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 6.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 0.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 3.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 2.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 4.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 5.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 6.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    if (grave === true) {
      graveDrawing(
        canvasLeft + gridWidth * 3.5,
        canvasTop + gridHeight * 1.5,
        gridWidth * 0.95,
        gridHeight * 0.95
      )
    }
    if (grave === true) {
      graveDrawing(
        canvasLeft + gridWidth * 6.5,
        canvasTop + gridHeight * 2.5,
        gridWidth * 0.95,
        gridHeight * 0.95
      )
    }
  }
  if (width >= height * 2.4 && width < height * 2.6) {
    gridWidth = canvasWidth / 10
    gridHeight = canvasHeight / 3
    //gravepits
    gravePit(
      canvasLeft + gridWidth * 0.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 1.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 2.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 3.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 1.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 4.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 5.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 6.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 7.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 6.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 0.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 3.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 2.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 4.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 5.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 6.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 7.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 8.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 8.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    if (grave === true) {
      graveDrawing(
        canvasLeft + gridWidth * 3.5,
        canvasTop + gridHeight * 1.5,
        gridWidth * 0.95,
        gridHeight * 0.95
      )
    }
    if (grave === true) {
      graveDrawing(
        canvasLeft + gridWidth * 8.5,
        canvasTop + gridHeight * 2.5,
        gridWidth * 0.95,
        gridHeight * 0.95
      )
    }
  }
  if (width >= height * 2.6 && width < height * 2.8) {
    gridWidth = canvasWidth / 11
    gridHeight = canvasHeight / 3
    //gravepits
    gravePit(
      canvasLeft + gridWidth * 0.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 1.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 2.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 3.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 1.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 4.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 5.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 6.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 7.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 6.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 0.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 3.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 2.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 4.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 5.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 6.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 7.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 8.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 8.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 9.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 9.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 10.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    if (grave === true) {
      graveDrawing(
        canvasLeft + gridWidth * 3.5,
        canvasTop + gridHeight * 1.5,
        gridWidth * 0.95,
        gridHeight * 0.95
      )
    }
    if (grave === true) {
      graveDrawing(
        canvasLeft + gridWidth * 10.5,
        canvasTop + gridHeight * 2.5,
        gridWidth * 0.95,
        gridHeight * 0.95
      )
    }
  }
  if (width >= height * 2.8) {
    gridWidth = canvasWidth / 12
    gridHeight = canvasHeight / 3
    //gravepits
    gravePit(
      canvasLeft + gridWidth * 0.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 1.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 2.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 3.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 1.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 4.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 5.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 6.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 7.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 6.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 0.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 3.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 2.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 4.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 5.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 6.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 7.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 8.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 8.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 9.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 9.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 10.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 11.5,
      canvasTop + gridHeight * 2.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 10.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    gravePit(
      canvasLeft + gridWidth * 11.5,
      canvasTop + gridHeight * 1.5,
      gridWidth * 0.95,
      gridHeight * 0.95
    )
    if (grave === true) {
      graveDrawing(
        canvasLeft + gridWidth * 3.5,
        canvasTop + gridHeight * 1.5,
        gridWidth * 0.95,
        gridHeight * 0.95
      )
    }
    if (grave === true) {
      graveDrawing(
        canvasLeft + gridWidth * 11.5,
        canvasTop + gridHeight * 2.5,
        gridWidth * 0.95,
        gridHeight * 0.95
      )
    }
  }

  //intersecting squares horizontal
  fill(fillLight)
  noStroke()
  clickClick(grid01.x - gridWidth / 2, grid01.y, unit * squareConnectorSize)
  clickClick(grid01.x + gridWidth / 2, grid01.y, unit * squareConnectorSize)
  clickClick(grid02.x + gridWidth / 2, grid02.y, unit * squareConnectorSize)
  clickClick(grid03.x + gridWidth / 2, grid03.y, unit * squareConnectorSize)
  clickClick(grid04.x + gridWidth / 2, grid04.y, unit * squareConnectorSize)
  clickClick(grid05.x + gridWidth / 2, grid05.y, unit * squareConnectorSize)
  clickClick(grid06.x + gridWidth / 2, grid06.y, unit * squareConnectorSize)
  clickClick(grid07.x + gridWidth / 2, grid07.y, unit * squareConnectorSize)

  clickClick(grid02.x - gridWidth / 2, grid02.y, unit * squareConnectorSize)
  clickClick(grid03.x - gridWidth / 2, grid03.y, unit * squareConnectorSize)
  clickClick(grid04.x - gridWidth / 2, grid04.y, unit * squareConnectorSize)
  clickClick(grid05.x - gridWidth / 2, grid05.y, unit * squareConnectorSize)
  clickClick(grid06.x - gridWidth / 2, grid06.y, unit * squareConnectorSize)
  clickClick(grid07.x - gridWidth / 2, grid07.y, unit * squareConnectorSize)

  clickClick(grid08.x + gridWidth / 2, grid08.y, unit * squareConnectorSize)
  clickClick(grid08.x - gridWidth / 2, grid08.y, unit * squareConnectorSize)
  clickClick(grid09.x + gridWidth / 2, grid09.y, unit * squareConnectorSize)
  clickClick(grid09.x - gridWidth / 2, grid09.y, unit * squareConnectorSize)
  clickClick(grid10.x + gridWidth / 2, grid10.y, unit * squareConnectorSize)
  clickClick(grid10.x - gridWidth / 2, grid10.y, unit * squareConnectorSize)
  clickClick(grid11.x + gridWidth / 2, grid11.y, unit * squareConnectorSize)
  clickClick(grid12.x + gridWidth / 2, grid12.y, unit * squareConnectorSize)
  clickClick(grid11.x - gridWidth / 2, grid11.y, unit * squareConnectorSize)
  clickClick(grid12.x - gridWidth / 2, grid12.y, unit * squareConnectorSize)

  //intersecting rects vertical
  clickClick(grid01.x, grid01.y - gridHeight / 2, unit * squareConnectorSize)
  clickClick(grid02.x, grid02.y - gridHeight / 2, unit * squareConnectorSize)
  clickClick(grid03.x, grid03.y - gridHeight / 2, unit * squareConnectorSize)
  clickClick(grid04.x, grid04.y - gridHeight / 2, unit * squareConnectorSize)
  clickClick(grid05.x, grid05.y - gridHeight / 2, unit * squareConnectorSize)

  clickClick(grid01.x, grid01.y + gridHeight / 2, unit * squareConnectorSize)
  clickClick(grid02.x, grid02.y + gridHeight / 2, unit * squareConnectorSize)
  clickClick(grid03.x, grid03.y + gridHeight / 2, unit * squareConnectorSize)
  clickClick(grid04.x, grid04.y + gridHeight / 2, unit * squareConnectorSize)
  clickClick(grid05.x, grid05.y + gridHeight / 2, unit * squareConnectorSize)

  clickClick(grid06.x, grid06.y - gridHeight / 2, unit * squareConnectorSize)
  clickClick(grid06.x, grid06.y + gridHeight / 2, unit * squareConnectorSize)
  clickClick(grid07.x, grid07.y - gridHeight / 2, unit * squareConnectorSize)
  clickClick(grid07.x, grid07.y + gridHeight / 2, unit * squareConnectorSize)
  clickClick(grid08.x, grid08.y - gridHeight / 2, unit * squareConnectorSize)
  clickClick(grid08.x, grid08.y + gridHeight / 2, unit * squareConnectorSize)
  clickClick(grid09.x, grid09.y - gridHeight / 2, unit * squareConnectorSize)
  clickClick(grid09.x, grid09.y + gridHeight / 2, unit * squareConnectorSize)
  clickClick(grid10.x, grid10.y - gridHeight / 2, unit * squareConnectorSize)
  clickClick(grid11.x, grid11.y - gridHeight / 2, unit * squareConnectorSize)
  clickClick(grid12.x, grid12.y - gridHeight / 2, unit * squareConnectorSize)

  clickClick(grid10.x, grid10.y + gridHeight / 2, unit * squareConnectorSize)
  clickClick(grid11.x, grid11.y + gridHeight / 2, unit * squareConnectorSize)
  clickClick(grid12.x, grid12.y + gridHeight / 2, unit * squareConnectorSize)

  //occasional connector
  //FIRST POINT
  if (randomConnectorA < 1) {
    firstConnectorGridX = grid01.x
    firstConnectorGridY = grid01.y
  } else if (randomConnectorA < 2) {
    firstConnectorGridX = grid02.x
    firstConnectorGridY = grid02.y
  } else if (randomConnectorA < 3) {
    firstConnectorGridX = grid03.x
    firstConnectorGridY = grid03.y
  } else if (randomConnectorA < 4) {
    firstConnectorGridX = grid04.x
    firstConnectorGridY = grid04.y
  } else if (randomConnectorA < 5) {
    firstConnectorGridX = grid05.x
    firstConnectorGridY = grid05.y
  } else if (randomConnectorA < 6) {
    firstConnectorGridX = grid06.x
    firstConnectorGridY = grid06.y
  } else if (randomConnectorA < 7) {
    firstConnectorGridX = grid07.x
    firstConnectorGridY = grid07.y
  } else if (randomConnectorA < 8) {
    firstConnectorGridX = grid08.x
    firstConnectorGridY = grid08.y
  } else if (randomConnectorA < 9) {
    firstConnectorGridX = grid09.x
    firstConnectorGridY = grid09.y
  } else if (randomConnectorA < 10) {
    firstConnectorGridX = grid10.x
    firstConnectorGridY = grid10.y
  } else if (randomConnectorA < 11) {
    firstConnectorGridX = grid11.x
    firstConnectorGridY = grid11.y
  } else if (randomConnectorA <= 12) {
    firstConnectorGridX = grid12.x
    firstConnectorGridY = grid12.y
  }
  //SECOND POINT
  if (randomConnectorB < 1) {
    secondConnectorGridX = grid01.x
    secondConnectorGridY = grid01.y
  } else if (randomConnectorB < 2) {
    secondConnectorGridX = grid02.x
    secondConnectorGridY = grid02.y
  } else if (randomConnectorB < 3) {
    secondConnectorGridX = grid03.x
    secondConnectorGridY = grid03.y
  } else if (randomConnectorB < 4) {
    secondConnectorGridX = grid04.x
    secondConnectorGridY = grid04.y
  } else if (randomConnectorB < 5) {
    secondConnectorGridX = grid05.x
    secondConnectorGridY = grid05.y
  } else if (randomConnectorB < 6) {
    secondConnectorGridX = grid06.x
    secondConnectorGridY = grid06.y
  } else if (randomConnectorB < 7) {
    secondConnectorGridX = grid07.x
    secondConnectorGridY = grid07.y
  } else if (randomConnectorB < 8) {
    secondConnectorGridX = grid08.x
    secondConnectorGridY = grid08.y
  } else if (randomConnectorB < 9) {
    secondConnectorGridX = grid09.x
    secondConnectorGridY = grid09.y
  } else if (randomConnectorB < 10) {
    secondConnectorGridX = grid10.x
    secondConnectorGridY = grid10.y
  } else if (randomConnectorB < 11) {
    secondConnectorGridX = grid11.x
    secondConnectorGridY = grid11.y
  } else if (randomConnectorB <= 12) {
    secondConnectorGridX = grid12.x
    secondConnectorGridY = grid12.y
  }
  //draw
  pointAx = firstConnectorGridX - gridWidth / 2 + unit * 2
  pointAy = firstConnectorGridY + gridHeight / 6
  pointBx = secondConnectorGridX + gridWidth / 2 - unit * 2
  pointBy = secondConnectorGridY + gridHeight / 6
  stroke(lineDark)
  strokeWeight(unit * thin)
  fill(fillMid)
  circle(pointAx, pointAy, unit * 2)
  circle(pointBx, pointBy, unit * 2)
  circle(pointBx, pointAy, unit * 2)
  circle(pointAx, pointBy, unit * 2)

  push()
  fill(lineDark)
  noStroke()
  circle(pointAx, pointAy, unit * 1)
  circle(pointBx, pointBy, unit * 1)
  circle(pointBx, pointAy, unit * 1)
  circle(pointAx, pointBy, unit * 1)
  ///DRAW A CIRCLE THAT FITS IN BETWEEN THE TRIANGLE?
  connectorWidth = pointBx - pointAx
  connectorHeight = pointBy - pointAy
  noFill()
  stroke(lineDark)
  strokeWeight(unit * thin)
  setLineDash([3, 5]) //create the dashed line
  stroke(lineDark)
  strokeWeight(unit * thin)
  line(pointAx, pointAy, pointBx, pointAy)
  line(pointBx, pointBy, pointBx, pointAy)
  line(pointAx, pointBy, pointBx, pointBy)
  line(pointAx, pointBy, pointAx, pointAy)
  ellipse(
    pointBx - connectorWidth / 2,
    pointBy - connectorHeight / 2,
    connectorWidth * 0.95,
    connectorHeight * 0.95
  )
  pop()

  bug(grid01.x + grid01BugX * unit, grid01.y + grid01BugY * unit, unit * 1.2)
  bug(grid02.x + grid02BugX * unit, grid02.y + grid02BugY * unit, unit * 1.2)
  bug(grid03.x + grid03BugX * unit, grid03.y + grid03BugY * unit, unit * 1.2)
  bug(grid04.x + grid04BugX * unit, grid04.y + grid04BugY * unit, unit * 1.2)
  bug(grid05.x + grid05BugX * unit, grid05.y + grid05BugY * unit, unit * 1.2)
  bug(grid06.x + grid06BugX * unit, grid06.y + grid06BugY * unit, unit * 1.2)
  bug(grid07.x + grid07BugX * unit, grid07.y + grid07BugY * unit, unit * 1.2)
  bug(grid08.x + grid08BugX * unit, grid08.y + grid08BugY * unit, unit * 1.2)
  bug(grid09.x + grid09BugX * unit, grid09.y + grid09BugY * unit, unit * 1.2)
  bug(grid10.x + grid10BugX * unit, grid10.y + grid10BugY * unit, unit * 1.2)
  bug(grid11.x + grid11BugX * unit, grid11.y + grid11BugY * unit, unit * 1.2)
  bug(grid12.x + grid12BugX * unit, grid12.y + grid12BugY * unit, unit * 1.2)

  //central circles
  stroke(contrastHighlight)
  strokeWeight(unit * 0.8)
  fill(contrastLowlight)
  circle(grid01.x, grid01.y, unit * 3)
  circle(grid12.x, grid12.y, unit * 3)

  //connector lines
  push()
  setLineDash([3, 6]) //create the dashed line
  stroke(contrastLowlight)
  strokeWeight(unit * 0.8)
  line(grid01.x, grid01.y, grid02.x, grid02.y)
  line(grid02.x, grid02.y, grid03.x, grid03.y)
  line(grid03.x, grid03.y, grid04.x, grid04.y)
  line(grid04.x, grid04.y, grid05.x, grid05.y)
  line(grid05.x, grid05.y, grid06.x, grid06.y)
  line(grid06.x, grid06.y, grid07.x, grid07.y)
  line(grid07.x, grid07.y, grid08.x, grid08.y)
  line(grid08.x, grid08.y, grid09.x, grid09.y)
  line(grid09.x, grid09.y, grid10.x, grid10.y)
  line(grid10.x, grid10.y, grid11.x, grid11.y)
  line(grid11.x, grid11.y, grid12.x, grid12.y)

  stroke(contrastHighlight)
  strokeWeight(unit * 0.3)
  line(grid01.x, grid01.y, grid02.x, grid02.y)
  line(grid02.x, grid02.y, grid03.x, grid03.y)
  line(grid03.x, grid03.y, grid04.x, grid04.y)
  line(grid04.x, grid04.y, grid05.x, grid05.y)
  line(grid05.x, grid05.y, grid06.x, grid06.y)
  line(grid06.x, grid06.y, grid07.x, grid07.y)
  line(grid07.x, grid07.y, grid08.x, grid08.y)
  line(grid08.x, grid08.y, grid09.x, grid09.y)
  line(grid09.x, grid09.y, grid10.x, grid10.y)
  line(grid10.x, grid10.y, grid11.x, grid11.y)
  line(grid11.x, grid11.y, grid12.x, grid12.y)
  pop()

  ////TEST ROOM
  push()
  translate(width / 2, height / 2)
  //walls01(0,0,200,200)
  //room04_H(grid01.x, grid01.y, gridWidth * 0.95, gridHeight * 0.95)
  pop()

  /////moving circle
  // Get the target coordinate based on the current index
  let targetCoordinate = getGridCoordinate(currentCoordinateIndex)

  // Calculate the distance between the current position and the target coordinate
  let dx = targetCoordinate.x - circlePosition.x
  let dy = targetCoordinate.y - circlePosition.y
  let distance = Math.sqrt(dx * dx + dy * dy)

  // If the circle is close enough to the target, move to the next coordinate
  if (distance < 1) {
    currentCoordinateIndex = (currentCoordinateIndex + 1) % 22
    targetCoordinate = getGridCoordinate(currentCoordinateIndex)
  }

  // Move the circle slowly towards the target coordinate
  let easing = 0.1 // Adjust the easing value to control the speed
  circlePosition.x += (targetCoordinate.x - circlePosition.x) * easing
  circlePosition.y += (targetCoordinate.y - circlePosition.y) * easing

  // Draw the circle at the current position
  fill(contrastLowlight)
  stroke(contrastHighlight)
  circle(circlePosition.x, circlePosition.y, unit * 3)

  /////moving ghost
  // Get the target coordinate based on the current index
  let ghostCoordinate = getGhostCoordinate(currentGhostIndex)

  // Calculate the distance between the current position and the target coordinate
  let ghostx = ghostCoordinate.x - ghostPosition.x
  let ghosty = ghostCoordinate.y - ghostPosition.y
  let ghostDistance = Math.sqrt(ghostx * ghostx + ghosty * ghosty)

  // If the circle is close enough to the target, move to the next coordinate
  if (ghostDistance < 1) {
    currentGhostIndex = (currentGhostIndex + 1) % 16
    ghostCoordinate = getGhostCoordinate(currentGhostIndex)
  }

  // Move the circle slowly towards the target coordinate
  //let ghostEasing = 0.05 // Adjust the easing value to control the speed
  ghostPosition.x += (ghostCoordinate.x - ghostPosition.x) * ghostEasing
  ghostPosition.y += (ghostCoordinate.y - ghostPosition.y) * ghostEasing

  // Draw the ghost at the current position
  ghost01(ghostPosition.x, ghostPosition.y, unit * 3)

  if (
    circlePosition.x - ghostPosition.x < unit * 5 &&
    circlePosition.x - ghostPosition.x > -unit * 5 &&
    circlePosition.y - ghostPosition.y < unit * 5 &&
    circlePosition.y - ghostPosition.y > -unit * 5
  ) {
    for (let i = 0; i < numExplodeCircles; i++) {
      let angle = random(TWO_PI) // Random angle in radians
      let speed = random(4, 8) // Random speed
      explodeCircles.push(new explode(0, 0, angle, speed))
      //explodeCircles.push(new explode(ghostPosition.x, ghostPosition.y, angle, speed));
    }
    push()
    translate(ghostPosition.x, ghostPosition.y)
    for (let i = 0; i < explodeCircles.length; i++) {
      explodeCircles[i].move()
      explodeCircles[i].display()
    }
    pop()
    //ghostSaturation = 0
  } else ghostSaturation = 100


} ///end of draw loop

function getGhostCoordinate(index) {
  //for circlemoving between grids
  // Based on the index, return the respective grid coordinate variable
  switch (index) {
    case 0:
      return { x: grid08.x, y: grid08.y }
    case 1:
      return { x: grid09.x, y: grid09.y }
    case 2:
      return { x: grid10.x, y: grid10.y }
    case 3:
      return { x: grid01.x, y: grid01.y }
    case 4:
      return { x: grid02.x, y: grid02.y }
    case 5:
      return { x: grid11.x, y: grid11.y }
    case 6:
      return { x: grid12.x, y: grid12.y }
    case 7:
      return { x: grid07.x, y: grid07.y }
    case 8:
      return { x: grid06.x, y: grid06.y }
    case 9:
      return { x: grid05.x, y: grid05.y }
    case 10:
      return { x: grid04.x, y: grid04.y }
    case 11:
      return { x: grid03.x, y: grid03.y }
    case 12:
      return { x: grid02.x, y: grid02.y }
    case 13:
      return { x: grid11.x, y: grid11.y }
    case 14:
      return { x: grid12.x, y: grid12.y }
    case 15:
      return { x: grid07.x, y: grid07.y }
    case 16:
      return { x: grid08.x, y: grid08.y }

    default:
      return { x: 0, y: 0 } // Return default coordinate if index is out of range
  }
}

function getGridCoordinate(index) {
  //for circlemoving between grids
  // Based on the index, return the respective grid coordinate variable
  switch (index) {
    case 0:
      return { x: grid01.x, y: grid01.y }
    case 1:
      return { x: grid02.x, y: grid02.y }
    case 2:
      return { x: grid03.x, y: grid03.y }
    case 3:
      return { x: grid04.x, y: grid04.y }
    case 4:
      return { x: grid05.x, y: grid05.y }
    case 5:
      return { x: grid06.x, y: grid06.y }
    case 6:
      return { x: grid07.x, y: grid07.y }
    case 7:
      return { x: grid08.x, y: grid08.y }
    case 8:
      return { x: grid09.x, y: grid09.y }
    case 9:
      return { x: grid10.x, y: grid10.y }
    case 10:
      return { x: grid11.x, y: grid11.y }
    case 11:
      return { x: grid12.x, y: grid12.y }
    case 12:
      return { x: grid11.x, y: grid11.y }
    case 13:
      return { x: grid10.x, y: grid10.y }
    case 14:
      return { x: grid09.x, y: grid09.y }
    case 15:
      return { x: grid08.x, y: grid08.y }
    case 16:
      return { x: grid07.x, y: grid07.y }
    case 17:
      return { x: grid06.x, y: grid06.y }
    case 18:
      return { x: grid05.x, y: grid05.y }
    case 19:
      return { x: grid04.x, y: grid04.y }
    case 20:
      return { x: grid03.x, y: grid03.y }
    case 21:
      return { x: grid02.x, y: grid02.y }
    case 22:
      return { x: grid01.x, y: grid01.y }

    default:
      return { x: 0, y: 0 } // Return default coordinate if index is out of range
  }
}

//function mouseClicked zoom to next point

function touchStarted() {
  windowResized()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  grid01BugX = random(-8, 8)
  grid02BugX = random(-8, 8)
  grid03BugX = random(-8, 8)
  grid04BugX = random(-8, 8)
  grid05BugX = random(-8, 8)
  grid06BugX = random(-8, 8)
  grid07BugX = random(-8, 8)
  grid08BugX = random(-8, 8)
  grid09BugX = random(-8, 8)
  grid10BugX = random(-8, 8)
  grid11BugX = random(-8, 8)
  grid12BugX = random(-8, 8)
  grid01BugY = random(-8, 8)
  grid02BugY = random(-8, 8)
  grid03BugY = random(-8, 8)
  grid04BugY = random(-8, 8)
  grid05BugY = random(-8, 8)
  grid06BugY = random(-8, 8)
  grid07BugY = random(-8, 8)
  grid08BugY = random(-8, 8)
  grid09BugY = random(-8, 8)
  grid10BugY = random(-8, 8)
  grid11BugY = random(-8, 8)
  grid12BugY = random(-8, 8)
}

function bug(x, y, s) {
  fill(lineDark)
  noStroke()
  rect(x, y, s)
  fill(fillLight)
  circle(x, y, s / 2)
  stroke(lineDark)
  strokeWeight(unit * thin)
  line(x - s / 2, y - s / 3, x - s, y - s / 3)
  line(x - s / 2, y, x - s, y)
  line(x - s / 2, y + s / 3, x - s, y + s / 3)
  line(x + s / 2, y + s / 3, x + s, y + s / 3)
  line(x + s / 2, y, x + s, y)
  line(x + s / 2, y - s / 3, x + s, y - s / 3)
  // line(x, y+s/2, x, y+s)
  // line(x-s/3, y+s/2, x-s/3, y+s)
  // line(x, y-s/2, x, y-s)
  // line(x+s/3, y-s/2, x+s/3, y-s)
}

function clickClick(x, y, s) {
  noStroke()
  fill(fillLight)
  rect(x, y, s)
  fill(backgroundColor)
  rect(x, y, s * 0.9, s * 0.9, unit)
  fill(fillLight)
  circle(x, y, s * 0.4)
  fill(backgroundColor)
  circle(x, y, s * 0.3)
}

function ghost01(x, y, s) {
  fill(0, 0, ghostSaturation, ghostAlpha)
  noStroke()
  //rect(x, y - s * 0.75, s / 2)
  rect(x - s / 2, y, s)
  rect(x + s / 2, y, s)
  rect(x, y + s, s / 3, s)
  rect(x - s / 2, y + s, s / 3, s)
  rect(x + s / 2, y + s, s / 3, s)
}

function gravePit(x, y, w, h) {
  push()
  //setLineDash([3, 5]) //create the dashed line
  stroke(fillLight)
  strokeWeight(unit * micro)
  noFill()
  rect(x, y, w * 0.95, h * 0.95)
  pop()
  noStroke()
  fill(fillDark)
  rect(x, y, w * 0.9, h * 0.9)
  fill(backgroundColor)
  rect(x, y, w * 0.3, h * 0.3)
  //   fill(fillDark)
  //   rect(x, y, w * 0.27, h * 0.27)
  fill(fillShadow)
  beginShape()
  vertex(x - w / 2 + w * 0.045, y - h / 2 + h * 0.045)
  vertex(x - w / 2 + w * 0.045, y + h / 2 - h * 0.045)
  vertex(x + w / 2 - w * 0.045, y + h / 2 - h * 0.045)
  vertex(x + w / 6, y + h / 6)
  vertex(x - w / 6, y + h / 6)
  vertex(x - w / 6, y - h / 6)
  endShape(CLOSE)
  stroke(fillShadow)
  strokeWeight(unit * 0.1)
  line(x - w / 6, y - h / 6, x + w / 6, y - h / 6)
  line(x + w / 6, y + h / 6, x + w / 6, y - h / 6)
  line(x + w / 6, y - h / 6, x + w / 2 - w * 0.045, y - h / 2 + h * 0.045)

  if (colorPalleteName === 'apricot') {
    fill(contrastLowlight)
    noStroke()
    rect(x, y, w * 0.3, h * 0.3)
    peach(x, y + h / 40, w / 20, w / 20)
  }
  if (colorPalleteName === 'oysterCove') {
    fill(fillLight3)
    noStroke()
    rect(x, y, w * 0.3, h * 0.3)
    ghost01(x, y - h / 40, w / 10)
  }
  if (materialType === 'backLight') {
    fill(fillLight2)
    noStroke()
    //rect(x, y, w * 0.3, h * 0.3)
    //fill(0,0,100,55)
    rect(x, y, w * 0.9, h * 0.9)
    rect(x, y, w * 0.8, h * 0.8)
    rect(x, y, w * 0.7, h * 0.7)
    rect(x, y, w * 0.6, h * 0.6)
    rect(x, y, w * 0.5, h * 0.5)
    rect(x, y, w * 0.4, h * 0.4)
    rect(x, y, w * 0.3, h * 0.3)
    rect(x, y, w * 0.25, h * 0.25)
    rect(x, y, w * 0.2, h * 0.2)
    rect(x, y, w * 0.15, h * 0.15)
    rect(x, y, w * 0.1, h * 0.1)
    rect(x, y, w * 0.05, h * 0.05)
  }
}

function graveDrawing(x, y, w, h) {
  fill(backgroundColor)
  noStroke()
  rect(x, y, w * 0.3, h * 0.3)
  fill(fillLight)
  stroke(lineDark)
  strokeWeight(unit * 0.1)
  beginShape()
  vertex(x - w / 20, y - h / 10)
  vertex(x + w / 20, y - h / 10)
  vertex(x + w / 12, y - h / 20)
  vertex(x + w / 20, y + h / 8)
  vertex(x - w / 20, y + h / 8)
  vertex(x - w / 12, y - h / 20)
  endShape(CLOSE)
  stroke(contrastLowlight)
  strokeWeight(unit * 0.3)
  circle(x, y, unit)
  circle(x, y - unit, unit)
  circle(x, y + unit, unit)
}

function candle(x, y, s) {
  noStroke()
  fill(20, 100, 100, 50)
  circle(x, y, random(5, 15))
  fill(40, 100, 100, 150)
  circle(x, y, 3)
  fill(40, 0, 100, 150)
  rect(x + 1, y, 2)
}

function digiCandle(x, y, s) {
  noStroke()
  fill(20, 0, 100, 100)
  fill(lineLight)
  //rect(x, random(y - unit * 2, y + unit * 2), 2)
  circle(x, y, random(2, 8))

  stroke(lineDark)
  strokeWeight(1)
  //line(x-5, y, x+5, y)
  //line(x, y - 5, x, y + 5)
  noStroke()
  fill(contrastLowlight)
  rect(x, y, 3)
  fill(40, 0, 100, 150)
  fill(contrastHighlight)
  rect(x + 1, y, 1)
}

function footings(x, y, w, h) {
  stroke(lineLight)
  strokeWeight(unit * micro)
  fill(fillLight)
  rect(x, y, w * 0.8, h * 0.8)
  fill(backgroundColor)
  rect(x, y, w * 0.75, h * 0.75)
  stroke(lineDark)
  fill(fillMid)
  rect(x, y, w * 0.6, h * 0.6)
  fill(contrastLowlight)
  circle(x - w * 0.5 + w * 0.3, y - h * 0.5 + h * 0.3, unit)
  circle(x + w * 0.5 - w * 0.3, y - h * 0.5 + h * 0.3, unit)
  circle(x + w * 0.5 - w * 0.3, y + h * 0.5 - h * 0.3, unit)
  circle(x - w * 0.5 + w * 0.3, y + h * 0.5 - h * 0.3, unit)
}

function squarePool(x, y, w, h) {
  fill(fillLight)
  stroke(lineLight)
  strokeWeight(unit * micro)
  rect(0, 0, w / 4, w / 4)
  fill(fillWater)
  stroke(lineLight)
  rect(0, 0, w / 5.5, w / 5.5)
}

function columns01(x, y, w, h) {
  fill(fillMid)
  stroke(lineDark)
  strokeWeight(unit * thick)
  rect(0 - w * 0.5 + w * 0.05, 0 - h * 0.5 + h * 0.05, w * 0.1, h * 0.1)
  rect(0 + w * 0.5 - w * 0.05, 0 - h * 0.5 + h * 0.05, w * 0.1, h * 0.1)
  rect(0 - w * 0.5 + w * 0.05, 0 + h * 0.5 - h * 0.05, w * 0.1, h * 0.1)
  rect(0 + w * 0.5 - w * 0.05, 0 + h * 0.5 - h * 0.05, w * 0.1, h * 0.1)
  line(
    0 - w * 0.5 + w * 0.05,
    0 - h * 0.5 + h * 0.1,
    0 - w * 0.5 + w * 0.05,
    0 - h * 0.5 + h * 0.15
  )
  line(
    0 - w * 0.5 + w * 0.01,
    0 - h * 0.5 + h * 0.1,
    0 - w * 0.5 + w * 0.01,
    0 - h * 0.5 + h * 0.15
  )
  line(
    0 - w * 0.5 + w * 0.09,
    0 - h * 0.5 + h * 0.1,
    0 - w * 0.5 + w * 0.09,
    0 - h * 0.5 + h * 0.15
  )

  line(
    0 - w * 0.5 + w * 0.05,
    0 + h * 0.5 - h * 0.1,
    0 - w * 0.5 + w * 0.05,
    0 + h * 0.5 - h * 0.15
  )
  line(
    0 - w * 0.5 + w * 0.01,
    0 + h * 0.5 - h * 0.1,
    0 - w * 0.5 + w * 0.01,
    0 + h * 0.5 - h * 0.15
  )
  line(
    0 - w * 0.5 + w * 0.09,
    0 + h * 0.5 - h * 0.1,
    0 - w * 0.5 + w * 0.09,
    0 + h * 0.5 - h * 0.15
  )

  line(
    0 + w * 0.5 - w * 0.05,
    0 - h * 0.5 + h * 0.1,
    0 + w * 0.5 - w * 0.05,
    0 - h * 0.5 + h * 0.15
  )
  line(
    0 + w * 0.5 - w * 0.01,
    0 - h * 0.5 + h * 0.1,
    0 + w * 0.5 - w * 0.01,
    0 - h * 0.5 + h * 0.15
  )
  line(
    0 + w * 0.5 - w * 0.09,
    0 - h * 0.5 + h * 0.1,
    0 + w * 0.5 - w * 0.09,
    0 - h * 0.5 + h * 0.15
  )

  line(
    0 + w * 0.5 - w * 0.05,
    0 + h * 0.5 - h * 0.1,
    0 + w * 0.5 - w * 0.05,
    0 + h * 0.5 - h * 0.15
  )
  line(
    0 + w * 0.5 - w * 0.01,
    0 + h * 0.5 - h * 0.1,
    0 + w * 0.5 - w * 0.01,
    0 + h * 0.5 - h * 0.15
  )
  line(
    0 + w * 0.5 - w * 0.09,
    0 + h * 0.5 - h * 0.1,
    0 + w * 0.5 - w * 0.09,
    0 + h * 0.5 - h * 0.15
  )
}

function columns01B(x, y, w, h) {
  fill(fillLight3)
  stroke(lineDark)
  strokeWeight(unit * thin)
  rect(0 - w * 0.5 + w * 0.05, 0 - h * 0.5 + h * 0.05, w * 0.1, h * 0.1)
  rect(0 + w * 0.5 - w * 0.05, 0 - h * 0.5 + h * 0.05, w * 0.1, h * 0.1)
  rect(0 - w * 0.5 + w * 0.05, 0 + h * 0.5 - h * 0.05, w * 0.1, h * 0.1)
  rect(0 + w * 0.5 - w * 0.05, 0 + h * 0.5 - h * 0.05, w * 0.1, h * 0.1)
  line(
    0 - w * 0.5 + w * 0.05,
    0 - h * 0.5 + h * 0.1,
    0 - w * 0.5 + w * 0.05,
    0 - h * 0.5 + h * 0.15
  )
  line(
    0 - w * 0.5 + w * 0.01,
    0 - h * 0.5 + h * 0.1,
    0 - w * 0.5 + w * 0.01,
    0 - h * 0.5 + h * 0.15
  )
  line(
    0 - w * 0.5 + w * 0.09,
    0 - h * 0.5 + h * 0.1,
    0 - w * 0.5 + w * 0.09,
    0 - h * 0.5 + h * 0.15
  )

  line(
    0 - w * 0.5 + w * 0.05,
    0 + h * 0.5 - h * 0.1,
    0 - w * 0.5 + w * 0.05,
    0 + h * 0.5 - h * 0.15
  )
  line(
    0 - w * 0.5 + w * 0.01,
    0 + h * 0.5 - h * 0.1,
    0 - w * 0.5 + w * 0.01,
    0 + h * 0.5 - h * 0.15
  )
  line(
    0 - w * 0.5 + w * 0.09,
    0 + h * 0.5 - h * 0.1,
    0 - w * 0.5 + w * 0.09,
    0 + h * 0.5 - h * 0.15
  )

  line(
    0 + w * 0.5 - w * 0.05,
    0 - h * 0.5 + h * 0.1,
    0 + w * 0.5 - w * 0.05,
    0 - h * 0.5 + h * 0.15
  )
  line(
    0 + w * 0.5 - w * 0.01,
    0 - h * 0.5 + h * 0.1,
    0 + w * 0.5 - w * 0.01,
    0 - h * 0.5 + h * 0.15
  )
  line(
    0 + w * 0.5 - w * 0.09,
    0 - h * 0.5 + h * 0.1,
    0 + w * 0.5 - w * 0.09,
    0 - h * 0.5 + h * 0.15
  )

  line(
    0 + w * 0.5 - w * 0.05,
    0 + h * 0.5 - h * 0.1,
    0 + w * 0.5 - w * 0.05,
    0 + h * 0.5 - h * 0.15
  )
  line(
    0 + w * 0.5 - w * 0.01,
    0 + h * 0.5 - h * 0.1,
    0 + w * 0.5 - w * 0.01,
    0 + h * 0.5 - h * 0.15
  )
  line(
    0 + w * 0.5 - w * 0.09,
    0 + h * 0.5 - h * 0.1,
    0 + w * 0.5 - w * 0.09,
    0 + h * 0.5 - h * 0.15
  )
}

function columns02(x, y, w, h) {
  fill(fillMid)
  stroke(lineDark)
  strokeWeight(unit * thin)
  rect(0 - w * 0.5 + w * 0.05, 0 - h * 0.5 + h * 0.1, w * 0.1, h * 0.2)
  rect(0 + w * 0.5 - w * 0.05, 0 - h * 0.5 + h * 0.1, w * 0.1, h * 0.2)
  rect(0 - w * 0.5 + w * 0.05, 0 + h * 0.5 - h * 0.1, w * 0.1, h * 0.2)
  rect(0 + w * 0.5 - w * 0.05, 0 + h * 0.5 - h * 0.1, w * 0.1, h * 0.2)
  rect(0 - w * 0.5 + w * 0.1, 0 - h * 0.5 + h * 0.05, w * 0.2, h * 0.1)
  rect(0 + w * 0.5 - w * 0.1, 0 - h * 0.5 + h * 0.05, w * 0.2, h * 0.1)
  rect(0 - w * 0.5 + w * 0.1, 0 + h * 0.5 - h * 0.05, w * 0.2, h * 0.1)
  rect(0 + w * 0.5 - w * 0.1, 0 + h * 0.5 - h * 0.05, w * 0.2, h * 0.1)

  strokeWeight(unit * thick)
  rect(0 - w * 0.5 + w * 0.05, 0 - h * 0.5 + h * 0.05, w * 0.1, h * 0.1)
  rect(0 + w * 0.5 - w * 0.05, 0 - h * 0.5 + h * 0.05, w * 0.1, h * 0.1)
  rect(0 - w * 0.5 + w * 0.05, 0 + h * 0.5 - h * 0.05, w * 0.1, h * 0.1)
  rect(0 + w * 0.5 - w * 0.05, 0 + h * 0.5 - h * 0.05, w * 0.1, h * 0.1)
}

function columns03(x, y, w, h) {
  fill(fillMid)
  stroke(lineDark)
  strokeWeight(unit * thick)
  rect(0 - w * 0.5 + w * 0.1, 0 - h * 0.5 + h * 0.1, w * 0.2, h * 0.2)
  rect(0 + w * 0.5 - w * 0.1, 0 - h * 0.5 + h * 0.1, w * 0.2, h * 0.2)
  rect(0 - w * 0.5 + w * 0.1, 0 + h * 0.5 - h * 0.1, w * 0.2, h * 0.2)
  rect(0 + w * 0.5 - w * 0.1, 0 + h * 0.5 - h * 0.1, w * 0.2, h * 0.2)

  strokeWeight(unit * thin)
  rect(0 - w * 0.5 + w * 0.1, 0 - h * 0.5 + h * 0.1, w * 0.1, h * 0.1)
  rect(0 + w * 0.5 - w * 0.1, 0 - h * 0.5 + h * 0.1, w * 0.1, h * 0.1)
  rect(0 - w * 0.5 + w * 0.1, 0 + h * 0.5 - h * 0.1, w * 0.1, h * 0.1)
  rect(0 + w * 0.5 - w * 0.1, 0 + h * 0.5 - h * 0.1, w * 0.1, h * 0.1)
}

function columns04(x, y, w, h) {
  fill(fillMid)
  stroke(lineDark)
  strokeWeight(unit * thick)
  rect(0 - w * 0.5 + w * 0.3, 0 - h * 0.55 + h * 0.1, w * 0.1, h * 0.1)
  rect(0 + w * 0.5 - w * 0.3, 0 - h * 0.55 + h * 0.1, w * 0.1, h * 0.1)
  rect(0 - w * 0.5 + w * 0.3, 0 + h * 0.55 - h * 0.1, w * 0.1, h * 0.1)
  rect(0 + w * 0.5 - w * 0.3, 0 + h * 0.55 - h * 0.1, w * 0.1, h * 0.1)
  rect(0 - w * 0.55 + w * 0.1, 0 + h * 0.5 - h * 0.3, w * 0.1, h * 0.1)
  rect(0 + w * 0.55 - w * 0.1, 0 + h * 0.5 - h * 0.3, w * 0.1, h * 0.1)
  rect(0 - w * 0.55 + w * 0.1, 0 - h * 0.5 + h * 0.3, w * 0.1, h * 0.1)
  rect(0 + w * 0.55 - w * 0.1, 0 - h * 0.5 + h * 0.3, w * 0.1, h * 0.1)
}
function columns05(x, y, w, h) {
  if (randomExtras > 0.4) {
    stroke(lineDark)
    strokeWeight(unit * thin)
    line(
      0 - w * 0.5 + w * 0.025,
      0 - h * 0.5 + h * 0.025,
      0 - w * 0.5 + w * 0.25,
      0 - h * 0.5 + h * 0.25
    )
    line(
      0 - w * 0.5 + w * 0.025,
      0 - h * 0.5 + h * 0.25,
      0 - w * 0.5 + w * 0.25,
      0 - h * 0.5 + h * 0.025
    )
    line(
      0 + w * 0.5 - w * 0.025,
      0 - h * 0.5 + h * 0.025,
      0 + w * 0.5 - w * 0.25,
      0 - h * 0.5 + h * 0.25
    )
    line(
      0 + w * 0.5 - w * 0.025,
      0 - h * 0.5 + h * 0.25,
      0 + w * 0.5 - w * 0.25,
      0 - h * 0.5 + h * 0.025
    )
    line(
      0 - w * 0.5 + w * 0.025,
      0 + h * 0.5 - h * 0.025,
      0 - w * 0.5 + w * 0.25,
      0 + h * 0.5 - h * 0.25
    )
    line(
      0 - w * 0.5 + w * 0.025,
      0 + h * 0.5 - h * 0.25,
      0 - w * 0.5 + w * 0.25,
      0 + h * 0.5 - h * 0.025
    )
    line(
      0 + w * 0.5 - w * 0.025,
      0 + h * 0.5 - h * 0.025,
      0 + w * 0.5 - w * 0.25,
      0 + h * 0.5 - h * 0.25
    )
    line(
      0 + w * 0.5 - w * 0.025,
      0 + h * 0.5 - h * 0.25,
      0 + w * 0.5 - w * 0.25,
      0 + h * 0.5 - h * 0.025
    )
  }

  fill(fillMid)
  stroke(lineDark)
  strokeWeight(unit * thick)
  rect(0 - w * 0.5 + w * 0.025, 0 - h * 0.5 + h * 0.025, w * 0.05, h * 0.05)
  rect(0 - w * 0.5 + w * 0.25, 0 - h * 0.5 + h * 0.025, w * 0.05, h * 0.05)
  rect(0 - w * 0.5 + w * 0.025, 0 - h * 0.5 + h * 0.25, w * 0.05, h * 0.05)
  rect(0 - w * 0.5 + w * 0.25, 0 - h * 0.5 + h * 0.25, w * 0.05, h * 0.05)

  rect(0 + w * 0.5 - w * 0.025, 0 - h * 0.5 + h * 0.025, w * 0.05, h * 0.05)
  rect(0 + w * 0.5 - w * 0.25, 0 - h * 0.5 + h * 0.025, w * 0.05, h * 0.05)
  rect(0 + w * 0.5 - w * 0.025, 0 - h * 0.5 + h * 0.25, w * 0.05, h * 0.05)
  rect(0 + w * 0.5 - w * 0.25, 0 - h * 0.5 + h * 0.25, w * 0.05, h * 0.05)

  rect(0 - w * 0.5 + w * 0.025, 0 + h * 0.5 - h * 0.025, w * 0.05, h * 0.05)
  rect(0 - w * 0.5 + w * 0.25, 0 + h * 0.5 - h * 0.025, w * 0.05, h * 0.05)
  rect(0 - w * 0.5 + w * 0.025, 0 + h * 0.5 - h * 0.25, w * 0.05, h * 0.05)
  rect(0 - w * 0.5 + w * 0.25, 0 + h * 0.5 - h * 0.25, w * 0.05, h * 0.05)

  rect(0 + w * 0.5 - w * 0.025, 0 + h * 0.5 - h * 0.025, w * 0.05, h * 0.05)
  rect(0 + w * 0.5 - w * 0.25, 0 + h * 0.5 - h * 0.025, w * 0.05, h * 0.05)
  rect(0 + w * 0.5 - w * 0.025, 0 + h * 0.5 - h * 0.25, w * 0.05, h * 0.05)
  rect(0 + w * 0.5 - w * 0.25, 0 + h * 0.5 - h * 0.25, w * 0.05, h * 0.05)
}

function circleColumn01(w, h) {
  fill(fillMid)
  stroke(lineDark)
  strokeWeight(unit * thick)
  circle(0 - w * 0.5 + w * 0.05, 0 - h * 0.5 + h * 0.05, w * 0.14)
  circle(0 + w * 0.5 - w * 0.05, 0 - h * 0.5 + h * 0.05, w * 0.14)
  circle(0 - w * 0.5 + w * 0.05, 0 + h * 0.5 - h * 0.05, w * 0.14)
  circle(0 + w * 0.5 - w * 0.05, 0 + h * 0.5 - h * 0.05, w * 0.14)
} ///corner columns

function circleColumn02(w, h) {
  fill(fillMid)
  stroke(lineDark)
  strokeWeight(unit * thick)
  circle(0 - w * 0.5 + w * 0.05, 0 - h * 0.5 + h * 0.05, w * 0.14)
  circle(0 + w * 0.5 - w * 0.05, 0 - h * 0.5 + h * 0.05, w * 0.14)
  circle(0 - w * 0.5 + w * 0.05, 0 + h * 0.5 - h * 0.05, w * 0.14)
  circle(0 + w * 0.5 - w * 0.05, 0 + h * 0.5 - h * 0.05, w * 0.14)
  strokeWeight(unit * thin)
  circle(0 - w * 0.5 + w * 0.05, 0 - h * 0.5 + h * 0.05, w * 0.07)
  circle(0 + w * 0.5 - w * 0.05, 0 - h * 0.5 + h * 0.05, w * 0.07)
  circle(0 - w * 0.5 + w * 0.05, 0 + h * 0.5 - h * 0.05, w * 0.07)
  circle(0 + w * 0.5 - w * 0.05, 0 + h * 0.5 - h * 0.05, w * 0.07)
} ///big corner columns

function circleColumn03(w, h) {
  fill(fillMid)
  stroke(lineDark)
  strokeWeight(unit * thick)
  circle(0 - w / 4, 0 - h * 0.5 + h * 0.05, w * 0.07)
  circle(0 + w / 4, 0 - h * 0.5 + h * 0.05, w * 0.07)
  circle(0 - w / 4, 0 + h * 0.5 - h * 0.05, w * 0.07)
  circle(0 + w / 4, 0 + h * 0.5 - h * 0.05, w * 0.07)
  circle(0 + w * 0.5 - w * 0.05, 0 + h / 4, w * 0.07)
  circle(0 + w * 0.5 - w * 0.05, 0 - h / 4, w * 0.07)
  circle(0 - w * 0.5 + w * 0.05, 0 + h / 4, w * 0.07)
  circle(0 - w * 0.5 + w * 0.05, 0 - h / 4, w * 0.07)
} //edge columns

function circleColumn04(w, h) {
  fill(fillMid)
  stroke(lineDark)
  strokeWeight(unit * thin)
  circle(0 - w / 4, 0 - h / 4, w * 0.07)
  circle(0 + w / 4, 0 - h / 4, w * 0.07)
  circle(0 - w / 4, 0 + h / 4, w * 0.07)
  circle(0 + w / 4, 0 + h / 4, w * 0.07)
} //centered 4 columns tier 1

function circleColumn05(w, h) {
  fill(fillMid)
  stroke(lineDark)
  strokeWeight(unit * thin)
  circle(0 - w / 4, 0 - h / 8, w * 0.05)
  circle(0 + w / 4, 0 - h / 8, w * 0.05)
  circle(0 - w / 4, 0 + h / 8, w * 0.05)
  circle(0 + w / 4, 0 + h / 8, w * 0.05)
  circle(0 - w / 8, 0 - h / 4, w * 0.05)
  circle(0 + w / 8, 0 - h / 4, w * 0.05)
  circle(0 - w / 8, 0 + h / 4, w * 0.05)
  circle(0 + w / 8, 0 + h / 4, w * 0.05)
} //centered 8 columns tier 2

function circleColumn06(w, h) {
  fill(fillMid)
  stroke(lineDark)
  strokeWeight(unit * thin)
  circle(0 - w / 2 + w * 0.1, 0 - h / 8, w * 0.05)
  circle(0 - w / 2 + w * 0.3, 0 - h / 8, w * 0.05)
  circle(0 - w / 2 + w * 0.5, 0 - h / 8, w * 0.05)
  circle(0 - w / 2 + w * 0.7, 0 - h / 8, w * 0.05)
  circle(0 - w / 2 + w * 0.9, 0 - h / 8, w * 0.05)
  circle(0 - w / 2 + w * 0.1, 0 + h / 8, w * 0.05)
  circle(0 - w / 2 + w * 0.3, 0 + h / 8, w * 0.05)
  circle(0 - w / 2 + w * 0.5, 0 + h / 8, w * 0.05)
  circle(0 - w / 2 + w * 0.7, 0 + h / 8, w * 0.05)
  circle(0 - w / 2 + w * 0.9, 0 + h / 8, w * 0.05)
} //centered colonnade

function walls01(x, y, w, h) {
  fill(fillMid)
  stroke(lineDark)
  strokeWeight(unit * thick)
  rect(0 - w * 0.5 + w * 0.04, y - h / 5, w / 12, h / 5)
  rect(0 - w * 0.5 + w * 0.04, y + h / 5, w / 12, h / 5)
  rect(0 + w * 0.5 - w * 0.04, y - h / 5, w / 12, h / 5)
  rect(0 + w * 0.5 - w * 0.04, y + h / 5, w / 12, h / 5)
  rect(x + w / 5, 0 - h * 0.5 + h * 0.04, w / 5, h / 12)
  rect(x + w / 5, 0 + h * 0.5 - h * 0.04, w / 5, h / 12)
  rect(x - w / 5, 0 + h * 0.5 - h * 0.04, w / 5, h / 12)
  rect(x - w / 5, 0 - h * 0.5 + h * 0.04, w / 5, h / 12)
}
function arcs01(x, y, w, h) {
  //majors
  arc(0, 0 - h * 0.25, w - w * 0.6, h - h * 0.6, PI, 0)
  arc(0, 0 - h * 0.25, w - w * 0.7, h - h * 0.7, PI, 0)
  arc(0, 0 - h * 0.25, w - w * 0.8, h - h * 0.8, PI, 0)
  arc(0, 0 - h * 0.25, w - w * 0.9, h - h * 0.9, PI, 0)

  arc(0, 0 + h * 0.25, w - w * 0.6, h - h * 0.6, 0, PI)
  arc(0, 0 + h * 0.25, w - w * 0.7, h - h * 0.7, 0, PI)
  arc(0, 0 + h * 0.25, w - w * 0.8, h - h * 0.8, 0, PI)
  arc(0, 0 + h * 0.25, w - w * 0.9, h - h * 0.9, 0, PI)

  arc(0 + w * 0.25, 0, w - w * 0.6, h - h * 0.6, 0 - HALF_PI, HALF_PI)
  arc(0 + w * 0.25, 0, w - w * 0.7, h - h * 0.7, 0 - HALF_PI, HALF_PI)
  arc(0 + w * 0.25, 0, w - w * 0.8, h - h * 0.8, 0 - HALF_PI, HALF_PI)
  arc(0 + w * 0.25, 0, w - w * 0.9, h - h * 0.9, 0 - HALF_PI, HALF_PI)

  arc(0 - w * 0.25, 0, w - w * 0.6, h - h * 0.6, HALF_PI, 0 - HALF_PI)
  arc(0 - w * 0.25, 0, w - w * 0.7, h - h * 0.7, HALF_PI, 0 - HALF_PI)
  arc(0 - w * 0.25, 0, w - w * 0.8, h - h * 0.8, HALF_PI, 0 - HALF_PI)
  arc(0 - w * 0.25, 0, w - w * 0.9, h - h * 0.9, HALF_PI, 0 - HALF_PI)
}
function arcs02(x, y, w, h) {
  //majors
  arc(0, 0 - h * 0.25, w - w * 0.6, h - h * 0.6, PI, 0)
  arc(0, 0 - h * 0.25, w - w * 0.7, h - h * 0.7, PI, 0)
  arc(0, 0 - h * 0.25, w - w * 0.8, h - h * 0.8, PI, 0)
  arc(0, 0 - h * 0.25, w - w * 0.9, h - h * 0.9, PI, 0)

  arc(0, 0 + h * 0.25, w - w * 0.6, h - h * 0.6, 0, PI)
  arc(0, 0 + h * 0.25, w - w * 0.7, h - h * 0.7, 0, PI)
  arc(0, 0 + h * 0.25, w - w * 0.8, h - h * 0.8, 0, PI)
  arc(0, 0 + h * 0.25, w - w * 0.9, h - h * 0.9, 0, PI)

  arc(0 + w * 0.25, 0, w - w * 0.6, h - h * 0.6, 0 - HALF_PI, HALF_PI)
  arc(0 + w * 0.25, 0, w - w * 0.7, h - h * 0.7, 0 - HALF_PI, HALF_PI)
  arc(0 + w * 0.25, 0, w - w * 0.8, h - h * 0.8, 0 - HALF_PI, HALF_PI)
  arc(0 + w * 0.25, 0, w - w * 0.9, h - h * 0.9, 0 - HALF_PI, HALF_PI)

  arc(0 - w * 0.25, 0, w - w * 0.6, h - h * 0.6, HALF_PI, 0 - HALF_PI)
  arc(0 - w * 0.25, 0, w - w * 0.7, h - h * 0.7, HALF_PI, 0 - HALF_PI)
  arc(0 - w * 0.25, 0, w - w * 0.8, h - h * 0.8, HALF_PI, 0 - HALF_PI)
  arc(0 - w * 0.25, 0, w - w * 0.9, h - h * 0.9, HALF_PI, 0 - HALF_PI)

  //minors
  arc(0 - w * 0.25, 0 - h * 0.25, w - w * 0.6, h - h * 0.6, 0, HALF_PI)
  arc(0 - w * 0.25, 0 - h * 0.25, w - w * 0.7, h - h * 0.7, 0, HALF_PI)
  arc(0 - w * 0.25, 0 - h * 0.25, w - w * 0.8, h - h * 0.8, 0, HALF_PI)
  arc(0 - w * 0.25, 0 - h * 0.25, w - w * 0.9, h - h * 0.9, 0, HALF_PI)

  arc(0 + w * 0.25, 0 - h * 0.25, w - w * 0.6, h - h * 0.6, HALF_PI, PI)
  arc(0 + w * 0.25, 0 - h * 0.25, w - w * 0.7, h - h * 0.7, HALF_PI, PI)
  arc(0 + w * 0.25, 0 - h * 0.25, w - w * 0.8, h - h * 0.8, HALF_PI, PI)
  arc(0 + w * 0.25, 0 - h * 0.25, w - w * 0.9, h - h * 0.9, HALF_PI, PI)

  arc(0 + w * 0.25, 0 + h * 0.25, w - w * 0.6, h - h * 0.6, PI, 0 - HALF_PI)
  arc(0 + w * 0.25, 0 + h * 0.25, w - w * 0.7, h - h * 0.7, PI, 0 - HALF_PI)
  arc(0 + w * 0.25, 0 + h * 0.25, w - w * 0.8, h - h * 0.8, PI, 0 - HALF_PI)
  arc(0 + w * 0.25, 0 + h * 0.25, w - w * 0.9, h - h * 0.9, PI, 0 - HALF_PI)

  arc(0 - w * 0.25, 0 + h * 0.25, w - w * 0.6, h - h * 0.6, 0 - HALF_PI, 0)
  arc(0 - w * 0.25, 0 + h * 0.25, w - w * 0.7, h - h * 0.7, 0 - HALF_PI, 0)
  arc(0 - w * 0.25, 0 + h * 0.25, w - w * 0.8, h - h * 0.8, 0 - HALF_PI, 0)
  arc(0 - w * 0.25, 0 + h * 0.25, w - w * 0.9, h - h * 0.9, 0 - HALF_PI, 0)
}
function arcs03(x, y, w, h) {
  fill(fillMid)
  stroke(lineDark)
  strokeWeight(unit * thick)
  arc(0 - w * 0.5, 0 - h * 0.5, w * 0.6, h * 0.6, 0, HALF_PI)
  arc(0 + w * 0.5, 0 - h * 0.5, w * 0.6, h * 0.6, HALF_PI, PI)
  arc(0 - w * 0.5, 0 + h * 0.5, w * 0.6, h * 0.6, -HALF_PI, 0)
  arc(0 + w * 0.5, 0 + h * 0.5, w * 0.6, h * 0.6, PI, -HALF_PI)
  strokeWeight(unit * thin)
  arc(0 - w * 0.5, 0 - h * 0.5, w * 0.5, h * 0.5, 0, HALF_PI)
  arc(0 + w * 0.5, 0 - h * 0.5, w * 0.5, h * 0.5, HALF_PI, PI)
  arc(0 - w * 0.5, 0 + h * 0.5, w * 0.5, h * 0.5, -HALF_PI, 0)
  arc(0 + w * 0.5, 0 + h * 0.5, w * 0.5, h * 0.5, PI, -HALF_PI)
  arc(0 - w * 0.5, 0 - h * 0.5, w * 0.4, h * 0.4, 0, HALF_PI)
  arc(0 + w * 0.5, 0 - h * 0.5, w * 0.4, h * 0.4, HALF_PI, PI)
  arc(0 - w * 0.5, 0 + h * 0.5, w * 0.4, h * 0.4, -HALF_PI, 0)
  arc(0 + w * 0.5, 0 + h * 0.5, w * 0.4, h * 0.4, PI, -HALF_PI)
  strokeWeight(unit * thick)
  line(0 - w * 0.5, 0 - h * 0.5, 0 - w * 0.5 + w * 0.3, 0 - h * 0.5)
  line(0 - w * 0.5, 0 + h * 0.5, 0 - w * 0.5 + w * 0.3, 0 + h * 0.5)
  line(0 + w * 0.5, 0 - h * 0.5, 0 + w * 0.5 - w * 0.3, 0 - h * 0.5)
  line(0 + w * 0.5, 0 + h * 0.5, 0 + w * 0.5 - w * 0.3, 0 + h * 0.5)
  line(0 - w * 0.5, 0 - h * 0.5, 0 - w * 0.5, 0 - h * 0.5 + h * 0.3)
  line(0 + w * 0.5, 0 - h * 0.5, 0 + w * 0.5, 0 - h * 0.5 + h * 0.3)
  line(0 - w * 0.5, 0 + h * 0.5, 0 - w * 0.5, 0 + h * 0.5 - h * 0.3)
  line(0 + w * 0.5, 0 + h * 0.5, 0 + w * 0.5, 0 + h * 0.5 - h * 0.3)
}
function dashedLineCross(x, y, w, h) {
  push()
  stroke(lineDark)
  strokeWeight(unit * thin)
  setLineDash([3, 5]) //create the dashed line
  line(0 - w * 0.5, 0 - h * 0.1, 0 + w * 0.5, 0 - h * 0.1)
  line(0 - w * 0.5, 0 + h * 0.1, 0 + w * 0.5, 0 + h * 0.1)
  line(0 - w * 0.1, 0 - h * 0.5, 0 - w * 0.1, 0 + h * 0.5)
  line(0 + w * 0.1, 0 - h * 0.5, 0 + w * 0.1, 0 + h * 0.5)
  pop()
  strokeWeight(unit * thin)
  fill(fillMid)
  circle(0 - w * 0.1, 0 - h * 0.1, unit)
  circle(0 + w * 0.1, 0 - h * 0.1, unit)
  circle(0 - w * 0.1, 0 + h * 0.1, unit)
  circle(0 + w * 0.1, 0 + h * 0.1, unit)
}
function pillShape(x, y, w, h) {
  fill(lineDark)
  noStroke()
  arc(0, 0 - h / 8, w / 4, w / 4, PI, 0)
  arc(0, 0 + h / 8, w / 4, w / 4, 0, PI)
  rect(0, 0, w / 4, h / 4 + 2)
  fill(contrastLowlight)
  arc(0, 0 - h / 9, w / 6, w / 4, PI, 0)
  arc(0, 0 + h / 9, w / 6, w / 4, 0, PI)
  rect(0, 0, w / 4, h / 4 + 2)
}

//GRID OVERLAYS - CANDLES, OVERGROWTH, ANYTHING ELSE
function overlayGrid01(x, y, w, h) {
  push()
  translate(x, y)
  ///CANDLES
  // Generate random coordinates for each grid
  for (let i = 0; i < numberCandles; i++) {
    let coordinate = {
      x1: random(0 - w / 2, 0 + w / 2),
      y1: random(0 - h / 2, 0 + h / 2),
    }
    candleCoordinates01.push(coordinate)
  }
  if (colorPalleteName === 'night') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      candle(candleCoordinates01[i].x1, candleCoordinates01[i].y1, 5)
    }
  }
  if (materialType === 'backLight') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      digiCandle(candleCoordinates01[i].x1, candleCoordinates01[i].y1, 5)
    }
  }
  pop()
}
function overlayGrid02(x, y, w, h) {
  push()
  translate(x, y)
  ///CANDLES
  // Generate random coordinates for each grid
  for (let i = 0; i < numberCandles; i++) {
    let coordinate = {
      x2: random(0 - w / 2, 0 + w / 2),
      y2: random(0 - h / 2, 0 + h / 2),
    }
    candleCoordinates02.push(coordinate)
  }
  if (colorPalleteName === 'night') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      candle(candleCoordinates02[i].x2, candleCoordinates02[i].y2, 5)
    }
  }
  if (materialType === 'backLight') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      digiCandle(candleCoordinates02[i].x2, candleCoordinates02[i].y2, 5)
    }
  }
  pop()
}
function overlayGrid03(x, y, w, h) {
  push()
  translate(x, y)
  ///CANDLES
  // Generate random coordinates for each grid
  for (let i = 0; i < numberCandles; i++) {
    let coordinate = {
      x3: random(0 - w / 2, 0 + w / 2),
      y3: random(0 - h / 2, 0 + h / 2),
    }
    candleCoordinates03.push(coordinate)
  }
  if (colorPalleteName === 'night') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      candle(candleCoordinates03[i].x3, candleCoordinates03[i].y3, 5)
    }
  }
  if (materialType === 'backLight') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      digiCandle(candleCoordinates03[i].x3, candleCoordinates03[i].y3, 5)
    }
  }
  pop()
}
function overlayGrid04(x, y, w, h) {
  push()
  translate(x, y)
  ///CANDLES
  // Generate random coordinates for each grid
  for (let i = 0; i < numberCandles; i++) {
    let coordinate = {
      x4: random(0 - w / 2, 0 + w / 2),
      y4: random(0 - h / 2, 0 + h / 2),
    }
    candleCoordinates04.push(coordinate)
  }
  if (colorPalleteName === 'night') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      candle(candleCoordinates04[i].x4, candleCoordinates04[i].y4, 5)
    }
  }
  if (materialType === 'backLight') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      digiCandle(candleCoordinates04[i].x4, candleCoordinates04[i].y4, 5)
    }
  }
  pop()
}
function overlayGrid05(x, y, w, h) {
  push()
  translate(x, y)
  ///CANDLES
  // Generate random coordinates for each grid
  for (let i = 0; i < numberCandles; i++) {
    let coordinate = {
      x5: random(0 - w / 2, 0 + w / 2),
      y5: random(0 - h / 2, 0 + h / 2),
    }
    candleCoordinates05.push(coordinate)
  }
  if (colorPalleteName === 'night') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      candle(candleCoordinates05[i].x5, candleCoordinates05[i].y5, 5)
    }
  }
  if (materialType === 'backLight') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      digiCandle(candleCoordinates05[i].x5, candleCoordinates05[i].y5, 5)
    }
  }
  pop()
}
function overlayGrid06(x, y, w, h) {
  push()
  translate(x, y)
  ///CANDLES
  // Generate random coordinates for each grid
  for (let i = 0; i < numberCandles; i++) {
    let coordinate = {
      x6: random(0 - w / 2, 0 + w / 2),
      y6: random(0 - h / 2, 0 + h / 2),
    }
    candleCoordinates06.push(coordinate)
  }
  if (colorPalleteName === 'night') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      candle(candleCoordinates06[i].x6, candleCoordinates06[i].y6, 5)
    }
  }
  if (materialType === 'backLight') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      digiCandle(candleCoordinates06[i].x6, candleCoordinates06[i].y6, 5)
    }
  }
  pop()
}
function overlayGrid07(x, y, w, h) {
  push()
  translate(x, y)
  ///CANDLES
  // Generate random coordinates for each grid
  for (let i = 0; i < numberCandles; i++) {
    let coordinate = {
      x7: random(0 - w / 2, 0 + w / 2),
      y7: random(0 - h / 2, 0 + h / 2),
    }
    candleCoordinates07.push(coordinate)
  }
  if (colorPalleteName === 'night') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      candle(candleCoordinates07[i].x7, candleCoordinates07[i].y7, 5)
    }
  }
  if (materialType === 'backLight') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      digiCandle(candleCoordinates07[i].x7, candleCoordinates07[i].y7, 5)
    }
  }
  pop()
}
function overlayGrid08(x, y, w, h) {
  push()
  translate(x, y)
  ///CANDLES
  // Generate random coordinates for each grid
  for (let i = 0; i < numberCandles; i++) {
    let coordinate = {
      x8: random(0 - w / 2, 0 + w / 2),
      y8: random(0 - h / 2, 0 + h / 2),
    }
    candleCoordinates08.push(coordinate)
  }
  if (colorPalleteName === 'night') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      candle(candleCoordinates08[i].x8, candleCoordinates08[i].y8, 5)
    }
  }
  if (materialType === 'backLight') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      digiCandle(candleCoordinates08[i].x8, candleCoordinates08[i].y8, 5)
    }
  }
  pop()
}
function overlayGrid09(x, y, w, h) {
  push()
  translate(x, y)
  ///CANDLES
  // Generate random coordinates for each grid
  for (let i = 0; i < numberCandles; i++) {
    let coordinate = {
      x9: random(0 - w / 2, 0 + w / 2),
      y9: random(0 - h / 2, 0 + h / 2),
    }
    candleCoordinates09.push(coordinate)
  }
  if (colorPalleteName === 'night') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      candle(candleCoordinates09[i].x9, candleCoordinates09[i].y9, 5)
    }
  }
  if (materialType === 'backLight') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      digiCandle(candleCoordinates09[i].x9, candleCoordinates09[i].y9, 5)
    }
  }
  pop()
}
function overlayGrid10(x, y, w, h) {
  push()
  translate(x, y)
  ///CANDLES
  // Generate random coordinates for each grid
  for (let i = 0; i < numberCandles; i++) {
    let coordinate = {
      x10: random(0 - w / 2, 0 + w / 2),
      y10: random(0 - h / 2, 0 + h / 2),
    }
    candleCoordinates10.push(coordinate)
  }
  if (colorPalleteName === 'night') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      candle(candleCoordinates10[i].x10, candleCoordinates10[i].y10, 5)
    }
  }
  if (materialType === 'backLight') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      digiCandle(candleCoordinates10[i].x10, candleCoordinates10[i].y10, 5)
    }
  }
  pop()
}
function overlayGrid11(x, y, w, h) {
  push()
  translate(x, y)
  ///CANDLES
  // Generate random coordinates for each grid
  for (let i = 0; i < numberCandles; i++) {
    let coordinate = {
      x11: random(0 - w / 2, 0 + w / 2),
      y11: random(0 - h / 2, 0 + h / 2),
    }
    candleCoordinates11.push(coordinate)
  }
  if (colorPalleteName === 'night') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      candle(candleCoordinates11[i].x11, candleCoordinates11[i].y11, 5)
    }
  }
  if (materialType === 'backLight') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      digiCandle(candleCoordinates11[i].x11, candleCoordinates11[i].y11, 5)
    }
  }
  pop()
}
function overlayGrid12(x, y, w, h) {
  push()
  translate(x, y)
  ///CANDLES
  // Generate random coordinates for each grid
  for (let i = 0; i < numberCandles; i++) {
    let coordinate = {
      x12: random(0 - w / 2, 0 + w / 2),
      y12: random(0 - h / 2, 0 + h / 2),
    }
    candleCoordinates12.push(coordinate)
  }
  if (colorPalleteName === 'night') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      candle(candleCoordinates12[i].x12, candleCoordinates12[i].y12, 5)
    }
  }
  if (materialType === 'backLight') {
    for (let i = 0; i < numberCandles; i++) {
      //let gridCoordinate = candleCoordinates01[i];
      // Draw the circle at the current grid coordinate
      digiCandle(candleCoordinates12[i].x12, candleCoordinates12[i].y12, 5)
    }
  }
  pop()
}

//////ROOMS
/////TYPE 01
function room01_A(x, y, w, h) {
  push()
  //translate(x, y)
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w * 0.8, h * 0.8)
  footings(0, 0, w, h)
  if (randomExtras > 0.5) {
    pillShape(0, 0, w, h)
  }
  pop()
}
function room01_B(x, y, w, h) {
  push()
  //translate(x, y)
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w * 0.7, h * 0.7)
  stroke(lineDark)
  fill(fillLight)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w * 0.7, h * 0.7)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText01, 0, 0, w * 0.7, h * 0.7) ///TILE BACKGROUND
  fill(fillShadow)
  stroke(contrastLowlight)
  strokeWeight(unit * micro)
  circle(0 - w / 6, 0, w * 0.05)
  circle(0 + w / 6, 0, w * 0.05)
  circle(0, 0 - w / 6, w * 0.05)
  circle(0, 0 + w / 6, w * 0.05)
  circle(0, 0, w * 0.1)
  noFill()
  stroke(lineLight)
  strokeWeight(unit * micro)
  rect(0, 0, w * 0.65, h * 0.65)
  if (randomExtras > 0.5) {
    pillShape(0, 0, w, h)
  }
  pop()
}
function room01_C(x, y, w, h) {
  push()
  //translate(x, y)
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  stroke(lineDark)
  fill(fillLight2)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  if (randomExtras < 0.5) {
    circle(0, 0, w * 0.5)
    circle(0, 0, w * 0.4)
    circle(0, 0, w * 0.3)
    circle(0, 0, w * 0.2)
    circle(0, 0, w * 0.1)
  }
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText01, 0, 0, w, h) ///TILE BACKGROUND
  columns01(x, y, w, h)
  columns02(x, y, w, h)
  fill(fillShadow)
  stroke(contrastLowlight)
  strokeWeight(unit * micro)
  circle(0 - w / 6, 0, w * 0.05)
  circle(0 + w / 6, 0, w * 0.05)
  circle(0, 0 - w / 6, w * 0.05)
  circle(0, 0 + w / 6, w * 0.05)
  circle(0 - w / 3, 0, w * 0.05)
  circle(0 + w / 3, 0, w * 0.05)
  pop()
}
function room01_D(x, y, w, h) {
  push()
  //translate(x, y)
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  stroke(lineDark)
  fill(fillLight3)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  if (randomExtras < 0.5) {
    rect(0, 0, w * 0.2)
    circle(0, 0, w * 0.18)
    circle(0, 0, w * 0.16)
    circle(0, 0, w * 0.14)
    circle(0, 0, w * 0.12)
  }
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText01, 0, 0, w, h) ///TILE BACKGROUND
  //columns01(x, y, w, h)
  //columns02(x, y, w, h)
  columns03(x, y, w, h)
  if (randomExtras > 0.5) {
    pillShape(0, 0, w, h)
    fill(fillLight3)
    rect(0, 0, w * 0.2)
    circle(0, 0, w * 0.18)
    circle(0, 0, w * 0.16)
    circle(0, 0, w * 0.14)
    circle(0, 0, w * 0.12)
  }
  if (randomExtras <= 0.5) {
    push()
    translate(-w * 0.25, 0)
    pillShape(0, 0, w * 0.7, h * 0.7)
    fill(fillMid)
    stroke(lineDark)
    circle(0, 0, w * 0.13)
    pop()
  }
  pop()
}
function room01_E(x, y, w, h) {
  push()
  //translate(x, y)
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  stroke(lineDark)
  fill(fillLight4)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  rect(0 - w * 0.35, 0, w * 0.2, h * 0.4)
  rect(0 - w * 0.35, 0, w * 0.15, h * 0.35)
  rect(0 - w * 0.35, 0, w * 0.1, h * 0.3)
  rect(0 - w * 0.35, 0, w * 0.05, h * 0.25)
  if (randomExtras > 0.5) {
    rect(0 + w * 0.35, 0, w * 0.2, h * 0.4)
    rect(0 + w * 0.35, 0, w * 0.15, h * 0.35)
    rect(0 + w * 0.35, 0, w * 0.1, h * 0.3)
    rect(0 + w * 0.35, 0, w * 0.05, h * 0.25)
    pillShape(0, 0, w, h)
  }
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText01, 0, 0, w, h) ///TILE BACKGROUND
  columns01(x, y, w, h)
  columns02(x, y, w, h)
  //columns03(x, y, w, h)
  fill(fillMid)
  stroke(lineDark)
  strokeWeight(unit * thin)
  circle(0 - w * 0.5 + w * 0.3, 0 - h * 0.55 + h * 0.1, w * 0.05)
  circle(0 + w * 0.5 - w * 0.3, 0 - h * 0.55 + h * 0.1, w * 0.05)
  circle(0 - w * 0.5 + w * 0.3, 0 + h * 0.55 - h * 0.1, w * 0.05)
  circle(0 + w * 0.5 - w * 0.3, 0 + h * 0.55 - h * 0.1, w * 0.05)
  circle(0 - w * 0.55 + w * 0.1, 0 + h * 0.5 - h * 0.3, w * 0.05)
  circle(0 + w * 0.55 - w * 0.1, 0 + h * 0.5 - h * 0.3, w * 0.05)
  circle(0 - w * 0.55 + w * 0.1, 0 - h * 0.5 + h * 0.3, w * 0.05)
  circle(0 + w * 0.55 - w * 0.1, 0 - h * 0.5 + h * 0.3, w * 0.05)
  fill(backgroundColor)
  noStroke()
  //circle(0, 0, w * 0.4, h * 0.4)
  pop()
}
function room01_F(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText01, 0, 0, w, h) ///TILE BACKGROUND
  //columns01(x, y, w, h)
  //columns02(x, y, w, h)
  columns03(x, y, w, h)
  circleColumn05(w, h)
  pop()
}
function room01_G(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight2)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  if (randomExtras > 0.5) {
    rect(0, 0 - h * 0.3, w * 0.2)
    circle(0, 0 - h * 0.3, w * 0.18)
    circle(0, 0 - h * 0.3, w * 0.16)
    circle(0, 0 - h * 0.3, w * 0.14)
    circle(0, 0 - h * 0.3, w * 0.12)
  }
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText01, 0, 0, w, h) ///TILE BACKGROUND
  //   columns01(x, y, w, h)
  //   columns02(x, y, w, h)
  columns03(x, y, w, h)
  circleColumn06(w, h)
  stroke(lineLight)
  strokeWeight(unit * micro)
  fill(fillLight)
  rect(0, 0, w * 0.1, h * 0.1)
  rect(0 - w / 2 + w * 0.1, 0, w * 0.1, h * 0.1)
  rect(0 + w / 2 - w * 0.1, 0, w * 0.1, h * 0.1)
  rect(0 - w / 2 + w * 0.3, 0, w * 0.1, h * 0.1)
  rect(0 + w / 2 - w * 0.3, 0, w * 0.1, h * 0.1)
  pop()
}
function room01_H(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight3)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  circle(0, 0 - h * 0.4, w * 0.2)
  circle(0, 0 - h * 0.4, w * 0.18)
  circle(0, 0 - h * 0.4, w * 0.16)
  circle(0, 0 - h * 0.4, w * 0.14)
  circle(0, 0 - h * 0.4, w * 0.12)
  if (randomExtras > 0.5) {
    circle(0, 0 + h * 0.4, w * 0.2)
    circle(0, 0 + h * 0.4, w * 0.18)
    circle(0, 0 + h * 0.4, w * 0.16)
    circle(0, 0 + h * 0.4, w * 0.14)
    circle(0, 0 + h * 0.4, w * 0.12)
  }
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText01, 0, 0, w, h) ///TILE BACKGROUND
  //   columns01(x, y, w, h)
  //   columns02(x, y, w, h)
  columns03(x, y, w, h)
  circleColumn06(w, h)
  fill(fillDark)
  noStroke()
  circle(0, 0, w * 0.1)
  fill(lineLight)
  stroke(contrastLowlight)
  strokeWeight(unit * micro)
  circle(0 - w / 4, 0, w * 0.05)
  circle(0 + w / 4, 0, w * 0.05)
  circle(0, 0 - h / 4, w * 0.05)
  circle(0, 0 + h / 4, w * 0.05)
  pop()
}

////TYPE 02
function room02_A(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight2)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  rect(0 + w * 0.05, 0, w * 0.6, h * 0.6)
  rect(0 + w * 0.075, 0, w * 0.5, h * 0.5)
  rect(0 + w * 0.1, 0, w * 0.4, h * 0.4)
  rect(0 + w * 0.125, 0, w * 0.3, h * 0.3)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText02, 0, 0, w, h) //BACKGROUND TILES
  columns01(x, y, w, h)
  translate(w / 4, 0)
  squarePool(x, y, w, h)
  pop()
}
function room02_B(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText02, 0, 0, w, h) //BACKGROUND TILES
  columns01(x, y, w, h)
  if (randomExtras > 0.5) {
    dashedLineCross(0, 0, w, h)
  }
  translate(w / 4, h / 4)
  squarePool(x, y, w, h)

  pop()
}
function room02_C(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight3)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  rect(0 - w * 0.25, 0 - h * 0.15, w * 0.3, h * 0.2)
  rect(0 - w * 0.25, 0 - h * 0.15, w * 0.25, h * 0.15)
  rect(0 - w * 0.25, 0 - h * 0.15, w * 0.2, h * 0.1)
  rect(0 - w * 0.25, 0 - h * 0.15, w * 0.2, h * 0.1)
  rect(0 - w * 0.25, 0 - h * 0.15, w * 0.2, h * 0.1)
  rect(0 - w * 0.25, 0 - h * 0.15, w * 0.2, h * 0.1)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText02, 0, 0, w, h) //BACKGROUND TILES
  columns01(x, y, w, h)
  translate(w / 4, h / 4)
  squarePool(x, y, w, h)
  translate(-w / 2, 0)
  squarePool(x, y, w, h)
  pop()
}
function room02_D(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText02, 0, 0, w, h) //BACKGROUND TILES
  columns01(x, y, w, h)
  translate(w / 4, h / 4)
  squarePool(x, y, w, h)
  translate(-w / 2, 0)
  squarePool(x, y, w, h)
  translate(0, -h / 2)
  squarePool(x, y, w, h)
  fill(fillLight3)
  circle(0, 0, unit * 3)
  fill(contrastLowlight)
  circle(0, 0, unit * 1)
  pop()
}
function room02_E(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight4)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText02, 0, 0, w, h) //BACKGROUND TILES
  columns01(x, y, w, h)
  translate(w / 4, h / 4)
  squarePool(x, y, w, h)
  translate(-w / 2, 0)
  fill(fillLight4)
  circle(0, 0, unit * 3)
  fill(contrastLowlight)
  circle(0, 0, unit * 1)
  translate(0, -h / 2)
  squarePool(x, y, w, h)
  translate(w / 2, 0)
  fill(fillLight3)
  circle(0, 0, unit * 3)
  fill(contrastLowlight)
  circle(0, 0, unit * 1)
  pop()
}
function room02_F(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight2)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText02, 0, 0, w, h) //BACKGROUND TILES
  columns03(x, y, w, h)
  translate(0, h / 4)
  squarePool(x, y, w, h)
  translate(0, -h / 2)
  squarePool(x, y, w, h)
  fill(fillLight4)
  circle(0, 0, unit * 3)
  fill(contrastHighlight)
  circle(0, 0, unit * 1)
  pop()
}
function room02_G(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText02, 0, 0, w, h) //BACKGROUND TILES
  stroke(lineLight)
  strokeWeight(unit * micro)
  fill(fillLight)
  circle(0, 0, w / 2 + unit)
  fill(fillWater)
  circle(0, 0, w / 2)
  fill(fillLight)
  circle(0, 0, w / 4)
  pop()
}
function room02_H(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight4)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText02, 0, 0, w, h) //BACKGROUND TILES
  stroke(lineLight)
  strokeWeight(unit * micro)
  fill(fillLight)
  circle(0, 0, w / 2 + unit)
  fill(fillWater)
  circle(0, 0, w / 2)
  fill(fillLight)
  circle(0, 0, w / 4)
  fill(fillDark)
  circle(0, 0, w / 6)
  pop()
}

////TYPE 03
function room03_A(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(fillDark)
  noStroke()
  rect(0, 0, w * 0.8, h * 0.8)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText01, 0, 0, w, h) ///tile texture
  columns01(0, 0, w, h)
  if (randomExtras > 0.5) {
    dashedLineCross(0, 0, w, h)
  }
  pop()
}
function room03_B(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight2)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(fillDark)
  noStroke()
  rect(0, 0, w * 0.85, h * 0.85)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText01, 0, 0, w, h) ///tile texture
  walls01(0, 0, w, h)
  columns03(0, 0, w, h)
  pop()
}
function room03_C(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight3)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(fillDark)
  noStroke()
  rect(0, 0, w * 0.85, h * 0.85)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText01, 0, 0, w, h) ///tile texture
  walls01(0, 0, w, h)
  columns03(0, 0, w, h)
  circleColumn05(w, h)
  pop()
}
function room03_D(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight3)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(fillDark)
  noStroke()
  rect(0, 0, w * 0.85, h * 0.85)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText01, 0, 0, w, h) ///tile texture
  walls01(0, 0, w, h)
  columns03(0, 0, w, h)
  circleColumn05(w, h)
  circleColumn05(w, h)
  fill(contrastHighlight)
  stroke(lineLight)
  rect(0, 0, w * 0.3, h * 0.3)
  fill(fillDark)
  rect(0, 0, w * 0.25, h * 0.25)
  fill(fillLight)
  noStroke()
  circle(0 - w * 0.1, 0 - h * 0.1, w * 0.03)
  circle(0 - w * 0.1, 0 + h * 0.1, w * 0.03)
  circle(0 + w * 0.1, 0 - h * 0.1, w * 0.03)
  circle(0 + w * 0.1, 0 + h * 0.1, w * 0.03)
  pop()
}
function room03_E(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight4)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(lineLight)
  noStroke()
  rect(0, 0, w, h)
  fill(fillLight)
  rect(0, 0, w * 0.57, h * 0.57)
  fill(lineLight)
  rect(0, 0, w * 0.52, h * 0.52)
  fill(fillLight)
  rect(0, 0, w * 0.47, h * 0.47)
  fill(fillDark)
  rect(0, 0, w * 0.42, h * 0.42)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText01, 0, 0, w, h) ///tile texture
  columns03(0, 0, w, h)
  pop()
}
function room03_F(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight3)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(lineLight)
  noStroke()
  rect(0, 0, w, h)
  fill(fillLight)
  rect(0, 0, w * 0.57, h * 0.57)
  fill(lineLight)
  rect(0, 0, w * 0.52, h * 0.52)
  fill(fillLight)
  rect(0, 0, w * 0.47, h * 0.47)
  fill(fillDark)
  rect(0, 0, w * 0.42, h * 0.42)
  fill(lineLight)
  noStroke()
  beginShape()
  vertex(0 - w * 0.21, 0 - h * 0.21)
  vertex(0 + w * 0.21, 0 - h * 0.21)
  vertex(0, 0)
  endShape(CLOSE)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText01, 0, 0, w, h) ///tile texture
  columns03(0, 0, w, h)
  pop()
}
function room03_G(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight3)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(lineLight)
  noStroke()
  rect(0, 0, w, h)
  fill(fillLight)
  rect(0, 0, w * 0.57, h * 0.57)
  fill(lineLight)
  rect(0, 0, w * 0.52, h * 0.52)
  fill(fillLight)
  rect(0, 0, w * 0.47, h * 0.47)
  fill(fillDark)
  rect(0, 0, w * 0.42, h * 0.42)
  fill(lineLight)
  noStroke()
  beginShape()
  vertex(0 - w * 0.21, 0 - h * 0.21)
  vertex(0 + w * 0.21, 0 - h * 0.21)
  vertex(0, 0)
  endShape(CLOSE)
  beginShape()
  vertex(0 - w * 0.21, 0 + h * 0.21)
  vertex(0 + w * 0.21, 0 + h * 0.21)
  vertex(0, 0)
  endShape(CLOSE)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText01, 0, 0, w, h) ///tile texture
  columns03(0, 0, w, h)
  pop()
}
function room03_H(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight2)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(lineLight)
  noStroke()
  rect(0, 0, w, h)
  fill(fillLight)
  rect(0, 0, w * 0.57, h * 0.57)
  fill(lineLight)
  rect(0, 0, w * 0.52, h * 0.52)
  fill(fillLight)
  rect(0, 0, w * 0.47, h * 0.47)
  fill(fillDark)
  rect(0, 0, w * 0.42, h * 0.42)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText01, 0, 0, w, h) ///tile texture
  fill(backgroundColor)
  stroke(lineLight)
  rect(0, 0, w * 0.2, h * 0.2)
  columns03(0, 0, w, h)
  //light up trapdoor
  if (
    x > circlePosition.x - w / 3 &&
    x < circlePosition.x + w / 3 &&
    y > circlePosition.y - h / 3 &&
    y < circlePosition.y + h / 3
  ) {
    fill(contrastLowlight)
    stroke(lineLight)
    rect(0, 0, w * 0.2, h * 0.2)
  }
  pop()
}

////TYPE 04 - WATER
function room04_A(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight2)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(fillWater)
  stroke(lineLight)
  rect(0, 0, w * 0.9, h * 0.9)
  if (randomExtras > 0.5) {
    circleColumn05(w, h)
  }
  if (randomExtras < 0.5) {
    push()
    scale(0.8)
    columns01B(0, 0, w, h)
    pop()
  }
  pop()
}
function room04_B(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight3)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(fillWater)
  stroke(lineLight)
  rect(0, 0, w * 0.9, h * 0.9)
  fill(fillLight4)
  strokeWeight(unit * micro)
  rect(0, 0 - h / 3, w / 8, h / 10)
  rect(0, 0 + h / 3, w / 8, h / 10)
  rect(0 - w / 3, 0, w / 10, h / 8)
  rect(0 + w / 3, 0, w / 10, h / 8)
  if (randomExtras > 0.5) {
    push()
    scale(0.8)
    columns01B(0, 0, w, h)
    pop()
  }
  pop()
}
function room04_C(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight2)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(fillWater)
  stroke(lineLight)
  rect(0, 0, w * 0.9, h * 0.9)
  fill(fillLight3)
  strokeWeight(unit * micro)
  rect(0, 0 - h / 3, w / 8, h / 10)
  rect(0, 0 + h / 3, w / 8, h / 10)
  rect(0 - w / 3, 0, w / 10, h / 8)
  rect(0 + w / 3, 0, w / 10, h / 8)
  rect(0, 0 - h / 6, w / 8, h / 10)
  rect(0, 0 + h / 6, w / 8, h / 10)
  rect(0 - w / 6, 0, w / 10, h / 8)
  rect(0 + w / 6, 0, w / 10, h / 8)
  pop()
}
function room04_D(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight4)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(fillWater)
  stroke(lineLight)
  rect(0, 0, w * 0.9, h * 0.9)
  fill(fillLight2)
  strokeWeight(unit * micro)
  rect(0, 0 - h / 3, w / 8, h / 10)
  rect(0, 0 + h / 3, w / 8, h / 10)
  rect(0 - w / 3, 0, w / 10, h / 8)
  rect(0 + w / 3, 0, w / 10, h / 8)
  rect(0, 0 - h / 6, w / 8, h / 10)
  rect(0, 0 + h / 6, w / 8, h / 10)
  rect(0 - w / 6, 0, w / 10, h / 8)
  rect(0 + w / 6, 0, w / 10, h / 8)
  stroke(lineLight)
  fill(contrastHighlight)
  circle(0, 0, w / 6)
  fill(contrastLowlight)
  circle(0, 0, w / 10)
  if (randomExtras > 0.5) {
    dashedLineCross(0, 0, w, h)
  }
  pop()
}
function room04_E(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w * 0.8, h * 0.8)
  //translate(x, y)
  fill(fillLight2)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w * 0.8, h * 0.8)
  fill(fillWater)
  stroke(lineLight)
  rect(0, 0, w * 0.7, h * 0.7)
  push()
  rotate(QUARTER_PI)
  strokeWeight(unit * micro)
  stroke(lineLight)
  fill(fillMid)
  rect(0, 0, w / 2.5, w / 2.5)
  fill(fillLight)
  rect(0, 0, w / 3, w / 3)
  stroke(lineLight)
  fill(contrastLowlight)
  rect(0, 0, w / 4, w / 4)
  if (randomExtras > 0.5) {
    stroke(lineDark)
    strokeWeight(unit * thin)
    fill(contrastHighlight)
    circle(0 - w / 6, 0 - w / 6, unit * 1.5)
    circle(0 + w / 6, 0 - w / 6, unit * 1.5)
    circle(0 - w / 6, 0 + w / 6, unit * 1.5)
    circle(0 + w / 6, 0 + w / 6, unit * 1.5)
  }

  pop()
  pop()
}
function room04_F(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  fill(fillLight4)
  noStroke()
  rect(0, 0, w * 0.95, h * 0.95)
  stroke(lineLight)
  strokeWeight(unit * micro)
  rect(0, 0, w * 0.8, h * 0.8)
  rect(0, 0, w * 0.7, h * 0.7)
  rect(0, 0, w * 0.6, h * 0.6)
  rect(0, 0, w * 0.5, h * 0.5)
  rect(0, 0, w * 0.4, h * 0.4)
  fill(fillLight3)
  rect(0, 0 + h * 0.1, w * 0.3, h * 0.6)
  fill(fillWater)
  rect(0, 0 + h * 0.1, w * 0.25, h * 0.55)
  pop()
}
function room04_G(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  fill(fillLight3)
  noStroke()
  rect(0, 0, w * 0.95, h * 0.95)
  stroke(lineLight)
  strokeWeight(unit * micro)
  rect(0, 0, w * 0.8, h * 0.8)
  rect(0, 0, w * 0.7, h * 0.7)
  rect(0, 0, w * 0.6, h * 0.6)
  rect(0, 0, w * 0.5, h * 0.5)
  rect(0, 0, w * 0.4, h * 0.4)
  fill(lineLight)
  rect(0, 0, w * 0.3, h * 0.3)
  fill(fillWater)
  rect(0, 0, w * 0.25, h * 0.25)
  fill(fillLight2)
  circle(0, 0, w * 0.1)
  pop()
}
function room04_H(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight2)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(fillWater)
  noStroke()
  rect(0, 0 + h * 0.25, w * 0.9, h * 0.4)
  fill(fillLight2)
  stroke(lineLight)
  strokeWeight(unit * micro)
  rect(0, 0 - h / 5, w * 0.9, h * 0.5)
  rect(0, 0 - h / 5 - h * 0.025, w * 0.9, h * 0.45)
  rect(0, 0 - h / 5 - h * 0.05, w * 0.9, h * 0.4)
  rect(0, 0 - h / 5 - h * 0.075, w * 0.9, h * 0.35)
  rect(0, 0 - h / 5 - h * 0.1, w * 0.9, h * 0.3)
  rect(0, 0 - h / 5 - h * 0.125, w * 0.9, h * 0.25)
  rect(0, 0 - h / 5 - h * 0.15, w * 0.9, h * 0.2)
  rect(0, 0 - h / 5 - h * 0.175, w * 0.9, h * 0.15)
  rect(0, 0 - h / 5 - h * 0.2, w * 0.9, h * 0.1)
  rect(0, 0 - h / 5 - h * 0.225, w * 0.9, h * 0.05)
  strokeWeight(unit * 0.1)
  rect(0, 0 + h / 8, w / 8, h / 10)
  rect(0, 0 + h / 4, w / 8, h / 10)
  rect(0, 0 + h / 4 + h / 8, w / 8, h / 10)
  fill(backgroundColor)
  noStroke()
  circle(0, 0 + h / 4, w / 14)
  if (randomExtras < 0.5) {
    fill(backgroundColor)
    rect(0, 0 + h / 8, w / 9, h / 12)
    rect(0, 0 + h / 4, w / 9, h / 12)
    rect(0, 0 + h / 4 + h / 8, w / 9, h / 12)
  }
  pop()
}

////TYPE 05
function room05_A(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight2)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText02, 0, 0, w, h)
  if (randomExtras > 0.5) {
    stroke(lineLight)
    noFill() //change to fill(lineLight) if want transparency effect
    arcs02(0, 0, w, h)
    stroke(lineDark)
    strokeWeight(unit * thick)
    fill(fillMid)
    circle(0 - w / 5, 0 - h / 5, unit * 3)
    circle(0 + w / 5, 0 - h / 5, unit * 3)
    circle(0 - w / 5, 0 + h / 5, unit * 3)
    circle(0 + w / 5, 0 + h / 5, unit * 3)
    strokeWeight(unit * thin)
    noFill()
    circle(0 - w / 5, 0 - h / 5, unit * 1.5)
    circle(0 + w / 5, 0 - h / 5, unit * 1.5)
    circle(0 - w / 5, 0 + h / 5, unit * 1.5)
    circle(0 + w / 5, 0 + h / 5, unit * 1.5)
  }
  circleColumn01(w, h)
  circleColumn02(w, h)
  pop()
}
function room05_B(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight2)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText02, 0, 0, w, h)
  circleColumn01(w, h)
  circleColumn02(w, h)
  circleColumn03(w, h)
  pop()
}
function room05_C(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight3)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText02, 0, 0, w, h)
  circleColumn01(w, h)
  circleColumn02(w, h)
  //   circleColumn03(w, h)
  circleColumn04(w, h)
  circleColumn05(w, h)
  pop()
}
function room05_D(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillLight2)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText02, 0, 0, w, h)

  circleColumn01(w, h)
  strokeWeight(unit * thin)
  circle(0 - w / 2 + w * 0.2, 0 - h / 2 + h * 0.2, w * 0.05)
  circle(0 - w / 2 + w * 0.4, 0 - h / 2 + h * 0.2, w * 0.05)
  circle(0 - w / 2 + w * 0.6, 0 - h / 2 + h * 0.2, w * 0.05)
  circle(0 - w / 2 + w * 0.8, 0 - h / 2 + h * 0.2, w * 0.05)

  circle(0 - w / 2 + w * 0.2, 0 - h / 2 + h * 0.4, w * 0.05)
  circle(0 - w / 2 + w * 0.4, 0 - h / 2 + h * 0.4, w * 0.05)
  circle(0 - w / 2 + w * 0.6, 0 - h / 2 + h * 0.4, w * 0.05)
  circle(0 - w / 2 + w * 0.8, 0 - h / 2 + h * 0.4, w * 0.05)

  circle(0 - w / 2 + w * 0.2, 0 - h / 2 + h * 0.6, w * 0.05)
  circle(0 - w / 2 + w * 0.4, 0 - h / 2 + h * 0.6, w * 0.05)
  circle(0 - w / 2 + w * 0.6, 0 - h / 2 + h * 0.6, w * 0.05)
  circle(0 - w / 2 + w * 0.8, 0 - h / 2 + h * 0.6, w * 0.05)

  circle(0 - w / 2 + w * 0.2, 0 - h / 2 + h * 0.8, w * 0.05)
  circle(0 - w / 2 + w * 0.4, 0 - h / 2 + h * 0.8, w * 0.05)
  circle(0 - w / 2 + w * 0.6, 0 - h / 2 + h * 0.8, w * 0.05)
  circle(0 - w / 2 + w * 0.8, 0 - h / 2 + h * 0.8, w * 0.05)

  pop()
}
function room05_E(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  stroke(lineDark)
  fill(fillDark)
  strokeWeight(unit * thin)
  noStroke()
  rect(0, 0, w, h)
  fill(fillLight4)
  stroke(lineLight)
  strokeWeight(unit * micro)
  rect(0, 0, w * 0.8, h * 0.8)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText02, 0, 0, w, h)
  circleColumn01(w, h)
  circleColumn03(w, h)
  pop()
}

////TYPE 6 - NEGATIVE SPACE
function room06_A(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w * 0.6, h * 0.6)
  //translate(x, y)
  fill(fillLight2)
  noStroke()
  rect(0, 0, w * 0.4, h * 0.4)
  fill(fillLight4)
  rect(0, 0, w * 0.35, h * 0.35)
  rect(0 - w * 0.3, 0, w * 0.1, h * 0.4)
  rect(0 + w * 0.3, 0, w * 0.1, h * 0.4)
  rect(0, 0 - h * 0.3, w * 0.4, h * 0.1)
  rect(0, 0 + h * 0.3, w * 0.4, h * 0.1)
  circleColumn05(w * 0.9, h * 0.9)
  pop()
}
function room06_B(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w * 0.6, h * 0.6)
  //translate(x, y)
  fill(fillLight4)
  noStroke()
  rect(0, 0, w * 0.4, h * 0.4)
  fill(fillLight2)
  rect(0, 0, w * 0.35, h * 0.35)
  rect(0 - w * 0.3, 0, w * 0.1, h * 0.4)
  rect(0 + w * 0.3, 0, w * 0.1, h * 0.4)
  rect(0, 0 - h * 0.3, w * 0.4, h * 0.1)
  rect(0, 0 + h * 0.3, w * 0.4, h * 0.1)
  circleColumn04(w * 0.9, h * 0.9)
  strokeWeight(unit * thick)
  stroke(lineDark)
  line(0 - w * 0.3, 0 - h * 0.04, 0 - w * 0.5, 0 - h * 0.04)
  line(0 - w * 0.3, 0 + h * 0.04, 0 - w * 0.5, 0 + h * 0.04)
  line(0 + w * 0.3, 0 - h * 0.04, 0 + w * 0.5, 0 - h * 0.04)
  line(0 + w * 0.3, 0 + h * 0.04, 0 + w * 0.5, 0 + h * 0.04)

  line(0 + w * 0.04, 0 + h * 0.3, 0 + w * 0.04, 0 + h * 0.5)
  line(0 - w * 0.04, 0 + h * 0.3, 0 - w * 0.04, 0 + h * 0.5)
  line(0 + w * 0.04, 0 - h * 0.3, 0 + w * 0.04, 0 - h * 0.5)
  line(0 - w * 0.04, 0 - h * 0.3, 0 - w * 0.04, 0 - h * 0.5)
  pop()
}
function room06_C(x, y, w, h) {
  ///the cross
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w * 0.8, h * 0.8)
  //translate(x, y)
  fill(fillLight4)
  noStroke()
  rect(0, 0, w * 0.8, unit * squareConnectorSize)
  rect(0, 0, unit * squareConnectorSize, h * 0.8)
  fill(backgroundColor)
  rect(0, 0, w * 0.7, unit * squareConnectorSize * 0.5)
  rect(0, 0, unit * squareConnectorSize * 0.5, h * 0.7)
  strokeWeight(unit * thick)
  stroke(lineDark)
  line(0 - w * 0.35, 0 - h * 0.04, 0 - w * 0.5, 0 - h * 0.04)
  line(0 - w * 0.35, 0 + h * 0.04, 0 - w * 0.5, 0 + h * 0.04)
  line(0 + w * 0.35, 0 - h * 0.04, 0 + w * 0.5, 0 - h * 0.04)
  line(0 + w * 0.35, 0 + h * 0.04, 0 + w * 0.5, 0 + h * 0.04)

  line(0 + w * 0.04, 0 + h * 0.35, 0 + w * 0.04, 0 + h * 0.5)
  line(0 - w * 0.04, 0 + h * 0.35, 0 - w * 0.04, 0 + h * 0.5)
  line(0 + w * 0.04, 0 - h * 0.35, 0 + w * 0.04, 0 - h * 0.5)
  line(0 - w * 0.04, 0 - h * 0.35, 0 - w * 0.04, 0 - h * 0.5)
  pop()
}

////TYPE 7 - RANDOM ARRANGE WALLS

function room07_A(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  // translate(x, y)
  fill(fillLight4)
  noStroke()
  rect(0, 0, w, h)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText01, 0, 0, w, h) ///tile texture
  strokeWeight(unit * thin)
  stroke(lineDark)
  noFill()
  arc(0, 0 - h * 0.2, w * 0.4, h * 0.4, PI, 0)
  arc(0, 0 - h * 0.2, w * 0.3, h * 0.3, PI, 0)
  arc(0, 0 - h * 0.2, w * 0.2, h * 0.2, PI, 0)
  arc(0, 0 - h * 0.2, w * 0.1, h * 0.1, PI, 0)

  arc(0, 0 + h * 0.2, w * 0.4, h * 0.4, 0, PI)
  arc(0, 0 + h * 0.2, w * 0.3, h * 0.3, 0, PI)
  arc(0, 0 + h * 0.2, w * 0.2, h * 0.2, 0, PI)
  arc(0, 0 + h * 0.2, w * 0.1, h * 0.1, 0, PI)

  line(0 - (w * 0.4) / 2, 0 - h * 0.2, 0 - (w * 0.4) / 2, 0 + h * 0.2)
  line(0 - (w * 0.3) / 2, 0 - h * 0.2, 0 - (w * 0.3) / 2, 0 + h * 0.2)
  line(0 - (w * 0.2) / 2, 0 - h * 0.2, 0 - (w * 0.2) / 2, 0 + h * 0.2)
  line(0 - (w * 0.1) / 2, 0 - h * 0.2, 0 - (w * 0.1) / 2, 0 + h * 0.2)
  line(0 + (w * 0.4) / 2, 0 - h * 0.2, 0 + (w * 0.4) / 2, 0 + h * 0.2)
  line(0 + (w * 0.3) / 2, 0 - h * 0.2, 0 + (w * 0.3) / 2, 0 + h * 0.2)
  line(0 + (w * 0.2) / 2, 0 - h * 0.2, 0 + (w * 0.2) / 2, 0 + h * 0.2)
  line(0 + (w * 0.1) / 2, 0 - h * 0.2, 0 + (w * 0.1) / 2, 0 + h * 0.2)

  columns05(x, y, w, h)

  pop()
}
function room07_B(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  fill(fillLight4)
  noStroke()
  rect(0, 0, w, h)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText01, 0, 0, w, h) ///tile texture
  strokeWeight(unit * thin)
  stroke(lineDark)
  noFill()
  arc(0, 0 - h * 0.2, w * 0.4, h * 0.4, PI, 0)
  arc(0, 0 - h * 0.2, w * 0.3, h * 0.3, PI, 0)
  arc(0, 0 - h * 0.2, w * 0.2, h * 0.2, PI, 0)
  arc(0, 0 - h * 0.2, w * 0.1, h * 0.1, PI, 0)

  fill(backgroundColor)
  noStroke()
  circle(0, 0 + h * 0.2, w * 0.3)
  stroke(lineDark)
  strokeWeight(unit * thick)
  fill(fillMid)
  columns05(x, y, w, h)

  pop()
}
function room07_C(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  fill(fillLight4)
  noStroke()
  rect(0, 0, w, h)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText01, 0, 0, w, h) ///tile texture
  strokeWeight(unit * thin)
  stroke(lineDark)
  noFill()
  //arc(0, 0 - unit * 6, w - unit * 12, w - unit * 12, PI, 0)
  arcs01(0, 0, w, h)
  fill(lineLight)
  noStroke()
  rect(0, 0, w / 2.5, h / 2.5)

  columns05(x, y, w, h)

  pop()
}
function room07_D(x, y, w, h) {
  ///corner curves
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  fill(fillLight3)
  noStroke()
  rect(0, 0, w, h)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText01, 0, 0, w, h) ///tile texture
  strokeWeight(unit * thin)
  stroke(lineDark)
  noFill()
  arcs03(0, 0, w, h)
  if (randomExtras < 0.5) {
    fill(lineLight)
    noStroke()
    rect(0, 0, w / 2.5, h / 2.5)
  }
  if (randomExtras > 0.5) {
    dashedLineCross(0, 0, w, h)
  }
  pop()
}

function room08_A(x, y, w, h) {
  ///corner curves
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  fill(fillLight4)
  noStroke()
  rect(0, 0, w, h)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText01, 0, 0, w, h) ///tile texture
  stroke(lineDark)
  fill(fillMid)
  beginShape()
  strokeWeight(unit * thick)
  vertex(0 - w / 2, 0 - h / 2)
  vertex(0 - w / 2, 0 - h / 8)
  vertex(0 - w / 2 + w / 12, 0 - h / 8)
  vertex(0 - w / 2 + w / 12, 0 - h / 2 + h / 12)
  vertex(0 - w / 8 - w / 12, 0 - h / 2 + h / 12)
  vertex(0 - w / 8 - w / 12, 0 - h / 8)
  vertex(0 + w / 5, 0 - h / 8)
  vertex(0 + w / 5, 0 - h / 8 - h / 12)
  vertex(0 - w / 8, 0 - h / 8 - h / 12)
  vertex(0 - w / 8, 0 - h / 2)
  endShape(CLOSE)
  line(0 - w / 12, 0 - h / 4, 0 - w / 12, 0 - h / 12)
  line(0 + w / 12, 0 - h / 4, 0 + w / 12, 0 - h / 12)
  beginShape()
  strokeWeight(unit * thick)
  vertex(0 + w / 2, 0 - h / 2)
  vertex(0 + w / 2, 0 - h / 8)
  vertex(0 + w / 2 - w / 6, 0 - h / 8)
  vertex(0 + w / 2 - w / 6, 0 - h / 2 + h / 12)
  vertex(0 + w / 8, 0 - h / 2 + h / 12)
  vertex(0 + w / 8, 0 - h / 2)
  endShape(CLOSE)
  strokeWeight(unit * thin)
  rect(0 + w / 2 - w / 12, 0 - h / 3, w / 12, h / 6, unit)
  push()
  rotate(PI)
  beginShape()
  strokeWeight(unit * thick)
  vertex(0 - w / 2, 0 - h / 2)
  vertex(0 - w / 2, 0 - h / 8)
  vertex(0 - w / 2 + w / 12, 0 - h / 8)
  vertex(0 - w / 2 + w / 12, 0 - h / 2 + h / 12)
  vertex(0 - w / 8 - w / 12, 0 - h / 2 + h / 12)
  vertex(0 - w / 8 - w / 12, 0 - h / 8)
  vertex(0 + w / 5, 0 - h / 8)
  vertex(0 + w / 5, 0 - h / 8 - h / 12)
  vertex(0 - w / 8, 0 - h / 8 - h / 12)
  vertex(0 - w / 8, 0 - h / 2)
  endShape(CLOSE)
  line(0 - w / 12, 0 - h / 4, 0 - w / 12, 0 - h / 12)
  line(0 + w / 12, 0 - h / 4, 0 + w / 12, 0 - h / 12)
  beginShape()
  strokeWeight(unit * thick)
  vertex(0 + w / 2, 0 - h / 2)
  vertex(0 + w / 2, 0 - h / 8)
  vertex(0 + w / 2 - w / 6, 0 - h / 8)
  vertex(0 + w / 2 - w / 6, 0 - h / 2 + h / 12)
  vertex(0 + w / 8, 0 - h / 2 + h / 12)
  vertex(0 + w / 8, 0 - h / 2)
  endShape(CLOSE)
  strokeWeight(unit * thin)
  rect(0 + w / 2 - w / 12, 0 - h / 3, w / 12, h / 6, unit)
  pop()
  if (randomExtras > 0.2) {
    fill(contrastHighlight)
    stroke(lineDark)
    strokeWeight(unit * thin)
    circle(0 - w / 2 + w / 5.5, 0 - h / 4, unit * 2)
  }
  if (randomExtras > 0.5) {
    fill(contrastHighlight)
    stroke(lineDark)
    strokeWeight(unit * thin)
    circle(0 + w / 2 - w / 5.5, 0 + h / 4, unit * 2)
  }
  pop()
}
function room08_B(x, y, w, h) {
  push()
  fill(backgroundColor)
  noStroke()
  rect(0, 0, w, h)
  //translate(x, y)
  fill(fillLight)
  noStroke()
  rect(0, 0, w, h)
  fill(lineLight)
  noStroke()
  textSize(unit * tileSize)
  text(tileText01, 0, 0, w, h) ///tile texture
  stroke(lineDark)
  fill(fillMid)
  strokeWeight(unit * thin)
  rect(0, 0, w * 0.4, h * 0.4)
  strokeWeight(unit * thin)
  rect(0, 0, w * 0.3, h * 0.3)
  strokeWeight(unit * thick)
  line(0, 0 - h / 6, 0, 0 - h / 3)
  line(0 - w * 0.1, 0 - h / 6, 0 - w * 0.1, 0 - h / 3)
  line(0 + w * 0.1, 0 - h / 6, 0 + w * 0.1, 0 - h / 3)
  line(0, 0 + h / 6, 0, 0 + h / 3)
  line(0 - w * 0.1, 0 + h / 6, 0 - w * 0.1, 0 + h / 3)
  line(0 + w * 0.1, 0 + h / 6, 0 + w * 0.1, 0 + h / 3)
  line(0 + w / 6, 0, 0 + w / 3, 0)
  line(0 + w / 6, 0 + h * 0.1, 0 + w / 3, 0 + h * 0.1)
  line(0 + w / 6, 0 - h * 0.1, 0 + w / 3, 0 - h * 0.1)
  line(0 - w / 6, 0, 0 - w / 3, 0)
  line(0 - w / 6, 0 + h * 0.1, 0 - w / 3, 0 + h * 0.1)
  line(0 - w / 6, 0 - h * 0.1, 0 - w / 3, 0 - h * 0.1)

  if (randomExtras > 0.5) {
    columns03(x, y, w, h)
  } else columns02(x, y, w, h)
  pop()
}

function peach(x, y, s) {
  stroke(13, 59, 95, 255)
  strokeWeight(0.8)
  fill(40, 80, 100, 200)
  rect(x + s, y - s * 3, s)

  fill(25, 90, 100, 200)

  rect(x, y, s)
  rect(x - s, y - s, s)

  fill(30, 80, 100, 255)
  rect(x - s, y, s)
  rect(x + s, y, s)
  rect(x - s * 2, y, s)
  rect(x + s * 2, y, s)

  rect(x, y - s, s)

  rect(x + s, y - s, s)
  rect(x - s * 2, y - s, s)
  rect(x + s * 2, y - s, s)

  rect(x, y + s, s)
  rect(x - s, y + s, s)
  rect(x + s, y + s, s)

  rect(x, y - s * 2, s)
  rect(x - s, y - s * 2, s)
  rect(x + s, y - s * 2, s)
}

class explode {
  constructor(x, y, angle, speed) {
    this.x = x
    this.y = y
    this.angle = angle
    this.speed = speed
    this.radius = 10
  }

  move() {
    this.x += cos(this.angle) * this.speed
    this.y += sin(this.angle) * this.speed
  }

  display() {
    //fill(contrastHighlight);
    bug(this.x, this.y, unit * 1)
  }
  bugScaleDown = bugScaleDown * 0.5
}

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(arr) {
  let currentIndex = arr.length
  let temporaryValue, randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    temporaryValue = arr[currentIndex]
    arr[currentIndex] = arr[randomIndex]
    arr[randomIndex] = temporaryValue
  }

  return arr
}

function setLineDash(list) {
  drawingContext.setLineDash(list)
}
