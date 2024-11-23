import Highlighter, { HighlighterItem } from "../../utility/Highlighter";

import FeatureImg01 from '../../assets/features/customization.png'
import FeatureImg02 from '../../assets/features/profits.svg'
import FeatureImg03 from '../../assets/features/security.png'
import FeatureImg04 from '../../assets/features/browser-tabs.svg'
import { ReactElement } from "react";
import clsx from "clsx";
import { useAosSlidingAnimation } from "../../hooks/useAosSlidingAnimation";
import { Particles } from "../../utility/Particles";

const bentoFeatures: BentoItemProps[] = [
    {
        title: "Make it your own!",
        description: "Customize your experience by adding plugins that enhance both the look and functionality of your app. Tailor everything to suit your needs with seamless integration and endless possibilities",
        shortDescription: "Customize your experience by adding plugins that enhance both the look and functionality of your app",

        colSpan: "md:col-span-7",

        imgSrc: FeatureImg01,
        imgClassName: "h-56 sm:w-[650px] sm:h-[350px]",
        imgAlt: "Canvas painting"
    },
    {
        title: "More revenue for creators",
        description: "Our dynamic revenue sharing model ensures creators get more rewarded than on other platforms!",
        shortDescription: "Our dynamic revenue sharing model ensures creators get more rewarded than on other platforms!",

        colSpan: "md:col-span-5",

        imgSrc: FeatureImg02,
        imgClassName: "h-56 sm:w-[300px] sm:h-[375px]",
        imgAlt: "Profit graph"
    },
    {
        title: "Secure your family",
        description: "Take control of your children's online presence and stay connected with your loved ones",
        shortDescription: "Take control of your children's online presence and stay connected with your loved ones",

        colSpan: "md:col-span-5",

        imgSrc: FeatureImg03,
        imgClassName: "-top-10 h-60 sm:-top-5 sm:h-72",
        imgAlt: "Canvas painting"
    },
    {
        title: <>Simplify Multitasking <br /> One Tab, Endless Possibilities</>,
        description: "Stay focused and boost your productivity by managing multiple tasks within a single tab. Easily dock, resize, and switch between tasks, keeping everything you need in one streamlined view",
        shortDescription: "Stay focused and boost your productivity by managing multiple tasks within a single tab",

        colSpan: "md:col-span-7",

        imgSrc: FeatureImg04,
        imgClassName: "h-32 sm:w-[650px] sm:h-[350px] left-4 sm:left-0 sm:-top-5",
        imgAlt: "Multiple browser tabs"
    }
]

export default function BentoFeatures() {
    const slidingAnim = useAosSlidingAnimation();

    return <section className="w-full">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            {/* Particles animation */}
            <Particles className="absolute inset-0 -z-50" />
            
            <div className="pt-16 md:pt-32">
                <div className="relative pb-12 md:pb-20">
                    <Highlighter className="grid md:grid-cols-12 gap-6 group" data-aos="fade-up">
                        {bentoFeatures.map((x, index) =>
                            <BentoItem key={x.imgSrc} {...x} aosType={`${slidingAnim}-${index % 2 == 0 ? "right" : "left"}`} />
                        )}
                    </Highlighter>
                </div>
            </div>
        </div>
    </section>
}



interface BentoItemProps {
    title: string | ReactElement,
    description: string,
    shortDescription: string,

    colSpan: string,
    aosType?: string,

    imgSrc: string
    imgAlt: string
    imgClassName: string
}

function BentoItem({ title, description, shortDescription, colSpan, aosType, imgSrc, imgAlt, imgClassName }: BentoItemProps) {
    return <div className={colSpan} data-aos={aosType}>
        <HighlighterItem>
            <div className="relative h-full bg-blacky rounded-[inherit] z-20 overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between min-h-80 sm:min-h-[25rem]">
                    <div className="mt-auto w-full bg-gradient-to-t from-[#242428] via-[#242428] h-56 flex items-end justify-center">
                        {/* Text */}
                        <div className="w-full shrink-0 order-1 md:order-none p-6 md:p-10 pt-0">
                            <h3 className="inline-flex text-2xl font-bold text-white pb-1">{title}</h3>
                            <p className="text-gray-400 hidden sm:block">{description}</p>
                            <p className="text-gray-400 sm:hidden">{shortDescription}...</p>
                        </div>
                    </div>
                    {/* img */}
                    <div className="absolute inset-0 top-7 -z-10 md:h-auto overflow-hidden">
                        <img className={clsx("absolute mx-auto max-w-none md:relative inset-0", imgClassName)} src={imgSrc} alt={imgAlt} />
                    </div>
                </div>
            </div>
        </HighlighterItem>
    </div>
}