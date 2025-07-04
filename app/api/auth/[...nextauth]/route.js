import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github"

import { connectDB } from "@utils/db";
import User from "@models/user";

const handler = NextAuth({
    providers : [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ], 
    callbacks : {
    async session({session}){
            const sessionUser = await User.findOne({
                email: session.user.email
            })

            session.user.id = sessionUser._id.toString();

            return session;
    },
    async signIn({profile}){
        try {
            await connectDB();

            //check if a user already exists
            const userExists = await User.findOne({
                email: profile.email
            });

            //if not, create a new user
            if(!userExists){
                await User.create({
                    email: profile.email,
                    username: profile.name.replace(" ","").toLowerCase(),
                    image: profile.picture 
                })
            }
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    } }
})

export {handler as GET, handler as POST}


