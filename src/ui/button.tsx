/**
 * `@/ui/button.tsx`
 */

import Loader from "@/ui/loader";

export interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    isLoading?: boolean;
    loadingText?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

const Button = (props: ButtonProps) => {
    return (
        <button
            type={props.type}
            disabled={props.disabled || props.isLoading}
            onClick={props.onClick}
            className={`${props.className}`}>
            {props.isLoading ? (
                <>
                    <Loader />
                    {props.loadingText ? props.loadingText : "Loading..."}
                </>
            ) : (
                <>{props.children}</>
            )}
        </button>
    );
};

export default Button;
