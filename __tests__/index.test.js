const earthRadiusAtGeodeticLatitude = require('..');

describe('when latitude is 0 (at the Equator)', () => {

  it('should return the semi major radius of earth in meters', () => {
    const r_major = 6378137;
    const radius = earthRadiusAtGeodeticLatitude(0);
    expect(radius).toBeCloseTo(r_major, 6);
  });

});

describe('when latitude is 90 (at the North Pole)', () => {

  it('should return the semi minor radius of earth in meters', () => {
    const radius = earthRadiusAtGeodeticLatitude(90);
    expect(radius).toBeGreaterThan(6356752);
    expect(radius).toBeLessThan(6378137);
  });

});

describe('when latitude is -90 (at the South Pole)', () => {

  it('should return the same radius as for the North Pole', () => {
    const north = earthRadiusAtGeodeticLatitude(90);
    const south = earthRadiusAtGeodeticLatitude(-90);
    expect(south).toBeCloseTo(north, 6);
  });

});
