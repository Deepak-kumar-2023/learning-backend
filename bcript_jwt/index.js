const bcrypt = require('bcrypt');
const saltRounds = 0;
const myPlaintextPassword = 'deepak_kumaar';
const someOtherPlaintextPassword = 'saurabh_kumaar';


bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
        bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
            console.log(`password is correct hash: ${hash}`);
        });
        bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
            console.log(`password is incorrect hash: ${hash}`);
        });
    });
})


