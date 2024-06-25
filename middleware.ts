import NextAuth from "next-auth";
import { NextAuthRequest } from "next-auth/lib";
import { authConfig } from "@/auth.config";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth(async function middleware({
    auth,
    nextUrl: { pathname, origin },
}: NextAuthRequest) {
    const isInLoginPage = pathname === "/login";

    if (!auth && !isInLoginPage) {
        return NextResponse.redirect(new URL("/login", origin));
    }

    if (auth && isInLoginPage) {
        return NextResponse.redirect(new URL("/", origin));
    }

    return NextResponse.next();
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|$).*)"],
};
