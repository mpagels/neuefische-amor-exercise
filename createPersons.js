const fetch = require('node-fetch')
const faker = require('faker')
const range = require('./lib/range')
const persons = []

async function createData() {
  for (let i = 0; i < 20; i++) {
    const listOfInterests = []
    const gender = i % 2 === 0 ? 'male' : 'female'
    const response = await fetch(
      `https://fakeface.rest/face/json?gender=${gender}&minimum_age=18`
    )
    const data = await response.json()

    persons.push({
      name: faker.name.firstName(gender) + ' ' + faker.name.lastName(),
      picture: data.image_url,
      interests: range(6).map(() => faker.datatype.boolean()),
    })
  }
  console.log(persons)
}
createData()
