var fs = require('fs'),
        self = this,
        dir = './static',
        dir2 = './static/css',
        dir3 = './templates';

// create these directories.  
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

if (!fs.existsSync(dir2)){
    fs.mkdirSync(dir2);
}

if (!fs.existsSync(dir3)){
    fs.mkdirSync(dir3);
}

let createBaseProject = () =>{
    return `
var bayside = require('bayside')

// custom user variables
var config = {
    root: __dirname,
    port: 3000,
    templates: 'templates'
}

var app = new bayside(config);

// views
app.views.index = function (request, response) {
    app.template(response, "index.html", { title: "Home" });
}

// urls
app.urls['/'] = app.views.index;
    `
};

let createCss = () => {
    return `
h1 { color: red }
    `
};

let createIndex =  () => {
    return `
<html>
    <head>
        <title>Sample Bayside App</title>
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="stylesheet" href="/static/css/main.css" />
    </head>
    <body>
        <h1>Your Bayside App is Running!</h1>
    </body>
</html>
    `
};

fs.writeFile("./" + process.argv[2] + ".js", createBaseProject(), (err) => {
    if(err){
        return console.log(err);
    }
});

fs.writeFile("./static/css/main.css", createCss(), (err) => {
    if(err) {
        return console.log(err);
    }
});

fs.writeFile("./templates/index.html", createIndex(), (err) => {
    if(err) {
        return console.log(err);
    }
    console.log("Your Bayside App Was Created!");
});