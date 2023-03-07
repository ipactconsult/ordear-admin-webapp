var chai = require('chai')
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var requester = chai.request('http://localhost:8000').keepOpen()
Promise.all([
    requester.get('/employees/list/63fb4cbc80ecd7d359ae290f'),
    requester.post('/franchises/add_Franchise/').send({FranchiseName:"franchise1",Belongs_to:"6403343e2fd8afc70ee6d11b"}),
    requester.post('/resp/Login/ahmed.benaissa27031999@gmail.com').send({"password":"1234567890Azerty"})
  ])
  .then(responses => console.log(responses))
  .then(() => requester.close())
 
