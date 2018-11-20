//var passport = require('passport');
var LocalStratergy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const saltRounds = 8;
var myPlaintextPassword="abcd";

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
});

/*
passport.use(new LocalStratergy(
    function(username,password, done){
        if(username==="admin"){
            if(password==="admin")
                return done(null,user);
            else
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, false, { message: 'Incorrect username.' });
    }
));
*/