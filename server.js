const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => res.send('<h1>Hello From, Ironman!</h1>'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
