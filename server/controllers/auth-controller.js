const {User,Message, Notify} = require("../models/user-model");
const bcrypt = require("bcryptjs");

// home logic

const home = async (req, res) => {
    try {
        res.status(200).send("Home page controller");
    } catch {
        console.log("error");
    }
}

//registration page logic

const signup = async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, phone, password } = req.body;

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(400).json({ msg: "email already exists" });
        }

        //hash the password 
        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound)

        await User.create({ name, email, phone, password: hash_password });

        res.status(200).json({ message: req.body });
    } catch (error) {
        res.status(500).json("internal server error");
    }
};

//login page logic

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ msg: "Email and password are required" });
        }

        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ msg: "Email does not exist" });
        }

        const isPasswordValid = await bcrypt.compare(password, userExist.password);

        if (isPasswordValid) {
            res.status(200).json({
                msg: "Login successful",
                userId: userExist._id.toString(),
            });
        } else {
            res.status(400).json({ msg: "Invalid Credentials" });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json("Internal server error");
    }
};

// contact logic

const contact = async (req, res) => {
    try {

        //sending data to db
        console.log(req.body);
        const { username,email,phone,message,userid } = req.body;
        await Message.create({ username, email, phone, message,userid });


            res.status(200).json({
                msg: "Messages sent successfully"
            })
            console.log("done")
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json("Message not subitted");
        console.log("not done")
    }
};

const getcontactquery = async(req,res)=>{

    try{
        const msg = await Message.find()
        res.status(200).json(msg)
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }


}

const getadminmsg= async(req,res)=>{

    try{
        const id = req.params.id
        const msg = await Notify.find({userid:id})
        res.status(200).json(msg)
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }


}


// user data retrieval logic
const getUserData = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json("Internal server error");
    }
};

const getUsers = async(req,res)=>{
    try{
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}
const deleteuser = async(req,res)=>{
    try{
        const id = req.params.id
        const user = await User.findByIdAndDelete(id)

        if(!user)
        {
            console.log();("user not found")
        }

        res.status(200).json(user)
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

const postnotification =async(req,res)=>{
        try{

            //sending data to db
            console.log(req.body);
            const { userid,msg } = req.body;
            await Notify.create({  userid,msg });
    
    
                res.status(200).json({
                    msg: "Messages sent successfully"
                })
                console.log("done")
        }catch (error) {
            console.error('Error:', error);
            res.status(500).json("Message not subitted");
            console.log("not done")
        }

}





const updateuser = async (req, res) => {
    try {
        const userId = req.params.id;
        // Validate the updatedData here if necessary
        
        const { name, email, phone, password } = req.body;
        

        console.log(userId)

        //hash the password 
        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound)
        console.log(hash_password)
        
        const updateduser = await User.findByIdAndUpdate(userId, { name, email, phone, password:hash_password }, { new: true });
        
        if (!updateduser) {
            return res.status(404).json({ message: "user not found" });
        }

        res.status(200).json({ message: "user updated successfully", user: updateduser });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Internal server error occured", error: error.message });
    }
};


module.exports = { home, updateuser,signup, login, contact, getadminmsg,getUserData,getUsers,deleteuser ,getcontactquery,postnotification};