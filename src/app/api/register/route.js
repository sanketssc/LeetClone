
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
        return new Response(JSON.stringify({message: "All properties required", status: 400}), {status:400})
    }
   
    const user = await userModel.findOne({email: email});
    console.log(user)
    if(user) {
        return new Response(JSON.stringify({message:"User Already Exists", status: 409}), {status: 409})
    }
    const newUser = await userModel.create({email, password})
    console.log(newUser)
    return new Response(JSON.stringify({message: "User Created", status: 201}), {status:201});
    

}