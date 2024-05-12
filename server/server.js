import express from "express"
const app = express()
const PORT = 3500

app.listen(() => {
    console.log(`Server running on port ${PORT}`);
})