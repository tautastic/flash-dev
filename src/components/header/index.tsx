/**
 * `@/components/header/index.tsx`
 */

import Link from "next/link";
import Image from "next/image";
import Auth from "@/components/auth";

interface HeaderProps {
    className?: string;
}

const Header = (props: HeaderProps) => {
    return (
        <header
            className={`z-100 sticky top-0 w-full border-b-[0.5px] border-b-neutral-800 bg-black py-4 duration-300
                        ${props.className}`}>
            <div
                className={`container mx-auto flex items-center justify-between px-4`}>
                <Link href="/">
                    <div className={`flex cursor-pointer items-center`}>
                        <Image
                            aria-label={"Logo"}
                            src="/img/flash.svg"
                            alt="Logo"
                            width={26}
                            height={26}
                            className="mt-0.5"
                        />
                        <h1
                            className={`ml-1 text-xl font-bold subpixel-antialiased md:text-2xl`}>
                            Flash
                        </h1>
                    </div>
                </Link>
                <Auth />
            </div>
        </header>
    );
};

export default Header;
