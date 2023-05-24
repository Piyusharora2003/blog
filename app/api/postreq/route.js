import {NextRequest, NextResponse } from "next/server";
import connectDb from "@/middleware/mongoose";
import Posts from "@/models/Post";
import mongoose from "mongoose";

export async function POST(req){
    try {
        const body = await req.json();
        connectDb();
        console.log(mongoose.connection.readyState === 1 ? "Connected ":"shut the pc off");
        const post = new Posts(body);
        console.log(" post= ",post);
        let pc;
            pc = await post.save();
        return NextResponse.json({
            message:"post uploaded successfully!",
            status: 200,pc
        })
    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" , status: 500 ,e}
        )
    }
}


