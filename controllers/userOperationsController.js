const Signup = require('../models/signup.js')

exports.createUser = (req,res)=>{
    console.log("Creating user")

    if(!req.body || !req.body.name || !req.body.password || !req.body.email){
        return res.status(400).send({
            message : "Could not process as some field empty"
        })
    }

    var signup = new Signup({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    })

    signup.save()
        .then(()=> {
            res.send('User Created successfully')
        }).catch(err =>{
            res.status(500).send({
                message: err.message || "Something went wrong"
            })
        })
}

exports.login = (req,res)=>{
    if(!req.body || !req.body.password || !req.body.email){
        return res.status(400).send({
            message : "Could not process as some field empty"
        })
    }

    Signup.findOne({email:req.body.email, password: req.body.password})
        .then(doc => {
            if(!doc){
                return res.status(400).send({
                    message : "Not found with email "+req.body.email
                })
            }
            res.send(doc)
        }).catch(err =>{
            res.status(500).send({
                message: err.message || "Something went wrong"
            })
        })
}
