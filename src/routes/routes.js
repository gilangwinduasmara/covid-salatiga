const express = require('express');
const router = express.Router();
const wilayahControllers = require('../controllers/wilayahController')
const model = require('../../models/index')
const { Op } = require("sequelize")

router.get('/', (req, res) => {
    res.send("Welcome")
});



router.get('/kasus/', async (req, res, next) => {
    const kasus = await model.kasus.findAll({})
    res.json({
        success: true,
        length: kasus.length,
        data: kasus
    })
})
router.post('/kasus/', async (req, res) => {
    const {
        kontak, suspek, positif, tanggal, id_wilayah
    } = req.body
    const kasus = await model.kasus.create({
        kontak, suspek, positif, tanggal, id_wilayah
    })

    
    if(kasus){
        const wilayah = await model.wilayah.findByPk(id_wilayah)
        res.json({
            success: true,
            message: `new kasus ${wilayah.nama} created!`,
            data: kasus
        })
    }
})



router.get('/wilayah/', async (req, res, next) => {
    let type = req.body.type
    if(!type){
        type={
            [Op.like]: '%'
        }
    }
    const wilayahs = await model.wilayah.findAll({
        where: {
            type
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        },
        include: ['kasus']
    })
    res.json({
        success: true,
        data: wilayahs
    })
})
router.get('/wilayah/:id', async (req, res, next) => {
    const wilayahs = await model.wilayah.findByPk(req.params.id, {include: 'kasus'})
    res.json({
        success: true,
        data: wilayahs
    })
})

router.post('/wilayah/', async (req, res, next) => {
    const{
        nama,
        parent,
        type
    } = req.body
    const wilayah = await model.wilayah.create({
        nama,
        parent,
        type
    })
    res.json({
        success: true,
        message: 'new wilayah created!',
        data: wilayah
    })  
})
router.delete('/wilayah/:id', async (req, res, next) => {
    const id = req.params.id
    const wilayah = await model.wilayah.destroy({where: {
        id: id
    }})
    if(wilayah){
        res.json({
            success: true,
            message: 'wilayah deleted'
        })
    }else{
        res.json({
            success: false,
            message: 'wilayah not found'
        })
    }
})


// router.get('/:id', resourceOneController.getOne);
// router.post('/', resourceOneController.post);
// router.put('/:id', resourceOneController.put);
// router.delete('/:id', resourceOneController.delete);
module.exports = router;