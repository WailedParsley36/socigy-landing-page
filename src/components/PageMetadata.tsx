import { Helmet } from "react-helmet";

export interface PageMetadataProps {
    title: string,
    description: string
}

export default function PageMetadata({ title, description }: PageMetadataProps) {
    return <Helmet>
        <meta
            name="description"
            content={description}
        />
        <title>{title}</title>

        <meta property="og:title" content={title} />
        <meta
            property="og:description"
            content={description}
        />
        <meta
            property="og:image"
            content="https://www.socigy.com/images/og-image.png"
        />
        <meta property="og:url" content="https://www.socigy.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Socigy" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta
            name="twitter:description"
            content={description}
        />
        <meta
            name="twitter:image"
            content="https://www.socigy.com/images/og-image.png"
        />
    </Helmet>
}