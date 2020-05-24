
self.addEventListener('push',() => {
    // var options = {
    //     body : "this is generated from push",
    //     vibrate : [100, 50, 100],
    //     date : {
    //         dateOfArrival : Date.now(),
    //         primaryKey : "2"
    //     },
    //     actions : [
    //         {
    //             action : "explore",
    //             title : "explore"
    //         },
    //         {
    //             sction : "close",
    //             title : "Closing!!!"
    //         }
    //     ]
    // }

    self.registration.sendNotification('New course has been added!!!', {});
    
    
})