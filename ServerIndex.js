
const api = require('./API/server')
const HOST = 'localhost'
const PORT = process.env.PORT || 8888;

api.listen(PORT,()=>console.log("Sth"))