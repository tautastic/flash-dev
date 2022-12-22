/**
 * `@/pages/index.tsx`
 */

import type { NextPage } from "next";
import { BiRocket, BiStar } from "react-icons/bi";
import Link from "next/link";
import Button from "@/ui/button";

const Home: NextPage = () => {
    return (
        <div className="hero gap-6 pt-20 lg:gap-y-14 lg:pt-24">
            <div className="rainbow select-none bg-clip-text font-extrabold tracking-tighter subpixel-antialiased">
                <h2 className="animate-fadeIn bg-clip-text text-6xl sm:text-8xl lg:text-9xl">
                    Write less,
                </h2>
                <hr className="invisible h-2" />
                <h2 className="animate-fadeOut text-5xl sm:text-7xl lg:text-8xl">
                    learn more.
                </h2>
            </div>
            <h3 className="w-5/6 max-w-5xl text-lg text-neutral-400 sm:text-xl lg:text-2xl">
                Flash is the platform for frontend developers, providing the
                speed and reliability innovators need to create at the moment of
                inspiration.
            </h3>
            <div className="flex flex-col flex-wrap justify-center gap-6 sm:flex-row">
                <Button className={"btn-flat"}>
                    <BiRocket aria-label={"Rocket Icon"} />
                    <Link href="/dash">Getting Started</Link>
                </Button>
                <Button className={"btn-flat"}>
                    <BiStar aria-label={"Star Icon"} />
                    <a
                        href="https://github.com/add1609/flash"
                        target="_blank"
                        rel="noreferrer">
                        Star on GitHub
                    </a>
                </Button>
            </div>
        </div>
    );
};

export default Home;
