const request = require('supertest')
const baseUrl = require('../../env')

describe('Get Request Example', () => {
    it('Find Pets by Status', async () => {
        const response = request(baseUrl())
        .post('/user')
        .send({
            "id": 90001,
            "username": "{your example username}",
            "firstName": "{your example first name}",
            "lastName": "{your example last name}",
            "email": "{your example email}",
            "password": "{your example password}",
            "phone": "{your example phone number}",
            "userStatus": 1
        })
        console.log((await response).status)
        console.log((await response).body)
    })
})
