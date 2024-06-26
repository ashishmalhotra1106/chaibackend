require('dotenv').config()

const express = require('express')
// import express from "express"
const app = express()
// const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Hello Twitter!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Hello Login!</h1>')
})
app.get('/youtube', (req, res) =>{
  res.send('<h1>Hello YouTube</h1>')
})
app.get('/dosa', (req, res) =>{
  res.send('<h5>Dosa</h5>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})