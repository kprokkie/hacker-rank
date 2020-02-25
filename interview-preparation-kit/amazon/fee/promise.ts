const isFriendReady = true;
// Promise
const watchMovie = new Promise((resolve, reject) => {
    if (isFriendReady) {
        return resolve('You are going to watch a Fast Furious 8');
    } else {
        var reason = new Error('Your friend is not Ready');
        return reject(reason);
    }
});

watchMovie
    .then((fulfilled) => {
        // Great!,You are going to watch a movie with your friend
        console.log(fulfilled);
    })
    .catch(error => {
        // ops, you're friend is not ready :o
        console.log(error.message);
    });