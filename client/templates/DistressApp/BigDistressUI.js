Template.BigDistressUI.events({
  'click #trigger-button'(ev) {
    ev.preventDefault();

    Meteor.call('addDistressSignal', {
      "coords": JSON.parse(localStorage.getItem('distressCallCoords')),
      "helped": false,
      "report": $('#distress-report').val(),
      "phone": localStorage.getItem("mobileNumber"),
      "fullName": localStorage.getItem("fullName")
    });

    Session.set("distressCallSent", true);
  }
});
