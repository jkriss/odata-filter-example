const createFilter = require('odata-v4-mongodb').createFilter
const sift = require('sift')

module.exports = function(filterQuery, collection) {
  const filter = createFilter(filterQuery)
  return sift(filter, collection)
}