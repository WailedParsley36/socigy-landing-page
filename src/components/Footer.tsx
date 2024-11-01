import { Link } from 'react-router-dom'
import Logo from '../assets/socigy-text.svg'

const socialLinks = [
    {
        label: "Twitter2",
        iconSrc: "",
        to: "https://x.com",
        css: "text-primary-yellow/85 hover:text-primary-yellow",
    },
    {
        label: "Twitter2",
        iconSrc: "",
        to: "https://x.com/",
        css: "text-primary-red/85 hover:text-primary-red",
    },
    {
        label: "Twitter",
        iconSrc: "",
        to: "https://x.com/a",
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
                title: "Features",
                to: "/features"
            }
        ]
    },
    {
        title: "Company",
        links: [
            {
                title: "About Us",
                to: "/about"
            },
            {
                title: "Contact",
                to: "/contact"
            },
            {
                title: "Careers",
                to: "/careers"
            }
        ]
    },
    {
        title: "Legals",
        links: [
            {
                title: "Terms & Conditions",
                to: "/terms-and-conditions"
            },
            {
                title: "Privacy Policy",
                to: "/privacy-policy"
            }
        ]
    },
]

export default function Footer() {
    return (
        <footer>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Blocks */}
                <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">

                    {/* 1st block */}
                    <div className="sm:col-span-12 lg:col-span-4 order-1 lg:order-none">
                        <div className="h-full flex flex-col sm:flex-row lg:flex-col justify-between">
                            <div className="mb-4 sm:mb-0">
                                <div className="mb-4">
                                    <img src={Logo} />
                                </div>
                                <div className="text-sm text-slate-300">© Socigy s.r.o. <span className="text-slate-500">-</span> All rights reserved.</div>
                            </div>
                            {/* Social links */}
                            <ul className="flex mt-6">
                                {socialLinks.map(x => <li key={x.to}>
                                    <Link className={"flex justify-center items-center hover:scale-105 transition duration-150 ease-in-out " + x.css} to={x.to} aria-label={x.label}>
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                                        </svg>
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
