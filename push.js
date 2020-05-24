const push = require('web-push');

const vapIDKey = {
    publicKey: 'BKjYDlUWRkQGCr4DaudfEju3tipL-22jNiR2tOyBsGHj0CkjySUspw9LSGJlf20NOiCHQyrNpBhIU9sli8SFt7E',
    privateKey: '12x--ug0AFw-3aIzIU3qDnjop44VVN9m9AWbv9NLHMI'
  };

  push.setVapidDetails('mailto:someone',vapIDKey.publicKey,vapIDKey.privateKey);

  push.sendNotification(sub,'text message');