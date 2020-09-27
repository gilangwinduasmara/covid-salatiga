const express = require('express')
const model = require('../../models/index')
const index = async(req, res, next) =>{
    res.send('ok')
}


module.exports.index = index

