import React from 'react'
import './FooterStyle.css'
import { At, House, PaperPlaneRight, Phone } from 'phosphor-react'

export const Footer = () => {
  return (
    <div className='footer'>
            <h1 className='footerLabel'>My Shop <PaperPlaneRight size={32}/></h1>
            <div >
                <h2>Контактная информация</h2>
                    <ul className='infoContact'>
                        <i><House size={32} color="#fcfcfc" weight="thin" /></i>
                                <li>Московская обл.,</li>
                                <li>г. Электросталь,</li>
                                <li>ул. Пушкина 1а</li>
                    </ul>
                    <ul  className='infoContact'>
                        <li><Phone size={20} color="#fcfcfc" weight="thin" />   +7 926 1234567</li>
                        <li><At size={20} color="#fcfcfc" weight="thin" /> valdemarK@mail.ru</li>
                        <li></li>
                    </ul>
            </div>

    </div>
  )
}
