import { getDistance, getGreatCircleBearing, computeDestinationPoint } from 'geolib';

interface Coordinates {
  latitude: number;
  longitude: number;
}

const startCoordinates: Coordinates = {
  latitude: -23.5355013,
  longitude: -46.6205938
};

const endCoordinates: Coordinates = {
  latitude: -23.5348116,
  longitude: -46.6193786
};

const totalDistance: number = getDistance(startCoordinates, endCoordinates);

const segments: number = 10;

const segmentDistance: number = totalDistance / segments;
console.log(segmentDistance);


const segmentsCoordinates: Coordinates[] = [];

const initialBearing: number = getGreatCircleBearing(startCoordinates, endCoordinates);

for (let i = 0; i < segments; i++) {
  const currentDistance: number = segmentDistance * i;

  const segmentCoordinates: Coordinates = computeDestinationPoint(
    startCoordinates,
    currentDistance,
    initialBearing
  );

  segmentsCoordinates.push(segmentCoordinates);
}

// console.log(segmentsCoordinates);