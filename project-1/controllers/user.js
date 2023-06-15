const mongodb = require('../db/connect');

const getUser = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('student').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};



module.exports = { getUser};