function rand(min, max) {
    // console.log("rand called");
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const bigArray = new Array(rand(1, 7))
    .fill()
    .map(() => new Array(rand(1, 7)));

bigArray.sort((a, b) => a.length - b.length);
// const count = ;
// for (let i = 0; i < count; i++) {
//     const smallArray = new Array(rand(1, 7));
//     // console.log(smallArray.length);
//     bigArray.push(smallArray);
// }
// function compare(a, b) {
//     return a.length - b.length;
// }
// bigArray.forEach(e => console.log(e.length));
// console.log("now sorting:");
// bigArray.sort(compare);
// bigArray.forEach(e => console.log(e.length));
