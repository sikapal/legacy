import React from 'react'

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


const OurServices = () => {

    const services = [
        { id: 1, Title: "PLAN ACADEMIQUE", action1: "Organiser des séminaires d'orientations", action2: "Organiser des challenges au sein des clubs", action3: "Encourager les étudiants à participer challenges numériques nationaux et Internationaux", action4: "Assister et suivre les étudiants(L1, L2 et L3 classique et alternance) pendant les sessions normales ", action5: "Accompagner les étudiants de Licence 3 pendant les PFE", action6: "Assistance à l’obtention de bourses d'études", action7: "Accompagnement des L3 ET Master 2 pour les journées de soutenances", actions8: "Bon de réduction pour les photocopies de cours et TD et relancer la reprographie", actions9: "Ajouter des access point pour la connexion internet",actions10:"Militer pour un barbillerd numérique auprès du conseil d'administration", image: service1 },
        { id: 2, Title: "PLAN PROFESSIONNEL", action1: "Suivre et accompagner les étudiants par les startups partenaires",   action5: "Faciliter les stages académiques et professionnels avec nos partenaires", action7: "Faciliter l'accès aux certifications Microsoft, AWS et Google",action8:"Assister les étudiants pour la recherche de financement" ,image: service2 },

        { id: 3, Title: "PLAN SOCIO-CULTUREL", action1: "Organiser une journée porte ouverte", action2: "Organiser une Journée traditionnelle", action3: "Redynamiser les clubs", action4: "Organiser des journées campus propres et primer la salle la plus propre", action5: "Organiser une conférence sur les TICs, le numérique et les innovations.",  action6: "Organiser une excursion touristique ", action7: "Organiser un bal de fin d’année ", action8: "Renouveler les rideaux dans les salles de classe",action9:"Promouvoir le parrainnage gratuit",action10:"Promouvoir une journée otaku", image: service3 },

        { id: 4, Title: "PLAN SPORTIF", action1: "Organiser la Coupe du directeur  (Masculin et Féminin) ", action3: "Organiser le championnat de football Féminin et Masculin", action4: "Organiser des matchs inter-écoles.", action5: "Organiser un championnat de basketball", action6: "Accompagner les athlètes pendant les qualifications pour les jeux universitaires ", action7: "Organiser un championnat d'échecs et de dames", image: service4 },

    ]

    const bilans = [
        
            { id: 1, Title: "Installation d'un filtre à eau sur le campus", image: service3 },
            { id: 2, Title: "Assistance aux étudiants pour la télédéclaration des revenus annuels", image: service3 },
            { id: 3, Title: "Organisation d'un mini-tournoi de football masculin et féminin", image: service3 },
            { id: 4, Title: "Nettoyage général du campus", image: service3 },
            { id: 5, Title: "Éclairage des toilettes", image: service3 },
            { id: 6, Title: "Installation de trois lampadaires pour éclairer le complexe sportif", image: service3 },
            { id: 7, Title: "Accompagnement du club informatique avec un serveur dédié offert et un nom de domaine", image: service3 },
            { id: 8, Title: "Bon de réduction pour les photocopies de cours et travaux dirigés", image: service3 },
            { id: 9, Title: "Assistance dans la préparation des contrôles continus pour les étudiants de niveau 1 et 2", image: service3 },
            { id: 10, Title: "Installation de réglettes dans les classes de ITT3RC et Master 1 IT", image: service3 },
        ]
        
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='service'>

            <div className='text-center md:w-1/2 mx-auto'>

                <h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -200 }}
                    transition={{ duration: 1.5 }}

                    className='text-4xl text-white  mb-8 md:mb-4 font-semibold'>
                    NOTRE BILAN A CE JOUR
                </h2>
            </div>

            {/*Bilan*/}

            <div className='grid lg:grid-cols-4 sm:grid-cols-1 grid-cols-1 gap-8 justify-center'>
    {
        bilans.map(bilan =>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 2 }}
                key={bilan.id}
                className='mx-auto mb-6 cursor-pointer mt-6'
            >
                <div
                    className='text-center bg-white shadow-lg rounded-3xl px-2 flex items-center justify-center'
                    style={{ width: '250px', height: '150px' }} 
                >
                    <h3 className=' my-2 font-bold text-neutralDGrey'>{bilan.Title}</h3>
                    
                </div>
            </motion.div>
        )
    }
</div>




            <div className='text-center md:w-1/2 mx-auto'>
                <h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -200 }}
                    transition={{ duration: 1.5 }}

                    className='text-4xl text-white mt-4  mb-36 md:mb-4 font-semibold'>
                    NOTRE PLAN D'ACTION
                </h2>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='hidden md:block text-sm  text-white  md:mb-8 md:w-3/4 mx-auto'>
                    Notre plan d'action définit les étapes clés pour atteindre nos objectifs, en mettant l'accent sur des initiatives concrètes et une exécution rigoureuse.
                </motion.p>
            </div>

            {/*All services */}

            <div


                className='grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1  gap-8 items-justify  justify-center '>
                {
                    services.map(service =>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 2 }}
                            key={service.id} className='mx-auto relative mb-12 cursor-pointer mt-12'>

                            <motion.img
                                initial="initial"
                                animate="animate"
                                variants={imageVariants(6)}

                                src={service.image} alt="service-img" className='ml-auto rounded-3xl' />
                            <div

                                className='text-center px-5 bg-white shadow-lg rounded-3xl md:w-3/4 mx-auto  items-center justify-center absolute left-0
                                         right-0 -bottom-8'>
                                <h3 className='text-2xl my-2 font-bold text-neutralDGrey '>{service.Title}</h3>

                                {Object.keys(service).map(key => {
                                    if (key.startsWith('action') && service[key]) {
                                        return (
                                            <li key={key} className='text-sm text-black pb-2 text-justify'>
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
