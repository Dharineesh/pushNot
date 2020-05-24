
self.addEventListener('push',() => {
    self.registration.sendNotification('New course has been added!!!', {});
})