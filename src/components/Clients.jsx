import React from 'react'
import skolar from "../assets/icons/skolarr.png"
import sipoh from "../assets/icons/sipoh.png"
import nets from "../assets/icons/Nets.jpg"
import inchtech from "../assets/icons/inchtech.png"
import GernickDesign from "../assets/icons/GernickDesign.jpg"
import coveriot from "../assets/icons/coveriot.png"
import freemopay from "../assets/icons/freemopay.jpeg"
import autoecole from "../assets/icons/autoecole.jpg"
import wermap from "../assets/icons/wermap.jpg"
import stat1 from '../assets/icons/stat1.png'
import stat2 from '../assets/icons/stat2.png'
import stat3 from '../assets/icons/stat3.png'
import stat4 from '../assets/icons/stat4.png'

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
        <>

<div className='px lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>

<div className='flex flex-col md:flex-row justify-between items-center gap-8 mx-auto'>

    <div className='md:w-1/2 '>
        <motion.h2
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='text-4xl text-red-700 font-semibold mb-4 md:w-4/5 mx-4'>
            Rejoignez notre mouvement <br /> <br /><span className='text-brandPrimary pt-2'>Nous avons une grande équipe dédiée à la cause des etudiants de SUP'PTIC Yaoundé et SUP'PTIC Buea </span>
        </motion.h2>
        <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }} className='md:w-3/4 text-sm text-neutralGrey mb-8  mx-4'>
           Le travail en équipe! Bien plus qu'une simple collaboration 
        </motion.p>

    </div>
    {/* statistics*/}
    <div className='md:w-1/2   mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
        <div className='space-y-8'>
            <div className='flex items-center gap-4'>
                <motion.img
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2)}
                    src={stat1} alt="stats" />

                <div>
                    <h4 className=' text-2xl text-neutralDGrey font-semibold'>+10</h4>
                    <p>Entreprises Partenaires</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <motion.img
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2)}
                    src={stat2} alt="stats" />

                <div>
                    <h4 className=' text-2xl text-neutralDGrey font-semibold'>+200</h4>
                    <p>Etudiants</p>
                </div>
            </div>

        </div>

        <div className='space-y-8'>
            <div className='flex items-center gap-4'>
                <motion.img
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2)}
                    src={stat3} alt="stats" />

                <div>
                    <h4 className=' text-2xl text-neutralDGrey font-semibold'>+15 </h4>
                    <p>Projets à réaliser</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <motion.img
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2)}
                    src={stat4} alt="stats" />

                <div>
                    <h4 className=' text-2xl text-neutralDGrey font-semibold'>+5</h4>
                    <p>Projets réalisés</p>
                </div>
            </div>

        </div>
    </div>

</div>
</div>
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

                <div className='my-12 flex flex-wrap justify-between items-center gap-4'>
                    <div className='flex flex-col'>
                        <motion.img initial="initial"
                            animate="animate"
                            variants={iconVariants(2.5)}
                            src={skolar} alt="company" 
                            className='w-14 h-14'
                            />

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
                            src={coveriot} alt="company" />

                        <motion.p
                            initial="initial"
                            animate="animate"
                            variants={iconVariants2(1.5)}
                            className='text-brandPrimary font-bold'>Coveriot</motion.p>

                    </div>
                    <div className='flex flex-col'>
                        <motion.img initial="initial"
                            animate="animate"
                            variants={iconVariants(1.5)}
                            src={nets} alt="company" 
                            className='w-16 h-14'/>

                        <motion.p
                            initial="initial"
                            animate="animate"
                            variants={iconVariants2(1.5)}
                            className='text-brandPrimary font-bold'>NETS TELECOM</motion.p>

                    </div>
                    <div className='flex flex-col'>
                        <motion.img initial="initial"
                            animate="animate"
                            variants={iconVariants(2.5)}
                            src={sipoh} alt="company" />
                        <motion.p
                            initial="initial"
                            animate="animate"
                            variants={iconVariants2(1.5)}
                            className='text-brandPrimary font-bold'>SIPOH</motion.p>

                    </div>
                    <div className='flex flex-col'>
                        <motion.img initial="initial"
                            animate="animate"
                            variants={iconVariants(2.5)}
                            src={GernickDesign} alt="company"
                            className='w-14 h-14' />
                        <motion.p
                            initial="initial"
                            animate="animate"
                            variants={iconVariants2(1.5)}
                            className='text-brandPrimary font-bold'>Gernick Design</motion.p>

                    </div>

                    <div className='flex flex-col'>
                        <motion.img initial="initial"
                            animate="animate"
                            variants={iconVariants(2.5)}
                            src={inchtech} alt="company" />
                        <motion.p
                            initial="initial"
                            animate="animate"
                            variants={iconVariants2(1.5)}
                            className='text-brandPrimary font-bold'>Inchtech</motion.p>

                    </div>
                    <div className='flex flex-col'>
                        <motion.img initial="initial"
                            animate="animate"
                            variants={iconVariants(2.5)}
                            src={freemopay} alt="company" />
                        <motion.p
                            initial="initial"
                            animate="animate"
                            variants={iconVariants2(1.5)}
                            className='text-brandPrimary font-bold'>Freemo pay</motion.p>

                    </div>
                    <div className='flex flex-col'>
                        <motion.img initial="initial"
                            animate="animate"
                            variants={iconVariants(2.5)}
                            src={autoecole} alt="company" 
                            className='w-14 h-14'/>
                        <motion.p
                            initial="initial"
                            animate="animate"
                            variants={iconVariants2(1.5)}
                            className='text-brandPrimary font-bold'>Auto école la Marseillaise</motion.p>

                    </div>

                    <div className='flex flex-col'>
                        <motion.img initial="initial"
                            animate="animate"
                            variants={iconVariants(2.5)}
                            src={wermap} alt="company" 
                            className='w-14 h-14'/>
                        <motion.p
                            initial="initial"
                            animate="animate"
                            variants={iconVariants2(1.5)}
                            className='text-brandPrimary font-bold'>PV Wer Map</motion.p>

                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Clients
