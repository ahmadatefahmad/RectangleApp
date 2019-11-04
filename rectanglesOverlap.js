//const RectanglesOverlap = (rect1, rect2) => {
//
//  let [left1, top1, right1, bottom1] = [...rect1],
//      [left2, top2, right2, bottom2] = [...rect2];
//
//  return !(top1 < bottom2 || top2 < bottom1 || right1 < left2 || right2 < left1);
//}
//
//
//
//let rect1=[8,4,5,6];
//let rect2=[4,6,7,3];
//
//console.log(RectanglesOverlap(rect1,rect2));

var RectanglesOverlap = function (rect1, rect2){


    
  let [left1, top1, right1, bottom1] = [...rect1],
      [left2, top2, right2, bottom2] = [...rect2];

  return !(top1 < bottom2 || top2 < bottom1 || right1 < left2 || right2 < left1);
};



var rect1=[8,4,5,6];
var rect2=[4,6,7,3];

console.log(RectanglesOverlap(rect1,rect2));