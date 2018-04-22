const test = new Promise((resolve, reject) => {
    if(Math.random() > 0.5) resolve('resolved');
    else reject('rejected');
})

test
    .then(foo => console.log(foo))
    .catch(err => console.log(err))