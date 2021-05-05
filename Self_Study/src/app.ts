import express from 'express'
import mongoose from 'mongoose'
import {router as users} from './routes/users'
// export const uri = 'mongodb+srv://Ciccio:Ciccio@firstcluster.adi2n.mongodb.net/FirstDatabase?retryWrites=true&w=majority'

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("🗄  Database connected");
})
  .catch(() => {
    console.log("❌  Error connection!");
});

const app = express()
const bodyParser = require ('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
module.exports = app.listen(3004)

app.use('/users',users)
