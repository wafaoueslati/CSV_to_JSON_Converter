

const fs = require('fs')
const path = require('path')
const csvFilePath='customer-data.csv'
const csv=require('csvtojson')
var result = []
//JSON.stringify()

csv()
.fromFile(csvFilePath)
.on('end_parsed',(jsonArrObj)=>{
	fs.writeFileSync(path.join(__dirname, 'customer-data.json'), JSON.stringify(jsonArrObj))
})

.on('done',(error)=>{

    console.log('end')
})