import connectDb from '@/middleware/mongoose';
import Post from '@/models/Post';
import Posts from '@/models/Post';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  await connectDb();
  const res =(await Post.find());
  return NextResponse.json({
    response :res
  })
}