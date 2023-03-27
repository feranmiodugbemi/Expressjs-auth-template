const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.json());

app.get('/', (req, res)=>{
    res.render('index')
})




app.listen(3000, () => {
    console.log("Server started on port 3000");
  });