/**
 * `@/pages/_app.tsx`
 */

import type { AppType } from "next/dist/shared/lib/utils";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { DefaultSeo } from "next-seo";
import nextSeoConfig from "next-seo.config";
import NextNProgress from "nextjs-progressbar";

import Layout from "@/layout";
import { trpc } from "@/utils/trpc";
import "@/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <>
            <NextNProgress
                color="#979797"
                startPosition={0.3}
                stopDelayMs={200}
                height={2}
                showOnShallow={true}
            />
            <DefaultSeo {...nextSeoConfig} />
            <SessionProvider session={session}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </SessionProvider>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </>
    );
};

export default trpc.withTRPC(MyApp);
