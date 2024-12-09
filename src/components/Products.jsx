import React from 'react'
import banner3 from "../assets/moses.jpg"
import auto from "../assets/auto.jpg"
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
const Products = () => {
    return (
        <div id='product'>
            {/*about text*/}
            <div className='px lg:px-14 max-w-screen-2xl mx-auto my-8'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.5 }}
                        className='md:w-3/5 mx-4'>
                        <h2 className='text-4xl text-red-700 font-semibold mb-4 md:w-4/5'>
                            The quality of the projets of Sup'ptic Legacy makes me believe in them
                        </h2>
                        <p className='md:w-3/4 text-sm text-white mb-8 text-justify'>
                            I'm PApa Doe CEO OPEUTAH Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
                            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit
                            erat a magna. Donec quis erat at libero ultrices mollis. In hac
                            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
                            facilisis finibus. In euismod augue vitae nisi ultricies,
                            non aliquet urna tincidunt. Integer in nisi eget nulla commodo
                            faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.
                            Donec consectetur faucibus ipsum id gravida.
                        </p>


                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -200 }}
                        transition={{ duration: 2 }}>
                        <img src={banner3} alt="aboutImg"
                            className='w-[400px] h-[400px] rounded-2xl'
                        />
                    </motion.div>


                </div>

            </div>

            {/*grey section */}

            <div className=' lg:px-14 max-w-screen-2xl w-full mx-auto bg-neutralSilver py-16'>

                <div className='flex flex-col md:flex-row justify-between items-center gap-8' id='testimonial'>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -200 }}
                        transition={{ duration: 2 }}
                        className='md:w-1/3 '>
                        <img src={banner3} alt="aboutImg"
                            className='w-[400px] h-[500px] rounded-2xl'
                        />
                    </motion.div>

                    <div className='md:w-2/3 mx-4'>
                        <motion.div whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 200 }}
                            transition={{ duration: 2 }}>
                            <p className='md:w-4/5 text-sm text-black mb-8 leading-1 text-justify '>

                                C'est avec un profond enthousiasme que je parle de Legacy, un mouvement qui incarne ce que nous recherchons tous : l’excellence, l’innovation et la passion pour un avenir meilleur.

                                <br />Chez SKOLAR, notre mission a toujours été de transformer l'éducation, de repousser les limites et de créer des opportunités pour tous. C'est exactement ce que je vois dans <span className='font-bold'> Legacy </span>  : une équipe de leaders audacieux, menés par une vision claire et une détermination à faire briller SUPPTIC.

                                <br /> <span className='text-brandPrimary font-bold'> Pourquoi choisir Legacy ?</span> Parce qu’ils ne parlent pas seulement de changement, ils agissent. Ils comprennent que l’éducation, la collaboration et le respect sont les piliers d’un succès durable. Avec <span className='font-bold'> Ahmed Mounir</span> et son équipe, vous avez des personnes qui non seulement écoutent, mais qui sont prêtes à se retrousser les manches pour résoudre les défis auxquels nous faisons face en tant qu’étudiants.
                                <span className=''>
                                    <br /> <br />Et chez <span className='font-bold'>SKOLAR</span>, nous allons encore plus loin pour soutenir cette vision. Nous offrons aux étudiants des opportunités uniques de :
                                    <br />
                                    <li className='ml-4'>  Participer à des compétitions de projets, où vos idées peuvent devenir des solutions concrètes.</li>
                                    <li className='ml-4'>   Travailler avec notre équipe, pour acquérir des compétences pratiques et contribuer à des initiatives qui transforment le secteur éducatif.
                                        Legacy, c’est une philosophie qui résonne avec les valeurs que nous défendons à SKOLAR : une plateforme où chaque étudiant a une chance d’exceller, d’innover et de construire son avenir.
                                    </li>
                                    Ensemble, avec <span className='font-bold'> Legacy </span> et<span className='font-bold'> SKOLAR </span>, nous pouvons transformer SUPPTIC et offrir à chaque étudiant un environnement où il peut s’épanouir pleinement.

                                    Rejoignez Legacy. Rejoignez le progrès. Rejoignez l'excellence.
                                </span>
                            </p>
                            <h5 className='text-brandPrimary text-xl font-semibold mb-4'>CEO</h5>
                            <p className='text-base text-neuralGrey mb-8 font-bold'>SKOLAR</p>

                        </motion.div>
                    </div>
                </div>
            </div>


            {/* other testimonies */}
            <div className='px lg:px-14 max-w-screen-2xl mx-auto my-8'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.5 }}
                        className='md:w-3/5 mx-4'>
                        <h2 className='text-4xl text-red-700 font-semibold mb-4 md:w-4/5'>
                            Laissez-vous conduire par un partenaire de qualité
                        </h2>
                        <p className='md:w-3/4 text-sm text-white mb-8 text-justify'>
                            Chez Auto-École Valere, notre mission a toujours été d'accompagner les jeunes et les professionnels vers une maîtrise complète de la conduite, avec un accent sur la sécurité et la confiance sur la route. Nous croyons fermement qu’une bonne éducation routière est un pilier essentiel pour construire une société plus sûre et responsable.

                            C'est dans cet esprit que nous avons décidé de collaborer avec Legacy. Ce partenariat stratégique reflète nos valeurs communes : l’excellence, l’engagement envers les jeunes et la volonté de contribuer à leur développement.

                            Grâce à cette collaboration, nous offrons aux étudiants et membres de la communauté SUPPTIC des opportunités uniques de :

                            Accéder à des formations adaptées, modernes et à la pointe des techniques d’apprentissage de la conduite.
                            Bénéficier de conditions préférentielles, car nous croyons au soutien actif des initiatives étudiantes et à l'encouragement des talents.
                            En tant que partenaire de Legacy, nous sommes fiers de contribuer à un projet qui ne se limite pas à éduquer, mais qui aspire à transformer les vies et à inspirer le changement. Ensemble, nous bâtissons un avenir où chaque étudiant pourra conduire son destin avec assurance, sur la route comme dans la vie.

                            Rejoignez-nous chez Auto-Ecole Valere et bénéficiez d’une formation qui va au-delà de la conduite. Avec nous, chaque trajet est une étape vers le succès.
                        </p>
                        <h5 className='text-white text-xl font-semibold mb-4'>DG</h5>
                        <p className='text-base text-white mb-8 font-bold'>Auto-école VALERE</p>


                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -200 }}
                        transition={{ duration: 2 }}>
                        <img src={auto} alt="auto"
                            className='w-[400px] h-[400px] rounded-2xl'
                        />
                    </motion.div>


                </div>

            </div>

        </div>
    )
}

export default Products
