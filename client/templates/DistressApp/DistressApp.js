Template.DistressApp.helpers({
  'distressCallMainView'() {
    return Session.get("distressCallView") === true;
  },
});

Template.DistressApp.helpers({
  'customLocationOptionSelected'() {
    return Session.get("customLocationOptionSelected") === true;
  },
});

Template.DistressApp.helpers({
  'distressCallSent'() {
    return Session.get("distressCallSent") === true;
  },
  'forceLoginActive'() {
<<<<<<< HEAD
    return Session.get('forceLogin') === true;
=======
    return Session.get('signupComplete') === true || (localStorage.getItem('mobileNumber') && localStorage.getItem('fullName'));
>>>>>>> kerajProgress
  }
});

Tracker.autorun(function (computation) {
  var userGeoLocation = new ReactiveVar(null);
  userGeoLocation.set(Geolocation.latLng());
  if (userGeoLocation.get()) {
<<<<<<< HEAD
    Session.set("distressCallCoords", Geolocation.latLng());
=======
    localStorage.setItem("distressCallCoords", JSON.stringify(Geolocation.latLng()));

>>>>>>> kerajProgress
    //stop the tracker if we got something
    computation.stop();
  }
});

<<<<<<< HEAD
Template.DistressApp.onRendered(() => {
  console.log("hello there!");
});


=======
>>>>>>> kerajProgress
Meteor.startup(() => {
  GoogleMaps.load();
})
