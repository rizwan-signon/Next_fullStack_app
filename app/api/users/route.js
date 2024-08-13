import User from "@/models/user.model";
import { dbConnect } from "@/utils/db";
import { NextResponse } from "next/server";
export const GET = async () => {
  try {
    await dbConnect();
    const users = await User.find();
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new NextResponse("error while getting user", { status: 500 });
  }
};
export const POST = async (req) => {
  try {
    const body = await req.json();
    await dbConnect();
    const newUser = await new User(body);
    await newUser.save();
    return new NextResponse(
      JSON.stringify({ message: "user created successfully", user: newUser }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse("Error while posting users" + error.message, {
      status: 500,
    });
  }
};
