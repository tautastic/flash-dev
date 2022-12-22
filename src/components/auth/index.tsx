/**
 * `@/components/auth/index.tsx`
 */

import { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import {
    BiPlus,
    BiBox,
    BiMessageSquareEdit,
    BiExit,
    BiHash,
} from "react-icons/bi";
import toast from "react-hot-toast";
import { Dropdown, DropdownItem } from "@/ui/dropdown";
import Button from "@/ui/button";
import LinkRoute from "@/ui/linkRoute";

const Auth = () => {
    const { data: session, status } = useSession();
    const [isDisabled, setDisabled] = useState(false);

    const handleLogout = async () => {
        setDisabled(true);
        try {
            await signOut({
                callbackUrl: "/",
            });
        } catch (error) {
            toast(
                "An error occurred while logout." +
                    "Please create an issue about the problem.",
                {
                    icon: "🤔",
                    style: {
                        borderRadius: "10px",
                        background: "#28283E",
                        color: "#fff",
                    },
                }
            );
        } finally {
            setDisabled(false);
        }
    };

    if (status === "loading") {
        return (
            <Button
                className="ml-2"
                disabled={isDisabled}
                loadingText="Loading..."
            />
        );
    }

    if (status === "unauthenticated") {
        return <LinkRoute href="/auth/signin">Sign in</LinkRoute>;
    }

    return (
        <Dropdown
            title={session?.user?.username}
            icon={
                <BiHash
                    aria-label={"Hashtag Icon"}
                    size={18}
                />
            }>
            <Link href="/dash/create">
                <DropdownItem
                    icon={
                        <BiPlus
                            aria-label={"Plus Icon"}
                            size={17}
                        />
                    }>
                    Create new card
                </DropdownItem>
            </Link>
            <Link href="/dash">
                <DropdownItem
                    icon={
                        <BiBox
                            aria-label={"Box Icon"}
                            size={17}
                        />
                    }>
                    Dashboard
                </DropdownItem>
            </Link>
            <a
                href="https://github.com/add1609/flash-dev/issues/new"
                target="_blank"
                rel="noreferrer">
                <DropdownItem
                    icon={
                        <BiMessageSquareEdit
                            aria-label={"Message Square Edit Icon"}
                            size={17}
                        />
                    }
                    external={true}>
                    Report a bug
                </DropdownItem>
            </a>
            <DropdownItem
                icon={
                    <BiExit
                        aria-label={"Exit Icon"}
                        size={17}
                    />
                }
                onClick={handleLogout}>
                Sign Out
            </DropdownItem>
        </Dropdown>
    );
};

export default Auth;
