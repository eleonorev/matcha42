var express = require('express');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
module.exports = router;


var router = express.Router();

var UserSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    username: String,
    password: String,
    image: Text,
    firstName: String,
    lastName: String,
    birthday: Date,
    sexe: Number,
    orientation: Number,
    creating: {
      type: Date,
      default: Date.now
    },

});

var User = mongoose.model('User', UserSchema);


/* GET users listing. */
router.get('/', function(req, res) {
  console.log(User);
// Utilisation de notre schéma Piscine pour interrogation de la base
    User.find(function(err, users){
        if (err){
            res.send(err);
        }
        res.json(users);
    });
});

router.post('/', function(req,res){
    // Nous utilisons le schéma Piscine
      var user = new User();
    // Nous récupérons les données reçues pour les ajouter à l'objet Piscine
      user.email = "bob@bob.bob";
      user.password = "bobobob";
      user.username = "bob";
      user.password = "caca";
      user.firstName = "John";
      user.lastName = "Snow";
      user.birthday = new Date("1993-04-12");
      user.sexe = 2;
      user.orientation = 1;

    //Nous stockons l'objet en base
      user.save(function(err){
        if(err){
          res.send(err);
        }
        res.send({message : 'user++'});
      })
})

module.exports = router;
