/**
 * `@/ui/dropdown.tsx`
 */

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import type { ButtonProps } from "@/ui/button";
import { BiLinkExternal } from "react-icons/bi";

interface DropdownProps extends ButtonProps {
    external?: boolean;
    icon?: React.ReactNode;
    onClick?: () => void;
    title?: string | undefined;
}

export const Dropdown = (props: DropdownProps) => {
    return (
        <Menu
            as="div"
            className="relative inline-block text-left">
            <Menu.Button
                as={"button"}
                className={props.className}>
                <div className="flex items-center">
                    {props.icon ? <div>{props.icon}</div> : null}
                    {props.title}
                </div>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-75"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-75">
                <Menu.Items
                    className={`absolute -right-1 mt-2 w-56 origin-top-right
                                rounded-md border border-neutral-800 bg-black
                                p-1 transition-all`}>
                    <div className="py-1">{props.children}</div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export const DropdownItem = (props: DropdownProps) => {
    return (
        <Menu.Item>
            <div
                className={`focus-ring block justify-between rounded px-3 py-2
                            text-sm hover:bg-neutral-900 ${props.className}`}
                onClick={props.onClick}>
                <div className="flex items-center">
                    {props.icon && <div className="mr-3">{props.icon}</div>}
                    {props.children}
                    {props.external && (
                        <div className="ml-2">
                            <BiLinkExternal
                                aria-label={"Link External Icon"}
                                size={12}
                            />
                        </div>
                    )}
                </div>
            </div>
        </Menu.Item>
    );
};
