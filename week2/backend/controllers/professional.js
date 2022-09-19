const mongodb = require('../db/connect');

async function getProfessional(req, res, next){
    const data = await mongodb.getDb().db("week2-team").collection('professional').find();
    data.toArray().then((professional) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(professional[0]);
    });
};

module.exports = {getProfessional}