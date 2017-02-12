'use strict';

function earthRadiusAtGeodeticLatitude(latitude) {
  const r_major = 6378137;

  // semi major radius of earth in meters
  const r_minor = 6356752.31420;

  // semi minor radius of earth in meters
  const cos_lat = Math.cos(latitude);

  const sin_lat = Math.sin(latitude);
  return Math.sqrt(
    (
      Math.pow(Math.pow(r_major, 2) * cos_lat, 2) +
      Math.pow(Math.pow(r_minor, 2) * sin_lat, 2)
    ) /
    (
      Math.pow(r_major * cos_lat, 2) +
      Math.pow(r_minor * sin_lat, 2)
    )
  );
}

module.exports = earthRadiusAtGeodeticLatitude;
