import React from 'react'
import logo from '../assets/logo1.png'
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";


const MyFooter = () => {
  return (
    <Footer container className='bg-gray-50 mx-auto rounded-none'>
      <div className="w-full ">
        <div className="grid w-full  justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='space-y-4 mb-8'>
            <a href="" className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} alt="logo" className='w-10 inline-block items-center' /><span className='text-brandPrimary'>SUP'PTIC LEGACY</span></a>

            <div>
              <p className='mb-1'>Copyright © 2025 SUP'PTIC LEGACY.</p>
              <p>Tous droits réservés</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="contactez-nous" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://wa.me/237690178644" target="_blank" rel="noopener noreferrer">
                  Whatsapp
                </Footer.Link>

                <Footer.Link href="#">(+237)695030544</Footer.Link>
                <Footer.Link href="#">(+237)690178644</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Suivez-nous sur" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://whatsapp.com/channel/0029Vay4YTy1nozF1zNfGT0M" target="_blank" rel="noopener noreferrer">Whatsapp</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>

                <Footer.Link href="">Politique de confidentialité</Footer.Link>
                <Footer.Link href="">Termes &amp; Conditions</Footer.Link>

              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="SKPCORP™" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />

          </div>
        </div>
      </div>
    </Footer>
  )
}

export default MyFooter
