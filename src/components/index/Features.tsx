import { Transition } from "@headlessui/react";
import { useState } from "react";
import Particles from "../Particles";

import PluginsIcon from '../../assets/icons/plugins-icon.svg'
import TargetFrameIcon from '../../assets/icons/target-frame-icon.svg'
import AuthCheckIcon from '../../assets/icons/auth-check-icon.svg'

import Phone from '../../assets/hero/phone.png'
import Plugins from '../../assets/hero/left.png'
import AI from '../../assets/hero/right.png'

const features = [
    {
        title: "Programable plugins",
        css: "border-primary-purple shadow shadow-primary-purple/25",
        iconSrc: PluginsIcon,
        iconWidth: 19,
        iconHeight: 19,
        content: () => <img src={Phone} />
    },
    {
        title: "Custom AI feeds",
        css: "border-primary-red shadow shadow-primary-red/25",
        iconSrc: TargetFrameIcon,
        content: () => <img src={AI} />
    },
    {
        title: "Protect your family",
        css: "border-primary-yellow shadow shadow-primary-yellow/25",
        iconSrc: AuthCheckIcon,
        content: () => <img src={Plugins} />
    }
]

export default function Features() {
    const [tab, setTab] = useState<number>(0)

    return <section>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 overflow-hidden">
            <div className="pt-16 pb-12 md:pt-52 md:pb-20">

                <div>

                    {/* Section content */}
                    <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">

                        {/* Content */}
                        <div className="md:w-7/12 lg:w-1/2 order-1 md:order-none max-md:text-center" data-aos="fade-down">
                            {/* Content #1 */}
                            <div>
                                <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary-red to-primary-yellow pb-3">First personalized social network</div>
                            </div>
                            <h3 className="h3 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">Personalize, Control and Manage your own social network</h3>
                            <p className="text-lg text-slate-400 mb-8">Make your own social network and change how it should behave. Frustrated by current platforms? We've got you covered!</p>
                            <div className="mt-8 max-w-xs max-md:mx-auto space-y-2">
                                {features.map((x, index) => (
                                    <button key={index} className={`flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${tab !== index ? 'border-slate-700 opacity-50' : x.css}`} onClick={() => setTab(index)}>
                                        <img src={x.iconSrc} className="shrink-0 fill-slate-300 mr-3 my-auto" width={x.iconWidth ?? 16} height={x.iconHeight ?? 16} />
                                        <span>{x.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Image */}
                        <div className="md:w-5/12 lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
                            <div className="relative py-24 -mt-12">
                                {/* Particles animation */}
                                <Particles className="absolute inset-0 -z-10" quantity={8} staticity={30} />

                                <div className="flex items-center justify-center">
                                    <div className="relative w-48 h-48 lg:w-64 lg:h-64 flex justify-center items-center">
                                        {/* Halo effect */}
                                        <svg className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none blur-md" width={480} height={480} viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient id="pulse-a" x1="50%" x2="50%" y1="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#FAA328" />
                                                    <stop offset="76.382%" stopColor="#E0394C" />
                                                    <stop offset="100%" stopColor="#94286D" />
                                                </linearGradient>
                                            </defs>
                                            <g fillRule="evenodd">
                                                <path className="pulse" fill="url(#pulse-a)" fillRule="evenodd" d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z" />
                                                <path className="pulse pulse-1" fill="url(#pulse-a)" fillRule="evenodd" d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z" />
                                                <path className="pulse pulse-2" fill="url(#pulse-a)" fillRule="evenodd" d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z" />
                                            </g>
                                        </svg>
                                        {features.map((x, index) => (
                                            <Transition
                                                key={index}
                                                as="div"
                                                show={tab === index}
                                                className="absolute"
                                                enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                                                enterFrom="opacity-0 -rotate-[60deg]"
                                                enterTo="opacity-100 rotate-0"
                                                leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                                                leaveFrom="opacity-100 rotate-0"
                                                leaveTo="opacity-0 rotate-[60deg]"
                                            >
                                                {x.content}
                                            </Transition>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </section>
}