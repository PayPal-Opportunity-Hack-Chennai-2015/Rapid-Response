Template.DistressApp.helpers({
  'distressCallSent'() {
    return Session.get("distressCallSent") === true;
  },
});

Tracker.autorun(function (computation) {
  var userGeoLocation = new ReactiveVar(null);
  userGeoLocation.set(Geolocation.latLng());
  if (userGeoLocation.get()) {
    console.log(Geolocation.latLng());
    Session.set("distressCallCoords", Geolocation.latLng());
    //stop the tracker if we got something
    computation.stop();
  }
});

Template.DistressApp.onRendered(() => {
  console.log("hello there!");
});


Template.DistressApp.helpers({
  'customLocationSelected'() {
    return Session.get("customLocationSelected") === true;
  },
});

Meteor.startup(() => {
  GoogleMaps.load();
})
