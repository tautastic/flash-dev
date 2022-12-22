/**
 * `@/components/footer/index.tsx`
 */

interface FooterProps {
    className?: string;
}

const Footer = (props: FooterProps) => {
    return (
        <div className={`mt-6 w-full text-center ${props.className}`}>
            <p className={`text-neutral-400`}>⚡ Made by Ahmed with T3 Stack</p>
        </div>
    );
};

export default Footer;
