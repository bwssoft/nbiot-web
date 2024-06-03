import next from 'next';
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isLoginPage = nextUrl.pathname.startsWith("/login")
      const isAuthRoutes =
        nextUrl.pathname === "/map" || nextUrl.pathname === "/table" || nextUrl.pathname === "/history"

      if (!isAuthRoutes && !isLoggedIn) return true

      if (isAuthRoutes && !isLoggedIn && !isLoginPage) return Response.redirect(new URL("/login", nextUrl))

      if (isLoggedIn && isLoginPage) return Response.redirect(new URL("/map", nextUrl))

      if (isLoggedIn && nextUrl.pathname === "/") return Response.redirect(new URL("/map", nextUrl))
      return true;
    },
    jwt({ user, token }) {
      if (user) {
        token = {
          ...token,
          uuid: user.uuid,
          name: user.name,
          email: user.email
        }
      }
      return token;
    },
    session({ session, token }) {
      session.user.uuid = String(token.uuid)
      session.user.name = token.name ?? ''
      session.user.email = String(token.email)


      return session;
    }
  },
  providers: [], // Add providers with an empty array for now
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60,
  }
} satisfies NextAuthConfig;