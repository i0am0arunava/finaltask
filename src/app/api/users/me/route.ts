import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
connect()
export async function GET(request:NextRequest){


try{
    const userID=await getDataFromToken(request);
   const user = await  User.findOne({_id:userID}).select("-password");

   return NextResponse.json({
    message:"User found",
    data:user
   })
}catch(err){
    console.log(err)
}


}