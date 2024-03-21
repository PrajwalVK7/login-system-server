const users = require('../Model/userSchema');



exports.registerUser = async(req,res)=>{
    
const {name,address,gender,username,password} = req.body;



     try{

        const existingUser = await users.findOne({username});

        if(existingUser){
            res.status(406).json("Username already exists, please login or create use another")
        }
        else{
            const newUser = new users({
                name,
                address,
                gender,
                username,
                password
            })
            await newUser.save();
            res.status(200).json('User signup successfull')
        }

     }
      catch(err){
        res.status(401).json(err)
      }
}