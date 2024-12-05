import React from 'react'
import image1 from '../assets/icons/membership.png'
import image2 from '../assets/icons/association.png'
import image3 from '../assets/icons/group-club.png'
import company1 from "../assets/icons/company1.png"
import company2 from "../assets/icons/company2.png"
import company3 from "../assets/icons/company3.png"
import company4 from "../assets/icons/company4.png"
import company5 from "../assets/icons/company5.png"
import company6 from "../assets/icons/company6.png"
import company7 from "../assets/icons/company7.png"
import { motion } from "framer-motion"

const Clients = () => {

    const iconVariants = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            }
        }

    }
    )

    const iconVariants2 = (duration) => ({
        initial: { x: -10 },
        animate: {
            x: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            }
        }

    }
    )


    return (
        <div className='md:px-14 px-4 py-4 max-w-screen-2xl mx-auto bg-white' id='client'>
            <div className='text-center '>
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className='text-4xl text-red-700 font-semibold mb-2'>Nos Partenaires
                </motion.h2>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -200 }}
                    transition={{ duration: 2 }}
                    className='text-black'> Nous avons une dixaine de partenaires qui croient en notre vision et avec qui les étudiants auront la chance d'évoluer avec</motion.p>
                {/*company logo */}

                <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                    <div className='flex flex-col'>
                        <motion.img initial="initial"
                            animate="animate"
                            variants={iconVariants(2.5)}
                            src={company1} alt="company" />

                        <motion.p
                            initial="initial"
                            animate="animate"
                            variants={iconVariants2(1.5)}
                            className='text-brandPrimary font-bold'>SKOLAR</motion.p>

                    </div>

                    <div className='flex flex-col'>
                        <motion.img initial="initial"
                            animate="animate"
                            variants={iconVariants(2)}
                            src={company2} alt="company" />

                        <motion.p
                            initial="initial"
                            animate="animate"
                            variants={iconVariants2(1.5)}
                            className='text-brandPrimary font-bold'>SKOLAR</motion.p>

                    </div>
                    <div className='flex flex-col'>
                        <motion.img initial="initial"
                            animate="animate"
                            variants={iconVariants(1.5)}
                            src={company3} alt="company" />

                        <motion.p
                            initial="initial"
                            animate="animate"
                            variants={iconVariants2(1.5)}
                            className='text-brandPrimary font-bold'>SKOLAR</motion.p>

                    </div>
                    <div className='flex flex-col'>
                        <motion.img initial="initial"
                            animate="animate"
                            variants={iconVariants(2.5)}
                            src={company4} alt="company" />
                        <motion.p
                            initial="initial"
                            animate="animate"
                            variants={iconVariants2(1.5)}
                            className='text-brandPrimary font-bold'>SKOLAR</motion.p>

                    </div>
                    <div className='flex flex-col'>
                        <motion.img initial="initial"
                            animate="animate"
                            variants={iconVariants(2.5)}
                            src={company5} alt="company" />
                        <motion.p
                            initial="initial"
                            animate="animate"
                            variants={iconVariants2(1.5)}
                            className='text-brandPrimary font-bold'>SKOLAR</motion.p>

                    </div>
                    <div className='flex flex-col'>
                        <motion.img initial="initial"
                            animate="animate"
                            variants={iconVariants(2.5)}
                            src={company6} alt="company" />
                        <motion.p
                            initial="initial"
                            animate="animate"
                            variants={iconVariants2(1.5)}
                            className='text-brandPrimary font-bold'>SKOLAR</motion.p>

                    </div>
                    <div className='flex flex-col'>
                        <motion.img initial="initial"
                            animate="animate"
                            variants={iconVariants(2.5)}
                            src={company7} alt="company" />
                        <motion.p
                            initial="initial"
                            animate="animate"
                            variants={iconVariants2(1.5)}
                            className='text-brandPrimary font-bold'>SKOLAR</motion.p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Clients
