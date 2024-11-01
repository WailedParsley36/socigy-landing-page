import Highlighter, { HighlighterItem } from '../Highlighter'

import FeatureImg01 from '../../assets/hero/security.png'
import FeatureImg02 from '../../assets/hero/history.png'
import FeatureImg03 from '../../assets/hero/plugin-sphere.png'

import FilterIcon from '../../assets/icons/filter-icon.svg'
import PluginsIcon from '../../assets/icons/plugins-icon.svg'
import HeartIcon from '../../assets/icons/heart-icon.svg'
import PrivacyIcon from '../../assets/icons/privacy-icon.svg'

import Particles from '../Particles'
import { Link } from 'react-router-dom'

const features = [
    {
        title: "Advanced Filtering",
        content: "We offer a filtering solution for most of the items you'll find in our application, so don't worry you won't find something",
        iconSrc: FilterIcon
    },
    {
        title: "Highly Customizable",
        content: "By enabling community plugins we open the door for limitless amount of user customization",
        iconSrc: PluginsIcon
    },
    {
        title: "Personalizable",
        content: "Don't like something? Let's redo it to your likes and enjoy the feeling of your own way of staying on social networks",
        iconSrc: HeartIcon
    },
    {
        title: "Privacy",
        content: "Have control over what information is available to whom and how. Decide for yourself and don't let others dictate it to you",
        iconSrc: PrivacyIcon
    }
]

export default function FeaturesBento() {
    return (
        <section className="relative overflow-hidden">

            {/* Particles animation */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32">
                <Particles className="absolute inset-0 -z-10" quantity={6} staticity={30} />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-16 md:pt-32">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">And that's not all!</h2>
                        <p className="text-lg text-slate-400">Do you think that's all we can offer? Well you're wrong. Our social network is loaded up with unique features. Go and see for yourself!</p>
                    </div>

                    {/* Highlighted boxes */}
                    <div className="relative pb-12 md:pb-20 mb-6">
                        {/* Blurred shape */}
                        <div className="absolute bottom-0 -mb-20 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                                <defs>
                                    <linearGradient id="bs2-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                                        <stop offset="0%" stopColor="#E13A4B" />
                                        <stop offset="100%" stopColor="#A71319" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path fill="url(#bs2-a)" fillRule="evenodd" d="m346 898 461 369-284 58z" transform="translate(-346 -898)" />
                            </svg>
                        </div>
                        {/* Grid */}
                        <Highlighter className="grid md:grid-cols-12 gap-6 group">
                            {/* Box #1 */}
                            <div className="md:col-span-12" data-aos="fade-down">
                                <HighlighterItem>
                                    <div className="relative h-full bg-black rounded-[inherit] z-20 overflow-hidden">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                            {/* Blurred shape */}
                                            <div className="absolute right-0 top-0 blur-2xl" aria-hidden="true">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="342" height="393">
                                                    <defs>
                                                        <linearGradient id="bs-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                                                            <stop offset="0%" stopColor="#E44346" />
                                                            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                                                        </linearGradient>
                                                    </defs>
                                                    <path fill="url(#bs-a)" fillRule="evenodd" d="m104 .827 461 369-284 58z" transform="translate(0 -112.827)" opacity=".7" />
                                                </svg>
                                            </div>
                                            {/* Text */}
                                            <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">
                                                <div className="mb-5">
                                                    <div>
                                                        <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">Optimized for security</h3>
                                                        <p className="text-slate-400">Optimize for user experience and privacy. Use social login integrations, lower user friction, incorporate rich user profiling, and facilitate more transactions.</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(_theme(colors.primary-red),_theme(colors.primary-yellow))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none" to="/features">
                                                        <span className="relative inline-flex items-center">
                                                            Learn more -&gt;
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                            {/* Image */}
                                            <div className="relative w-full h-64 md:h-auto overflow-hidden">
                                                <img className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:relative md:left-0{md}transla{}-x-0" src={FeatureImg01} width="504" height="400" alt="Feature 01" />
                                            </div>
                                        </div>
                                    </div>
                                </HighlighterItem>
                            </div>
                            {/* Box #2 */}
                            <div className="md:col-span-7" data-aos="fade-down">
                                <HighlighterItem>
                                    <div className="relative h-full bg-black rounded-[inherit] z-20 overflow-hidden">
                                        <div className="flex flex-col">
                                            {/* Radial gradient */}
                                            <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                                <div className="absolute inset-0 translate-z-0 bg-primary-red/20 rounded-full blur-[80px]" />
                                            </div>
                                            {/* Text */}
                                            <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8">
                                                <div>
                                                    <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">History Managment</h3>
                                                    <p className="text-slate-400">Want to see or share your scrolling history with others? No problem as we provide you with the tools you need...</p>
                                                </div>
                                            </div>
                                            {/* Image */}
                                            <div className="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                                                <img className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0" src={FeatureImg02} width={536} height={230} alt="Feature 02" />
                                            </div>
                                        </div>
                                    </div>
                                </HighlighterItem>
                            </div>
                            {/* Box #3 */}
                            <div className="md:col-span-5" data-aos="fade-down">
                                <HighlighterItem>
                                    <div className="relative h-full bg-black rounded-[inherit] z-20 overflow-hidden">
                                        <div className="flex flex-col">
                                            {/* Radial gradient */}
                                            <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                                <div className="absolute inset-0 translate-z-0 bg-gradient-to-t from-primary-yellow/20 to-primary-red/35 rounded-full blur-[80px]" />
                                            </div>
                                            {/* Text */}
                                            <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8">
                                                <div>
                                                    <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">Infinite options</h3>
                                                    <p className="text-slate-400">Miss a feature? Why don't create it or open a feature request. The options to what is possible to create are infinite</p>
                                                </div>
                                            </div>
                                            {/* Image */}
                                            <div className="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                                                <img className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0" src={FeatureImg03} width={230} height={230} alt="Feature 03" />
                                            </div>
                                        </div>
                                    </div>
                                </HighlighterItem>
                            </div>
                        </Highlighter>
                    </div>

                    {/* Features list */}
                    <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-24">
                        {features.map(x => <div key={x.title}>
                            <div data-aos="fade-down" className="flex items-center space-x-2 mb-1">
                                <img className="shrink-0 fill-slate-300" width="16" height="16" src={x.iconSrc} />
                                <h4 className="font-medium text-slate-50">{x.title}</h4>
                            </div>
                            <p data-aos="fade-down" data-aos-delay="200" className="text-sm text-slate-400">{x.content}</p>
                        </div>)}
                    </div>

                </div>
            </div>
        </section>
    )
}