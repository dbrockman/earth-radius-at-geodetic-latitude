'use strict';

/**
 * Estimate the Earth radius at given latitude.
 *
 * This function is based on the equation discussed on this GIS Stack Exchange thread:
 * http://gis.stackexchange.com/questions/20200
 * And this wikipedia entry on Geocentric Earth radius:
 * http://en.wikipedia.org/wiki/Earth_radius#Geocentric_radius
 *
 * The equation:
 * R = ( (a^2 cos(f))^2 + (b^2 sin(f))^2 ) / ( (a cos(f))^2 + (b sin(f))^2 )
 * where `f` is the latitude and `a` and `b` are the
 * equatorial radius and the polar radius, respectively.
 *
 * @param  {Number}  latitude  The latitude.
 * @return  {Number}  Radius in meters.
 */
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
