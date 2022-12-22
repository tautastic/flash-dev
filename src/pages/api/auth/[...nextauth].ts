/**
 * `@/pages/api/auth/[...nextauth].ts`
 */

import NextAuth, { type NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import type { SpotifyProfile } from "next-auth/providers/spotify";
import SpotifyProvider from "next-auth/providers/spotify";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { env } from "@/env/server.mjs";
import { prisma } from "@/server/db/client";

export const authOptions: NextAuthOptions = {
    providers: [
        SpotifyProvider({
            clientId: env.SPOTIFY_ID,
            clientSecret: env.SPOTIFY_SECRET,
            allowDangerousEmailAccountLinking: true,
            profile(profile: SpotifyProfile) {
                return {
                    id: profile.id,
                    name: profile.display_name,
                    username: profile.display_name,
                    email: profile.email,
                    image: profile.images[0]?.url,
                };
            },
        }),
        GithubProvider({
            clientId: env.GITHUB_ID,
            clientSecret: env.GITHUB_SECRET,
            allowDangerousEmailAccountLinking: true,
            profile(profile) {
                return {
                    id: profile.id.toString(),
                    name: profile.name || profile.login,
                    username: profile.login,
                    email: profile.email,
                    image: profile.avatar_url,
                };
            },
        }),
    ],
    pages: {
        signIn: "/auth/signin",

        // TODO: Implement /auth/error
        error: "/auth/error",

        // TODO: Implement /auth/newUser
        newUser: "/auth/newUser",
    },
    callbacks: {
        session: ({ session, user }) => ({
            ...session,
            user: {
                ...session.user,
                id: user.id,
                username: user.username,
            },
        }),
    },
    session: {
        strategy: "database",
        maxAge: 60 * 60 * 24 * 30, // 30 days
        updateAge: 60 * 60 * 24, // 1 day
    },
    secret: env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(prisma),
};

export default NextAuth(authOptions);
