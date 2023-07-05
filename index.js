const express = require('express')
const app = express()
const conn = require('./db/conn')
const usuario = require('./models/usuario')

const PORT = 3000
const hostname = 'localhost'