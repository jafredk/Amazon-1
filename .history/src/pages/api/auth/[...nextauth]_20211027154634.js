import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/Google"
// import Providers from "next-auth/providers"


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Provider.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),


    
    // ...add more providers here
  ],
})