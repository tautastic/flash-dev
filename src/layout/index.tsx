/**
 * `@/layout/index.tsx`
 */

import Footer from "@/components/footer";
import Header from "@/components/header";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
    return (
        <>
            <Header />
            <main className="min-h-[83vh]">{props.children}</main>
            <Footer />
        </>
    );
};

export default Layout;
