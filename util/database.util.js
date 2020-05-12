const mysql = require('mysql')
const fs = require('fs')
const fileAddress = './data/contact.json'

var connection = {
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'Gtyhnbvfr@1',
    database : 'freecrm'
}

class Database{
    writeToJSON(tableName){
        var con = mysql.createConnection(connection)
        con.connect()
        con.query(`select * from ${tableName}`, (err, result)=>{
            if(err) throw err
            else{
                // console.log(result)
                var obj = {data : result}
                obj = JSON.stringify(obj)
                fs.writeFile(fileAddress, obj, (err)=>{
                    if(err) console.log(err)
                })
            }
        })
        con.end()
    }
    readFromJSON(){
        var obj = JSON.parse(fs.readFileSync(fileAddress))
        return obj
    }
    retrieve = ()=>{
        var obj
        this.writeToJSON('contacts')
        obj = this.readFromJSON()
        return obj
    }
}
module.exports  = new Database()
