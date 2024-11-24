import PageMetadata from "../components/PageMetadata";
import { Particles } from "../utility/Particles";

export default function ContactUs() {
    return <>
        <PageMetadata title={"Socigy - Contact Us | Let's Connect"} description={"Have questions or want to collaborate? Connect with Socigy to discuss business opportunities, partnerships, or general inquiries. Let’s make something amazing together!"} />

        <Particles className="absolute inset-0 -z-50" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center overflow-hidden">

            <div className="pt-32 pb-16 md:pt-52 md:pb-32">

                {/* Hero content */}
                <div className="max-w-3xl lg:max-w-5xl mx-auto text-center">
                    <h1 className="h1 lg:text-7xl text-white/85 pb-4 font-inter font-medium" data-aos="fade-down">Get in touch</h1>
                    <p className="text-lg lg:text-xl lg:mx-auto lg:max-w-3xl text-gray-400 mb-6" data-aos="fade-down">
                        <strong>Email: </strong> <br /> 
                        info@socigy.com <br />
                        <br />
                        <strong>Address: </strong> <br />
                        Socigy s.r.o. <br />
                        Korunní 2569/108, Vinohrady <br />
                        Prague, Prague 10 101 00 <br />
                        Czechia
                    </p>
                </div>
            </div>
        </div>
    </>
}