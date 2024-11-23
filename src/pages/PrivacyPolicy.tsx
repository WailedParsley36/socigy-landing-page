import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
    return <>
        <Helmet>
            <title>Socigy - Privacy Policy</title>
        </Helmet>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center overflow-hidden">
            <div className="pt-32 pb-16 md:pt-52 md:pb-32">
                <iframe
                    src="/privacy-policy.html"
                    title="Privacy Policy"
                    style={{ width: '100%', height: '80vh', border: 'none', color: 'white' }}
                />
            </div>
        </div>
    </>
}