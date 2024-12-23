import dotenv from 'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js'

dotenv.config({
    path: './.env'
})

connectDB()
    .then(() => {
        // app.on("error", (error) => {    // listener - if express cant talk to db
        //     console.log("ERROR: ", error)
        //     throw error
        // })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is listening at port ${process.env.PORT || 8000}`)
        })
    })
    .catch((err) => {
        console.log("MongoDB connection failed !!! ", err)
    })

