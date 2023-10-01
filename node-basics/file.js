const fs = require("fs");

fs.readFile("./docs/blog1.txt", (err,data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})

fs.writeFile("./docs/blog1.txt", "bye world", () => {

})

if(!fs.existsSync("./assets")){
    fs.mkdir("./assets", (err) => {
        if(err){
            console.error(err);
        }
        console.log("folder created");
    })
}else{
    fs.rmdir("./assets",(err) => {
        if(err){
            console.error(err);
        }
        console.log("folder removed");
    })
}
console.log("i am the last guy");

if(fs.existsSync("./docs/delete.txt")){
    fs.unlink("./docs/delete.txt", (err) => {
        if(err){
            console.error(err);
        }
        console.log("file deleted");
    })
}