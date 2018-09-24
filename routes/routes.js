const operations = require('../controllers/userOperationsController.js')

module.exports = (app) =>{
    app.post('/register',operations.createUser)

    app.post('/login', operations.login)
}
