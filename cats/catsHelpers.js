const db = require('../data/dbConfig');
module.exports = {
    addCat,
    deleteCat,
    findCatByName
}
function addCat(cat) {
   return db('cats').insert(cat).then(result => result[0])
}

function deleteCat(id) {
  return  db('cats').del().where({id})
}

function findCatByName(name) {
   return db('cats').where({name}).first()
}