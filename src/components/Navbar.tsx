import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import LogoText from '../assets/socigy-text.svg'

const routes = [
    {
        title: "About",
        route: "/about-us"
    },
    {
        title: "Waitlist",
        route: "/waitlist"
    },
    {
        title: "Contact",
        route: "/contact"
    },
]

export default function Navbar() {
    return <header className="absolute w-full z-30 bg-gradient-to-t from-transparent to-black">
        <div className="mx-auto px-4 sm:px-6 lg:px-24">
            <div className="flex items-center justify-between h-16 md:h-20 pt-6 md:pt-0">

                {/* Site branding */}
                <div className="flex-1">
                    <div className="mt-1 w-fit">
                        <Link to='/' className="w-fit">
                            <img src={LogoText} alt='Text logo of Socigy' />
                        </Link>
                    </div>
                </div>

                {/* Desktop navigation */}
                <nav className="hidden md:flex md:grow">

                    {/* Desktop menu links */}
                    <ul className="flex grow justify-center flex-wrap items-center">
                        {routes.map(x =>
                            <li key={x.route}>
                                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" to={x.route}>{x.title}</Link>
                            </li>
                        )}
                    </ul>

                </nav>

                {/* Desktop sign in links */}
                <ul className="flex-1 flex justify-end items-center">
                    {/* <li>
                        <p className="text-slate-300">Edit</p>
                    </li> */}
                    <li className="ml-6 hidden sm:block">
                        <Link className="btn-sm text-slate-200 hover:text-white transition duration-150 ease-in-out w-full group border-gray-400 border-2 relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none" to="/waitlist">
                            <span className="relative inline-flex items-center">
                                Join the waitlist <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                            </span>
                        </Link>
                    </li>
                </ul>

                <MobileMenu />

            </div>
        </div>
    </header>
}

function MobileMenu() {
    const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

    const trigger = useRef<HTMLButtonElement>(null)
    const mobileNav = useRef<HTMLDivElement>(null)

    // close the mobile menu on click outside
    useEffect(() => {
        const clickHandler = ({ target }: { target: EventTarget | null }): void => {
            if (!mobileNav.current || !trigger.current) return;
            if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
            setMobileNavOpen(false)
        };
        document.addEventListener('click', clickHandler)
        return () => document.removeEventListener('click', clickHandler)
    })

    // close the mobile menu if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: { keyCode: number }): void => {
            if (!mobileNavOpen || keyCode !== 27) return;
            setMobileNavOpen(false)
        };
        document.addEventListener('keydown', keyHandler)
        return () => document.removeEventListener('keydown', keyHandler)
    })

    return (
        <div className="md:hidden flex items-center ml-4">
            {/* Hamburger button */}
            <button
                ref={trigger}
                className={`hamburger ${mobileNavOpen && 'active'}`}
                aria-controls="mobile-nav"
                aria-expanded={mobileNavOpen}
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
                <span className="sr-only">Menu</span>
                <svg className="w-5 h-5 fill-current text-slate-300 hover:text-white transition duration-150 ease-in-out" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <rect y="2" width="20" height="2" rx="1" />
                    <rect y="9" width="20" height="2" rx="1" />
                    <rect y="16" width="20" height="2" rx="1" />
                </svg>
            </button>

            {/*Mobile navigation */}
            <nav
                id="mobile-nav"
                ref={mobileNav}
                className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
                style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
            >
                <ul className="border border-transparent [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] rounded-lg px-4 py-1.5">
                    <li>
                        <Link className="flex font-medium text-sm text-slate-300 hover:text-white py-1.5" to="/">Home</Link>
                    </li>
                    {routes.map(x =>
                        <li key={x.route}>
                            <Link className="flex font-medium text-sm text-slate-300 hover:text-white py-1.5" to={x.route}>{x.title}</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}
