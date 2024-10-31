import { Link } from 'react-router-dom';
import Particles from '../components/Particles';

export default function NoFound() {
    return <>
        <Particles className="absolute inset-0 -z-10" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center overflow-hidden">

            <div className="pt-32 pb-16 md:pt-52 md:pb-32">

                {/* Hero content */}
                <div className="max-w-3xl lg:max-w-5xl mx-auto text-center">
                    <div data-aos="fade-down" className='w-full text-center items-center flex justify-center mb-10'>
                        <h2 className="h1 text-7xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4 font-poppins" data-aos="fade-down">404</h2>
                    </div>
                    <h1 className="h1 lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4 font-poppins" data-aos="fade-down" data-aos-delay="500" >Oops, you're not supposed to be here!</h1>
                    <p className="text-lg lg:text-xl lg:mx-auto lg:max-w-3xl text-slate-400 mb-8" data-aos="fade-down" data-aos-delay="700">
                        Hey, why not just come back to home page and go through it again? <br />Sounds good right?
                    </p>
                    <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-down" data-aos-delay="900">
                        <div>
                            <Link className="bg-gradient-to-r from-primary-yellow via-primary-red to-primary-purple text-white w-full font-poppins transition duration-150 ease-in-out group btn" to="/">
                                Back to home -&gt;
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}