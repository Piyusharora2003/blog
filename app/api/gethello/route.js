import connectDb from '@/middleware/mongoose';
import Posts from '@/models/Post';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  console.log("here");
  await connectDb();
  console.log("connection state = ",mongoose.connection.readyState);
  return NextResponse.json({
    "by":"Piyush Arora",
    "to":"Tell me whom it had it recieved"
  })
}