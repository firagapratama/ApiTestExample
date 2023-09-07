const request = require('supertest')
const baseUrl = require('../../env')

describe('Get Request Example', () => {
    it('Find Pets by Status', async () => {
        const response = request(baseUrl())
        .post('/user')
        .send({
            "id": 90001,
            "username": "firagapratama",
            "firstName": "Firaga",
            "lastName": "Pratama",
            "email": "firaga@mail.sec",
            "password": "firaga",
            "phone": "082115009385",
            "userStatus": 1
        })
        console.log((await response).status)
        console.log((await response).body)
    })
})
