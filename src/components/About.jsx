import React from 'react'
import aboutImg from '../assets/team-01.jpeg'
import stat1 from '../assets/icons/stat1.png'
import stat2 from '../assets/icons/stat2.png'
import stat3 from '../assets/icons/stat3.png'
import stat4 from '../assets/icons/stat4.png'
import { motion } from "framer-motion"

const buttonVariants = (duration) => ({
    initial: { y: -10 },
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

const iconVariants = (duration) => ({
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


const About = () => {
    return (
        <div id='about' className='bg-white'>
            {/*about text*/}
            <div className='px lg:px-14 max-w-screen-2xl mx-auto my-8'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                    >
                        <img
                           className='h-[400px] mt-5'
                            src={aboutImg} alt="aboutImg" />
                    </motion.div>
                    <motion.div

                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className='md:w-3/5 mx-4'>
                        <motion.h2
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className='text-4xl text-brandPrimary font-semibold mb-4 md:w-4/5'>
                            SUPPTIC-LEGACY
                        </motion.h2>
                        <p

                            className='md:w-3/4 text-sm text-neutralGrey mb-8 '>
                            After three years of dedicated research, development and testing, our team of experts has crafted a cutting-edge VoIp solution tailored to the unique needs of national and international organizations.
                            Leveraging our expertise and industry Insights, we've designed a scalable, secure and intuitive platform that streamlines communication, enhances collaboration and fuels growth.
                            After three years of dedicated research, development and testing, our team of experts has crafted a cutting-edge VoIp solution tailored to the unique needs of national and international organizations.
                            Leveraging our expertise and industry Insights, we've designed a scalable, secure and intuitive platform that streamlines communication, enhances collaboration and fuels growth.
                      
                        </p>
                    
            
                    </motion.div> 

                </div>

            </div>

            {/*company statistics*/}
            <div className='px lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>

                <div className='flex flex-col md:flex-row justify-between items-center gap-8 mx-auto'>

                    <div className='md:w-1/2 '>
                        <motion.h2
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className='text-4xl text-red-700 font-semibold mb-4 md:w-4/5 mx-4'>
                            Rejoignez notre mouvement <br /> <br /><span className='text-brandPrimary pt-2'>Nous avons une grande équipe dédiée à la cause de SUP'PTIC </span>
                        </motion.h2>
                        <motion.p
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }} className='md:w-3/4 text-sm text-neutralGrey mb-8  mx-4'>
                            Hard work and determination is the key to how success
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
                                    src={stat3} alt="stats" />

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
                                    src={stat2} alt="stats" />

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
        </div>
    )
}

export default About
