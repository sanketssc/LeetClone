
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
    if(!user) {
        return new Response(JSON.stringify({message:"Invalid Email", status: 409}), {status: 409})
    }
    const userPassword = user.password;
    if(userPassword !== password){
        return new Response( JSON.stringify({message:"Wrong password", status:409}), {status: 409})
    }
    
    return new Response(JSON.stringify({message:"Login Success",status: 200 }), {status:200, redirected:true});
    

}