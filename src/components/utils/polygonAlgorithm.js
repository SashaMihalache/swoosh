import { TweenMax, Power3, TweenLite } from 'gsap';

export const getCoordinates = (polygon) => {
  return polygon.getAttribute("points").match(/(-?[0-9][0-9\.]*),(-?[0-9][0-9\.]*)\ (-?[0-9][0-9\.]*),(-?[0-9][0-9\.]*)\ (-?[0-9][0-9\.]*),(-?[0-9][0-9\.]*)/);
};

export const createPolygonPointsObject = (polygons) => {
  const polygonsArray = [];

  polygons.forEach((polygon, i) => {
    const coordinates = getCoordinates(polygon);

    polygonsArray.push({
      fill: polygon.getAttribute('fill'),
      one: coordinates[1],
      two: coordinates[2],
      three: coordinates[3],
      four: coordinates[4],
      five: coordinates[5],
      six: coordinates[6]
    });
  });

  return polygonsArray;
};

export const updatePolygonsArrays = (idToAnimateTo, fromPolygonArray, toPolygonArray) => {
  console.log(idToAnimateTo);
  
  toPolygonArray = createPolygonPointsObject(
    document.getElementById(idToAnimateTo)
      .querySelectorAll('polygon'));
    
  animatePolygons(fromPolygonArray, toPolygonArray);

  fromPolygonArray = toPolygonArray;
  
  return fromPolygonArray;
};

export const animatePolygons = (fromPolygonArray, toPolygonArray) => {
  const polygons = document.querySelector('.svg-holder')
                            .querySelectorAll('polygon');
  fromPolygonArray = createPolygonPointsObject(polygons);

  fromPolygonArray.forEach((obj, i) => {
    TweenMax.to(obj, 1, {
      one: toPolygonArray[i].one,
      two: toPolygonArray[i].two,
      three: toPolygonArray[i].three,
      four: toPolygonArray[i].four,
      five: toPolygonArray[i].five,
      six: toPolygonArray[i].six,
      ease: Power3.easeOut,
      onUpdate: () => {
        polygons[i].setAttribute("points", `${obj.one},${obj.two} ${obj.three},${obj.four} ${obj.five},${obj.six}`);
      }
    });
  });

  polygons.forEach((polygon, i) => {
    const toColor = toPolygonArray[i].fill;

    TweenLite.to(polygon, 1, {
      fill: toColor,
      ease: Power3.easeOut
    });
  });
}