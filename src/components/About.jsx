import React from 'react'
import aboutImg from '../assets/team.jpg'

import { motion } from "framer-motion"


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
                            className='md:w-[700px] sm:h[50px] md:h-[400px] mt-5 px-4 rounded-3xl'
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
                            className='md:mt-5 text-4xl text-center text-brandPrimary  font-semibold mb-4 md:w-4/5'>
                            SUPPTIC-LEGACY
                        </motion.h2>
                        <p

                            className='md:w-3/4 text-sm text-black mb-8 text-justify'>
                            <span className='font-bold'>SUPPTIC Legacy</span> est un projet ambitieux porté par une équipe dynamique et engagée,
                            avec à sa tête <span className='font-bold'>Ahmed Mounir Linjouom</span>, étudiant en master 2, option sécurité des réseaux. Ahmed est un leader visionnaire passionné par l’évolution et le rayonnement de notre institution.
                            Cette initiative rassemble des étudiants de différentes classes et spécialités,tant de Sup'ptic  Buea que de  Sup'ptic Yaoundé,
                            unis par une volonté commune de transformer SUPPTIC en un espace d’apprentissage,
                            d’innovation et de collaboration toujours plus performant.
                            <span className='font-bold'> SUPPTIC Legacy </span> aspire à : <br />

                            <li className='ml-5'>Promouvoir un cadre académique et social propice à l’épanouissement de chaque étudiant.<br /></li>
                            <li className='ml-5'> Encourager des initiatives qui reflètent les valeurs de respect, d’unité et de dépassement de soi.<br /></li>
                            <li className='ml-5'> Mettre en place des projets concrets pour améliorer le quotidien des étudiants et renforcer la notoriété de SUPPTIC.<br /> </li>
                            Dirigée par Ahmed Mounir, l’équipe SUPPTIC Legacy est composée d’étudiants issus de diverses filières et promotions, chacun apportant une expertise unique et une perspective enrichissante.
                            Cette diversité est le moteur d’une réflexion collective et d’actions innovantes pour répondre aux besoins réels des étudiants et relever les défis de notre époque.
                        </p>


                    </motion.div>

                </div>

            </div>

            {/*company statistics*/}
           
        </div>
    )
}

export default About
