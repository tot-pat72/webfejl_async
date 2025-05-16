//1.
function buyApple1(num){
    if(num < 5){
        return Promise.resolve(`Ennyi almánk van`)
    }
    else{
        return Promise.reject(`Nincs ennyi almánk`)
    }
}

const apple1 = buyApple1(4)
console.log(apple1)

apple1.then(value => {
    console.log(value)
})
console.log(apple1)

//////////////////////////////////////////////////////////////
const apple2 = buyApple1(6).catch(error => {
    console.log(error)
});
console.log(apple2)

////////////////////////////////////////////////////////////
const apple3 = buyApple1(4).then(value => {
    console.log(value)
})
.catch(error => {
    console.log(error)
})

//2.
function buyApple2(num){
    return new Promise((resolve, reject) => {
        if(num < 5) {
            resolve(`Ennyi almánk van`)
        }
        else {
            reject(`Nincs ennyi almánk`)
        }
    })
}

const apple4 = buyApple2(4).then(value => {
    console.log(value)
})
.catch(error => {
    console.log(error)
})

//3.
function buyApple3(num){
    return new Promise((resolve, reject) => {
        if(num < 5) {
            setTimeout(() => {
                resolve(`Ennyi almánk van`)
            },1000)
        }
        else {
            setTimeout(() => {
                reject(`Nincs ennyi almánk`)
            },1000)
        }
    })
}

const apple5 = buyApple3(4).then(value => {
    console.log(value)
})
.catch(error => {
    console.log(error)
})