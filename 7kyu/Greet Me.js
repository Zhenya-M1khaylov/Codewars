let greet = name => `Hello ${(name.slice(0, 1)).toUpperCase() + (name.slice(1).toLowerCase())}!`


console.log(greet('riley'))