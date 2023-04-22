
import userModel from '../../../models/userModel'

import dbConnect from '@/config/dbconnect';

export async function POST(request) {
    try {
        await dbConnect();
        
    } catch (error) {
        console.log(error)
    }
    
    const body = await request.json()

    let email;
    let password;
    try {
        email = body.email;
        password = body.password;
    } catch (e) {

    }
    if(!email || !password) {
        return new Response("All properties required", {status:400})
    }
   
    const user = await userModel.findOne({email: email});
    console.log(user)
    if(!user) {
        return new Response("Invalid Email", {status: 409})
    }
    const userPassword = user.password;
    if(userPassword !== password){
        return new Response("Wrong password", {status: 409})
    }
    
    return new Response(JSON.stringify({"status": 200, "login success": true}), {status:200, redirected:true});
    

}