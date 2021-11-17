const express = require('express')
const seniorTeachersRoutes = require('./routes/teachingStaffRoutes/seniorTeachersRoutes.js');
const juniorTeachersRoutes= require('./routes/teachingStaffRoutes/juniorTeachersRoutes.js');
const combinedTeachersRoutes = require('./routes/teachingStaffRoutes/combinedTeachersRoutes.js')
const cors = require('cors')

const app = express()

app.use(cors());
app.use(express.json())


app.use('/senior_teachers', seniorTeachersRoutes );
app.use('/junior_teachers', juniorTeachersRoutes );
app.use('/combined_teachers', combinedTeachersRoutes );
app.get('/', (req, res)=>{
    res.send('welcome to Tescom Management portal')
})



app.listen(3000, ()=>{
    console.log('the server is listening on port 3000')
});
