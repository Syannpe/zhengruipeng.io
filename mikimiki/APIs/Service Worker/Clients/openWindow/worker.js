addEventListener("install",function (e){
    /*let allClients = await clients.matchAll(

    );*/
})
// Send notification to OS if applicable

if (self.Notification.permission === 'granted') {
    const notificationObject = {
        body: 'Click here to view your messages.',
        data: { url: self.location.origin + '/openWindow/example.html' },
        // data: { url: 'http://example.com' },
    };
    console.log(self.location.origin);
    self.registration.showNotification('You\'ve got messages!', notificationObject);
}

// Notification click event listener
self.addEventListener('notificationclick', e => {
    // Close the notification popout
    e.notification.close();
    // Get all the Window clients
    console.log("notification");
    e.waitUntil(clients.matchAll({ type: 'window' }).then(clientsArr => {
        // If a Window tab matching the targeted URL already exists, focus that;
        const hadWindowToFocus = clientsArr.some(windowClient => windowClient.url === e.notification.data.url ? (windowClient.focus(), true) : false);
        // Otherwise, open a new tab to the applicable URL and focus it.
        if (!hadWindowToFocus) clients.openWindow(e.notification.data.url).then(windowClient => windowClient ? windowClient.focus() : null);
    }));
});