const push = require('web-push');

const vapIDKey = {
    publicKey: 'BKjYDlUWRkQGCr4DaudfEju3tipL-22jNiR2tOyBsGHj0CkjySUspw9LSGJlf20NOiCHQyrNpBhIU9sli8SFt7E',
    privateKey: '12x--ug0AFw-3aIzIU3qDnjop44VVN9m9AWbv9NLHMI'
  };

  push.setVapidDetails('mailto:someone',vapIDKey.publicKey,vapIDKey.privateKey);

  let sub = {endpoint:"https://fcm.googleapis.com/fcm/send/ffZkI-nLSkA:APA91bFAmwkds058oyK0igP9btmVMdjlzPjYeIRiHD14a-AaFcAxELtLFqo6E4TDrdB8yOYT3HolQHJuLkV9zbxJpgKzXf1xRllGOqtWGo31M4m1pNdo_8TG_T9Ig7HcP5UyGyfHpU9K",
  expirationTime:null,
  keys:{
    p256dh:"BOb0R5sv4PP7aWEHa6h74r-M1KkXuxSnAzI0ii85FakfQ7_O64OBBMHXZwzeCGIEMroqmhn1H41JsQACwRuNwFk",
    auth:"QYwErgpOiWG0bZESkIcF0w"
  }};

  push.sendNotification(sub,'text message');