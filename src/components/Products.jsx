import React from 'react'
import banner3 from "../assets/moses1.jpeg"
import tristan from "../assets/tristan.jpeg"
import auto from "../assets/auto.jpg"
import abou from "../assets/abou.jpg"
import { motion } from "framer-motion"

const Products = () => {
    return (
        <div id='product'>
            {/*about text*/}
            <div className=' lg:px-14 max-w-screen-2xl mx-auto my-8'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>



                    <div className='flex flex-col md:flex-row justify-between items-center gap-8' id='testimonial'>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -200 }}
                            transition={{ duration: 2 }}
                            className='md:w-1/3 '>
                            <img src={abou} alt="aboutImg"
                                className='w-[500px] h-[500px] rounded-3xl px-4'
                            />
                        </motion.div>

                        <div className='md:w-2/3 mx-4'>
                            <motion.div whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 200 }}
                                transition={{ duration: 2 }}>
                                <h2 className='text-4xl text-red-700 font-semibold mb-4 md:w-4/5'> Message du PDG de NET-TELECOM</h2>
                                <p className='md:w-3/4 text-sm text-white mb-8 text-justify'>
                                    En tant que PDG de nET TELECOM, je tiens à exprimer tout notre soutien à l’initiative <span className='font-bold'>Legacy</span>,
                                    une vision ambitieuse qui incarne la collaboration, l’innovation et le progrès.
                                    Chez NETS, nous partageons ces valeurs et nous croyons fermement en l’importance de bâtir un avenir où chaque talent peut s’épanouir pleinement.

                                    NETS, en tant qu'acteur dans les domaines des Télécommunications, de l’Informatique,
                                    des Technologies émergentes du numérique, et des Systèmes et Services de l'Internet des Objets,
                                    s'engage à jouer un rôle actif dans cet écosystème. Nous sommes également spécialistes des Réseaux d’Objets,
                                    et notre expertise nous permet de relever des défis technologiques de pointe.

                                    Dans cette optique, nous garantissons l’offre de stages académiques aux étudiants de Sup'ptic de part notre partenariat avec le groupe Legacy.
                                    Ce partenariat stratégique vise à offrir aux jeunes talents une opportunité concrète de développer leurs compétences au sein de projets innovants,
                                    alignés sur les dernières tendances technologiques.

                                    Par ce soutien, nous réaffirmons notre volonté de construire un avenir où la jeunesse, formée et inspirée, devient la pierre angulaire du développement
                                    durable et de la transformation numérique. Ensemble avec Legacy, réecrivons l'histoire et créons un héritage! !</p>
                                <h5 className='text-white text-sm font-semibold mb-4'>KEVIN HERMAN</h5>
                                <p className='text-base text-white mb-8 font-bold'>PDG NET TELECOM</p>

                            </motion.div>
                        </div>
                    </div>


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
                            className='w-[400px] h-[500px] rounded-3xl px-4'
                        />
                    </motion.div>

                    <div className='md:w-2/3 mx-4'>
                        <motion.div whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 200 }}
                            transition={{ duration: 2 }}>
                            <h2 className='text-4xl text-red-700 font-semibold mb-4 md:w-4/5'> A few words from AFOPEZI MOSES </h2>

                            <p className='md:w-4/5 text-sm text-black mb-8 leading-1 text-justify '>

                                It is with profound enthusiasm that I speak about Legacy, a movement that embodies what we all seek: excellence, innovation, and the passion for a better future.

                                <br />At SKOLAR, our mission has always been to transform education, push boundaries, and create opportunities for everyone. This is exactly what I see in <span className='font-bold'> Legacy </span>: a team of bold leaders, driven by a clear vision and a determination to make SUP'PTIC shine.

                                <br /> <span className='text-brandPrimary font-bold'> Why choose Legacy?</span> Because they don't just talk about change; they act. They understand that education, collaboration, and respect are the pillars of sustainable success. With <span className='font-bold'> Ahmed Mounir</span> and his team, you have people who not only listen but are ready to roll up their sleeves to address the challenges we face as students.
                                <span className=''>
                                    <br /> <br />And at <span className='font-bold'>SKOLAR</span>, we go even further to support this vision. We offer students unique opportunities to:
                                    <br />
                                    <li className='ml-4'> Participate in project competitions, where your ideas can become concrete solutions.</li>
                                    <li className='ml-4'> Work with our team to gain practical skills and contribute to initiatives that transform the educational sector.
                                        Legacy is a philosophy that resonates with the values we uphold at SKOLAR: a platform where every student has the chance to excel, innovate, and build their future.
                                    </li>
                                    Together, with <span className='font-bold'> Legacy </span> and<span className='font-bold'> SKOLAR </span>, we can transform SUPPTIC and provide every student with an environment where they can truly thrive.

                                    Join Legacy. Join progress. Join excellence.
                                </span>
                            </p>

                            <h5 className='text-brandPrimary text-xl font-semibold mb-4'>Afopezi Moses</h5>
                            <p className='text-base text-neuralGrey mb-8 font-bold'>CEO SKOLAR</p>

                        </motion.div>
                    </div>
                </div>
            </div>


            {/* other testimonies */}
            <div className='px lg:px-14 max-w-screen-2xl mx-auto my-8'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>


                    <div className='md:w-2/3 mx-4'>
                        <motion.div whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 200 }}
                            transition={{ duration: 2 }}>
                            <h2 className='text-4xl text-red-700 font-semibold mb-4 md:w-4/5'> Laissez-vous conduire par un partenaire de qualité </h2> <p className='md:w-3/4 text-sm text-white mb-8 text-justify'> Chez Auto-École <strong>La Marseillaise</strong>, notre mission a toujours été d'accompagner les jeunes et les professionnels vers une maîtrise complète de la conduite,
                                avec un accent sur la sécurité et la confiance sur la route. Nous croyons fermement
                                qu’une bonne éducation routière est un pilier essentiel pour construire une société plus sûre et responsable.
                                C'est dans cet esprit que nous avons décidé de collaborer avec Legacy. Ce partenariat stratégique reflète nos valeurs communes :
                                l’excellence, l’engagement envers les jeunes et la volonté de contribuer à leur développement. Grâce à cette collaboration,
                                nous offrons aux étudiants et membres de la communauté SUPPTIC des opportunités uniques de : Accéder à des formations adaptées,
                                modernes et à la pointe des techniques d’apprentissage de la conduite. Bénéficier de conditions préférentielles,
                                car nous croyons au soutien actif des initiatives étudiantes et à l'encouragement des talents. En tant que partenaire de Legacy,
                                nous sommes fiers de contribuer à un projet qui ne se limite pas à éduquer, mais qui aspire à transformer les vies et à inspirer le changement. Ensemble,
                                nous bâtissons un avenir où chaque étudiant pourra conduire son destin avec assurance, sur la route comme dans la vie.
                                Rejoignez-nous chez Auto-Ecole Valere et bénéficiez d’une formation qui va au-delà de la conduite. Avec nous, chaque trajet est une étape vers le succès. </p>
                            <p className='text-base text-white mb-8 font-bold'>Auto-école La Marseillaise</p>



                        </motion.div>
                    </div>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -200 }}
                        transition={{ duration: 2 }}
                        className='md:w-1/3 '>
                        <img src={auto} alt="aboutImg"
                            className='w-[400px] h-[400px] rounded-3xl px-4'
                        />
                    </motion.div>



                </div>

            </div>

            {/* other testimonies */}
            <div className='px lg:px-14 max-w-screen-2xl mx-auto mt-8 bg-white'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>

                <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -200 }}
                        transition={{ duration: 2 }}
                        className='md:w-1/3 '>
                        <img src={tristan} alt="aboutImg"
                            className='w-[400px] h-[500px] rounded-3xl px-4 '
                        />
                    </motion.div>


                    <div className='md:w-2/3 mx-4'>
                        <motion.div whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 200 }}
                            transition={{ duration: 2 }}>
                            <h2 className='text-4xl text-red-700 font-semibold mb-4 md:w-4/5 pt-4'> Message de Dji Tristan</h2>
                            <p className='md:w-3/4 text-sm text-black mb-8 text-justify'>
                                Je tiens à exprimer tout mon soutien au mouvement
                                Legacy et à son équipe dynamique.
                                En tant que CEO de FREEMO PAY, une entreprise qui prône l'innovation,
                                la collaboration et l'ambition de transformer les secteurs dans lesquels nous évoluons,
                                je reconnais dans Legacy les mêmes valeurs qui nous animent. Legacy, sous la direction de Ahmed Mounir


                                et de toute son équipe, incarne une vision audacieuse et un engagement à faire évoluer l’environnement étudiant de SUPPTIC vers des horizons
                                plus vastes et plus prospères. Leur initiative ne se limite pas seulement à des discours, mais se traduit par des actions concrètes visant à améliorer les conditions de vie et d’étude des étudiants. Leur capacité à unifier et à motiver les étudiants autour d’un même objectif est admirable. Chez FREEMO PAY, nous croyons fermement en la force du collectif et en la puissance des idées nouvelles. Nous soutenons pleinement le projet Legacy, qui est bien plus qu’un simple mouvement politique, mais une plateforme d’opportunités pour les étudiants, où l’innovation et la solidarité sont au cœur de chaque action. Ce type de leadership est exactement ce dont nous avons besoin pour construire un avenir meilleur. De plus, FREEMO PAY est fière d’offrir des stages académiques aux étudiants de SUPPTIC, leur permettant d'acquérir une expérience précieuse dans le domaine de la fintech et des technologies numériques. Nous croyons que ces opportunités de stage contribuent non seulement à leur développement professionnel, mais également à leur préparation pour un futur prometteur dans des secteurs en constante évolution.
                                Nous sommes impatients de voir l’impact positif que Legacy aura sur la communauté de SUPPTIC et au-delà.

                                FREEMO PAY sera toujours là pour encourager et soutenir de telles initiatives qui créent de la valeur et transforment le quotidien des étudiants.
                                Je vous invite tous à rejoindre ce mouvement de changement et à apporter votre contribution à cette vision ambitieuse. </p>
                            <h5 className='text-brandPrimary text-sm font-semibold mb-4'>CEO FREEMO PAY</h5>
                            <p className='text-base text-brandPrimary mb-8 font-bold'>DJI TRISTAN</p>



                        </motion.div>
                    </div>

                 

                </div>

            </div>


        </div>
    )
}

export default Products
