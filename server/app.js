const express = require('express')
const seniorRouter = require('./routes/seniorTeachersRoutes.js');
//const juniorRouter = require('./routes/juniorTeachersRoutes.js');
const cors = require('cors')

const app = express()

//app.use(cors());
app.use(express.json())


app.use('/senior_teachers', seniorRouter );
//app.use('/junior_teachers', juniorRouter );
app.get('/', (req, res)=>{
    res.send('welcome to the home page')
})



app.listen(3000, ()=>{
    console.log('the server is listening on port 3000')
});
