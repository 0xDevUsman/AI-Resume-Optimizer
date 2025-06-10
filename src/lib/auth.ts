import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";
import User, { IUser } from "@/models/user";
import { dbConnect } from "@/lib/db";

// Extend NextAuth types to include 'id' in session.user
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "user@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        await dbConnect();

        const user = await User.findOne({ email: credentials.email }).select(
          "+password"
        );

        if (!user) throw new Error("User not found");
        if (!user.password)
          throw new Error("Password not set, please login with OAuth");

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) throw new Error("Invalid credentials");

        // NextAuth expects an object with at least { id, name, email }
        return {
          id: (
            user as IUser & { _id: { toString: () => string } }
          )._id.toString(),
          name: user.name,
          email: user.email,
          provider: user.provider,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        };
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }): Promise<boolean> {
      if (!user?.email) return false;

      await dbConnect();

      if (account?.provider !== "credentials") {
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          const newUser = new User({
            name: user.name || "Unknown User",
            email: user.email,
            provider: account?.provider,
            role: ["user"],
          });

          try {
            await newUser.save();
          } catch (error) {
            console.error("Error saving new OAuth user:", error);
            return false;
          }
        }
      }

      return true;
    },

    async jwt({ token, trigger, session }) {
      if (trigger === "update" && session?.user) {
        return { ...token, ...session.user };
      }

      if (!token.email) return token;

      await dbConnect();
      const dbUser = await User.findOne({ email: token.email });

      if (dbUser) {
        token.id = dbUser._id?.toString();
        token.name = dbUser.name;
        token.email = dbUser.email;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
      }
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login",
  },
};
