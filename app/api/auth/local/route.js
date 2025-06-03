import { connectDB } from "@utils/db";
import User from "@models/user";
import { FaGlassMartiniAlt } from "@node_modules/react-icons/fa";



export const POST = async (req, res) => {

    const loginData = await req.json()
    
    const {email: user_email, password: user_password} = loginData


    try {
        await connectDB()
    
        const userProfile = await User.findOne({email:user_email})

        if(!userProfile){
            return new Response(JSON.stringify({message: "Email not found", success: false}), {status: 404})
        }

        if(userProfile.password === user_password){
            return new Response(JSON.stringify({userProfile: userProfile, message: "User Authenticated", success: true}), {status: 200})
        } else {
            return new Response(JSON.stringify({message: "Password is incorrect", success: false}), {status: 401})
        }
        
    } catch (error) {
        console.log(error)
    }


}