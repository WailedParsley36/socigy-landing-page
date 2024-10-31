import { Link } from 'react-router-dom'
import SocigyLogo from '../assets/socigy.svg'

const routes = [
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Sponsors",
        path: "/sponsors"
    },
    {
        title: "Showcase",
        path: "/showcase"
    },
    {
        title: "Waitlist",
        path: "/waitlist"
    },
    {
        title: "Changelog",
        path: "/changelog"
    },
    {
        title: "Docs",
        path: "/docs"
    },
]

export default function Header() {
    return (
        <header className="relative top-0 w-full z-30">
            <div className="mx-auto px-4 md:px-12 lg:px-16 py-2 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/* Site branding */}
                    <div className="flex-1">
                        <div className='w-fit'>
                            <Link to="/" className='w-fit'>
                                <img src={SocigyLogo} width={38} height={38} />
                            </Link>
                        </div>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex md:grow">

                        {/* Desktop menu links */}
                        <ul className="flex grow justify-center flex-wrap items-center">
                            {routes.map(x => <li>
                                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" to={x.path}>{x.title}</Link>
                            </li>)}
                        </ul>

                    </nav>

                    {/* Desktop sign in links */}
                    <ul className="flex-1 flex justify-end items-center">
                        <li>
                            <Link className="font-medium text-sm text-slate-300 hover:text-white whitespace-nowrap transition duration-150 ease-in-out" to="/signin">Sign in</Link>
                        </li>
                        <li className="ml-6">
                            <Link className="btn-sm text-slate-300 hover:text-white border border-slate-300 transition duration-150 ease-in-out w-full group relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none" to="/waitlist">
                                <span className="relative inline-flex items-center">
                                    Join the waitlist
                                </span>
                            </Link>
                        </li>
                    </ul>

                    {/* <MobileMenu /> */}

                </div>
            </div>
        </header>
    )
}
