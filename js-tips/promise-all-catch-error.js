const promise1 = new Promise((resolve, reject) => {
    reject('Promise:1 Error');
});

const promise2 = new Promise((resolve, reject) => {
    reject('Promise:2 Error');
});

Promise.all([
    promise1.catch(error => {
        return error;
    }), 
    promise2.catch(error => {
        return error;
    })
])
.then(response => {
    console.log(response)
})
.catch(err => {
    console.log(err);
});


