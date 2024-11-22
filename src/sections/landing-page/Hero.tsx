import { Particles } from '../../utility/Particles'
import Logo from '../../assets/socigy.svg'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <section>
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

                {/* Particles animation */}
                <Particles className="absolute inset-0 -z-10" />

                <div className="pt-48 pb-16 md:pt-52 md:pb-32">

                    {/* Hero content */}
                    <div className="mx-auto text-center">
                        <div className="mb-12" data-aos="fade-down">
                            <div className="inline-flex relative">
                                <img src={Logo} className='w-16 sm:w-20 md:w-24 lg:w-30' />
                            </div>
                        </div>
                        <h1 style={{ letterSpacing: ".85rem" }} className="h1 bg-clip-text leading-snug text-transparent text-2xl md:text-6xl lg:text-7xl bg-gradient-to-r from-slate-100/60 via-slate-100 to-slate-100/60 pb-4 font-inter font-extrabold" data-aos="fade-down">
                            <div>
                                SOCIAL NETWORK
                            </div>
                            <div style={{ letterSpacing: "normal" }} className='text-white text-6xl'>
                                Tailored Entirely To You
                            </div>
                        </h1>
                        <div className='max-w-2xl text-center mx-auto'>
                            <p className="text-lg text-slate-300 mb-8" data-aos="fade-down" data-aos-delay="200">A social network offering unparalleled customization, AI-powered content, family security, and tools for creators to monetize their work</p>
                            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-down" data-aos-delay="400">
                                <div>
                                    <Link className="btn px-10 py-3 text-lg text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" to="/waitlist">
                                        Join the waitlist <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                                    </Link>
                                </div>
                                {/* <div>
                                    <button className="btn text-slate-200 hover:text-white bg-slate-900 bg-opacity-25 hover:bg-opacity-30 w-full transition duration-150 ease-in-out">
                                        <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                            <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                                        </svg>
                                        <span>Peek at the magic</span>
                                    </button>
                                </div> */}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}