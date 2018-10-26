const csv = require('csvtojson')
const csvfile = 'data.csv'
const fs = require('fs')
var bajwa;

function callback() {};
var json =csv().fromFile(csvfile).then((jsonObj)=>{
bajwa = JSON.stringify(jsonObj)
    fs.writeFileSync('data.json',bajwa) }
)
