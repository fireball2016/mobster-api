const express = require('express');
const router = express.Router();
const Mobster = require('../models/mobster');

router.get('/mobsters', (req, res, next) => {
    Mobster.aggregate().near({
        near: { type: "Point", coordinates: [parseFloat(req.query.lng) , parseFloat(req.query.lat)] },
                    distanceField: "dist.calculated",
                    maxDistance: 100000,
                    spherical: true
        }).then((mobsters) => {
            res.send(mobsters);
        }).catch(next);
    });


router.post('/mobsters', (req, res, next) => {
    Mobster.create(req.body).then((mobster) => {
        res.send(mobster)
    }).catch(next);
});

router.put('/mobsters/:id', (req, res, next) => {
    Mobster.findByIdAndUpdate({_id: req.params.id}, req.body).then(
        (mobster) => {
            Mobster.findOne({_id: req.params.id}).then((mobster) => {
                res.send(mobster)
            })
        });
});

router.delete('/mobsters/:id', (req, res, next) => {
    Mobster.findByIdAndRemove({_id: req.params.id}).then((mobster) => {
        res.send(mobster)
    });
});

module.exports = router;