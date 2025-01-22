import { User } from 'lucide-react';
// import { Link as ScrollLink } from 'react-scroll';
import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

export default function HeaderUser({ auth }) {
    return (
        <>
            <header className="relative flex w-full flex-wrap bg-[#F1F1E9] py-3 text-sm sm:flex-nowrap sm:justify-start">
                <nav className="mx-auto grid w-full grid-cols-12 px-4 sm:flex sm:items-center sm:justify-between">
                    {/* Logo */}
                    <div className="col-span-6 flex w-full items-center justify-end max-sm:justify-start">
                        <img
                            src="/matrai-logo.png"
                            className="size-40 w-auto max-sm:size-10"
                            alt="Logo"
                        />
                    </div>

                    {/* User Menu */}
                    <div className="col-span-6 flex w-full items-center justify-end gap-2">
                        {auth.user ? (
                            <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
                                <button
                                    id="hs-dropdown-account"
                                    type="button"
                                    className="inline-flex h-10 w-10 items-center justify-center gap-x-2 rounded-full border border-transparent bg-white text-sm font-semibold text-gray-800 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:text-white"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    aria-label="Dropdown"
                                >
                                    <User
                                        color="#000000"
                                        strokeWidth={0.75}
                                        absoluteStrokeWidth
                                    />
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-wrap gap-2">
                                <Link
                                    href={route('login')}
                                    className="rounded-md border-2 border-gray-400 bg-white px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="rounded-md border-2 border-gray-400 bg-white px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </nav>
            </header>

            {/* Navigation Menu */}
            <div className="flex w-full flex-wrap justify-center gap-5 px-4 py-2 text-sm sm:gap-10 md:text-base">
                <Link
                    href="#carousel-banner"
                    className="hover:text-[#D4D49C] hover:underline"
                >
                    HOME
                </Link>
                <Link
                    href="#best-products"
                    className="hover:text-[#D4D49C] hover:underline"
                >
                    BEST PRODUCTS
                </Link>
                <Link
                    to="top-categories"
                    smooth={true}
                    duration={500}
                    className="hover:text-[#D4D49C] hover:underline"
                >
                    TOP CATEGORIES
                </Link>
                <Link
                    href="#best-sales"
                    className="hover:text-[#D4D49C] hover:underline"
                >
                    BEST SALES
                </Link>
                <Link
                    href="#new-arrivals"
                    className="hover:text-[#D4D49C] hover:underline"
                >
                    NEW ARRIVALS
                </Link>
                <Link
                    href="#rents"
                    className="hover:text-[#D4D49C] hover:underline"
                >
                    RENTS
                </Link>
                <Link
                    href="#contacts"
                    className="hover:text-[#D4D49C] hover:underline"
                >
                    CONTACTS
                </Link>
                <Link
                    href="#abouts"
                    className="hover:text-[#D4D49C] hover:underline"
                >
                    ABOUTS
                </Link>
            </div>
        </>
    );
}
