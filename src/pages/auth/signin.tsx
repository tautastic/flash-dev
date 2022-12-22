/**
 * `@/pages/auth/signin.tsx`
 */

import type {
    GetServerSideProps,
    GetServerSidePropsContext,
    NextPage,
} from "next";
import type { AvailableProviders } from "next-auth";
import { signIn } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";

import { getServerAuthSession } from "@/server/common/get-server-auth-session";
import ProviderButton from "@/ui/providerButton";

const Signin: NextPage = () => {
    const [loading, setLoading] = useState({
        apple: false,
        facebook: false,
        github: false,
        google: false,
        spotify: false,
    });

    const handleSignIn = async (provider: AvailableProviders) => {
        setLoading((prev) => ({ ...prev, [provider]: true }));
        // Wait 1 second to show the loading state
        await new Promise((resolve) => setTimeout(resolve, 1000));
        try {
            signIn(provider, {
                callbackUrl: "/",
            }).then((res) => {
                console.log(res);
                if (res?.error) {
                    toast(
                        "An error occurred while logging in. Please create an issue about the problem.",
                        {
                            icon: "🤔",
                            style: {
                                borderRadius: "10px",
                                background: "#28283E",
                                color: "#fff",
                            },
                        }
                    );
                }
            });
        } catch (error) {
        } finally {
            setLoading((prev) => ({ ...prev, [provider]: false }));
        }
    };

    return (
        <div className={`mx-auto flex max-w-md select-none px-6 sm:max-w-lg`}>
            <div
                className={`mt-24 flex w-full flex-col items-center justify-center gap-8 overflow-hidden rounded-xl border-[1px] border-neutral-600 bg-[#111111] py-12 sm:text-lg`}>
                <ProviderButton
                    variant={"apple"}
                    isLoading={loading.apple}
                    handler={handleSignIn}
                    className={`w-full min-w-[208px] max-w-[66.666%]`}
                />
                <ProviderButton
                    variant={"github"}
                    isLoading={loading.github}
                    handler={handleSignIn}
                    className={`w-full min-w-[208px] max-w-[66.666%]`}
                />
                <ProviderButton
                    variant={"google"}
                    isLoading={loading.google}
                    handler={handleSignIn}
                    className={`w-full min-w-[208px] max-w-[66.666%]`}
                />
                <ProviderButton
                    variant={"spotify"}
                    isLoading={loading.spotify}
                    handler={handleSignIn}
                    className={`w-full min-w-[208px] max-w-[66.666%]`}
                />
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (
    ctx: GetServerSidePropsContext
) => {
    const session = await getServerAuthSession(ctx);

    if (session) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: { session },
    };
};

export default Signin;
