import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db.js";
import Post from "@/models/post.model";
export const GET = async (request) => {
  dbConnect();
  const posts = await Post.find();
  return new NextResponse(posts);

  try {
  } catch (error) {
    return new NextResponse("error in database connection ");
  }
  return new NextResponse("it works ");
};
