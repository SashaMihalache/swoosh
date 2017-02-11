import { TweenMax, Power3, TweenLite } from 'gsap';

export const getCoordinates = (polygon) => {
  /*eslint-disable */
  return polygon.getAttribute("points").match(/(-?[0-9][0-9\.]*),(-?[0-9][0-9\.]*)\ (-?[0-9][0-9\.]*),(-?[0-9][0-9\.]*)\ (-?[0-9][0-9\.]*),(-?[0-9][0-9\.]*)/);
  /*eslint-enable */
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


export const animatePolygons = (toPolygonArray) => {
  const polygons = document.querySelector('.svg-holder')
                            .contentDocument
                            .querySelectorAll('polygon');
  
  const fromPolygonArray = createPolygonPointsObject(polygons);
  console.log(Power3.easeInOut);
  fromPolygonArray.forEach((obj, i) => {
    TweenMax.to(obj, 1, {
      one: toPolygonArray[i].one,
      two: toPolygonArray[i].two,
      three: toPolygonArray[i].three,
      four: toPolygonArray[i].four,
      five: toPolygonArray[i].five,
      six: toPolygonArray[i].six,
      ease: Power3.easeInOut,
      onUpdate: () => {
        polygons[i].setAttribute("points", `${obj.one},${obj.two} ${obj.three},${obj.four} ${obj.five},${obj.six}`);
      }
    });
  });

  polygons.forEach((polygon, i) => {
    const toColor = toPolygonArray[i].fill;

    TweenLite.to(polygon, 1, {
      fill: toColor,
      ease: Power3.easeInOut
    });
  });
}

export const morphPictures = (idToAnimateTo, toPolygonArray) => {
  return new Promise((resolve, reject) => {

    const polygons = toPolygonArray.querySelectorAll('polygon');
    const to = createPolygonPointsObject(polygons);
    
    animatePolygons(to);

    // fromPolygonArray = to;
  
    resolve(to);
  });
};
