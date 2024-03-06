const Blog = require('../models/models')

const Home = (req,res)=>{
    res.send('Home page')
}
const Contact = (req,res)=>{
    res.send('Contact page')
}

module.exports = {Home, Contact}