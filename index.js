const express = require('express')
const app = express()
const routers = require('./routers/columns')
const tasks = require('./routers/tasks')

app.use(routers, tasks)

app.listen(3000)
