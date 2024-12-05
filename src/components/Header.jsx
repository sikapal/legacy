import React, { useState, useEffect } from "react";
import logo from '../assets/logo1.png';
import { Link } from "react-scroll"
import { FaXmark, FaBars } from 'react-icons/fa6'
import { motion } from "framer-motion"

const buttonVariants = (duration) => ({
    initial: { y: -20 },
    animate: {
        y: [20, -20],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }

}
)

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true)
            }
            else {
                isSticky
            }

        };
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.addEventListener('scroll', handleScroll)
        }
    })

    //navitem array
    const navItems = [
        { link: "Accueil", path: "home" },
        { link: "A propos", path: "about" },
        { link: "Plan d'actions", path: "service" },
        { link: "Partenaires", path: "client" },
        { link: "Témoignages", path: "product" },
        
       
    ];

    return (
        <header className="w-full bg-brandPrimary md:bg-transparent fixed top-0 left-0 right-0 ">
            <nav className={`py-4 lg:px-1 px-4 ${isSticky ? "sticky top-0 left-0 right-0  bg-brandPrimary duration-300" : ""}`}>
                <div className="flex justify-between items-center text-base  bg-brandPrimary gap-8">
                    <div className="flex justify-between gap-10">
                        <a href="" className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} alt="logo" className='w-10  inline-block items-center' /><span className='text-white'>SUP'PTIC LEGACY</span></a>
                        <ul className="pt-1 md:flex space-x-12 hidden">
                            {
                                navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} duration={500} className="block text-base text-white hover:text-white first:font-meduim cursor-pointer" >{link}</Link>)
                            }
                        </ul>
                    </div>

                    {/* Button for large devices */}

                    <div className="space-x-12 hidden lg:flex items-center">
                        {/* <a href="/" className="hidden lg:flex items-center text-brandPrimary hover:text-gray900">Login</a> */}
                        <motion.button
                            initial="initial"
                            animate="animate"
                            variants={buttonVariants(3)}
                            className="bg-brandPrimary border text-white text-2xl py-2 px-4 transition-all duration-300
                             rounded-2xl hover:bg-[#223478]
                                  ">
                            Rejoignez notre mouvement
                        </motion.button>
                    </div>

                    {/*Menu Button for only mobile devices */}

                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white Focus:outline-none Focus:text-gray-500">

                            {
                                isMenuOpen ? (<FaXmark className="h-6 w-6" />) : (<FaBars className="h-6 w-6 text-white" />)
                            }
                        </button>
                    </div>
                </div>

                {/*nav items for mobile devices */}

                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100}
                            key={path} duration={500} className="block text-base text-white hover:text-gray-900
                                first:font-meduim cursor-pointer" >{link}</Link>)

                    }
                </div>
            </nav>
        </header>


    )
}

export default Header
