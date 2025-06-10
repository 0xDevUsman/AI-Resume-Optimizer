import { dbConnect } from "@/lib/db";
import { NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { registerSchema } from "@/types/user";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  await dbConnect();

  try {
    const body = await req.json();
    const parseBody = registerSchema.safeParse(body);

    if (!parseBody.success) {
      return NextResponse.json(
        { errors: parseBody.error.errors },
        { status: 400 }
      );
    }

    const { name, email, password } = parseBody.data;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { errors: { email: "Email already exists" } },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    return NextResponse.json({
      message: "User registered successfully",
      user: {
        id: (user._id as { toString: () => string }).toString(),
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "An error occurred while registering user",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
};
