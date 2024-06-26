import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    providers: [GitHub, Google],
    trustHost: true,
    pages: {
        signIn: "/login",
    },
} satisfies NextAuthConfig;
