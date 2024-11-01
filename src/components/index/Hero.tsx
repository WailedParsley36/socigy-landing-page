import { Link } from 'react-router-dom';
import Particles from '../Particles';

import SocigyLogo from '../../assets/socigy.svg'

export default function Hero() {
    return <section className='mb-24'>
        <Particles className="absolute inset-0 -z-10" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center overflow-hidden">

            <div className="pt-32 pb-16 md:pt-52 md:pb-32">

                {/* Hero content */}
                <div className="max-w-3xl lg:max-w-5xl mx-auto text-center">
                    <div data-aos="fade-down" className='w-full text-center items-center flex justify-center mb-24'>
                        <img src={SocigyLogo} width={128} height={128} />
                    </div>
                    <h1 className="h1 lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4 font-poppins" data-aos="fade-down" data-aos-delay="500" >Connect with your <br className='hidden lg:block' />Friends Easily</h1>
                    <p className="text-lg lg:text-xl lg:mx-auto lg:max-w-3xl text-slate-400 mb-8" data-aos="fade-down" data-aos-delay="700">
                        Join the new and innovative social network that that takes the personalization to the next level!
                    </p>
                    <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-down" data-aos-delay="900">
                        <div>
                            <Link className="bg-gradient-to-r from-primary-yellow to-primary-red text-white w-full font-poppins transition duration-150 ease-in-out group btn" to="/waitlist">
                                Join the waitlist -&gt;
                            </Link>
                        </div>
                        <div>
                            <Link className="btn text-slate-200 hover:text-white bg-slate-900 bg-opacity-25 hover:bg-opacity-30 w-full transition duration-150 ease-in-out" to="/showcase">
                                <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                    <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                                </svg>
                                <span>See the magic</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
}