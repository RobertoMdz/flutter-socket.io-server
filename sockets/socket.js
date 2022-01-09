const { io } = require('../index');

// Socket messages
io.on('connection', client => {

    client.on('disconnect', () => {
        console.log("client disconnected")
    });

    client.on('message', (data) => {
        console.log('message!!!', data);

        io.emit('message', { admin: 'New message' });
    });

});
