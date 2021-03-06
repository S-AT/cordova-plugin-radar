const cordova = require('cordova');

const exec = (action, args, callback) => {
  cordova.exec(callback,
    (err) => {
      console.log(err);
    }, 'Radar', action, args);
};

const setUserId = (userId) => {
  exec('setUserId', [userId]);
};

const setDescription = (description) => {
  exec('setDescription', [description]);
};

const setMetadata = (metadata) => {
  exec('setMetadata', [metadata]);
};

const getPermissionsStatus = (callback) => {
  exec('getPermissionsStatus', null, callback);
};

const requestPermissions = (background) => {
  exec('requestPermissions', [background]);
};

const getLocation = (callback) => {
  exec('getLocation', null, callback);
};

const trackOnce = (arg1, arg2) => {
  if (typeof arg1 === 'function') {
    exec('trackOnce', null, arg1);
  } else {
    exec('trackOnce', [arg1], arg2);
  }
};

const startTrackingEfficient = () => {
  exec('startTrackingEfficient');
};

const startTrackingResponsive = () => {
  exec('startTrackingResponsive');
};

const startTrackingContinuous = () => {
  exec('startTrackingContinuous');
};

const startTrackingCustom = (options, callback) => {
  exec('startTrackingCustom', [options], callback);
};

const mockTracking = (options, callback) => {
  exec('mockTracking', [options], callback);
};

const stopTracking = () => {
  exec('stopTracking');
};

const onEvents = (callback) => {
  exec('onEvents', null, (data) => {
    callback(data.events, data.user);
  });
};

const onLocation = (callback) => {
  exec('onLocation', null, (data) => {
    callback(data.location, data.user);
  });
};

const onClientLocation = (callback) => {
  exec('onClientLocation', null, (data) => {
    callback(data.location, data.stopped, data.source);
  });
};

const onError = (callback) => {
  exec('onError', null, (data) => {
    callback(data.status);
  });
};

const offEvents = () => {
  exec('offEvents');
};

const offLocation = () => {
  exec('offLocation');
};

const offClientLocation = () => {
  exec('offClientLocation');
};

const offError = () => {
  exec('offEvents');
};

const startTrip = (options, callback) => {
  exec('startTrip', [options], callback);
};

const stopTrip = () => {
  exec('stopTrip');
};

const getContext = (arg1, arg2) => {
  if (typeof arg1 === 'function') {
    exec('getContext', null, arg1);
  } else {
    exec('getContext', [arg1], arg2);
  }
};

const searchPlaces = (options, callback) => {
  exec('searchPlaces', [options], callback);
};

const searchGeofences = (options, callback) => {
  exec('searchGeofences', [options], callback);
};

const searchPoints = (options, callback) => {
  exec('searchPoints', [options], callback);
};

const autocomplete = (options, callback) => {
  exec('autocomplete', [options], callback);
};

const geocode = (query, callback) => {
  exec('geocode', [query], callback);
};

const reverseGeocode = (arg1, arg2) => {
  if (typeof arg1 === 'function') {
    exec('reverseGeocode', null, arg1);
  } else {
    exec('reverseGeocode', [arg1], arg2);
  }
};

const ipGeocode = (callback) => {
  exec('ipGeocode', null, callback);
};

const getDistance = (options, callback) => {
  exec('getDistance', [options], callback);
};

const Radar = {
  setUserId,
  setDescription,
  setMetadata,
  getPermissionsStatus,
  requestPermissions,
  getLocation,
  trackOnce,
  startTrackingEfficient,
  startTrackingResponsive,
  startTrackingContinuous,
  startTrackingCustom,
  mockTracking,
  stopTracking,
  onEvents,
  onLocation,
  onClientLocation,
  onError,
  offEvents,
  offLocation,
  offClientLocation,
  offError,
  startTrip,
  stopTrip,
  getContext,
  searchPlaces,
  searchGeofences,
  searchPoints,
  autocomplete,
  geocode,
  reverseGeocode,
  ipGeocode,
  getDistance,
};

module.exports = Radar;
