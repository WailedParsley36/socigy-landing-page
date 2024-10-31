import Particles from "../Particles";

export default function Cta() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden">
                    <Particles className="absolute left-0 right-0 bottom-10 -z-10 w-full" staticity={30} />
                    {/* Blurred shape */}
                    <div className="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                            <defs>
                                <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                                    <stop offset="0%" stopColor="#E44346" />
                                    <stop offset="100%" stopColor="#F9A228" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path fill="url(#bs5-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
                        </svg>
                    </div>
                    {/* Blurred shape */}
                    <div className="absolute bottom-0 translate-y-1/2 right-0 blur-2xl opacity-50 pointer-events-none -z-10 -scale-x-100" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                            <defs>
                                <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                                    <stop offset="0%" stopColor="white" />
                                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path fill="url(#bs5-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
                        </svg>
                    </div>
                    {/* Content */}
                    <div className="max-w-3xl mx-auto text-center">
                        <div>
                            <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary-red to-primary-yellow pb-3" data-aos="fade-down">First personalized social network</div>
                        </div>
                        <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4" data-aos="fade-down">Take control of your own social network</h2>
                        <p className="text-slate-400 mb-8" data-aos="fade-down" data-aos-delay="200">If you want to join the beta-testing community feel free to leave us your email and we will contact you if you get in!</p>
                        <div data-aos="fade-down" data-aos-delay="200">
                            <a className="btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white transition duration-150 ease-in-out group" href="#0">
                                Join the waitlist -&gt;
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}