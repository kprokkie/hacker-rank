function asyncTimeout(delay) {
    return (new Promise(resolve => { setTimeout(() => resolve(delay), delay) }))
        .then(d => `Waited ${d} seconds`);
}

function asyncFetch(url) {
    // return fetch(url)
    //     .then(response => (response.text()))
    //     .then(text => `Fetched ${url}, and got back ${text}`);
    return (new Promise(resolve => resolve('delay')))
        .then(d => `Fetched ${url}, and got back ${d}`);
}

const asyncThingsToDo = [
    { task: 'wait', duration: 1000 },
    { task: 'fetch', url: 'https://httpstat.us/200' },
    { task: 'wait', duration: 2000 },
    { task: 'fetch', url: 'https://urlecho.appspot.com/echo?body=Awesome!' },
];

function runTask(spec) {
    return (spec.task === 'wait')
        ? asyncTimeout(spec.duration)
        : asyncFetch(spec.url);
}

const tasks = asyncThingsToDo.map(runTask); // Run all our tasks in parallel.

async function callData() {
    const results = await Promise.all(tasks);     // Gather up the results.
    results.forEach(x => console.log(x));
}

// callData();

function asyncTimeout1(delay) {
    return (new Promise(resolve => { setTimeout(() => resolve(delay), delay) }))
        .then(d => `Waited ${d} seconds`);
}

function asyncTimeout2(delay) {
    return (new Promise(resolve => { setTimeout(() => resolve(delay), delay) }))
        .then(d => `Waited ${d} seconds`);
}

async function callData1() {
    const results = await Promise.all([asyncTimeout1(1000), asyncTimeout2(5000)]);     // Gather up the results.
    results.forEach(x => console.log(x));
}

// callData1();

let promise1 = new Promise(resolve => setTimeout(() => resolve('Promise1'), 1000));
let promise2 = new Promise(resolve => setTimeout(() => resolve('Promise2'), 5000));

async function callSame() {
    // const results = await Promise.all([promise1, promise2]);     // Gather up the results.
    // results.forEach(x => console.log(x));

    Promise.all([promise1, promise2]).then(([p1, p2]) => {
        console.log(p1, p2);
    })
}

callSame();


