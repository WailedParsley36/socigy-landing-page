import clsx from 'clsx'
import { Particles } from '../../utility/Particles'

import User1Icon from '../../assets/testimonials/user1.webp'
import User2Icon from '../../assets/testimonials/user2.webp'
import User3Icon from '../../assets/testimonials/user3.webp'
import User4Icon from '../../assets/testimonials/user4.webp'
import { useAosSlidingAnimation } from '../../hooks/useAosSlidingAnimation'

const testimonials = [
    {
        name: "Caroline Parks",
        iconSrc: User1Icon,
        content: `I am tired of all social media looking 
                  the same. I want to customize my feed
                  based on my interests, but no platform
                  lets me do that.`
    },
    {
        name: "Sam Harris",
        iconSrc: User2Icon,
        content: `I have young children and I am worried
                  about their safety on social media. I want
                  them to only see content that's appropriate
                  for their age.`
    },
    {
        name: "David Smith",
        iconSrc: User3Icon,
        content: `It's difficult to find content that interests
                  me. My feed is full of irrelevant posts and
                  ads, and I wish I could focus only on
                  topics I truly care about.`
    },
    {
        name: "Alex Matthew",
        iconSrc: User4Icon,
        content: `I find it frustrating that creators get such
                  a small portion of their earnings. It feels
                  unfair that social media platforms take
                  such a large commission from them.`
    }
]

export default function test() {
    const slidingAnim = useAosSlidingAnimation();

    return <section className="w-full">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            {/* Particles animation */}
            <Particles className="absolute inset-0 -z-50" />
            <div className="pt-16 md:pt-32">
                <div className="relative pb-12 md:pb-20">
                    <h2 className='h2 text-white text-center font-inter font-extrabold mb-14' data-aos="fade-down">The Frustrations People Share About Social Media</h2>

                    <div className="grid md:grid-cols-9 gap-6 group">
                        {testimonials.map((x, index) =>
                            <UserTestimonial key={x.name} {...x} {...(index == testimonials.length - 1 ? { className: "md:col-start-4" } : undefined)} aosType={`${slidingAnim}-${slidingAnim == "fade" ? "up" : index % 2 == 0 ? "right" : "left"}`} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
}

interface UserTestimonialProps {
    name: string,
    iconSrc: string,
    content: string

    className?: string
    aosType: string
}

function UserTestimonial({ className, name, content, iconSrc, aosType }: UserTestimonialProps) {
    return <div className={clsx('rounded-2xl p-6 w-full md:col-span-3 bg-blacky', className)} data-aos={aosType}>
        <div className='flex flex-row align-middle space-x-3'>
            <img src={iconSrc ?? '/favicon.svg'} className='w-10' alt='User Avatar' />
            <span className='my-auto text-white font-poppins font-medium text-xl'>{name}</span>
        </div>
        <div className='mt-4'>
            <p className="text-gray-400">„{content}”</p>
        </div>
    </div>
}