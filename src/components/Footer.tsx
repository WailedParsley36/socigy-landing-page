import { Link } from 'react-router-dom'
import LogoCombined from '../assets/socigy-combined.svg'

import Insta from '../assets/icons/instagram.svg'
import LinkedIn from '../assets/icons/linekdin.png'
import Crunch from '../assets/icons/crunch.png'

const socialLinks = [
    {
        label: "Instagram",
        iconSrc: Insta,
        to: "https://www.instagram.com/_socigy_/",
        css: "text-primary-red/85 hover:text-primary-red",
    },
    {
        label: "Crunchbase",
        iconSrc: Crunch,
        to: "https://www.crunchbase.com/organization/socigy",
        css: "text-primary-purple/85 hover:text-primary-purple",
    },
    {
        label: "LinkedIn",
        iconSrc: LinkedIn,
        to: "https://cz.linkedin.com/company/socigy?trk=public_profile_topcard-current-company",
        css: "text-primary-purple/85 hover:text-primary-purple",
    }
]

// Products
// Features
// Integrations
// Pricing & Plans
// Changelog
// Our method

// Company
// About us
// Diversity & Inclusion
// Blog
// Careers
// Financial statements

// Resources
// Community
// Terms of service
// Report a vulnerability

// Legals
// Refund policy
// Terms & Conditions
// Privacy policy
// Brand Kit

const categories = [
    {
        title: "Product",
        links: [
            {
                title: "Waitlist",
                to: "/waitlist"
            },
            // {
            //     title: "Features",
            //     to: "/features"
            // }
        ]
    },
    {
        title: "Company",
        links: [
            {
                title: "About Us",
                to: "/about-us"
            },
            {
                title: "Contact",
                to: "/contact"
            },
            // {
            //     title: "Careers",
            //     to: "/careers"
            // }
        ]
    },
    {
        title: "Legals",
        links: [
            // {
            //     title: "Terms & Conditions",
            //     to: "/terms-and-conditions"
            // },
            {
                title: "Privacy Policy",
                to: "/privacy-policy"
            }
        ]
    },
]

export default function Footer() {
    return (
        <footer className='bg-black'>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Blocks */}
                <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">

                    {/* 1st block */}
                    <div className="sm:col-span-12 lg:col-span-4 order-1 lg:order-none">
                        <div className="h-full flex flex-col sm:flex-row lg:flex-col justify-between">
                            <div className="mb-4 sm:mb-0">
                                <div className="mb-4 flex flex-row">
                                    <img src={LogoCombined} width={100} />
                                </div>
                                <div className="text-sm text-slate-300">© Socigy s.r.o. <span className="text-slate-500">-</span> 2024 All rights reserved.</div>
                            </div>
                            {/* Social links */}
                            <ul className="flex mt-6 space-x-3">
                                {socialLinks.map(x => <li key={x.to}>
                                    <Link className={"flex justify-center items-center hover:scale-105 transition duration-150 ease-in-out " + x.css} to={x.to} aria-label={x.label}>
                                        <img src={x.iconSrc} className='w-8' />
                                    </Link>
                                </li>)}
                            </ul>
                        </div>
                    </div>

                    {categories.map(x => <div key={x.title} className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <h6 className="text-sm text-slate-50 font-medium mb-2">{x.title}</h6>
                        <ul className="text-sm space-y-2">
                            {x.links.map(y => <li key={y.title}>
                                <Link className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" to={y.to}>{y.title}</Link>
                            </li>)}
                        </ul>
                    </div>)}
                </div>
            </div>
        </footer>
    )
}
