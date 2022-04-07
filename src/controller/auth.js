const User = require('../models/user');
const jwt = require('jsonwebtoken');
const shortid = require ('shortid');

exports.signup = (req, res) => {

    User.findOne({ email: req.body.email})
    .exec((error, user) => {
        if(user) return res.status(400).json({
            message:'User already registred'
        });
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;
        const _user = new User({
            firstName,
            lastName,
            email,
            password,
            username: shortid.generate()
        });

        _user.save((error, data) => {
            if(error){
                console.log(error);
                return res.status(400).json({
                    message:'error'
                });
            }
            if(data){
                return res.status(201).json({
                    message:'user created successfully..!!'
                });
            }
        });
        
    });
}
exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
    .exec(async (error, user) => {
        if(error) return res.status(400).json({ error });
        if(user) {

            if(user.authenticate(req.body.password)){
                const token = jwt.sign({_id: user._id}, process.env.JWT, {expiresIn: '1h'} );
                const { _id, firstName, lastName, email, role, fullName} = user;
                res.status(200).json({
                    token,
                    user:{_id, firstName, lastName, email, role, fullName}
                });

            }else{
                return res.status(400).json({
                    message: 'Invalid password !!'
                })
            }



        }else{
            return res.status(400).json({ message:'something wrong !!'});
        }
    });
} 
