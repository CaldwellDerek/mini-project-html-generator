const fs = require('fs');
fs.writeFile("index.html", data, (error)=> {if (error) console.log(error);})