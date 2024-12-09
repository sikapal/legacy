import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import service1 from '../assets/Service1.jpg'
import service2 from '../assets/Service2.jpg'
import service3 from '../assets/Service3.jpg'
import service4 from '../assets/Service4.jpg'
import { motion } from "framer-motion"

const imageVariants = (duration) => ({
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

const divVariants = (duration) => ({
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

const OurServices = () => {

    const services = [
        { id: 1, Title: "PLAN ACADEMIQUE", action1: "Séminaires d'orientations",action2:"Concours Projets",action3:"Information sur les projets extra scolaires",action4:"Assistance et suivi des étudiants(L1 et L2 et L3 classique et alternance) lors des sessions normales et des rattrapages (cours gratuits.)",action5:"Accompagnement lors des PFE pour les Licence 3 et Master 2",action6:"Assistance à l’obtention de bourses academiques",action7:"Accompagnement des L3 ET Master 2 pour les journées de soutenances", image: service1 },
        { id: 2, Title: "PLAN PROFESSIONEL", action1: "Présentation des startups ",action2:"Visite d’entreprise",action3:"Voyage, excursion dans les centres et entreprises",action4:"Présentation des différentes opportunités de création d’entreprise",action5:"Stage académiques et professionnel avec nos partenaires",action6:"Assistance à l’obtention de bourses academiques", image: service2 },
        { id: 3, Title: "PLAN CULTUREL et SOCIAL", action1: "Journée porte ouverte",action2:"Journée culturelle",action7:"Valorisation des différents clubs de SUP’PTIC ",action4:"Organisation des journées campus propres",action5:"Conférence sur les TICs, le numérique et les innovations.",action6:"Visite d’un site culturelle ",action3:"Bal de fin d’année ", image: service3 },
        { id: 4, Title: "PLAN SPORTIF", action1: "Coupe du directeur et championnat de football (homme et femme) ",action2:"Organisation des matchs inter écoles.",action3:"Championnat de basketballs",action4:"Accompagnement aux qualifications pour le jeux universitaires ", image: service4 },
       
    ]
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='service'>
            <div className='text-center md:w-1/2 mx-auto'>
                <h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -200 }}
                    transition={{ duration: 1.5 }}

                    className='text-4xl text-white  mb-4 font-semibold'>
                    NOTRE PLAN D'ACTION
                </h2>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className=' text-sm text-white  mb-8 md:w-3/4 mx-auto'>
                    Notre plan d'action définit les étapes clés pour atteindre nos objectifs, en mettant l'accent sur des initiatives concrètes et une exécution rigoureuse.
                </motion.p>
            </div>

            {/*All services */}

            <div


                className='grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 items-center justify-center '>
                {
                    services.map(service =>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 2 }}
                            key={service.id} className='mx-auto relative mb-12 cursor-pointer '>

                            <motion.img
                                initial="initial"
                                animate="animate"
                                variants={imageVariants(6)}
                                src={service.image} alt="service-img" className='ml-auto rounded-3xl' />
                            <div
                           
                            className='text-center px-5 py-8   bg-white shadow-lg rounded-md md:w-3/4 mx-auto items-center justify-center absolute left-0
                                         right-0 -bottom-12'>
                                <h3 className='text-2xl font-bold text-neutralDGrey mb-3 '>{service.Title}</h3>
                            
                                {Object.keys(service).map(key => {
                                    if (key.startsWith('action') && service[key]) {
                                        return (
                                            <li key={key} className='text-sm text-neutralGrey mb-3 text-justify'>
                                                {service[key]}
                                            </li>
                                        )
                                    }
                                    return null;
                                })}

                            </div>
                        </motion.div>)
                }
            </div>
        </div>
    )
}

export default OurServices
