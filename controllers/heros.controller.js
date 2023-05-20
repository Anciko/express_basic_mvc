const heroModel = require('../models/heros.model');

function getHeros(req, res) {
    res.json(heroModel);
}

function getHero(req, res) {
    const heroId = Number(req.params.heroId);
    // const hero = heros[heroId];
    const hero = heroModel.find(hero => hero.id === heroId);
    if (hero) {
        res.status(200).send(hero);
    } else {
        // res.status(404).send("Hero Not Found!");
        res.status(404).json({
            "error": "Hero not Found!"
        });
    }
}

function postHero(req, res) {
    if (!req.body.name) {
        res.status(404).json({ msg: "Hero Not Found!" });
    }

    const newHero = {
        id: heroModel.length + 1,
        name: req.body.name
    }

    heroModel.push(newHero);
    res.json(heroModel);
}

module.exports = {
    getHeros,
    getHero,
    postHero
}