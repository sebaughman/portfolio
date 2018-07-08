const express = require('express');
require('dotenv').config(); 

const app = express();

app.use(express.static('./build'))

const port = process.env.PORT || 3000
app.listen(port, function() {
  console.log(`server listening on port ${ port }`)
})