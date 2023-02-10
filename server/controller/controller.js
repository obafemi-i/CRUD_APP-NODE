var Userdb = require('../model/model')

exports.create = (req,res)=>{
    if (!req.body){
        return res.status(400).send(`Content cannot be empty`)
    }

    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })

    user.save(user).then(data=>{res.send(data)}).catch(err=>{res.status(400).send('Something went wrong, email may not be unique')})
}

exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}

exports.update = (req,res)=>{
    if(!req.body){
       return res.status(400).send('Data to be updated cannoty be empty')
    }

    const id = req.params.id
    Userdb.findByIdAndUpdate(id, req.body)
    .then(data=>{
        if(!data){
            res.status(404).send(`Cannot find user with id ${id}`)
        }
        else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send(`Error updating user with id ${id}`)
    })
}

exports.delete = (req,res)=>{
    const id = req.params.id

    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send(`Cannot find user with id ${id}`)
        }
        else{
            res.status(200).send(`User with id ${id} deletedd successfully`)
        }
    })
    .catch(err=>{
        res.status(500).send(`Errot deleting that user`)
    })
}

// exports.findOne = (req,res)=>{
//     const id = req.params.id

//     Userdb.findById(id)
//     .then(data=>{
//         if(!data){
//             res.status(404).send(`Error getting user with id ${id}`)
//         }
//         else{
//             res.status(200).send(data)
//         }
//     })
//     .catch(err=>{res.status(500).send('Something went wrong while retrieving requested data')})
// }

