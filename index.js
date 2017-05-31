const assert = require('assert')
const odataFilter = require('./odata-filter')

const data = [
  { id: 1, first_name: 'Bob', last_name: 'Jones', birthdate: { year: 1980 } },
  { id: 2, first_name: 'Ben', last_name: 'Jones', birthdate: { year: 1983 } },
  { id: 3, first_name: 'Jane', last_name: 'Smith', birthdate: { year: 1972 } }
]

const janes = odataFilter("first_name eq 'Jane'", data)
assert.equal(janes[0].id, 3)

const jones = odataFilter("last_name eq 'Jones'", data)
assert.equal(jones.length, 2)

const eightiesBabies = odataFilter("birthdate/year ge 1980 and birthdate/year lt 1990", data)
assert.equal(eightiesBabies.length, 2)
console.log(eightiesBabies)