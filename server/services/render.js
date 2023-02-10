const axios = require('axios')


exports.homeRoutes =(req,res)=>{
    axios.get('http://127.0.0.1:4500/api/users')
    .then((response)=>{
        res.render('index', {users:response.data})
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.add_user =(req,res)=>{
    res.render('add_user')
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:4500/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}