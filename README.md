# earth-radius-at-geodetic-latitude

> Estimate the Earth radius at given latitude


## Install

```
$ npm install --save earth-radius-at-geodetic-latitude
```


## Usage

```js
const earthRadiusAtGeodeticLatitude = require('earth-radius-at-geodetic-latitude');

const latitudeNewYork = 40.730610;
earthRadiusAtGeodeticLatitude(latitudeNewYork);
//=> 6377880.978308504

const latitudeNewOrleans = 30.0154753;
earthRadiusAtGeodeticLatitude(latitudeNewOrleans);
//=> 6357371.8965936005
```


This function is based on the equation discussed on [this GIS Stack Exchange thread](http://gis.stackexchange.com/questions/20200) and [this wikipedia entry](http://en.wikipedia.org/wiki/Earth_radius#Geocentric_radius) on Geocentric Earth radius:

The equation:
```
R = ( (a^2 cos(f))^2 + (b^2 sin(f))^2 ) / ( (a cos(f))^2 + (b sin(f))^2 )
```
where `f` is the latitude and `a` and `b` are the equatorial radius and the polar radius, respectively.


## API

### earthRadiusAtGeodeticLatitude(latitude)

Takes latitude (number) and returns an estimate of the Earth radius at that given latitude.

The radius is in meters.
