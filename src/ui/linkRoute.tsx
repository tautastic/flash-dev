/**
 * `@/ui/linkRoute.tsx`
 */

import Link from "next/link";

interface LinkRouteProps {
    href: string;
    className?: string;
    children: React.ReactNode;
}

const LinkRoute = (props: LinkRouteProps) => {
    return (
        <Link href={props.href}>
            <div
                className={`flex cursor-pointer items-center rounded-md p-2 hover:text-gray-300 ${props.className}`}>
                {props.children}
            </div>
        </Link>
    );
};

export default LinkRoute;
