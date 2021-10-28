import NextAuth from 'next-auth'
import GoogleProviders from "next-auth/providers/google"
// import Providers from "next-auth/providers"




export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),


    
    // ...add more providers here
  ],
})