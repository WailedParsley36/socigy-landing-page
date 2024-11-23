import PageMetadata from "../components/PageMetadata";
import BentoFeatures from "../sections/landing-page/BentoFeatures";
import Cta from "../sections/landing-page/Cta";
import Hero from "../sections/landing-page/Hero";
import UserFeedback from "../sections/landing-page/UserFeedback";

export default function IndexPage() {
    return <>
        <PageMetadata title="Socigy - The Next-Gen Social Network" description="A social network offering unparalleled customization, AI-powered content, family security, and tools for creators to monetize their work." />

        <Hero />
        <BentoFeatures />
        <UserFeedback />
        <Cta />
    </>
}