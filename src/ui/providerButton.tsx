/**
 * `@/ui/providerButton.tsx`
 */

import {
    ImAppleinc,
    ImFacebook,
    ImGithub,
    ImGoogle,
    ImSpotify,
} from "react-icons/im";
import type { AvailableProviders } from "next-auth";
import type { ButtonProps } from "@/ui/button";
import Button from "@/ui/button";

interface ProviderButtonProps extends ButtonProps {
    variant: AvailableProviders;
    handler: (provider: AvailableProviders) => void;
}

const ProviderButton = (props: ProviderButtonProps) => {
    switch (props.variant) {
        case "apple":
            return (
                <Button
                    {...props}
                    className={`btn-flat ${props.className}`}
                    onClick={() => {
                        return props.handler(props.variant);
                    }}>
                    <ImAppleinc size={18} />
                    Sign in with Apple
                </Button>
            );
        case "facebook":
            return (
                <Button
                    {...props}
                    className={`btn-flat ${props.className}`}
                    onClick={() => {
                        return props.handler(props.variant);
                    }}>
                    <ImFacebook size={18} />
                    Sign in with Facebook
                </Button>
            );
        case "github":
            return (
                <Button
                    {...props}
                    className={`btn-flat ${props.className}`}
                    onClick={() => {
                        return props.handler(props.variant);
                    }}>
                    <ImGithub size={18} />
                    Sign in with GitHub
                </Button>
            );
        case "google":
            return (
                <Button
                    {...props}
                    className={`btn-flat ${props.className}`}
                    onClick={() => {
                        return props.handler(props.variant);
                    }}>
                    <ImGoogle size={18} />
                    Sign in with Google
                </Button>
            );
        case "spotify":
            return (
                <Button
                    {...props}
                    className={`btn-flat ${props.className}`}
                    onClick={() => {
                        return props.handler(props.variant);
                    }}>
                    <ImSpotify size={18} />
                    Sign in with Spotify
                </Button>
            );
    }
};

export default ProviderButton;
