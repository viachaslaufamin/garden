import React from 'react'
import inst from './ic-instagram.png'
import whatsapp from './ic-whatsapp.png'
import s from './index.module.css'

export default function Footer() {
  return (
    <footer className={['wrapper', s.conteiner].join(' ')}>
      <div className={s.title}>
        <p>Contact</p>
      </div>
      <div className={s.card}>
        <div>
          <p>Phone</p>
          <p>+49 999 999 99 99</p>
        </div>
        <div>
          <p>Socials</p>
          <div className={s.icon}>
            <a href="https://www.instagram.com/"><img src={inst} alt="inst" /></a>
            <a href="https://web.whatsapp.com/"><img src={whatsapp} alt="whatsapp" /></a>
          </div>
        </div>
        <div>
          <p>Address</p>
          <p>Linkstraße 2, 10 OG, 10 785, Berlin, Deutschland</p>
        </div>
        <div>
          <p>Working Hours</p>
          <p>24 hours a day</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4095605979346!2d13.37022448905886!3d52.50792676508656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdeaf3909%3A0x6a061918b5f3ff91!2zTGlua3N0cmHDn2UgMi84IE9HLCAxMCwgMTA3ODUgQmVybGluLCDQk9C10YDQvNCw0L3QuNGP!5e0!3m2!1sru!2spl!4v1711384367270!5m2!1sru!2spl" ></iframe>
      </div>
    </footer>
  )
}
