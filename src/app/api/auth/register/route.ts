import connectDB from "@/lib/db";
import User from "@/model/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
    try {
        
        const rawBody = await request.text(); // Pehle text read karo
        if (!rawBody) {
            return NextResponse.json({ message: "Empty request body" }, { status: 400 });
        }
        
        const { name, email, password } = JSON.parse(rawBody);
        console.log("Received Data:", { name, email }); 

        if (!name || !email || !password) {
            return NextResponse.json(
                { message: "All fields are required!" },
                { status: 400 }
            );
        }

        if (password.length < 6) {
            return NextResponse.json(
                { message: "Password must be at least 6 characters long!" },
                { status: 400 }
            );
        }

        await connectDB();

        const existUser = await User.findOne({ email });
        if (existUser) {
            return NextResponse.json(
                { message: "A user with this email already exists!" },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        
        return NextResponse.json(
            { 
                message: "User registered successfully!",
                user: {
                    id: newUser._id,
                    name: newUser.name,
                    email: newUser.email
                }
            },
            { status: 201 }
        );

    } catch (error: any) {
        console.error("Registration Error Detail:", error.message);
        
        // Agar JSON parse fail hota hai toh specific message dikhao
        if (error instanceof SyntaxError) {
            return NextResponse.json({ message: "Invalid JSON format" }, { status: 400 });
        }

        return NextResponse.json(
            { message: "Internal Server Error. Please try again later." },
            { status: 500 }
        );
    }
}