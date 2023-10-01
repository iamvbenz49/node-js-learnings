setTimeout(() => {
    console.log("enna pakura")
    clearInterval(interval);
}, 5000);

const interval = setInterval(() => {
    console.log("In the interval");
},1000)

console.log(__dirname);
console.log(__filename)