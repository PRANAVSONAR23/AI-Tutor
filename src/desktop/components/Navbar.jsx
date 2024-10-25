import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "./Logo";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="border-b border-[#E5E7EB]">
            <div className="container mx-auto flex justify-between items-center max-w-7xl p-4">
                <div className="flex items-center">
                    <Logo />
                </div>
                {/* Hamburger Icon */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
                        {isMenuOpen ? (
                            <CloseIcon className="w-6 h-6 text-[#2F3130]" />
                        ) : (
                            <MenuIcon className="w-6 h-6 text-[#2F3130]" />
                        )}
                    </button>
                </div>
                {/* Navigation Links */}
                <nav
                    className={`md:flex items-center space-x-4 p-1 absolute md:static bg-white md:bg-transparent top-16 left-0 w-full md:w-auto transform ${
                        isMenuOpen ? "translate-x-3/4" : "translate-x-full"
                    } transition-transform duration-300 md:transform-none md:flex-row`}
                >
                    <Link
                        to="/dashboard"
                        className="block md:inline-block font-semibold text-[#2F3130] font-stolzl text-base underline leading-6"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/subjects"
                        className="block md:inline-block text-[#535756] hover:underline font-stolzl text-base font-medium leading-6"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Subjects
                    </Link>
                    <Link
                        to="/tests"
                        className="block md:inline-block text-[#535756] hover:underline font-stolzl text-base font-medium leading-6"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Tests
                    </Link>
                    <Link
                        to="/ai-discussion"
                        className="block md:inline-block text-[#535756] hover:underline font-stolzl text-base font-medium leading-6"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        AI Discussion
                    </Link>
                </nav>
                {/* Search and Icons */}
                <div className="hidden md:flex items-center">
                    <div className="relative border border-[#E4E4E7] rounded-lg bg-white">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-2 py-1 w-56 rounded-lg focus:outline-none text-[#71717A] font-stolzl text-sm font-medium"
                        />
                    </div>
                    <div className="flex gap-5 items-center ml-8">
                        <button className="space-x-2">
                            <img src="/search2.svg" className="w-6 h-6" alt="Search" />
                        </button>
                        <button className="space-x-2">
                            <img src="/bell.svg" className="w-6 h-6" alt="Notifications" />
                        </button>
                        <button className="space-x-2">
                            <img src="/avator.svg" className="w-6 h-6" alt="Avatar" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
