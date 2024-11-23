import { Link } from 'react-router-dom'
import BottomRightAngled from '../../assets/mockups/bottom-right-angled.png'
import { Particles } from '../../utility/Particles'

export default function Cta() {
    return <section className='mb-32'>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            {/* Particles animation */}
            <Particles className="absolute inset-0 -z-50" />

            <div className="pt-16 md:pt-32 space-y-10">
                <div className="relative bg-blacky p-10 md:p-16 lg:p-20 min-h-[500px] sm:min-h-[350px] rounded-xl" data-aos="fade-up">
                    <div className='relative pr-10 z-20 max-w-96 md:max-w-lg lg:max-w-xl'>
                        <h2 className='h2 text-white mb-8 sm:mb-4 md:text-6xl'>Ready to experience the future of social networking?</h2>
                        <p className='text-gray-400 mb-14 sm:block hidden md:text-xl'>It only takes a few seconds to join the waitlist! The more details you provide, the faster we can join you in!</p>
                        <Link className="btn py-3 text-lg text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" to="/waitlist">
                            Join the waitlist <span className="tracking-normal text-black group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                        </Link>
                    </div>
                    <div className='absolute inset-0 from-blacky bg-gradient-to-b bg-no-repeat lg:bg-none sm:bg-gradient-to-r from-40% z-10 rounded-xl' />
                    <img src={BottomRightAngled} className='absolute bottom-0 right-0 max-h-80 md:max-h-[28rem]' />
                </div>
            </div>
        </div>
    </section>
}