
import React from 'react'
import banner1 from "../assets/team-01.jpg"


const Home = () => {
    return (
        <div className='bg-brandPrimary mt-4' id='home'>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-2 min-h-screen h-screen'>
                <div className='w-full mx-2 py-4 duration-8000'>
                    <div className="my-28 md:my-8 md:mx-2 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div className=' '>
                            <img className='mt-6 sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]  rounded-full lg:w-[450px] lg:h-[600px] pr-4 ' src={banner1} alt="img" />
                        </div>
                        {/*hero text here*/}

                        <div className='md:w-1/2 '>
                            <h1 className=' lg:text-8xl font-semibold sm:text-xl text-white md:w-3/4 -mt-2 leading-snug'>AHMED MOUNIR LINJOUOM

                            </h1>
                            <p className='text-white text-base hidden md:block mt-1 italic  justify-center'>Avec SUP'PTIC LEGACY, Réécrivons l'histoire et créons un héritage </p>

                            <div className='flex flex-row  mt-0 sm:mt-8'>

                                <button className='bg-red-700 text-white px-4 py-0 lg:py-4 rounded-xl mt-1 mr-4'
                                    onClick={() => window.open("https://wa.me/237690178644?text=Bonjour,%20j'aimerais%20avoir%20plus%20d'informations","_blank")}
                                >Contactez-nous</button>
                                <button className='bg-none border hover:bg-white hover:text-black text-white px-4 py-0 lg:py-4 rounded-xl mt-1 mr-4'
                                        onClick={() => window.open("https://chat.whatsapp.com/Kmh1nwcPGrq70ZubDchjrk", "_blank")}

                                >Rejoignez notre mouvement</button>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Home
