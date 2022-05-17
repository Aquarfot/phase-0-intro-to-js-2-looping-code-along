// Code your solutions in this file
function writeCards(names, event) {
    let newArray = []
    for(let i = 0; i < names.length; i++) {
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
}
return newArray;
}

function countDown(startingNum) {
    while (startingNum > 0) {
        console.log(startingNum);
        startingNum -= 1;
    }
    console.log(startingNum);
}