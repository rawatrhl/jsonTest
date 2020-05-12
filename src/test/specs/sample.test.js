const db = require('../../../util/database.util')


describe('testing JSON read and write', ()=>{
    it('test ', ()=>{
        var jsonData = db.retrieve()
        console.log(jsonData)
    })
})