// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Web App",
    titleTemplate: "%s - Flash",
    description: "A flashcard app built with T3 Stack",
    defaultTitle: "flash",
    additionalLinkTags: [
        {
            rel: "icon",
            href: "/img/favicon.ico",
        },
        {
            rel: "apple-touch-icon",
            href: "/img/apple-touch-icon-180x180.png",
            sizes: "180x180",
        },
        {
            rel: "manifest",
            href: "/manifest.json",
        },
    ],
    openGraph: {
        site_name: "flash",
        url: "https://flash-dev.vercel.app/",
        type: "website",
        locale: "en_IE",
        images: [
            {
                url: "/img/banner.png",
                width: 1920,
                height: 1080,
                type: "image/png",
            },
        ],
    },
};
