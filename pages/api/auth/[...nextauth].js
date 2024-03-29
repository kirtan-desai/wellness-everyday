import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // GithubProvider({
        //     clientId: process.env.GITHUB_ID,
        //     clientSecret: process.env.GITHUB_SECRET,
        // }),
    ],
    pages: {
        signIn: '/signin',
        // error: '/auth/error', // Error code passed in query string as ?error=
        // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
}

export default NextAuth(authOptions)